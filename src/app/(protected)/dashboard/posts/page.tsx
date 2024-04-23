import BlogListItem from "@/components/dashboard/blog-list-item"
import { Button } from "@/components/ui/button"
import { getPostsByUserId, getRecentPosts } from "@/server/actions/blogActions"
import { getUserAuth } from "@/server/auth/utils"
import Link from "next/link"
import { FaPen } from "react-icons/fa"

export default async function DashboardPostsPage() {
  const { session } = await getUserAuth()
  if (!session) return null

  const postData = await getPostsByUserId(session.user.id)
  return (
    <>
      <div className="space-y-4 p-4 sm:pt-8 w-full max-w-7xl">
        <div className="space-y-2">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Your Posts {postData.length > 0 && `(${postData.length})`}: </h1>
            <div>
              <Button className="font-bold flex gap-x-2 items-center" asChild>
                <Link href="/create-post">
                  <FaPen />
                  <span className="hidden sm:flex">Create Post</span>
                </Link>
              </Button>
            </div>
          </div>
          <ul className="space-y-2 w-full">
            {postData.length > 0 &&
              postData.map((post) => (
                <li key={post.id}><BlogListItem post={post} /></li>
              )) ||
              <span>You don&apos;t seem to have any post. Create a post now!</span>
            }
          </ul>
        </div>
      </div>
    </>
  )
}
