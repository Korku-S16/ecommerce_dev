"use client";

import { Button } from "@/components/ui/button";
import { TbHeartFilled } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import useApiHandler from "@/hooks/useApiHandler";
import axios from "axios";
interface ProductCardProps {
  productCard: {
    name: string;
    price: number;
    imageUrl: string;
    _id:string
  };
}

function Card({ productCard }: ProductCardProps) {
const apiCaller = useApiHandler()

const handleWishList = async ()=>{
  const url = `/api/user/wishlist/update-whislist`
  const res = apiCaller(url,axios.post,{productId:productCard._id})
  console.log(res);
}

// buy now 

  return (
    <Link href={`/products/${productCard._id}`} className="w-64 min-h-max min-w-max h-72 pt-[24px] scale-90 pr-[16px] pb-[24px] pl-[16px] bg-[#F6F6F6] rounded-sm text-center">
      <div className="flex flex-col gap-3 ">
        <div className="flex flex-row justify-between items-start ">
         <button onClick={handleWishList}>
         <TbHeartFilled className="w-8 h-8 text-red-500 " />
         </button>
          <Button variant="secondary" size="lg" className="cursor-pointer">
            <MdDelete className="text-2xl" />
          </Button>
        </div>

        <div className="flex items-center justify-center ">
          <img
            src={productCard.imageUrl}
            className=" object-cover w-24 h-24  "
          ></img>
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <p className="">{productCard.name}</p>
          <p className=" text-2xl font-bold text-black">₹{productCard.price}</p>
        </div>
        <Button>Buy Now</Button>
      </div>
    </Link>
  );
}

export default Card;
