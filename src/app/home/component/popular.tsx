import React from "react";

interface Product {
  title: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    title: "Popular Products",
    description:
      "iPad combines a magnificent 10.2‑inch Retina display, incredible performance, multitasking and ease of use.",
    image: "/8.png",
  },
  {
    title: "Ipad Pro",
    description:
      "iPad combines a magnificent 10.2‑inch Retina display, incredible performance, multitasking and ease of use.",
    image: "/8.png",
  },
  {
    title: "Samsung Galaxy",
    description:
      "iPad combines a magnificent 10.2‑inch Retina display, incredible performance, multitasking and ease of use.",
    image: "/8.png",
  },
  {
    title: "Macbook Pro",
    description:
      "iPad combines a magnificent 10.2‑inch Retina display, incredible performance, multitasking and ease of use.",
    image: "/8.png",
  },
];

const PopularProducts: React.FC = () => {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-10 ml-6 lg:ml-0">
      <h2 className="text-2xl font-medium mb-6">Popular Products</h2>

      <div className="bg-gray-600 py-10 px-4 sm:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="text-center bg-gray-50 p-6 shadow-sm border "
          >
            <img
              src={product.image}
              alt={product.title}
              className="mx-auto mb-4 h-32 object-contain"
            />
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{product.description}</p>
            <button className="border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
