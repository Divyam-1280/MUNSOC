import UnapprovedBlogItem from "@/components/dashboard/unapproved-post"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { getAllPostsWithUser, getUserById } from "@/server/actions/blogActions"
import { getUserAuth } from "@/server/auth/utils"
import { SelectUsers } from "@/server/db/schema/auth"
import { DotFilledIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { BsThreeDotsVertical } from "react-icons/bs"
import { LuFilter, LuListFilter } from "react-icons/lu"

export default async function Page({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { session } = await getUserAuth()
  const [userDetails] = await getUserById(session?.user.id as string)

  if (!userDetails.isAdmin)
    return (
      <div className="space-y-4 p-4 sm:pt-8 w-full max-w-7xl">
        <div className="space-y-2">
          <div className="flex justify-between">
            <h1 className="text-2xl tracking-tighter font-bold">You&apos;re not supposed to be here...</h1>
          </div>
          <p className="text-muted-foreground">Go back to <Link href="/dashboard" className="underline dark:hover:text-primary hover:font-bold">dashboard</Link></p>
        </div>
      </div>
    )

  const allPosts = await getAllPostsWithUser()

  let unapprovedOnly: boolean
  if (searchParams?.unapprovedonly == 'true')
    unapprovedOnly = true
  else
    unapprovedOnly = false

  const toggleUrl = "/dashboard/manage-posts" + (!unapprovedOnly && "?unapprovedonly=true" || "")
  return (
    <>
      <div className="space-y-4 p-4 sm:pt-8 w-full max-w-7xl">
        <div className="space-y-2">
          <div className="flex justify-between flex-wrap gap-x-2 gap-y-2">
            <h1 className="text-2xl tracking-tighter font-bold">Recent posts by authors:</h1>
            <Popover>
              <PopoverTrigger className="flex items-center border border-border px-3 py-1 rounded-sm gap-x-3">
                <LuListFilter />
                <span className="max-md:hidden">Filter</span>
              </PopoverTrigger>
              <PopoverContent className="p-1">
                <ul className="rounded-md overflow-clip">
                  <li className="flex">
                    <Link href="/dashboard/manage-posts" className="p-2 w-full inline-flex items-center gap-x-2 hover:bg-secondary dark:hover:bg-secondary/25">
                      <DotFilledIcon className={!unapprovedOnly && "text-foreground" || "text-transparent"} />
                      Show all posts
                    </Link>
                  </li>
                  <li className="flex">
                    <Link href="/dashboard/manage-posts?unapprovedonly=true" className="p-2 w-full inline-flex items-center gap-x-2 hover:bg-secondary dark:hover:bg-secondary/25">
                      <DotFilledIcon className={unapprovedOnly && "text-foreground" || "text-transparent"} />
                      Show only approved posts
                    </Link>
                  </li>
                </ul>
              </PopoverContent>
            </Popover>
          </div>
          <ul className="w-full space-y-4">
            {unapprovedOnly &&
              allPosts.filter((post) => post.blogs.isApproved === unapprovedOnly).map((post) => (
                <UnapprovedBlogItem key={post.blogs.id} post={post.blogs} author={post.user as SelectUsers} />
              ))
              ||
              allPosts.map((post) => (
                <UnapprovedBlogItem key={post.blogs.id} post={post.blogs} author={post.user as SelectUsers} />
              ))}
          </ul>
        </div>
      </div>
    </>
  )
}
