"use client"

import { LuHeart } from "react-icons/lu"
import { Button } from "../ui/button"

export default function LikeButton({ postId }: { postId: string }) {
  return (
    <>
      <form>
        <input value={postId} hidden />
        <Button type="submit" variant="outline">{<LuHeart />}</Button>
      </form>
    </>
  )
}
