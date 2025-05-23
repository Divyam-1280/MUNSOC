"use client"

import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useFormStatus } from "react-dom"
import { Textarea } from "../ui/textarea"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { SelectUsers } from "@/server/db/schema/auth"
import { useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { updateUserInfo, uploadAvatarUrl } from "@/server/actions/userActions"
import { toast } from "sonner"

const formSchema = z.object({
  username: z.string().min(2).max(50),
  bio: z.string().min(1).max(150, { message: "It is suggested to limit your bio to 150 words." }),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
})

// export default function UserDataForm({ session, userData }: { session: AuthSession, userData: SelectUsers }) {
//   const actualSession = session.session
//
//   const { pending } = useFormStatus()
//
//   const socialUrls = (userData.socialLinks && userData.socialLinks.length > 0) && userData.socialLinks?.map(i => ({ value: i })) || null
//
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       username: userData.name ?? "",
//       bio: userData.bio ?? "",
//       urls: socialUrls ?? [
//         { value: "https://twitter.com/samisthefbi" },
//       ],
//     },
//   })
//
//   const { fields, append } = useFieldArray({
//     name: "urls",
//     control: form.control,
//   })
//
//   async function onSubmit(values: z.infer<typeof formSchema>) {
//     // Do something with the form values.
//     // ✅ This will be type-safe and validated.
//
//     if (!actualSession) return
//
//     const res = await updateUserInfo(values, actualSession.user.id)
//     if (res?.error)
//       toast.error("An error occurred")
//     else
//       toast.success("User info updated")
//   }
//
//   const [imageUrl, setImageUrl] = useState(userData.avatarUrl)
//   const initials = userData.name?.match(/(\b\S)?/g)?.join("").match(/(^\S|\S$)?/g)?.join("").toUpperCase()
//
//
//   return (
//     <div>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//           <div className="flex gap-x-6 flex-wrap">
//             <div className="size-28 bg-secondary rounded-full overflow-clip inline-flex items-center justify-center text-muted-foreground">
//               {imageUrl !== '' && imageUrl !== null &&
//                 <Image
//                   src={imageUrl}
//                   alt="pfp"
//                   height={512}
//                   width={512}
//                   className="aspect-video h-28 w-28 object-cover"
//                   priority
//                 />
//                 ||
//                 <div className="text-2xl">
//                   {initials}
//                 </div>
//               }
//             </div>
//             <div>
//               <h1 className="">Your profile photo</h1>
//               <UploadButton
//                 className="mt-4 ut-button:transition-all ut-button:border ut-button:bg-secondary/55 ut-button:text-sm ut-button:ut-readying:bg-secondary/55 ut-button:ut-uploading:bg-secondary/55 ut-button:text-black dark:ut-button:text-white ut-button:hover:bg-secondary"
//                 endpoint="imageUploader"
//                 onClientUploadComplete={async (res) => {
//                   // Do something with the response
//                   setImageUrl(res[0].url)
//                   await uploadAvatarUrl(res[0].url, userData.id)
//                 }}
//                 onUploadError={(error: Error) => {
//                   // Do something with the error.
//                   alert(`ERROR! ${error.message}`);
//                 }}
//               />
//             </div>
//           </div>
//           <FormField
//             control={form.control}
//             name="username"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Your name</FormLabel>
//                 <FormControl>
//                   <Input {...field} />
//                 </FormControl>
//                 <FormDescription>
//                   This is your public display name.
//                 </FormDescription>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="bio"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Bio</FormLabel>
//                 <FormControl>
//                   <Textarea {...field} />
//                 </FormControl>
//                 <FormDescription>
//                   A few words about you or your interests to share with the readers
//                 </FormDescription>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <div>
//             {fields.map((field, index) => (
//               <FormField
//                 control={form.control}
//                 key={field.id}
//                 name={`urls.${index}.value`}
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className={cn(index !== 0 && "sr-only")}>
//                       URLs
//                     </FormLabel>
//                     <FormDescription className={cn(index !== 0 && "sr-only")}>
//                       Add links to your website, blog, or social media profiles.
//                     </FormDescription>
//                     <FormControl>
//                       <Input {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             ))}
//             <Button
//               type="button"
//               variant="outline"
//               size="sm"
//               className="mt-2"
//               onClick={() => append({ value: "" })}
//             >
//               Add URL
//             </Button>
//           </div>
//           <Button type="submit" disabled={pending}>Updat{pending && 'ing' || 'e'} Info</Button>
//         </form>
//       </Form>
//     </div>
//   )
// }
