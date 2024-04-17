import CommentCard from "@/components/blog/comment-card"
import CommentForm from "@/components/blog/comment-form"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Skeleton } from "@/components/ui/skeleton"
import { Textarea } from "@/components/ui/textarea"
import { env } from "@/env"
import { getPostBySlug, getUserById } from "@/server/actions/blogActions"
import { getCommentsByPostId } from "@/server/actions/commentActions"
import { getUserAuth } from "@/server/auth/utils"
import { BadgeIcon } from "@radix-ui/react-icons"
import DOMPurify from "isomorphic-dompurify"
import { Metadata, ResolvingMetadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { BsFacebook, BsLinkedin, BsReddit, BsTwitterX } from "react-icons/bs"

type Props = {
  params: { slug: string };
  searchParams: Record<string, string | string[] | undefined>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const [post] = await getPostBySlug(params.slug)
  const [author] = await getUserById(post.authorId)

  if (!author || !post) {
    const boringMetadata = await parent
    return boringMetadata as Metadata
  }

  const postUrl = `${env.LUCIA_AUTH_URL}/blog/${post.slug}`

  const title = post.title || 'No Title'
  const description = post.description || ''
  const authorName = author.name || 'Anonymous'
  const date = post.createdAt || '2022-11-08T12:00:00.000Z'
  const cover = post.coverImage || `${env.LUCIA_AUTH_URL}/MUNSOClogo.png`

  const imageUrl = env.LUCIA_AUTH_URL + '/api/og?'
    + 'title=' + encodeURIComponent(title)
    + '&author=' + encodeURIComponent(authorName)
    + '&date=' + encodeURIComponent(date.toJSON())
    + '&cover=' + cover

  const metadata: Metadata = {
    title: title + ' • MUNSOC NITA',
    description: description,

    twitter: {
      card: 'summary_large_image',
      title: title + ' • MUNSOC NITA',
      description: description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 628,
          type: 'image/png',
          alt: '',
        }
      ],
    },
    openGraph: {
      title: title + ' • MUNSOC NITA',
      description: description,
      type: 'article',
      locale: 'en-US',
      url: postUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 628,
          type: 'image/png',
          alt: '',
        }
      ],
    },
  }

  return metadata
}

export default async function Page({ params }: { params: { slug: string } }) {
  const blogData = await getPostBySlug(params.slug)
  const { session } = await getUserAuth()

  if (blogData.length === 0 || blogData[0].isDraft)
    return (
      <div>404</div>
    )

  const [author] = await getUserById(blogData[0].authorId)
  const blogContent = DOMPurify.sanitize(blogData[0].content)
  const commentData = await getCommentsByPostId(blogData[0].slug)

  const postUrl = `${env.LUCIA_AUTH_URL}/blog/${blogData[0].slug}`
  return (
    <>
      <main className="max-w-7xl mx-auto mt-8 sm:mt-24">
        <div className="py-2 px-4 space-y-2 mx-auto sm:text-center">
          <div className="text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none font-bold">
            {blogData[0].title}
          </div>
          <div className="text-muted-foreground text-sm">
            By {author.name} | Published on {blogData[0].publishedAt.toLocaleString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}
          </div>
          {
            (blogData[0].coverImage?.toString() !== '' && blogData[0].coverImage !== null) &&
            <Image
              src={blogData[0].coverImage}
              alt="cover image"
              height={720}
              width={1280}
              className="aspect-video h-56 sm:h-auto w-full max-w-7xl mx-auto rounded-md border border-border object-cover shadow-md mb-6"
              priority
            /> ||
            <div className="mb-4 max-w-2xl mx-auto">
              <div className="inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
            </div>
          }
        </div>
        <article className="prose dark:prose-invert mx-auto prose-img:ml-[auto] prose-img:mr-[auto] px-4 prose-a:text-primary prose-blockquote:border-l-primary">
          <div dangerouslySetInnerHTML={{ __html: blogContent }}></div>
        </article>
        <div className="max-w-2xl mx-auto px-4">
          <div className="inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          {/*<div className="mx-auto pt-4 flex items-center gap-x-4 text-black dark:text-white">
            <span className="px-3 bg-secondary text-sm py-1 rounded-full border">#TODOtags</span>
          </div>*/}
          <div className="mx-auto py-4 flex items-center gap-x-4 text-black dark:text-white">
            Share this:
            <Link target="_blank" href={`https://twitter.com/intent/post?text=${blogData[0].title}&url=${postUrl}`} className="border p-2 rounded-md hover:bg-secondary">
              <BsTwitterX />
            </Link>
            <Link target="_blank" href={`https://www.reddit.com/submit?title=${blogData[0].title}&url=${postUrl}`} className="border p-2 rounded-md hover:bg-secondary">
              <BsReddit />
            </Link>
            <Link target="_blank" href={`https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}`} className="border p-2 rounded-md hover:bg-secondary">
              <BsLinkedin />
            </Link>
            <Link target="_blank" href={`https://www.facebook.com/sharer.php?t=${blogData[0].title}&u=${postUrl}`} className="border p-2 rounded-md hover:bg-secondary">
              <BsFacebook />
            </Link>
          </div>
        </div>
        <div className="max-w-2xl mx-auto px-4 flex flex-col justify-start mb-3">
          <span className="mb-4">
            Comments ({commentData.length})
          </span>
          {session &&
            <CommentForm session={{ session }} postSlug={params.slug} />
            ||
            <Button asChild>
              <Link href="/sign-in">
                Sign in to comment
              </Link>
            </Button>
          }
          <ul className="mt-4 space-y-4">
            {commentData.map((item) => (
              <CommentCard
                key={item.comments.id}
                comment={item.comments}
                user={item.user}
                blogAuthorId={blogData[0].authorId}
                currentUserId={session?.user.id}
              >
              </CommentCard>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}
