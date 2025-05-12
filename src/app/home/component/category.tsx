"use client";
import useApiHandler from "@/hooks/useApiHandler";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Category = () => {
  const apiCaller = useApiHandler();
  const [categories, setCategories] = useState<
    { image: string; name: string }[]
  >([]);

  const fetchCategories = async () => {
    const url = `/api/user/category/fetch-categories`;
    const res = await apiCaller(url, axios.get);

    console.log(res);
    if (res?.statusCode === 200) {
      setCategories(res.data);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const router = useRouter()
  const fetchProducts = async (categoryId)=>{
    // const url = `/api/user/products/fetch-products-by-category`
    // const res = await apiCaller(url,axios.post,{category:categoryId})
    router.push(`/products?category=${encodeURIComponent(categoryId)}`)
    
  }
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="px-4 sm:px-16 lg:px-20 py-10">
        <h2 className="text-xl font-semibold mb-6 text-left text-gray-800">
          Browse By Category
        </h2>
        <div className="flex flex-wrap gap-6 justify-center items-center sm:justify-start">
          {categories?.length > 0
            ? categories?.map((cat, index) => (
                <div
                 onClick={()=>fetchProducts(cat._id)}
                  key={index}
                  className="flex flex-col items-center justify-center bg-gray-100 rounded-lg px-6 py-10 w-36 h-36 hover:bg-gray-200 transition"
                >
                  <img className="w-20 h-20" src={cat.image}></img>
                  <span className="text-sm text-center text-black font-medium">
                    {cat.name}
                  </span>
                </div>
              ))
            : "NO CATEGORIES FOUND"}
        </div>
      </div>
    </div>
  );
};

export default Category;
