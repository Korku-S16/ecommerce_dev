"use client";
import React, { useState } from "react";

const products = [
  {
    id: 1,
    title: "Apple iPhone 14 Pro Max",
    price: "₹119999",
    image: "/1.png",
  },
  {
    id: 2,
    title: "Men's Business Suit",
    price: "₹7530",
    image: "/2.png",
  },
  {
    id: 3,
    title: "Apple Watch Series 8",
    price: "₹19999",
    image: "/3.png",
  },
  {
    id: 4,
    title: "White Tank top for women",
    price: "₹1490",
    image: "/4.png",
  },
  {
    id: 5,
    title: "Blue heaven complete makeup kit",
    price: "₹19999",
    image: "/5.png",
  },
  {
    id: 6,
    title: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
    price: "₹75300",
    image: "/6.png",
  },
  {
    id: 7,
    title: "Galaxy Buds FE Graphite",
    price: "₹11999",
    image: "/7.png",
  },
  {
    id: 8,
    title: "Apple iPad 9 10.2 inch",
    price: "₹67490",
    image: "/8.png",
  },
];

const tabs = ["New Arrival", "Featured Products"];

const ProductGrid = ({featuredProducts,newlyArrived, toggleTab}) => {
  const [activeTab, setActiveTab] = useState("New Arrival");

  const handleTabChange =(tab)=>{
    setActiveTab(tab)
    toggleTab(tab)
  }

  const [newArrivalPage,setNewArrivalPage] = useState(1);
  const [featuredPage,setFeaturedPage] = useState(1);


  // function handleNextPage(page){
  //  if(activeTab==='New Arrival' && page+1>0){ // from fetured products
  //    setNewArrivalPage(page+1)
  //  }
  //  else if(activeTab==='Featured Products' && page+1>0){
  //   setFeaturedPage(page+1)
  //  }
  // }

  // function handlePreviousPage(page){
  //   if(activeTab==='New Arrival' && page>0){ 
  //     setNewArrivalPage(page-1)
  //   }
  //   else if(activeTab==='Featured Products' && page-1>1){
  //    setFeaturedPage(page-1)
  //   }
  //  }

  //  function goToPage(page){
  //   if(activeTab==='New Arrival'){ 
  //     setNewArrivalPage(page)
  //   }
  //   else if(activeTab==='Featured Products'){
  //    setFeaturedPage(page)
  //   }
  //  }

  return (
    <div className=" mt-6">
      <div className="ml-12 mr-2 flex gap-6 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`py-2 border-b-2 ${
              activeTab === tab
                ? "border-black font-semibold"
                : "border-transparent text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6 ml-12 mr-2">
        {
          activeTab==='New Arrival'?(
            products.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded shadow-sm text-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-contain mb-2"
                />
                <h3 className="text-sm font-medium">{item.title}</h3>
                <p className="text-gray-700 mt-1">{item.price}</p>
                <button className="mt-3 bg-black text-white px-4 py-1 rounded text-sm">
                  Buy Now
                </button>
              </div>
            ))
          ):(
            products.map((item,idx) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded shadow-sm text-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-contain mb-2"
                />
                <h3 className="text-sm font-medium">{item.title}</h3>
                <p className="text-gray-700 mt-1">{item.price}</p>
                

                <button className="mt-3 bg-black text-white px-4 py-1 rounded text-sm">
                  Buy Now
                </button>
              </div>
            ))
          )
        }
        
      </div>
    </div>
  );
};

export default ProductGrid;
