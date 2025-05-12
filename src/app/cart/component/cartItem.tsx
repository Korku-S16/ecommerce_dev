import React from "react";
import { CartItem } from "../../cart/component/types";

interface Props {
  item: CartItem;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

const ShoppingCartItem: React.FC<Props> = ({
  item,
  onQuantityChange,
  onRemove,
}) => {
  console.log(item)
  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-24 h-24 object-cover"
        />
        <div>
          <div className="font-semibold">{item.title}</div>
          <div className="text-sm text-gray-500">#{item.subtitle}</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => onQuantityChange(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          −
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => onQuantityChange(item.id, item.quantity + 1)}>
          +
        </button>
      </div>
      <div className="font-semibold">₹{item.price}</div>
      <button onClick={() => onRemove(item.id)}>×</button>
    </div>
  );
};

export default ShoppingCartItem;
