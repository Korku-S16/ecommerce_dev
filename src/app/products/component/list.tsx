"use client";

import NewCard from "./newCard";

interface ProductListProps {
  productList: any[];
}

function List({ productList }: ProductListProps) {
  console.log(productList)
  return (
    <div className="w-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {productList?.map((e,idx) => (
      <NewCard
        productCard={e}
        key={idx}
      />
      ))}
    </div>
  );
}

export default List;
