import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, decimal, boolean, jsonb, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// ========== PROFILES (Users) ==========
export const profiles = pgTable("profiles", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email").notNull().unique(),
  firstName: varchar("first_name").notNull(),
  lastName: varchar("last_name").notNull(),
  avatar: text("avatar"),
  accountType: varchar("account_type").notNull().default("Student"), // Student, Faculty, Alumni
  
  // Academic Info
  university: varchar("university"),
  school: varchar("school"),
  major: varchar("major"),
  degree: varchar("degree"),
  graduationYear: varchar("graduation_year"),
  
  // Professional
  skills: text("skills").array().default(sql`'{}'::text[]`),
  
  // Collaboration
  goals: text("goals").array().default(sql`'{}'::text[]`),
  projectType: varchar("project_type"),
  collaborationMode: varchar("collaboration_mode"), // Architect, Builder, Coordinator, Refiner, Catalyst
  modeConfidence: integer("mode_confidence"),
  
  // Engagement & Reputation
  referralPoints: integer("referral_points").default(0),
  ghostCount: integer("ghost_count").default(0),
  responseRate: decimal("response_rate").default("0"),
  avgResponseTimeHours: decimal("avg_response_time_hours"),
  lifecycleStage: varchar("lifecycle_stage").default("discovery"), // discovery, connection, collaboration, community
  
  // Tracking
  lastLoginAt: timestamp("last_login_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// ========== CONNECTIONS ==========
export const connections = pgTable("connections", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  fromUserId: uuid("from_user_id").notNull().references(() => profiles.id),
  toUserId: uuid("to_user_id").notNull().references(() => profiles.id),
  message: text("message"),
  status: varchar("status").default("pending"), // pending, accepted, declined
  autoDeclined: boolean("auto_declined").default(false),
  declinedAt: timestamp("declined_at"),
  respondedAt: timestamp("responded_at"),
  createdAt: timestamp("created_at").defaultNow(),
});

// ========== RESPONSE GUARANTEE BOT ==========
export const responseDeadlines = pgTable("response_deadlines", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  connectionId: uuid("connection_id").notNull().references(() => connections.id),
  recipientId: uuid("recipient_id").notNull().references(() => profiles.id),
  senderId: uuid("sender_id").notNull().references(() => profiles.id),
  deadlineAt: timestamp("deadline_at").notNull(),
  remindersSent: integer("reminders_sent").default(0),
  status: varchar("status").default("pending"), // pending, responded, auto_declined
  createdAt: timestamp("created_at").defaultNow(),
});

// ========== ENGAGEMENT ENGINE ==========
export const notifications = pgTable("notifications", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: uuid("user_id").notNull().references(() => profiles.id),
  type: varchar("type").notNull(), // new_match, profile_view, connection_request, etc
  title: text("title").notNull(),
  body: text("body"),
  data: jsonb("data"), // Flexible data storage
  priority: varchar("priority").default("medium"), // low, medium, high
  read: boolean("read").default(false),
  sentAt: timestamp("sent_at").defaultNow(),
});

export const userActivity = pgTable("user_activity", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: uuid("user_id").notNull().references(() => profiles.id),
  eventType: varchar("event_type").notNull(), // login, view_match, send_message, etc
  eventData: jsonb("event_data"),
  createdAt: timestamp("created_at").defaultNow(),
});

// ========== RETENTION ENGINE ==========
export const userMilestones = pgTable("user_milestones", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: uuid("user_id").notNull().references(() => profiles.id),
  milestoneType: varchar("milestone_type").notNull(), // first_match_viewed, first_connection_made, etc
  achievedAt: timestamp("achieved_at").defaultNow(),
});

// ========== PROJECTS & ACCOUNTABILITY ==========
export const projects = pgTable("projects", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  createdById: uuid("created_by_id").notNull().references(() => profiles.id),
  name: varchar("name").notNull(),
  description: text("description"),
  status: varchar("status").default("active"), // active, completed, paused
  projectType: varchar("project_type"),
  lastActivityAt: timestamp("last_activity_at").defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const projectMembers = pgTable("project_members", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  projectId: uuid("project_id").notNull().references(() => projects.id),
  userId: uuid("user_id").notNull().references(() => profiles.id),
  role: varchar("role").default("member"), // member, lead
  joinedAt: timestamp("joined_at").defaultNow(),
});

export const projectActivity = pgTable("project_activity", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  projectId: uuid("project_id").notNull().references(() => projects.id),
  userId: uuid("user_id").notNull().references(() => profiles.id),
  activityType: varchar("activity_type").notNull(), // update, message, file_upload, etc
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow(),
});

// ========== LEARNING ENGINE ==========
export const matchFeedback = pgTable("match_feedback", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  connectionId: uuid("connection_id").notNull().references(() => connections.id),
  userId: uuid("user_id").notNull().references(() => profiles.id),
  feedbackType: varchar("feedback_type"), // positive, negative
  rating: integer("rating"), // 1-5
  reason: text("reason"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const userMatchingPreferences = pgTable("user_matching_preferences", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: uuid("user_id").notNull().references(() => profiles.id).unique(),
  weightSkills: decimal("weight_skills").default("0.40"),
  weightDna: decimal("weight_dna").default("0.25"),
  weightCompletion: decimal("weight_completion").default("0.20"),
  weightAvailability: decimal("weight_availability").default("0.10"),
  weightStyle: decimal("weight_style").default("0.05"),
});

// ========== HEALTH MONITOR ==========
export const platformMetrics = pgTable("platform_metrics", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  responseRate: decimal("response_rate"),
  avgMatchScore: decimal("avg_match_score"),
  activeUsers24h: integer("active_users_24h"),
  retention7day: decimal("retention_7day"),
  recordedAt: timestamp("recorded_at").defaultNow(),
});

export const platformAlerts = pgTable("platform_alerts", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  severity: varchar("severity"), // warning, critical
  metricName: varchar("metric_name"),
  metricValue: decimal("metric_value"),
  threshold: decimal("threshold"),
  createdAt: timestamp("created_at").defaultNow(),
});

// ========== SCHEMAS & TYPES ==========

// Profile Insert Schema
export const insertProfileSchema = createInsertSchema(profiles).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type Profile = typeof profiles.$inferSelect;
export type InsertProfile = z.infer<typeof insertProfileSchema>;

// Connection Insert Schema
export const insertConnectionSchema = createInsertSchema(connections).omit({
  id: true,
  createdAt: true,
});

export type Connection = typeof connections.$inferSelect;
export type InsertConnection = z.infer<typeof insertConnectionSchema>;

// Notification Insert Schema
export const insertNotificationSchema = createInsertSchema(notifications).omit({
  id: true,
  sentAt: true,
});

export type Notification = typeof notifications.$inferSelect;
export type InsertNotification = z.infer<typeof insertNotificationSchema>;

// Response Deadline Insert Schema
export const insertResponseDeadlineSchema = createInsertSchema(responseDeadlines).omit({
  id: true,
  createdAt: true,
});

export type ResponseDeadline = typeof responseDeadlines.$inferSelect;
export type InsertResponseDeadline = z.infer<typeof insertResponseDeadlineSchema>;

// Project Insert Schema
export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
  createdAt: true,
});

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;

// User Milestone Insert Schema
export const insertUserMilestoneSchema = createInsertSchema(userMilestones).omit({
  id: true,
  achievedAt: true,
});

export type UserMilestone = typeof userMilestones.$inferSelect;
export type InsertUserMilestone = z.infer<typeof insertUserMilestoneSchema>;
