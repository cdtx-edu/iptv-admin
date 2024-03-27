"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Reports = {
  device: string
  subject: string
  date: string
  status: boolean
}



export const columns: ColumnDef<Reports>[] = [
  {
    accessorKey: "device",
    header: "Device",
  },
  {
    accessorKey: "subject",
    header: "Subject",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({row}) => {
      const status = row.getValue("status") as boolean
      return status ? " Resolved" : "Open"
    }
  },
]
