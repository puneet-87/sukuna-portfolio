import { db } from "./db";
import {
  messages,
  feedback,
  type InsertMessage,
  type InsertFeedback,
  type Message,
  type Feedback
} from "@shared/schema";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<Message>;
  createFeedback(feedback: InsertFeedback): Promise<Feedback>;
  getFeedback(): Promise<Feedback[]>;
}

export class DatabaseStorage implements IStorage {
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [message] = await db
      .insert(messages)
      .values(insertMessage)
      .returning();
    return message;
  }

  async createFeedback(insertFeedback: InsertFeedback): Promise<Feedback> {
    const [item] = await db
      .insert(feedback)
      .values(insertFeedback)
      .returning();
    return item;
  }

  async getFeedback(): Promise<Feedback[]> {
    return await db.select().from(feedback).orderBy(feedback.createdAt);
  }
}

export const storage = new DatabaseStorage();
