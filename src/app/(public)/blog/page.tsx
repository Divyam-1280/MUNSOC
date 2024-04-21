import BlogCard from "@/components/blog/blog-card"
import { getPostsByOffset, getPublishedPostsCount } from "@/server/actions/blogActions"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { cn } from "@/lib/utils"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"

export default async function Blog({
  searchParams
}: {
  searchParams: { [key: string]: number | undefined }
}) {
  const POST_PER_PAGE = 6
  const offset = searchParams.page && (searchParams.page - 1) * POST_PER_PAGE || 0
  const data = await getPostsByOffset(offset, POST_PER_PAGE)
  const count = await getPublishedPostsCount()
  const pageCnt = Math.ceil(count / POST_PER_PAGE);
  console.log(pageCnt)

  if (searchParams.page) {
    if (searchParams.page > pageCnt || searchParams.page < 0) {
      return <div>404</div>
    }
  }

  function getPrevPage() {
    if (searchParams.page) {
      if (searchParams.page > 1) {
        return Number(searchParams.page) - 1;
      }
    }

    return -1
  }

  function getNextPage() {
    if (searchParams.page) {
      if (searchParams.page < pageCnt) {
        return Number(searchParams.page) + 1;
      }

      return -1
    }

    if (pageCnt > 1)
      return 2

    return -1
  }
  const nextPage = getNextPage()
  const prevPage = getPrevPage()
  return (
    <main className="space-y-6 p-4 max-w-7xl mx-auto overflow-x-clip">
      <div className="space-y-2 mt-6 sm:mt-12 sm:text-center">
        <p className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          The <span className="hover:underline underline-offset-4 text-primary">MUNSOC</span> Blog
        </p>
        <p className="text-muted-foreground max-w-4xl mx-auto text-pretty max-sm:text-sm">Discover helpful MUN articles for beginners and experts, for delegates, chairs or organizers, covering the world&apos;s most well-renowned and diverse MUN platforms, as well as inspirational stories written by the students.</p>
      </div>
      <div className="space-y-2 mx-auto max-w-2xl">
        {data.length > 0 &&
          <ul className="list-inside space-y-4">
            {data.map((item) => (
              <Suspense key={item.id} fallback={
                <li className="h-full w-full space-y-4 border border-border p-4">
                  <Skeleton className="rounded-md space-y-3 h-28 w-full bg-muted" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px] bg-muted" />
                    <Skeleton className="h-4 w-[200px] bg-muted" />
                  </div>
                </li>
              }>
                <li key={item.id}>
                  <BlogCard post={item} />
                </li>
              </Suspense>
            ))}
          </ul>
          ||
          <p className="text-center">Sorry, we don&apos;t have any posts right now. Come back later or <Link className="underline font-semibold underline-offset-4 hover:decoration-2 decoration-primary" href="/create-post">create a post now</Link>.</p>
        }
      </div>
      <Pagination className="mx-auto max-w-2xl">
        <PaginationContent className={cn("flex justify-between items-center w-full", prevPage < 1 && "justify-end", nextPage < 1 && "justify-start")}>
          {prevPage > -1 &&
            <PaginationItem>
              <PaginationPrevious href={`/blog?page=${prevPage}`} />
            </PaginationItem>
          }
          {nextPage > -1 &&
            <PaginationItem>
              <PaginationNext href={`/blog?page=${nextPage}`} />
            </PaginationItem>
          }
        </PaginationContent>
      </Pagination>
    </main>
  )
}
