"use client"

import { cn } from "@/lib/utils";
import { SelectBlogs } from "@/server/db/schema/blog";
import BlogCard from "./blog-card";
import { useState } from "react";

export default function BlogList({ data }: { data: SelectBlogs[] }) {

  const [posts] = useState(data)

  return (
    <div className="space-y-2 mx-auto max-w-2xl mb-4">
      <ul className={cn("list-inside max-xl:space-y-4", posts.length > 2 && "xl:grid xl:grid-cols-2 xl:grid-flow-row xl:gap-4")}>
        {posts.map((item) => (
          <li key={item.id}>
            <BlogCard post={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}
