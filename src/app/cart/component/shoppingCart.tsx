"use client";
import React, { useEffect, useState } from "react";
import ShoppingCartItem from "../../cart/component/cartItem";
import CartSummary from "../../cart/component/cartSummary";
import { CartItem } from "./types";
import useApiHandler from "@/hooks/useApiHandler";
import axios from "axios";

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
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const apiCaller = useApiHandler();

  const productCatalog: Record<
    string,
    { title: string; price: number; image: string }
  > = {
    "6821f38dab5e7befa9a8fb77": {
      title: "Apple iPhone 14 Pro Max 128Gb Deep Purple",
      price: 83999,
      image: "/1.png",
    },
    // Add more products if needed
  };

  async function handleFetchCart() {
    const res = await apiCaller(`/api/user/cart/fetch-cartlist`, axios.get);
    const productsInCart = res.data?.[0]?.products ?? [];

    const mappedItems: CartItem[] = productsInCart.map((product: any) => {
      const productInfo = productCatalog[product.productId];
      return {
        id: product.productId,
        title: productInfo?.title ?? "Unknown Product",
        subtitle: product.productId,
        price: productInfo?.price ?? 83999,
        image: productInfo?.image ?? "/1.png",
        quantity: product.quantity ?? 1,
      };
    });

    setCartItems(mappedItems);
  }

  useEffect(() => {
    handleFetchCart();
  }, []);

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemove = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const isCartItems = cartItems?.length > 0;

  return (
    <div className="flex flex-col lg:flex-row justify-between p-8 gap-8">
      <div className="flex-1">
        {!isCartItems ? (
          <div className="flex justify-center items-center ">
            NO ITEMS FOUND IN CART
          </div>
        ) : (
          cartItems?.map((item) => (
            <ShoppingCartItem
              key={item._id}
              item={item}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemove}
            />
          ))
        )}
      </div>
      {!isCartItems ? "" : <CartSummary subtotal={subtotal} />}
    </div>
  );
};

export default ShoppingCart;
