import { db } from "./db";
import {
  profiles,
  connections,
  responseDeadlines,
  notifications,
  userActivity,
  userMilestones,
  projects,
  projectMembers,
  projectActivity,
  matchFeedback,
  userMatchingPreferences,
  type Profile,
  type InsertProfile,
  type Connection,
  type InsertConnection,
  type ResponseDeadline,
  type InsertResponseDeadline,
  type Notification,
  type InsertNotification,
  type Project,
  type InsertProject,
  type UserMilestone,
  type InsertUserMilestone,
} from "@shared/schema";
import { eq, desc, and } from "drizzle-orm";

export interface IStorage {
  // ===== PROFILES =====
  getProfile(id: string): Promise<Profile | undefined>;
  getProfileByEmail(email: string): Promise<Profile | undefined>;
  createProfile(profile: InsertProfile): Promise<Profile>;
  updateProfile(id: string, updates: Partial<Profile>): Promise<Profile>;

  // ===== CONNECTIONS =====
  createConnection(connection: InsertConnection): Promise<Connection>;
  getConnection(id: string): Promise<Connection | undefined>;
  getConnectionsBetween(userId1: string, userId2: string): Promise<Connection[]>;
  getConnectionsForUser(userId: string): Promise<Connection[]>;
  updateConnection(id: string, updates: Partial<Connection>): Promise<Connection>;

  // ===== RESPONSE GUARANTEES =====
  createResponseDeadline(deadline: InsertResponseDeadline): Promise<ResponseDeadline>;
  getPendingDeadlines(): Promise<ResponseDeadline[]>;
  updateResponseDeadline(id: string, updates: Partial<ResponseDeadline>): Promise<ResponseDeadline>;

  // ===== NOTIFICATIONS =====
  createNotification(notification: InsertNotification): Promise<Notification>;
  getNotificationsForUser(userId: string): Promise<Notification[]>;
  markNotificationRead(id: string): Promise<Notification>;

  // ===== USER ACTIVITY =====
  logActivity(userId: string, eventType: string, eventData: any): Promise<void>;

  // ===== MILESTONES =====
  createMilestone(milestone: InsertUserMilestone): Promise<UserMilestone>;
  getMilestones(userId: string): Promise<UserMilestone[]>;
  hasMilestone(userId: string, milestoneType: string): Promise<boolean>;

  // ===== PROJECTS =====
  createProject(project: InsertProject): Promise<Project>;
  getProject(id: string): Promise<Project | undefined>;
  getProjectsByUser(userId: string): Promise<Project[]>;
  updateProject(id: string, updates: Partial<Project>): Promise<Project>;
}

export class DatabaseStorage implements IStorage {
  // ===== PROFILES =====
  async getProfile(id: string): Promise<Profile | undefined> {
    const result = await db.select().from(profiles).where(eq(profiles.id, id));
    return result[0];
  }

  async getProfileByEmail(email: string): Promise<Profile | undefined> {
    const result = await db.select().from(profiles).where(eq(profiles.email, email));
    return result[0];
  }

  async createProfile(profile: InsertProfile): Promise<Profile> {
    const result = await db.insert(profiles).values(profile).returning();
    return result[0];
  }

  async updateProfile(id: string, updates: Partial<Profile>): Promise<Profile> {
    const result = await db
      .update(profiles)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(profiles.id, id))
      .returning();
    return result[0];
  }

  // ===== CONNECTIONS =====
  async createConnection(connection: InsertConnection): Promise<Connection> {
    const result = await db.insert(connections).values(connection).returning();
    return result[0];
  }

  async getConnection(id: string): Promise<Connection | undefined> {
    const result = await db.select().from(connections).where(eq(connections.id, id));
    return result[0];
  }

  async getConnectionsBetween(userId1: string, userId2: string): Promise<Connection[]> {
    const result = await db
      .select()
      .from(connections)
      .where(
        and(
          eq(connections.fromUserId, userId1),
          eq(connections.toUserId, userId2)
        )
      );
    return result;
  }

  async getConnectionsForUser(userId: string): Promise<Connection[]> {
    const result = await db
      .select()
      .from(connections)
      .where(
        and(
          eq(connections.toUserId, userId),
          eq(connections.status, "pending")
        )
      );
    return result;
  }

  async updateConnection(id: string, updates: Partial<Connection>): Promise<Connection> {
    const result = await db
      .update(connections)
      .set(updates)
      .where(eq(connections.id, id))
      .returning();
    return result[0];
  }

  // ===== RESPONSE GUARANTEES =====
  async createResponseDeadline(deadline: InsertResponseDeadline): Promise<ResponseDeadline> {
    const result = await db.insert(responseDeadlines).values(deadline).returning();
    return result[0];
  }

  async getPendingDeadlines(): Promise<ResponseDeadline[]> {
    const result = await db
      .select()
      .from(responseDeadlines)
      .where(eq(responseDeadlines.status, "pending"));
    return result;
  }

  async updateResponseDeadline(id: string, updates: Partial<ResponseDeadline>): Promise<ResponseDeadline> {
    const result = await db
      .update(responseDeadlines)
      .set(updates)
      .where(eq(responseDeadlines.id, id))
      .returning();
    return result[0];
  }

  // ===== NOTIFICATIONS =====
  async createNotification(notification: InsertNotification): Promise<Notification> {
    const result = await db.insert(notifications).values(notification).returning();
    return result[0];
  }

  async getNotificationsForUser(userId: string): Promise<Notification[]> {
    const result = await db
      .select()
      .from(notifications)
      .where(eq(notifications.userId, userId))
      .orderBy(desc(notifications.sentAt));
    return result;
  }

  async markNotificationRead(id: string): Promise<Notification> {
    const result = await db
      .update(notifications)
      .set({ read: true })
      .where(eq(notifications.id, id))
      .returning();
    return result[0];
  }

  // ===== USER ACTIVITY =====
  async logActivity(userId: string, eventType: string, eventData: any): Promise<void> {
    await db.insert(userActivity).values({
      userId,
      eventType,
      eventData,
    });
  }

  // ===== MILESTONES =====
  async createMilestone(milestone: InsertUserMilestone): Promise<UserMilestone> {
    const result = await db.insert(userMilestones).values(milestone).returning();
    return result[0];
  }

  async getMilestones(userId: string): Promise<UserMilestone[]> {
    const result = await db
      .select()
      .from(userMilestones)
      .where(eq(userMilestones.userId, userId));
    return result;
  }

  async hasMilestone(userId: string, milestoneType: string): Promise<boolean> {
    const result = await db
      .select()
      .from(userMilestones)
      .where(and(eq(userMilestones.userId, userId), eq(userMilestones.milestoneType, milestoneType)));
    return result.length > 0;
  }

  // ===== PROJECTS =====
  async createProject(project: InsertProject): Promise<Project> {
    const result = await db.insert(projects).values(project).returning();
    return result[0];
  }

  async getProject(id: string): Promise<Project | undefined> {
    const result = await db.select().from(projects).where(eq(projects.id, id));
    return result[0];
  }

  async getProjectsByUser(userId: string): Promise<Project[]> {
    const result = await db
      .select()
      .from(projects)
      .where(eq(projects.createdById, userId));
    return result;
  }

  async updateProject(id: string, updates: Partial<Project>): Promise<Project> {
    const result = await db
      .update(projects)
      .set(updates)
      .where(eq(projects.id, id))
      .returning();
    return result[0];
  }
}

export const storage = new DatabaseStorage();
