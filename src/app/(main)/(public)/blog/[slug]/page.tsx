import CommentCard from "@/components/blog/comment-card"
import CommentForm from "@/components/blog/comment-form"
import { Button } from "@/components/ui/button"
import { env } from "@/env"
import { getPostBySlug, getUserById } from "@/server/actions/blogActions"
import { getCommentsByPostId } from "@/server/actions/commentActions"
import { getLikesByPost, isAlreadyLiked, likePost, removeLike } from "@/server/actions/postLikeActions"
import { getUserAuth } from "@/server/auth/utils"
import DOMPurify from "isomorphic-dompurify"
import { Metadata, ResolvingMetadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { BsFacebook, BsLinkedin, BsReddit, BsTwitterX } from "react-icons/bs"
import { FaComment, FaHeart, FaRegHeart } from "react-icons/fa"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

type Props = {
  params: { slug: string };
  searchParams: Record<string, string | string[] | undefined>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const [post] = await getPostBySlug(params.slug)
  const [author] = await getUserById(post.authorId)

  if (!author || !post.isApproved) {
    const meta404: Metadata = {
      title: '404 - Not Found',
      description: 'Sorry we couldn&apos; find what you were looking for.'
    }
    return meta404
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

  if (!blogData[0].isApproved)
    return (
      <>
        <div className="text-center pt-12 px-8">
          <p className="tracking-tighter text-8xl/none font-bold">404</p>
          <p className="text-muted-foreground text-pretty">Sorry we couldn&apos;t find what you were looking for.</p>
        </div>
      </>
    )

  const { session } = await getUserAuth()
  const [author] = await getUserById(blogData[0].authorId)
  const blogContent = DOMPurify.sanitize(blogData[0].content)
  const commentData = await getCommentsByPostId(blogData[0].slug)
  const likes = await getLikesByPost(blogData[0].slug)
  let isLiked = false
  if (session)
    isLiked = await isAlreadyLiked(blogData[0].slug, session.user.id)

  const postUrl = `${env.LUCIA_AUTH_URL}/blog/${blogData[0].slug}`

  async function handleFeedback() {
    isLiked && removeLike || likePost
  }

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
          <div className="flex sm:justify-center items-center gap-x-4 text-muted-foreground">
            {session &&
              <form className="" action={handleFeedback}>
                <input hidden readOnly aria-hidden name="post_slug" value={blogData[0].slug} />
                <input hidden readOnly aria-hidden name="user_id" value={session?.user.id} />
                <Button type="submit" variant="ghost" className="px-2 space-x-2">
                  {isLiked &&
                    <FaHeart size={18} />
                    ||
                    <FaRegHeart size={18} />
                  }
                  <span className="pt-1">{likes}</span>
                </Button>
              </form>
              ||
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" className="px-2 space-x-2">
                    <FaHeart size={18} />
                    <span className="pt-1">{likes}</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent><Link href="/sign-in" className="underline font-semibold underline-offset-4 hover:decoration-2 decoration-primary/85">Sign in</Link> to like blog posts</PopoverContent>
              </Popover>
            }
            <Button type="button" variant="ghost" className="px-2" asChild>
              <a href="#comments" className="space-x-2 flex items-center">
                <FaComment size={18} />
                <span className="pt-1">{commentData.length}</span>
              </a>
            </Button>
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
        <article className="prose dark:prose-invert mx-auto prose-img:ml-[auto] prose-img:mr-[auto] px-4 prose-a:underline prose-a:font-semibold prose-a:underline-offset-4 hover:prose-a:decoration-2 prose-a:decoration-primary/85 prose-blockquote:border-l-primary">
          <div dangerouslySetInnerHTML={{ __html: blogContent }}></div>
        </article>
        <div className="max-w-2xl mx-auto px-4 space-y-2">
          <div className="inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          {session &&
            <form className="text-muted-foreground gap-x-4" action={handleFeedback}>
              <input hidden readOnly aria-hidden name="post_slug" value={blogData[0].slug} />
              <input hidden readOnly aria-hidden name="user_id" value={session.user.id} />
              <Button type="submit" variant="ghost" className="px-2 space-x-2">
                {isLiked &&
                  <FaHeart size={18} />
                  ||
                  <FaRegHeart size={18} />
                }
                <span className="pt-1">{likes}</span>
              </Button>
            </form>
          }
          <div className="mx-auto pb-4 flex items-center gap-x-4 text-black dark:text-white">
            Share this:
            <Link target="_blank" href={`https://twitter.com/intent/post?text=${blogData[0].title}&url=${postUrl}`} className="border border-border p-2 rounded-md hover:bg-secondary">
              <BsTwitterX />
            </Link>
            <Link target="_blank" href={`https://www.reddit.com/submit?title=${blogData[0].title}&url=${postUrl}`} className="border border-border p-2 rounded-md hover:bg-secondary">
              <BsReddit />
            </Link>
            <Link target="_blank" href={`https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}`} className="border border-border p-2 rounded-md hover:bg-secondary">
              <BsLinkedin />
            </Link>
            <Link target="_blank" href={`https://www.facebook.com/sharer.php?t=${blogData[0].title}&u=${postUrl}`} className="border border-border p-2 rounded-md hover:bg-secondary">
              <BsFacebook />
            </Link>
          </div>
        </div>
        <div className="max-w-2xl mx-auto px-4 flex flex-col justify-start mb-3" id="comments">
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
                currentUserId={session && session.user.id || null}
              >
              </CommentCard>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}
