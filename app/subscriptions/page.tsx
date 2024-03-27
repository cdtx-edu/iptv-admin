import { Subscribers, columns } from "./columns";
import { DataTable } from "./data-table";
import { FileBarChart2, MonitorDown, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data: Subscribers[] = [
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
export default function SubscriptionsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Subscriptions</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Downloads</CardTitle>
            <MonitorDown />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
            <Users />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reports</CardTitle>
            <FileBarChart2 />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="container py-10 bg-white">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
