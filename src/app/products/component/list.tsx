"use client";

import NewCard from "./newCard";

interface ProductListProps {
  productList: any[];
}

function List({ productList }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e) => (
        <NewCard
          productCard={{
            name: `Product ${e}`,
            price: e * 10,
            imageUrl: `https://example.com/product${e}.jpg`,
          }}
          key={e}
        />
      ))}
    </div>
  );
}

export default List;
