"use client";
import { Button } from "@/components/ui/button";
import { FiHeart } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import  Link  from "next/link";

// interface ProductCardProps {
//   productCard: {
//     name: string;
//     price: number;
//     imageUrl: string;
//     _id:string
//   };
// }

function Card({ productCard }) {
  console.log("line 17",productCard)
  return (
    <Link href={`/products/${productCard._id}`}
     className="w-56 min-h-max min-w-max h-72 pt-[24px] scale-90 pr-[16px] pb-[24px] pl-[16px] bg-[#F6F6F6] rounded-sm text-center">
      <div className="flex flex-col gap-3 ">
        <div className="flex flex-row justify-between items-start ">
          <FiHeart className="w-6 h-6" />
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
    </Link>
  );
}

export default Card;
