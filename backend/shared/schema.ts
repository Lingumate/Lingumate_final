import { sql, relations } from 'drizzle-orm';
import {
  index,
  jsonb,
  pgTable,
  timestamp,
  varchar,
  text,
  boolean,
  integer,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Session storage table for Replit Auth
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// User storage table for Replit Auth
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  primaryLanguage: varchar("primary_language").default("en"),
  location: varchar("location"),
  // New fields for authentication
  password: varchar("password"), // Hashed password for email/password auth
  googleId: varchar("google_id").unique(), // Google OAuth ID
  emailVerified: boolean("email_verified").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Conversation sessions for translation
export const conversations = pgTable("conversations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  user1Id: varchar("user1_id").references(() => users.id),
  user2Id: varchar("user2_id").references(() => users.id),
  user1Language: varchar("user1_language").notNull(),
  user2Language: varchar("user2_language").notNull(),
  status: varchar("status").default("active"), // active, ended
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Translation messages within conversations
export const messages = pgTable("messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  conversationId: varchar("conversation_id").references(() => conversations.id),
  senderId: varchar("sender_id").references(() => users.id),
  originalText: text("original_text").notNull(),
  translatedText: text("translated_text").notNull(),
  originalLanguage: varchar("original_language").notNull(),
  targetLanguage: varchar("target_language").notNull(),
  audioUrl: varchar("audio_url"), // URL to stored audio file
  createdAt: timestamp("created_at").defaultNow(),
});

// AI chat sessions with the assistant
export const aiChats = pgTable("ai_chats", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id),
  messages: jsonb("messages").notNull().default([]), // array of {role, content, timestamp}
  location: varchar("location"),
  language: varchar("language").default("en"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// User subscriptions
export const subscriptions = pgTable("subscriptions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id).notNull(),
  planId: varchar("plan_id").notNull(), // e.g., 'individual-monthly', 'business-yearly'
  status: varchar("status").default("active"), // active, cancelled, expired, pending
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date").notNull(),
  autoRenew: boolean("auto_renew").default(true),
  paymentMethod: varchar("payment_method").default("razorpay"),
  amount: integer("amount").notNull(), // Amount in smallest currency unit (cents)
  currency: varchar("currency").default("USD"),
  billingCycle: varchar("billing_cycle").notNull(), // monthly, yearly, daily
  paymentId: varchar("payment_id"), // Razorpay payment ID
  orderId: varchar("order_id"), // Razorpay order ID
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Define relations
export const usersRelations = relations(users, ({ many }) => ({
  conversations1: many(conversations, { relationName: "user1Conversations" }),
  conversations2: many(conversations, { relationName: "user2Conversations" }),
  messages: many(messages),
  aiChats: many(aiChats),
  subscriptions: many(subscriptions),
}));

export const conversationsRelations = relations(conversations, ({ one, many }) => ({
  user1: one(users, { 
    fields: [conversations.user1Id], 
    references: [users.id],
    relationName: "user1Conversations"
  }),
  user2: one(users, { 
    fields: [conversations.user2Id], 
    references: [users.id],
    relationName: "user2Conversations"
  }),
  messages: many(messages),
}));

export const messagesRelations = relations(messages, ({ one }) => ({
  conversation: one(conversations, {
    fields: [messages.conversationId],
    references: [conversations.id],
  }),
  sender: one(users, {
    fields: [messages.senderId],
    references: [users.id],
  }),
}));

export const aiChatsRelations = relations(aiChats, ({ one }) => ({
  user: one(users, {
    fields: [aiChats.userId],
    references: [users.id],
  }),
}));

export const subscriptionsRelations = relations(subscriptions, ({ one }) => ({
  user: one(users, {
    fields: [subscriptions.userId],
    references: [users.id],
  }),
}));

// Zod schemas for validation
export const insertUserSchema = createInsertSchema(users);
export const insertConversationSchema = createInsertSchema(conversations);
export const insertMessageSchema = createInsertSchema(messages);
export const insertAiChatSchema = createInsertSchema(aiChats);
export const insertSubscriptionSchema = createInsertSchema(subscriptions);

// Authentication schemas
export const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const googleAuthSchema = z.object({
  idToken: z.string(),
});

// Language conversion schemas
export const languageConversionSchema = z.object({
  audioData: z.string(), // base64 encoded audio
  sourceLanguage: z.string().optional(),
  targetLanguage: z.string(),
});

// Chat agent schemas
export const chatAgentSchema = z.object({
  message: z.string(),
  location: z.string().optional(),
  language: z.string().default("en"),
  includeEmergencyContacts: z.boolean().optional(),
  includeTravelTips: z.boolean().optional(),
  includePriceComparison: z.boolean().optional(),
  includeEvents: z.boolean().optional(),
});

// Type exports
export type UpsertUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;
export type InsertConversation = z.infer<typeof insertConversationSchema>;
export type Conversation = typeof conversations.$inferSelect;
export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type Message = typeof messages.$inferSelect;
export type InsertAiChat = z.infer<typeof insertAiChatSchema>;
export type AiChat = typeof aiChats.$inferSelect;
export type InsertSubscription = z.infer<typeof insertSubscriptionSchema>;
export type Subscription = typeof subscriptions.$inferSelect;
