"use client"

import { SelectBlogs } from "@/server/db/schema/blog";
import { LuCheck, LuEye, LuPencil } from "react-icons/lu";
import Link from "next/link";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import { approvePost, deletePost, unpublishPost } from "@/server/actions/blogActions";
import { Input } from "../ui/input";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { cn, dateFormatter } from "@/lib/utils";
import { SelectUsers } from "@/server/db/schema/auth";
import { BsThreeDotsVertical } from "react-icons/bs";

function UnpublishPostForm({ postSlug }: { postSlug: string }) {
  const [state, formAction] = useFormState(handleUnpublishPost, {
    error: "",
  })

  async function handleUnpublishPost(currentState: { error: string }, formData: FormData) {
    const slug = formData.get('slug') as string
    const error = await unpublishPost(slug)
    if (error.error === '') {
      toast.success("Successfully unpublished the post!")
    } else {
      toast.error("An error occurred.")
    }
    return error
  }

  return (
    <form action={formAction}>
      <Input type="hidden" name="slug" value={postSlug} />
      <Button variant="outline" >Unpublish it</Button>
    </form>
  )
}

function ApprovePostForm({ postSlug }: { postSlug: string }) {
  const [state, formAction] = useFormState(handleApprovePost, {
    error: "",
  })

  async function handleApprovePost(currentState: { error: string }, formData: FormData) {
    const slug = formData.get('slug') as string
    const error = await approvePost(slug)
    if (error.error === '') {
      toast.success("Successfully approved & published the post!")
    } else {
      toast.error("An error occurred.")
    }
    return error
  }

  return (
    <form action={formAction}>
      <Input type="hidden" name="slug" value={postSlug} />
      <Button variant="outline" className="hover:bg-green-400/85 bg-green-400 dark:bg-green-400/55">Publish it</Button>
    </form>
  )
}

function DeletePostForm({ postSlug }: { postSlug: string }) {
  const [state, formAction] = useFormState(handleDeletePost, {
    error: "",
  })

  async function handleDeletePost(currentState: { error: string }, formData: FormData) {
    const slug = formData.get('slug') as string
    const error = await deletePost(slug)
    if (error.error === '') {
      toast.success("Successfully deleted the post!")
    } else {
      toast.error("An error occurred.")
    }
    return error
  }

  return (
    <form action={formAction}>
      <Input type="hidden" name="slug" value={postSlug} />
      <Button variant="destructive">Delete it</Button>
    </form>
  )
}

export default function UnapprovedBlogItem({ post, author }: { post: SelectBlogs, author: SelectUsers }) {
  let modifiedAtString: string
  if (post.createdAt !== post.updatedAt)
    modifiedAtString = 'Last updated on'
  else
    modifiedAtString = 'Created on'

  if (post.isApproved)
    modifiedAtString = 'Published on'

  return (
    <>
      <div className={cn("px-4 py-2 border border-border rounded-sm text-wrap gap-2 dark:hover:bg-secondary/25 hover:bg-secondary", post.isApproved && "border-green-400")}>
        <div className="flex justify-between items-center text-wrap gap-2">
          <div className="inline-flex justify-between items-center flex-grow mr-4 lg:mr-16 max-sm:flex-wrap w-full">
            <Link href={post.isApproved && `/blog/${post.slug}` || `/preview/${post.slug}`} target="_blank" className={`hover:underline group underline-offset-2 inline-flex gap-x-2 items-center ${post.isDraft && `decoration-muted-foreground`}`}>
              <span className="text-muted-foreground text-sm group-hover:flex hidden">
                <LuEye />
              </span>
              <span className={cn(post.isDraft && 'text-muted-foreground', "max-w-md text-pretty font-bold")}>{post.title}</span>
            </Link>
            <span className="text-muted-foreground text-sm max-sm:text-xs">
              {modifiedAtString}{' '}{post.isApproved && dateFormatter.format(post.publishedAt) || dateFormatter.format(post.updatedAt)}
            </span>
          </div>
          <div className="inline-flex items-center">
            <Dialog>
              <DialogTrigger className="p-2 rounded-sm">
                <BsThreeDotsVertical />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>What do you want to do with this post?</DialogTitle>
                  <div className="flex justify-center gap-2 items-center pt-5">
                    {!post.isApproved &&
                      <ApprovePostForm postSlug={post.slug} />
                      ||
                      <UnpublishPostForm postSlug={post.slug} />
                    }
                    <DialogClose asChild>
                      <DeletePostForm postSlug={post.slug} />
                    </DialogClose>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <span className="text-sm">{author.name}</span>
      </div>
    </>
  )
}
