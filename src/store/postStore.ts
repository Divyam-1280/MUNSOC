import { SelectBlogs } from "@/server/db/schema/blog";
import { create } from "zustand"

type PostStore = {
  posts: SelectBlogs[];
  setPosts: (post: SelectBlogs[]) => void;
}

export const usePostStore = create<PostStore>((set) => ({
  posts: [],
  setPosts: (post) => set({ posts: post })
}))

