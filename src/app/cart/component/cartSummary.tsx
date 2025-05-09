import React from "react";

interface Props {
  subtotal: number;
}

const CartSummary: React.FC<Props> = ({ subtotal }) => {
  const tax = 281;
  const shipping = 89;
  const total = subtotal + tax + shipping;

  return (
    <div className="border p-6 rounded-md w-full max-w-sm">
      <h2 className="font-semibold mb-4">Order Summary</h2>
      <p className="font-sm mb-4 text-gray-600">
        Discount Code / Promo Code (if any)
      </p>
      <input className="w-full border p-2 mb-2 rounded-lg" placeholder="Code" />
      <p className="font-sm mb-4 text-gray-600">Your bonus card number</p>
      <div className="flex flex-row mb-4">
        <input
          className="w-full border p-2 mb-2"
          placeholder="Enter Card Number"
        />
        <button className="bg-gray-200 text-sm px-4 py-2 mb-2">Apply</button>
      </div>

      <div className="text-sm space-y-1">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Tax</span>
          <span>₹{tax}</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated shipping & Handling</span>
          <span>₹{shipping}</span>
        </div>
        <div className="flex justify-between font-semibold pt-2 border-t mt-2">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>

      <button className="w-full mt-4 bg-black text-white py-2 rounded-md">
        Checkout
      </button>
    </div>
  );
};

export default CartSummary;
