"use client"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { Textarea } from '../ui/textarea'

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { useForm } from "react-hook-form"
import { useFormStatus } from "react-dom";
import { InsertBlogs } from "@/server/db/schema/blog";
import { toast } from "sonner";
import { publishAction, updatePost } from "@/server/actions/blogActions";
import { useEditorContentStore } from "@/store/editorContent";
import { useSubmitToggleStore } from "@/store/canSubmit";
import Image from "next/image";
import { useState } from "react";
import { dateFormatter } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "../ui/dialog";
import { usePathname } from "next/navigation";

export type MetadataFormProps = {
  session: any,
  blogObj?: InsertBlogs,
}

export default function MetadataForm({ session, blogObj }: MetadataFormProps) {
  const { editorContent, setEditorContent } = useEditorContentStore()
  const { canSubmit, setCanSubmit } = useSubmitToggleStore()
  const { pending } = useFormStatus();

  const pathname = usePathname()

  const formSchema = z.object({
    title: z.string().min(5),
    slug: z.string().min(5),
    description: z.string().min(5),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: blogObj?.title || "",
      slug: blogObj?.slug || "",
      description: blogObj?.description || "",
    }
  })

  function slugify(title: string) {
    const length = 72
    const slug = title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .substring(0, Math.min(length, title.length))
    form.setValue('slug', slug, { shouldValidate: true })
  }

  let update = false
  if (blogObj?.slug) {
    update = true
  }

  async function onDraft(values: z.infer<typeof formSchema>) {
    const authorId = session.session?.user.id as string

    const blogObj = {
      title: values.title,
      slug: values.slug,
      description: values.description,
      content: editorContent,
      isDraft: true,
      authorId: authorId,
      coverImage: imageUrl,
    }

    let error
    if (update) {
      const actualBlogObj = { ...blogObj, updatedAt: new Date() }
      error = await updatePost(actualBlogObj)
    } else {
      const actualBlogObj = { ...blogObj, createdAt: new Date(), updatedAt: new Date() }
      error = await publishAction(actualBlogObj)
    }

    if (error?.error) {
      toast.error(error.error)
      return
    }

    toast.success("Blog post saved to draft successfully!")
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const authorId = session.session?.user.id as string

    const blogObj = {
      title: values.title,
      slug: values.slug,
      description: values.description,
      content: editorContent,
      isDraft: false,
      isApproved: false,
      authorId: authorId,
      coverImage: imageUrl,
    }

    let error
    if (update) {
      const actualBlogObj = { ...blogObj, updatedAt: new Date() }
      error = await updatePost(actualBlogObj)
    } else {
      const actualBlogObj = { ...blogObj, createdAt: new Date(), updatedAt: new Date() }
      error = await publishAction(actualBlogObj)
    }

    if (error?.error) {
      toast.error(error.error)
      return
    }

    if (update) {
      toast.success("Blog post updated & sent for approval successfully!")
    } else {
      toast.success("Blog post sent for approval successfully!")
    }
  }

  let coverImage: string = ''
  if (blogObj?.coverImage !== null && blogObj?.coverImage !== undefined && blogObj?.coverImage !== '') {
    coverImage = blogObj.coverImage
  }

  const [imageUrl, setImageUrl] = useState(coverImage)

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="z-10 bottom-4 right-5 fixed shadow-xl lg:hidden">Submit</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            Blog Details
          </DialogHeader>
          <div className="lg:min-w-96 flex flex-col rounded-md mt-2 max-lg:flex-grow lg:sticky top-14 max-h-main shadow-sm bg-background">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 flex flex-col justify-between h-full py-2">
                <div className="space-y-3">
                  {blogObj &&
                    <div className="flex flex-wrap justify-between text-sm gap-x-4">
                      <span>
                        {blogObj?.updatedAt && (`Last updated on: ${dateFormatter.format(blogObj.updatedAt)}`)}
                      </span>
                      <span>
                        Status: {(blogObj && blogObj.isDraft) && "Draft" || (blogObj && blogObj.isApproved) && "Published" || "Sent for Approval"}
                      </span>
                    </div>
                  }
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem className="flex items-baseline gap-x-3 justify-between">
                        <FormLabel>Title</FormLabel>
                        <div className="w-full space-y-1">
                          <FormControl>
                            <Input placeholder="Title of your blog post" {...field} />
                          </FormControl>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-baseline gap-x-3 justify-between">
                          <FormLabel>Slug</FormLabel>
                          <div className="flex gap-2 w-full max-sm:flex-wrap">
                            <FormControl>
                              <Input disabled={pathname !== '/create-post'} placeholder="This will show in URL of your blog post" {...field} />
                            </FormControl>
                            <Button disabled={pathname !== '/create-post'} type="button" onClick={() => slugify(form.getValues('title'))}>Generate Slug</Button>
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem className="flex items-baseline gap-x-3 justify-between">
                        <FormLabel>Description</FormLabel>
                        <div className="w-full space-y-1">
                          <FormControl>
                            <Textarea placeholder="A brief description of your blog post" {...field} />
                          </FormControl>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={() => (
                      <FormItem className="flex items-baseline gap-x-3">
                        <FormLabel>Cover Image</FormLabel>
                        <FormControl>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-center w-full gap-2">
                    {imageUrl !== '' &&
                      <Image
                        src={imageUrl}
                        alt="cover image"
                        height={352}
                        width={360}
                        className="aspect-video h-56 rounded-md border border-border object-cover"
                      />
                    }
                  </div>
                </div>
                <div className="gap-2 flex flex-wrap">
                  <Button disabled={pending} type="submit">
                    {update && 'Update' || 'Submit'} &amp; Sent for Approval
                  </Button>
                  <Button variant="secondary" disabled={pending} type="button" onClick={form.handleSubmit(onDraft)}>
                    Save as draft
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>

      <div className="lg:min-w-96 flex flex-col rounded-md mt-2 px-4 py-2 max-lg:flex-grow lg:sticky top-14 max-h-main shadow-sm bg-background border border-border max-lg:hidden sidebar-height">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 flex flex-col justify-between h-full py-2">
            <div className="space-y-3">
              {blogObj &&
                <div className="flex flex-col justify-between text-sm">
                  <span>
                    {blogObj?.updatedAt && (`Last updated on: ${dateFormatter.format(blogObj.updatedAt)}`)}
                  </span>
                  <span>
                    Status: {(blogObj && blogObj.isDraft) && "Draft" || (blogObj && blogObj.isApproved) && "Published" || "Sent for Approval"}
                  </span>
                </div>
              }
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="flex items-baseline gap-x-3 justify-between">
                    <FormLabel>Title</FormLabel>
                    <div className="w-full space-y-1">
                      <FormControl>
                        <Input placeholder="Title of your blog post" {...field} />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-baseline gap-x-3 justify-between">
                      <FormLabel>Slug</FormLabel>
                      <div className="flex gap-2 w-full max-sm:flex-wrap">
                        <FormControl>
                          <Input disabled={pathname !== '/create-post'} placeholder="This will show in URL of your blog post" {...field} />
                        </FormControl>
                        <Button disabled={pathname !== '/create-post'} type="button" onClick={() => slugify(form.getValues('title'))}>Generate Slug</Button>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="flex items-baseline gap-x-3 justify-between">
                    <FormLabel>Description</FormLabel>
                    <div className="w-full space-y-1">
                      <FormControl>
                        <Textarea placeholder="A brief description of your blog post" {...field} />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={() => (
                  <FormItem className="flex items-baseline gap-x-3">
                    <FormLabel>Cover Image</FormLabel>
                    <FormControl>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-center w-full gap-2">
                {imageUrl !== '' &&
                  <Image
                    src={imageUrl}
                    alt="cover image"
                    height={352}
                    width={360}
                    className="aspect-video h-56 rounded-md border border-border object-cover"
                  />
                }
              </div>
            </div>
            <div className="space-x-2">
              <Button disabled={pending} type="submit">
                {update && 'Update' || 'Submit'} &amp; Send for Approval
              </Button>
              <Button variant="secondary" disabled={pending} type="button" onClick={form.handleSubmit(onDraft)}>
                Save as draft
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  )
}
