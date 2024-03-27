"use client";

import {
  BadgeDollarSign,
  Bell,
  CircleUser,
  FileBarChart2,
  Home,
  Mail,
  Menu,
  MonitorDown,
  Search,
  Users,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Props = {};
interface LinkItem {
  title: string;
  icon: JSX.Element;
  path: string;
}

export default function Header() {
  const pathname = usePathname();

  const links: LinkItem[] = [
    { path: "/", title: "Dashboard", icon: <Home className="h-5 w-5" /> },
    {
      path: "/subscriptions",
      title: "Subscriptions",
      icon: <Users className="h-5 w-5" />,
    },
    {
      path: "/downloads",
      title: "Downloads",
      icon: <MonitorDown className="h-5 w-5" />,
    },
    {
      path: "/notifications",
      title: "Notifications",
      icon: <Mail className="h-5 w-5" />,
    },
    {
      path: "/pricing",
      title: "Pricing",
      icon: <BadgeDollarSign className="h-5 w-5" />,
    },
    {
      path: "/reports",
      title: "Reports",
      icon: <FileBarChart2 className="h-5 w-5" />,
    },
  ];
  const [open, setOpen] = useState(false);
  const isActive = (path: string) => pathname === path;

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
            onClick={() => setOpen(!open)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Image src={logo} alt="Logo" height={30} width={30} />
              <span className="sr-only">Sparrow Player</span>
            </div>
            {links.map(({ path, title, icon }, index) => (
              <Link
                key={index}
                href={path}
                className={cn(
                  "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 transition-all hover:text-primary",
                  {
                    "bg-secondary text-primary": isActive(path),
                    "text-muted-foreground": !isActive(path),
                  }
                )}
                onClick={handleLinkClick}
              >
                {icon}
                {title}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
