"use client";
import React, { useState } from "react";
import ShoppingCartItem from "../../cart/component/cartItem";
import CartSummary from "../../cart/component/cartSummary";
import { CartItem } from "./types";

const initialCart: CartItem[] = [
  {
    id: "1",
    title: "Apple iPhone 14 Pro Max 128Gb Deep Purple",
    subtitle: "25139625013894",
    price: 83999,
    image: "/1.png",
    quantity: 1,
  },
  {
    id: "2",
    title: "Blue Heaven complete makeup kit",
    subtitle: "53450358345",
    price: 5490,
    image: "/5.png",
    quantity: 1,
  },
  {
    id: "3",
    title: "Men's Formal suit Black",
    subtitle: "96332324",
    price: 9999,
    image: "/2.png",
    quantity: 1,
  },
];

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemove = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col lg:flex-row justify-between p-8 gap-8">
      <div className="flex-1">
        <h1 className="text-lg font-semibold mb-6">Shopping Cart</h1>
        {cartItems.map((item) => (
          <ShoppingCartItem
            key={item.id}
            item={item}
            onQuantityChange={handleQuantityChange}
            onRemove={handleRemove}
          />
        ))}
      </div>
      <CartSummary subtotal={subtotal} />
    </div>
  );
};

export default ShoppingCart;
