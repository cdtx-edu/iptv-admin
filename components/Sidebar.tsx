"use client";

import {
  BadgeDollarSign,
  Bell,
  FileBarChart2,
  Home,
  Mail,
  MonitorDown,
  Users,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {};
interface LinkItem {
  title: string;
  icon: JSX.Element;
  path: string;
}
export default function Sidebar({}: Props) {
  const pathname = usePathname();
  const links: LinkItem[] = [
    { path: "/", title: "Dashboard", icon: <Home className="h-4 w-4" /> },
    {
      path: "/subscriptions",
      title: "Subscriptions",
      icon: <Users className="h-4 w-4" />,
    },
    {
      path: "/downloads",
      title: "Downloads",
      icon: <MonitorDown className="h-4 w-4" />,
    },
    {
      path: "/notifications",
      title: "Notifications",
      icon: <Mail className="h-4 w-4" />,
    },
    {
      path: "/pricing",
      title: "Pricing",
      icon: <BadgeDollarSign className="h-4 w-4" />,
    },
    {
      path: "/reports",
      title: "Reports",
      icon: <FileBarChart2 className="h-4 w-4" />,
    },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image src={logo} alt="Logo" height={30} width={30} />
          <span className="">Sparrow Player</span>
        </Link>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 gap-3 text-sm font-medium lg:px-4">
          {links.map(({ path, title, icon }, index) => (
            <Link
              key={index}
              href={path}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                {
                  "bg-primary text-muted": isActive(path),
                  "text-muted-foreground": !isActive(path),
                }
              )}
            >
              {icon}
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
