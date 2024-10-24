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
      {/* Header with Search Bar and Icon */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Pricing</h1>
        <div className="flex items-center gap-4">
          {/* Placeholder for Search Bar */}
          <Input
            type="text"
            placeholder="Search price"
            className="max-w-xs"
          />
          {/* Placeholder for Icon */}
          <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
            {/* Insert the actual icon here */}
            <span className="text-gray-500">Icon</span>
          </div>
        </div>
      </div>

      {/* Current Price Display */}
      <div className="bg-pink-100 p-4 w-32 text-center rounded-lg">
        <span className="text-2xl font-bold">$5</span>
        <p className="text-sm text-gray-600">Current price</p>
      </div>

      {/* New Price Form */}
      <form
        className="space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col space-y-2">
          <label htmlFor="price" className="font-semibold">
            Set new price
          </label>
          <Input
            type="text"
            name="price"
            placeholder="Type price here"
            value={newDevice.price}
            onChange={handleInputChange}
            className="max-w-xs"
          />
          <Button className="w-32 bg-blue-700 hover:bg-blue-800 text-white">
            Set price
          </Button>
        </div>
      </form>

      {/* Device List Table */}
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
