import { LuLogOut } from "react-icons/lu";
import UserPfpBox from "../dashboard/user-pfp-box";
import DashboardSidebarItems from "./dashboard-sidebar-items";
import { getUserById } from "@/server/actions/blogActions";
import { Button } from "../ui/button";

export default async function Sidebar() {
  // const { session } = await getUserAuth()
  // const [userDetails] = await getUserById(session?.user.id as string)
  async function handleSignout() {
  }
  return (
    <aside className="min-w-64 sidebar-height sticky top-16 bg-muted/65 hidden lg:block rounded-md p-4 my-4 border border-border shadow-md dark:shadow-black">
      <div className="flex flex-col justify-between h-full">
        <div>
          <UserPfpBox />
          {/*
          <DashboardSidebarItems adminSession={userDetails.isAdmin} />
          */}
        </div>
        <form action={handleSignout}>
          <Button variant="ghost" className="text-left flex justify-start items-center gap-x-4 w-full hover:cursor-pointer hover:bg-primary/15">
            <LuLogOut />
            Sign Out</Button>
        </form>
      </div>
    </aside>
  )
}
