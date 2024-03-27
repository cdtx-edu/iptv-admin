"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "./data-table";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export type Device = {
  number: string;
  price: string;
};
export default function PricingPage() {
  const [devices, setDevices] = useState<Device[]>([]);
  const [newDevice, setNewDevice] = useState<Device>({ number: "", price: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewDevice({ ...newDevice, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDevices([...devices, newDevice]);
    setNewDevice({ number: "", price: "" });
  };

  const handleEdit = (index: number, field: keyof Device, value: string) => {
    const updatedDevices = devices.map((device, i) => {
      if (i === index) {
        return { ...device, [field]: value };
      }
      return device;
    });
    setDevices(updatedDevices);
  };

  const handleDelete = (index: number) => {
    const updatedDevices = devices.filter((_, i) => i !== index);
    setDevices(updatedDevices);
  };

  const columns: ColumnDef<Device>[] = [
    {
      header: "Number of Devices",
      accessorKey: "number",
      cell: ({ row }) => (
        <Input
          type="text"
          value={row.original.number}
          onChange={(e) => handleEdit(row.index, "number", e.target.value)}
        />
      ),
    },
    {
      header: "Price",
      accessorKey: "price",
      cell: ({ row }) => (
        <Input
          type="text"
          value={row.original.price}
          onChange={(e) => handleEdit(row.index, "price", e.target.value)}
        />
      ),
    },
    {
      header: "Actions",
      cell: ({ row }) => (
        <Button variant="destructive" onClick={() => handleDelete(row.index)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Pricing</h1>
      </div>
      <form
        className="flex gap-4 justify-start items-end "
        onSubmit={handleSubmit}
      >
        <label htmlFor="number">
          Number of devices
          <Input
            type="text"
            name="number"
            placeholder="1"
            value={newDevice.number}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="price">
          {" "}
          Price
          <Input
            type="text"
            name="price"
            placeholder="$1"
            value={newDevice.price}
            onChange={handleInputChange}
          />
        </label>
        <Button>Add</Button>
      </form>
      <div className="container mx-auto py-10 bg-white">
        <DataTable
          columns={columns}
          data={devices}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}
