"use client";
import Carousel from "@/app/home/component/carousel";
import Category from "@/app/home/component/category";
import Product from "@/app/home/component/products";
import Popular from "@/app/home/component/popular";
import useApiHandler from "@/hooks/useApiHandler";
import axios from "axios";
import { useEffect, useState } from "react";

interface Pagination {
  tab: string;
  page: number;
}
const YourPage = () => {
  const apiCaller = useApiHandler();

  const [params, setParams] = useState<Pagination>({
    page: 1,
    tab: "New Arrival",
  });

  

  const changeTab = (data) => {
    if (data.tabName) {
      setParams({ ...params, tab: data.tabName });
    }
    if (data.page) {
      setParams({ ...params, page: data.page });
    }
  };
  // pagination

  // const page = Number(searchParams.get("page")) || 1;
  // const productType = searchParams.get("productType");

  const fetchProducts = async () => {
    // D:\client-projects\ecommerce_dev\src\app\api\user\products\filter-products

    const url = `/api/user/products/filtered-products?page=${params.page}`;
    const res = await apiCaller(url, axios.get);
  };


  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <div>
      <Carousel />
      <Category />
      <Product  featuredProducts={[]} newlyArrived={[]} toggleTab={changeTab}/>
      <Popular />
    </div>
  );
};

export default YourPage;
