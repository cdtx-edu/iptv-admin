'use client'

import { useState } from "react"
import { Nav } from "./ui/nav"

import {
  BadgeDollarSign,
  FileBarChart2,
  LayoutDashboard,
  Mail,
  Menu,
  MonitorDown,
  Users,

} from "lucide-react"
import { TooltipProvider } from "@radix-ui/react-tooltip"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"
import logo from '@/public/logo.svg'


type Props = {}
export default function Sidebar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  function toggleSidebar(isCollapsed: boolean) {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <TooltipProvider>
      <aside className="relative flex flex-col items-center gap-8 p-4">
        <Link href='#' className="flex justify-start gap-2">
          <Image src={logo}  alt="Logo" height={50} width={50}/>
          {!isCollapsed && (
            <div className="flex flex-col font-medium text-sm text-primary tracking-tight">
              <span>Sparrow</span>
              <span>Player</span>
            </div>
          )}
        </Link>
        <div className="absolute  top-20">
          <Button
            onClick={() => toggleSidebar(isCollapsed)}
            variant='ghost'
            className="rounded-md p-2 h-9 w-9"
          >
            <Menu/>
          </Button>
        </div>
        <Nav
          isCollapsed={isCollapsed}
          links={[
            {
              title: "Dashboard",
              icon: LayoutDashboard,
              variant: "default",
              href: "/",
            },
            {
              title: "Subscriptions",
              icon: Users,
              variant: "ghost",
              href: "/subscriptions",
            },
            {
              title: "Downloads",
              icon: MonitorDown,
              variant: "ghost",
              href: "/downloads",
            },
            {
              title: "Notifications",
              icon: Mail,
              variant: "ghost",
              href: "/notifications",
            },
            {
              title: "Pricing",
              icon: BadgeDollarSign,
              variant: "ghost",
              href: "/pricing",
            },
            {
              title: "Reports",
              icon: FileBarChart2,
              variant: "ghost",
              href: "/reports",
            },

          ]}
        />
      </aside>
    </TooltipProvider>
  )
}