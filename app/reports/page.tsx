import { Checkbox } from "@/components/ui/checkbox";
import { Reports, columns } from "./columns";
import { DataTable } from "./data-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const data: Reports[] = [
  {
    device: "Android TV",
    subject: "The feed stops working",
    date: "02/03/2024",
    status: true,
  },
  {
    device: "Web User",
    subject: "Unable to make payment",
    date: "02/03/2024",
    status: false,
  },
  {
    device: "Tizen OS",
    subject: "Player freezing",
    date: "02/03/2024",
    status: true,
  },
  {
    device: "WebOS",
    subject: "The feed stops working",
    date: "02/03/2024",
    status: true,
  },
  {
    device: "iOS",
    subject: "Unable to load Xtreme code",
    date: "02/03/2024",
    status: true,
  },
  {
    device: "Android",
    subject: "Update not working",
    date: "02/03/2024",
    status: true,
  },
];

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Reports</h1>
      </div>

      <div className="flex justify-between gap-4">
        <div className="container mx-auto py-10 bg-white">
          <DataTable columns={columns} data={data} />
        </div>

        <Card className="w-1/2">
          <CardHeader>
            <CardTitle className="text-lg text-muted-foreground font-bold capitalize">
              The feed stops working
            </CardTitle>
            <CardDescription>
              <div className="flex justify-between">
                <div className="flex flex-col items-start gap-3">
                  <span className="font-medium">Android TV</span>
                  <span className="font-semibold text-red-600">Open</span>
                </div>
                <span>13/3/24</span>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="mb-8">
            <p className="text-balance text-muted-foreground">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
              debitis. Ullam, doloremque error! Dolorum harum nemo doloremque
              voluptate explicabo repellendus quos vero voluptatum eos non
              laudantium magni repellat similique ad, commodi tempora optio
              debitis quae quas est. Ducimus, dolor odio?
            </p>
          </CardContent>
          <CardFooter>
            <div className="flex items-center space-x-2">
              <Checkbox id="status" />
              <label
                htmlFor="status"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Mark as Resolved
              </label>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
