"use client"
import ImageGallery from "./imagegallery";
import ProductSpecs from "./productspecs";
import BuyActions from "./buyactions";
import Link from "next/link";
import ProductExtraDetails from "./description";

export default function ProductDetails({productDetails}) {
  console.log("line 8",productDetails.specifications)
  return (
    <div className="max-w-7xl mx-auto mt-12 mb-12">
      <div className="mb-6 text-sm text-gray-600 ml-4 md:ml-0">
        <Link
          href="/home"
          className="hover:underline hover:text-black font-medium text-base"
        >
          Home
        </Link>{" "}
        <span className="mx-1">{">"}</span>
        <Link
          href="/mobiles"
          className="hover:underline hover:text-black font-medium text-base"
        >
          {productDetails?.subcategory?.name||"Mobiles & Tablets"}
        </Link>{" "}
        <span className="mx-1">{">"}</span>
        <span className="text-base font-medium text-black">
          {productDetails?.name||"Apple iPhone 14 Pro Max"}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ImageGallery />
        <div>
          <h1 className="text-3xl font-semibold mb-2">
            {productDetails?.name||"Apple iPhone 14 Pro Max"}
          </h1>
          <div className="flex items-center gap-2 text-xl">
            <span className="font-bold text-black">₹{productDetails?.price||"83999"}</span>
            <span className="line-through text-gray-400">₹{productDetails?.price+(productDetails?.price*0.25)||"90999"}</span>
          </div>

          <div className="mt-4">
            <div className="flex gap-2 mb-4">
              {productDetails?.sizes?.map((size) => (
                <button
                  key={size}
                  className={`px-3 py-1 border rounded 
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <ProductSpecs specifications={productDetails.specifications||{}
} />

          <p className="text-gray-600 mt-4">
           {
            productDetails?.description ||" Enhanced capabilities thanks to an enlarged display of 6.7 inches and work without recharging throughout the day. Incredible photos in weak, and bright lighting; the new system with two cameras..."
           }
          </p>

          <BuyActions />
        </div>
      </div>

      {/* <ProductExtraDetails /> */}
    </div>
  );
}
