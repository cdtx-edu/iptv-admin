import { Button } from "@/components/ui/button";
import { Notifications, columns } from "./columns";
import { DataTable } from "./data-table";
import { Pencil, SquarePlus } from "lucide-react";
import Link from "next/link";

export const data: Notifications[] = [
  {
    email: "dawazak@gmail.com",
    device: "Android",
    date: "02/03/2024",
    location: "Nigeria",
  },
  {
    email: "everything@allpeople.com",
    device: "AndroidTV",
    date: "02/03/2024",
    location: "Canada",
  },
  {
    email: "todaypeople@gmail.com",
    device: "Tizen",
    date: "02/03/2024",
    location: "United Kingdom",
  },
  {
    email: "allhumans@gmail.com",
    device: "Android",
    date: "02/03/2024",
    location: "France",
  },
  {
    email: "wednesday@today.com",
    device: "Web OS",
    date: "02/03/2024",
    location: "China",
  },
];

export default function NotificationsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Notifications</h1>
      </div>

      <Button asChild className="w-20">
        <Link href="/notifications/new">
          New <SquarePlus className="ml-2 h-8 w-8" />
        </Link>
      </Button>

      <div className="container py-10 bg-white">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
