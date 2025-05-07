"use client";
import React, { useState } from "react";

const products = [
  {
    id: 1,
    title: "Apple iPhone 14 Pro Max",
    price: "₹119999",
    image: "/1.png",
  },
  {
    id: 2,
    title: "Men's Business Suit",
    price: "₹7530",
    image: "/2.png",
  },
  {
    id: 3,
    title: "Apple Watch Series 8",
    price: "₹19999",
    image: "/3.png",
  },
  {
    id: 4,
    title: "White Tank top for women",
    price: "₹1490",
    image: "/4.png",
  },
];

const tabs = ["New Arrival", "Bestseller", "Featured Products"];

const ProductGrid = () => {
  const [activeTab, setActiveTab] = useState("New Arrival");

  return (
    <div className=" mt-6">
      <div className="ml-6 flex gap-6 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 border-b-2 ${
              activeTab === tab
                ? "border-black font-semibold"
                : "border-transparent text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded shadow-sm text-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-contain mb-2"
            />
            <h3 className="text-sm font-medium">{item.title}</h3>
            <p className="text-gray-700 mt-1">{item.price}</p>
            <button className="mt-3 bg-black text-white px-4 py-1 rounded text-sm">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
