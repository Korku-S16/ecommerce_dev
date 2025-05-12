"use client";
import React, { useEffect, useState } from "react";
import Description from "./component/productinfo";
import useApiHandler from "@/hooks/useApiHandler";
import axios from "axios";
import { useParams } from "next/navigation";

function Page() {
  const apiCaller = useApiHandler();

  const params = useParams()
  const productId = params.productId
  const [productDetails,setProductDetails] = useState({})
  async function fetchProductDetails (){
    // D:\client-projects\ecommerce_dev\src\app\api\user\products\get-product-details
    const url = `/api/user/products/get-product-details?productId=${productId}`
    const res = await apiCaller(url,axios.get)
    console.log(res);
    if(res.statusCode===200){
      setProductDetails(res.data)
    }
  }

  useEffect(()=>{fetchProductDetails()},[])

  
  return (
    <div>
      <Description productDetails={productDetails} />
    </div>
  );
}

export default Page;
