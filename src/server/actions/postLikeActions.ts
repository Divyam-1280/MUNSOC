"use server"

import { db } from "@/server/db"
import { postLikes } from "../db/schema/like"
import { genericError } from "../auth/utils"
import { and, eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

export async function getLikesByPost(postSlug: string) {
  const data = await db.select().from(postLikes).where(eq(postLikes.postSlug, postSlug))
  return data.length
}

export async function isAlreadyLiked(postSlug: string, userId: string) {
  const data = await db.select().from(postLikes).where(and(eq(postLikes.postSlug, postSlug), eq(postLikes.likedBy, userId)))
  if (data.length > 0) {
    return true
  }
  return false
}

export async function likePost(formData: FormData) {
  const userId = formData.get('user_id') as string
  const postSlug = formData.get('post_slug') as string

  const isLikedAlready = await db.select().from(postLikes).where(and(eq(postLikes.postSlug, postSlug), eq(postLikes.likedBy, userId)))
  if (isLikedAlready.length > 0) {
    return {
      error: "You have already liked this post!"
    }
  }

  try {
    await db.insert(postLikes).values({
      likedBy: userId,
      postSlug: postSlug
    })
  } catch (e) {
    return genericError
  }
  revalidatePath(`/blog/${postSlug}`)
}

export async function removeLike(formData: FormData) {
  const userId = formData.get('user_id') as string
  const postSlug = formData.get('post_slug') as string

  const isLikedAlready = await db.select().from(postLikes).where(and(eq(postLikes.postSlug, postSlug), eq(postLikes.likedBy, userId)))
  if (isLikedAlready.length < 1) {
    return {
      error: "You have not liked this post!"
    }
  }
  try {
    await db
      .delete(postLikes)
      .where(and(eq(postLikes.likedBy, userId), eq(postLikes.postSlug, postSlug)))
  } catch (e) {
    return genericError
  }
  revalidatePath(`/blog/${postSlug}`)
}
