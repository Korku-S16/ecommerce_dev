"use client";

import Card from "./Card";

interface CardListProps {
  productList: any[];
}

function CardList({ productList }: CardListProps) {
  return (
    <div className={`w-fit grid grid-cols-3 grid-rows-3 gap-x-1`}>
      {[
        {
          name: "Apple Iphone 13",
          price: 120000,
          imageUrl: "/1.png",
        },
        { name: "Men's Suit", price: 2000, imageUrl: "/2.png" },
        { name: "Watch", price: 5000, imageUrl: "/3.png" },
        {
          name: "Women's white Top",
          price: 4000,
          imageUrl: "/4.png",
        },
        { name: "Makeup Kit", price: 7000, imageUrl: "/5.png" },
        {
          name: "Realme GT Master",
          price: 25000,
          imageUrl: "/6.png",
        },
        { name: "Boat airbuds", price: 7000, imageUrl: "/7.png" },
        {
          name: "Apple Iphone 14 pro",
          price: 118000,
          imageUrl: "/phone.png",
        },
        {
          name: "Hp Tablet new series",
          price: 68000,
          imageUrl: "/8.png",
        },
      ].map((e, index) => (
        <Card productCard={e} key={index} />
      ))}
    </div>
  );
}

export default CardList;
