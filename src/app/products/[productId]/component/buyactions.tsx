"use client";

import useApiHandler from "@/hooks/useApiHandler";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FaShippingFast, FaBoxOpen, FaShieldAlt } from "react-icons/fa";

export default function BuyActions({ productId }) {
  const router = useRouter();
  const apiCaller = useApiHandler();

  const handleCart = async () => {
    const url = `/api/user/cart/update-cart`;
    const res = await apiCaller(url, axios.post, { productId, quantity: 1 });

    console.log(res);

    if (res?.statusCode === 200) {
      router.push("/cart");
    } else {
      console.error("Failed to update cart:", res);
    }
  };

  

  return (
    <div className="mt-6 flex flex-col gap-3">
      <div className="flex gap-3">
        <button className="border px-4 py-2 rounded">Buy Now</button>
        <button
          onClick={handleCart}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>

      <div className="text-xs text-gray-600 flex flex-wrap gap-4 mt-4 items-center">
        <div className="flex items-center gap-1">
          <FaShippingFast className="text-black w-6 h-6" />
          <span className="text-lg">Free Delivery in 3-4 days</span>
        </div>
        <div className="flex items-center gap-1">
          <FaBoxOpen className="text-black w-6 h-6" />
          <span className="text-lg">In Stock Today</span>
        </div>
        <div className="flex items-center gap-1">
          <FaShieldAlt className="text-black w-6 h-6" />
          <span className="text-lg">Guaranteed 1 year</span>
        </div>
      </div>
    </div>
  );
}
