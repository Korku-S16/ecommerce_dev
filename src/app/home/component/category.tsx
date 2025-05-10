"use client"
import useApiHandler from "@/hooks/useApiHandler";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaMobileAlt,
  FaTshirt,
  FaBlender,
  FaMagic,
  FaTv,
  FaGamepad,
} from "react-icons/fa";

// const categories = [
//   { label: "Mobiles & Tablets", icon: <FaMobileAlt /> },
//   { label: "Tv & Appliances", icon: <FaTv /> },
//   { label: "Fashion", icon: <FaTshirt /> },
//   { label: "Kitchen", icon: <FaBlender /> },
//   { label: "Beauty", icon: <FaMagic /> },
//   { label: "Others", icon: <FaGamepad /> },
// ];

const Category = () => {

  const apiCaller = useApiHandler();
  const [categories,setCategories] = useState([]);

  const fetchCategories = async()=>{

    const url = `/api/user/category/fetch-categories`
    const res = await apiCaller(url,axios.get)

    console.log(res);
    if(res?.statusCode===200){
      setCategories(res.data)
    }
  }

  useEffect(()=>{
     fetchCategories()
  },[])
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="px-4 sm:px-16 lg:px-20 py-10">
        <h2 className="text-xl font-semibold mb-6 text-left text-gray-800">
          Browse By Category
        </h2>
        <div className="flex flex-wrap gap-6 justify-center items-center sm:justify-start">
          {
            categories?.length>0 ? (
              categories?.map((cat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-gray-100 rounded-lg px-6 py-10 w-36 h-36 hover:bg-gray-200 transition"
                >
                  <div className="text-3xl text-black mb-2">{cat.image}</div>
                  <span className="text-sm text-center text-black font-medium">
                    {cat.name}
                  </span>
                </div>
              ))
            ):(
              "NO CATEGORIES FOUND"
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Category;
