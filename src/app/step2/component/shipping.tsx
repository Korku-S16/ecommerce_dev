"use client";
import { useRouter } from "next/navigation";
import { TfiLocationPin } from "react-icons/tfi";
import { FaShippingFast } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const shippingOptions = [
  {
    label: "Free",
    description: "Regular shipment",
    date: "17 Oct, 2023",
    price: 0,
  },
  {
    label: "₹150",
    description: "Get your delivery as soon as possible",
    date: "1 Oct, 2023",
    price: 150,
  },
  {
    label: "Schedule",
    description: "Pick a date when you want to get your delivery",
    date: "Select Date",
    price: null,
  },
];

const ShippingPage = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2 text-gray-400 font-medium">
          <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-400">
            <TfiLocationPin className="text-sm" />
          </div>
          <div>
            <span className="block text-sm">Step 1</span> Address
          </div>
        </div>

        <div className="flex items-center gap-2 text-black font-medium">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white">
            <FaShippingFast className="text-sm" />
          </div>
          <div>
            <span className="block text-sm text-gray-500">Step 2</span> Shipping
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-400 font-medium">
          <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-400">
            <MdPayment className="text-sm" />
          </div>
          <div>
            <span className="block text-sm">Step 3</span> Payment
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Shipment Method</h3>
        {shippingOptions.map((option, index) => (
          <div
            key={index}
            onClick={() => setSelectedOption(index)}
            className={`flex items-center justify-between border rounded-lg p-4 cursor-pointer transition ${
              selectedOption === index
                ? "border-black bg-gray-50"
                : "border-gray-300"
            }`}
          >
            <div className="flex items-center gap-4">
              <input
                type="radio"
                checked={selectedOption === index}
                readOnly
                className="w-4 h-4 text-black accent-black"
              />
              <div>
                <div className="font-medium">{option.label}</div>
                <div className="text-sm text-gray-600">
                  {option.description}
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-700 flex items-center gap-1">
              {option.date}
              {option.label === "Schedule" && <ChevronDown size={16} />}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-10">
        <button
          onClick={() => router.push("/step1")}
          className="px-6 py-2 border border-black rounded-md text-black hover:bg-black hover:text-white transition"
        >
          Back
        </button>
        <button
          onClick={() => router.push("/step3")}
          disabled={selectedOption === null}
          className={`px-6 py-2 rounded-md transition ${
            selectedOption === null
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ShippingPage;
