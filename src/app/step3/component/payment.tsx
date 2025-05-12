"use client";

import { useState } from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { FaShippingFast } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { useRouter } from "next/navigation";

type PaymentItem = {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  image: string;
  quantity: number;
};

const initialCart: PaymentItem[] = [
  {
    id: "1",
    title: "Apple iPhone 14 Pro Max 128Gb Deep Purple",
    subtitle: "25139625013894",
    price: 83999,
    image: "/1.png",
    quantity: 1,
  },
  {
    id: "2",
    title: "Blue Heaven complete makeup kit",
    subtitle: "53450358345",
    price: 5490,
    image: "/5.png",
    quantity: 1,
  },
  {
    id: "3",
    title: "Men's Formal suit Black",
    subtitle: "96332324",
    price: 9999,
    image: "/2.png",
    quantity: 1,
  },
];

const ShoppingCartItem = ({
  item,
  onQuantityChange,
  onRemove,
}: {
  item: PaymentItem;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}) => (
  <div className="flex justify-between items-center border-b py-2">
    <div className="flex items-center gap-4">
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-24 object-cover rounded"
      />
      <h4 className="font-semibold">{item.title}</h4>
    </div>
    <div className="font-semibold mr-1">₹{item.price}</div>
  </div>
);

const PaymentPage = () => {
  const [paymentItems, setPaymentItems] = useState<PaymentItem[]>(initialCart);

  const handleQuantityChange = (id: string, quantity: number) => {
    setPaymentItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const handleRemove = (id: string) => {
    setPaymentItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = paymentItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const estimatedTax = 281;
  const shipping = 89;
  const total = subtotal + estimatedTax + shipping;

  const router = useRouter();
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        {[
          { icon: <TfiLocationPin />, step: "1", label: "Address" },
          { icon: <FaShippingFast />, step: "2", label: "Shipping" },
          { icon: <MdPayment />, step: "3", label: "Payment" },
        ].map((step, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 font-medium ${
              index === 2 ? "text-black" : "text-gray-400"
            }`}
          >
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-full ${
                index === 2 ? "bg-black text-white" : "border border-gray-400"
              }`}
            >
              {step.icon}
            </div>
            <div>
              <span
                className={`block text-sm ${
                  index === 2 ? "text-gray-500" : ""
                }`}
              >
                Step {step.step}
              </span>
              {step.label}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="bg-white shadow rounded p-6 w-full lg:w-2/3">
          <h2 className="font-bold text-lg mb-4">Summary</h2>
          <div className="space-y-2">
            {paymentItems.map((item) => (
              <ShoppingCartItem
                key={item.id}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            ))}
          </div>
          <div className="mt-6 text-sm">
            <p className="text-gray-600">Address:</p>
            <p>1131 Dusty Townline, Jacksonville, TX 40322</p>
            <p className="mt-2 text-gray-600">Shipment method:</p>
            <p>Free</p>
          </div>
          <hr className="my-4" />
          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Tax</span>
              <span>₹{estimatedTax}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping & Handling</span>
              <span>₹{shipping}</span>
            </div>
            <div className="flex justify-between font-bold text-base">
              <span>Total</span>
              <span>₹{total.toLocaleString()}</span>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded p-6 w-full lg:w-1/3">
          <h2 className="font-bold text-lg mb-4">Payment</h2>
          <div className="flex space-x-4 mb-6">
            <button className="border-b-2 border-black font-bold">
              Credit/Debit Card
            </button>
            <button className="text-gray-500">Paytm</button>
            <button className="text-gray-500">PayPal</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
