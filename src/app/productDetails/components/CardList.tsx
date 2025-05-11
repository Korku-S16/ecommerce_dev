"use client";

import Card from "./Card";

function CardList({ productList }) {
  return (
    <div className={`w-fit grid grid-cols-3 grid-rows-3 gap-x-1`}>
      {
      [1, 2, 3, 4, 5, 6, 7, 8,9].map((e)=>(
        <Card productCard={e} key={e}/>
      ))
      }
    </div>
  );
}

export default CardList;
