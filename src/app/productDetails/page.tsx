"use client";
import { Button } from "@/components/ui/button";
import CardList from "./components/CardList";
import { useEffect, useState } from "react";
import useApiHandler from "@/hooks/useApiHandler";
import axios from "axios";

function Page() {

  const [isPrev, setIsPrev] = useState(false);
  const [isNext, setIsNext] = useState(false);
   const [list,setList] = useState([])
  //   /api/user/wishlist/fetch-wishlist
  const apiCaller = useApiHandler();

  const fetchWishList = () => {
    const url = `/api/user/wishlist/fetch-wishlist`;
    const res = apiCaller(url, axios.get);
    setList(list);
    console.log(res);
  };

  useEffect(() => {
    fetchWishList();
  }, []);



  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-2xl font-semibold">My WishList</p>
      <CardList productList={list} />

      <div className=" flex flex-row gap-2 mb-2">
        <Button disabled={!isPrev}>Back</Button>
        <Button disabled={!isNext}>Next</Button>
      </div>
    </div>
  );
}

export default Page;
