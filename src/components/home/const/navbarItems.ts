import { ActivityLogIcon } from "@radix-ui/react-icons"
import { IoSparklesSharp } from "react-icons/io5"
import { LuAward, LuBookOpen, LuContact, LuHouse, LuStickyNote, LuUsers } from "react-icons/lu"
import { FaPeopleGroup } from "react-icons/fa6";

const navbarItems = [
  {
    href: "/",
    name: "Home",
    icon: LuHouse,
  },
  {
    href: "/#achievements",
    name: "Achievements",
    icon: LuAward,
  },
  {
    href: "/#activity",
    name: "Activity",
    icon: ActivityLogIcon,
  },
  {
    href: "/#documents",
    name: "Documents",
    icon: LuStickyNote,
  },
  {
    href: "/#about",
    name: "About Us",
    icon: LuUsers,
  },
  {
    href: "/#contact",
    name: "Contact",
    icon: LuContact,
  },
  {
    href: "/blog",
    name: "Blog",
    icon: LuBookOpen,
  },
  {
    href: "/mun2024",
    name: "NITAMUN",
    icon: IoSparklesSharp,
  },
  {
    href: "/founding-members",
    name: "Founding Members",
    icon: FaPeopleGroup
  }
]

export default navbarItems
