import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { users } from "./auth";
import { blogs } from "./blog";

export const postLikes = pgTable("post_likes", {
  id: serial("id").primaryKey(),
  postSlug: text("post_slug").notNull().references(() => blogs.slug, { onDelete: 'cascade' }),
  likedBy: text("liked_by").notNull().references(() => users.id, { onDelete: 'cascade' }),
})

export type SelectPostLikes = typeof postLikes.$inferSelect
export type InsertPostLikes = typeof postLikes.$inferInsert
