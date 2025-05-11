import ImageGallery from "./imagegallery";
import ProductSpecs from "./productspecs";
import BuyActions from "./buyactions";
import Link from "next/link";
import ProductExtraDetails from "./description";

export default function ProductDetails() {
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
          Mobiles & Tablets
        </Link>{" "}
        <span className="mx-1">{">"}</span>
        <span className="text-base font-medium text-black">
          Apple iPhone 14 Pro Max
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ImageGallery />
        <div>
          <h1 className="text-3xl font-semibold mb-2">
            Apple iPhone 14 Pro Max
          </h1>
          <div className="flex items-center gap-2 text-xl">
            <span className="font-bold text-black">₹83999</span>
            <span className="line-through text-gray-400">₹90999</span>
          </div>

          <div className="mt-4">
            <div className="flex gap-2 mb-4">
              {["128GB", "256GB", "512GB", "1TB"].map((size) => (
                <button
                  key={size}
                  className={`px-3 py-1 border rounded ${
                    size === "1TB" ? "bg-black text-white" : "bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <ProductSpecs />

          <p className="text-gray-600 mt-4">
            Enhanced capabilities thanks to an enlarged display of 6.7 inches
            and work without recharging throughout the day. Incredible photos in
            weak, and bright lighting; the new system with two cameras...
          </p>

          <BuyActions />
        </div>
      </div>

      <ProductExtraDetails />
    </div>
  );
}
