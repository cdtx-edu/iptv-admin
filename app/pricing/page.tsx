"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PricingPage() {
  const [currentPrice, setCurrentPrice] = useState<number>(5); // Default current price is $5
  const [newPrice, setNewPrice] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPrice(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const price = parseFloat(newPrice);
    if (!isNaN(price)) {
      setCurrentPrice(price);
      setNewPrice(""); // Clear the input after setting the price
    } else {
      alert("Please enter a valid number.");
    }
  };

  return (
    <div className="flex justify-start items-start pl-12 space-y-8"> {/* Left-align content with padding */}
      <div className="flex flex-col space-y-8">
        {/* Current Price Display */}
        <div className="p-6 border-2 border-gray-800 bg-rose-100 text-center rounded-lg w-fit">
          <p className="text-3xl font-bold text-gray-800">
            ${currentPrice.toFixed(2)} {/* Moderately sized font */}
          </p>
          <p className="text-md text-gray-800">Current price</p> {/* Slightly smaller description text */}
        </div>

        {/* Form to Set New Price */}
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <label htmlFor="new-price" className="text-md font-semibold text-gray-800">
            Set new price
          </label>
          {/* Input with Dollar Symbol */}
          <div className="flex items-center space-x-1">
            <span className="text-gray-800">$</span>
            <Input
              type="text"
              id="new-price"
              name="newPrice"
              placeholder="Type price here"
              value={newPrice}
              onChange={handleInputChange}
              className="text-center"
            />
          </div>
          <Button type="submit" className="bg-gray-800 text-white">
            Set price
          </Button>
        </form>
      </div>
    </div>
  );
}
