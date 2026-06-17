import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertProfileSchema, insertConnectionSchema, insertBetaFeedbackSchema, insertElementFeedbackSchema, insertJobOpportunitySchema } from "@shared/schema";
import { log } from "./log";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // ===== PROFILES =====
  app.get("/api/profiles/:id", async (req, res) => {
    const profile = await storage.getProfile(req.params.id);
    if (!profile) {
      res.status(404).json({ error: "Profile not found" });
      return;
    }
    res.json(profile);
  });

  app.post("/api/profiles", async (req, res) => {
    try {
      const validated = insertProfileSchema.parse(req.body);
      const profile = await storage.createProfile(validated);
      res.status(201).json(profile);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  app.patch("/api/profiles/:id", async (req, res) => {
    try {
      const profile = await storage.updateProfile(req.params.id, req.body);
      res.json(profile);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  // ===== CONNECTIONS (Response Guarantee Bot Trigger) =====
  app.post("/api/connections", async (req, res) => {
    try {
      const validated = insertConnectionSchema.parse(req.body);
      const connection = await storage.createConnection(validated);

      // TRIGGER: Response Guarantee Bot - Start 24hr timer
      const deadline = new Date();
      deadline.setHours(deadline.getHours() + 24);

      await storage.createResponseDeadline({
        connectionId: connection.id,
        recipientId: connection.toUserId,
        senderId: connection.fromUserId,
        deadlineAt: deadline,
      });

      // Log activity for engagement tracking
      await storage.logActivity(connection.fromUserId, "connection_sent", {
        connectionId: connection.id,
        toUserId: connection.toUserId,
      });

      res.status(201).json(connection);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  app.get("/api/connections/:id", async (req, res) => {
    const connection = await storage.getConnection(req.params.id);
    if (!connection) {
      res.status(404).json({ error: "Connection not found" });
      return;
    }
    res.json(connection);
  });

  app.get("/api/connections/user/:userId", async (req, res) => {
    const connections = await storage.getConnectionsForUser(req.params.userId);
    res.json(connections);
  });

  app.patch("/api/connections/:id", async (req, res) => {
    try {
      const connection = await storage.updateConnection(req.params.id, req.body);

      // If connection was responded to, update response deadline
      if (req.body.status === "accepted" || req.body.status === "declined") {
        // Mark deadline as responded
        await storage.logActivity(connection.toUserId, "connection_responded", {
          connectionId: connection.id,
          response: req.body.status,
        });

        // TRIGGER: Retention Engine - Record milestone if accepted
        if (req.body.status === "accepted") {
          const milestone = await storage.createMilestone({
            userId: connection.toUserId,
            milestoneType: "first_connection_made",
          });
          log(`Milestone recorded: ${connection.toUserId} made first connection`);
        }
      }

      res.json(connection);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  // ===== NOTIFICATIONS (Engagement Engine) =====
  app.post("/api/notifications", async (req, res) => {
    try {
      const notification = await storage.createNotification(req.body);
      res.status(201).json(notification);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  app.get("/api/notifications/:userId", async (req, res) => {
    const notifications = await storage.getNotificationsForUser(req.params.userId);
    res.json(notifications);
  });

  app.patch("/api/notifications/:id/read", async (req, res) => {
    try {
      const notification = await storage.markNotificationRead(req.params.id);
      res.json(notification);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  // ===== RESPONSE DEADLINE CHECKS (Response Guarantee Bot - For Cron Jobs) =====
  app.get("/api/response-deadlines/pending", async (req, res) => {
    const deadlines = await storage.getPendingDeadlines();
    res.json(deadlines);
  });

  app.patch("/api/response-deadlines/:id", async (req, res) => {
    try {
      const deadline = await storage.updateResponseDeadline(req.params.id, req.body);
      res.json(deadline);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  // ===== PROJECTS (Accountability Engine) =====
  app.post("/api/projects", async (req, res) => {
    try {
      const project = await storage.createProject(req.body);
      res.status(201).json(project);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  app.get("/api/projects/:id", async (req, res) => {
    const project = await storage.getProject(req.params.id);
    if (!project) {
      res.status(404).json({ error: "Project not found" });
      return;
    }
    res.json(project);
  });

  app.get("/api/projects/user/:userId", async (req, res) => {
    const projects = await storage.getProjectsByUser(req.params.userId);
    res.json(projects);
  });

  app.patch("/api/projects/:id", async (req, res) => {
    try {
      const project = await storage.updateProject(req.params.id, req.body);
      res.json(project);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  // ===== ROLE CHANGE (requires password confirmation) =====
  app.patch("/api/profiles/:id/role", async (req, res) => {
    try {
      const { newRole, password } = req.body;
      const userId = req.params.id;

      if (!newRole || !password) {
        res.status(400).json({ error: "New role and password are required" });
        return;
      }

      if (!["Student", "Faculty", "Alumni"].includes(newRole)) {
        res.status(400).json({ error: "Invalid role" });
        return;
      }

      // Get current profile
      const profile = await storage.getProfile(userId);
      if (!profile) {
        res.status(404).json({ error: "Profile not found" });
        return;
      }

      // In production, validate password against hashed password in database
      // For now, accept any non-empty password as mock validation
      if (password.length < 6) {
        res.status(401).json({ error: "Invalid password" });
        return;
      }

      // Update role
      const updated = await storage.updateProfile(userId, {
        accountType: newRole,
      });

      // Log activity
      await storage.logActivity(userId, "role_changed", {
        oldRole: profile.accountType,
        newRole: newRole,
      });

      res.json(updated);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  // ===== BETA FEEDBACK =====
  app.post("/api/feedback", async (req, res) => {
    try {
      const validated = insertBetaFeedbackSchema.parse(req.body);
      const feedback = await storage.createBetaFeedback(validated);
      log(`Beta feedback received: ${feedback.feedbackType} from ${feedback.email || 'anonymous'}`);
      res.status(201).json(feedback);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  app.get("/api/feedback", async (req, res) => {
    const feedback = await storage.getAllBetaFeedback();
    res.json(feedback);
  });

  // ===== ELEMENT FEEDBACK (Hover Comments) =====
  app.post("/api/element-feedback", async (req, res) => {
    try {
      const validated = insertElementFeedbackSchema.parse(req.body);
      const feedback = await storage.createElementFeedback(validated);
      log(`Element feedback received: ${feedback.category} on ${feedback.pageUrl} - ${feedback.sectionName || 'unknown section'}`);
      res.status(201).json(feedback);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  app.get("/api/element-feedback", async (req, res) => {
    const pageUrl = req.query.pageUrl as string | undefined;
    const feedbackList = pageUrl
      ? await storage.getElementFeedbackByPage(pageUrl)
      : await storage.getAllElementFeedback();
    const sanitized = feedbackList.map(({ email, ...rest }) => rest);
    res.json(sanitized);
  });

  // ===== JOB OPPORTUNITIES =====
  app.post("/api/jobs", async (req, res) => {
    try {
      const validated = insertJobOpportunitySchema.parse(req.body);
      const job = await storage.createJobOpportunity(validated);
      log(`Job opportunity posted: ${job.role} at ${job.company}`);
      res.status(201).json(job);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  app.get("/api/jobs", async (req, res) => {
    const jobs = await storage.getActiveJobOpportunities();
    res.json(jobs);
  });

  app.get("/api/jobs/user/:userId", async (req, res) => {
    const jobs = await storage.getJobOpportunitiesByUser(req.params.userId);
    res.json(jobs);
  });

  app.patch("/api/jobs/:id", async (req, res) => {
    try {
      const job = await storage.updateJobOpportunity(req.params.id, req.body);
      res.json(job);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  // ===== HEALTH CHECK =====
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  return httpServer;
}
