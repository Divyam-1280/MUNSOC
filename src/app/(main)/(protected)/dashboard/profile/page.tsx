import BlogListItem from "@/components/dashboard/blog-list-item"
import { getPostsByUserId, getRecentPosts, getUserById } from "@/server/actions/blogActions"

export default async function DashboardAccountPage() {
  const { session } = await getUserAuth()
  if (!session) return null

  const [userData] = await getUserById(session.user.id)
  return (
    <>
      <div className="space-y-4 p-4 sm:pt-8 w-full max-w-7xl">
        <div className="space-y-2">
          <div className="border-b pb-4">
            <h1 className="text-2xl font-bold">Profile</h1>
            <p className="text-muted-foreground text-sm">This is how others will see you on the site. Viewing others profile isn&apos;t possible right now but will be available in upcoming updates.</p>
          </div>
        </div>
      </div>
    </>
  )
}

function getUserAuth(): { session: any } | PromiseLike<{ session: any }> {
  throw new Error("Function not implemented.")
}
