"use client";
import { useState } from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { FaShippingFast } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { useRouter } from "next/navigation";
import { Edit, Trash2 } from "lucide-react";

const CheckoutPage = () => {
  const router = useRouter();
  const [selectedAddress, setSelectedAddress] = useState<number | null>(null);

  const [addresses, setAddresses] = useState([
    {
      label: "4/4/1 Bharat Apartment 4C",
      details:
        "44/1 Bharat Apartment 4C, 5th Main Road, Jayanagar, Bangalore 560041, KA, India",
      phone: "(+91) 9899236790",
      type: "HOME",
    },
    {
      label: "Headoffice",
      details:
        "VILLAGE NANDGON, NEAR GRAM PANCHAYAT OFFICE, BHUDARGAD, MAHARASHTRA, INDIA",
      phone: "(+91) 011-23234567",
      type: "OFFICE",
    },
  ]);

  const handleDelete = (index: number) => {
    const updated = [...addresses];
    updated.splice(index, 1);
    setAddresses(updated);
    if (selectedAddress === index) {
      setSelectedAddress(null); // Deselect if the deleted one was selected
    } else if (selectedAddress !== null && selectedAddress > index) {
      setSelectedAddress(selectedAddress - 1); // Adjust index if after deleted
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2 text-black font-medium">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white">
            <TfiLocationPin className="text-sm" />
          </div>
          <div>
            <span className="block text-sm text-gray-500">Step 1</span> Address
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-400 font-medium">
          <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-400 text-gray-400">
            <FaShippingFast className="text-sm" />
          </div>
          <div>
            <span className="block text-sm">Step 2</span> Shipping
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-400 font-medium">
          <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-400 text-gray-400 ">
            <MdPayment className="text-sm" />
          </div>
          <div>
            <span className="block text-sm">Step 3</span> Payment
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Select Address</h3>
        {addresses.map((address, index) => (
          <div
            key={index}
            className={`flex items-start gap-4 border rounded-lg p-4 cursor-pointer transition ${
              selectedAddress === index
                ? "border-black bg-gray-50"
                : "border-gray-300"
            }`}
            onClick={() => setSelectedAddress(index)}
          >
            <input
              type="radio"
              checked={selectedAddress === index}
              readOnly
              className="mt-1 w-4 h-4 text-black accent-black"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">{address.label}</h4>
                <span className="text-xs px-2 py-0.5 rounded-full bg-gray-200 text-gray-700">
                  {address.type}
                </span>
              </div>
              <p className="text-sm text-gray-700 mt-1">{address.details}</p>
              <p className="text-sm text-gray-600">{address.phone}</p>
            </div>
            <div className="flex items-start gap-2">
              <button className="text-black hover:underline text-sm">
                <Edit size={16} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(index);
                }}
                className="text-black hover:underline text-sm"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
        <button className="flex items-center gap-2 text-sm text-black hover:underline ">
          <span className="text-xl">＋</span> Add New Address
        </button>
      </div>

      <div className="flex justify-between mt-10">
        <button
          onClick={() => router.push("/cart")}
          className="px-6 py-2 border border-black rounded-md text-black hover:bg-black hover:text-white transition"
        >
          Back
        </button>
        <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
          Next
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
