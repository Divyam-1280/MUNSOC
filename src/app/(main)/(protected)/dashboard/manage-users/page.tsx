import UserCard from "@/components/dashboard/user-card"
import { getNumberOfPostsByUserId, getUserById } from "@/server/actions/blogActions"
import { getUserList } from "@/server/actions/userActions"
import Link from "next/link"

export default async function Page() {
  return (<>under development</>)
  // const userList = await getUserList()
  // const { session } = await getUserAuth()
  // const [userDetails] = await getUserById(session?.user.id as string)
  // if (!userDetails.isAdmin) return (
  //   <div className="space-y-4 p-4 sm:pt-8 w-full max-w-7xl">
  //     <div className="space-y-2">
  //       <div className="flex justify-between">
  //         <h1 className="text-2xl tracking-tighter font-bold">You&apos;re not supposed to be here...</h1>
  //       </div>
  //       <p className="text-muted-foreground">Go back to <Link href="/dashboard" className="underline dark:hover:text-primary hover:font-bold">dashboard</Link></p>
  //     </div>
  //   </div>
  // )
  //
  // return (
  //   <>
  //     <div className="space-y-4 p-4 sm:pt-8 w-full max-w-7xl">
  //       <div className="space-y-2">
  //         <div className="flex justify-between">
  //           <h1 className="text-2xl font-bold">Change User Roles</h1>
  //         </div>
  //         <ul className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4">
  //           {userList.filter((user) => user.id !== session?.user.id).map((user) => (
  //             <UserCard key={user.id} user={user}>
  //               {getNumberOfPostsByUserId(user.id)}
  //             </UserCard>
  //           ))}
  //         </ul>
  //       </div>
  //     </div>
  //   </>
  // )
}
