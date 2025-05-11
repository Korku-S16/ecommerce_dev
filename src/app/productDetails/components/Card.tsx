"use client";

import { Button } from "@/components/ui/button";
import { TbHeartFilled } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
interface ProductCardProps {
  productCard: {
    name: string;
    price: number;
    imageUrl: string;
  };
}

function Card({ productCard }: ProductCardProps) {
  return (
    <div className="w-64 min-h-max min-w-max h-72 pt-[24px] scale-90 pr-[16px] pb-[24px] pl-[16px] bg-[#F6F6F6] rounded-sm text-center">
      <div className="flex flex-col gap-3 ">
        <div className="flex flex-row justify-between items-start ">
          <TbHeartFilled className="w-8 h-8 text-red-500 " />
          <Button variant="secondary" size="lg" className="cursor-pointer">
            <MdDelete className="text-2xl" />
          </Button>
        </div>

        <div className="flex items-center justify-center ">
          <img src="/phone.png" className=" object-cover w-24 h-24  "></img>
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <p className="">Apple </p>
          <p className=" text-2xl font-bold text-black">₹ 11111</p>
        </div>
        <Button>Buy Now</Button>
      </div>
    </div>
  );
}

export default Card;
