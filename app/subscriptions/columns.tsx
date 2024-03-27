"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Subscribers = {
  email: string
  device: string
  date: string
  location: string
}

export const columns: ColumnDef<Subscribers>[] = [
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "device",
    header: "Device",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
]
