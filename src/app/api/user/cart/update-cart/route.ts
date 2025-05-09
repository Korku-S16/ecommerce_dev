import { CartModel } from "@/models/user/userCart.model";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const { productId, quantity } = await req.json();

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const cartList = await CartModel.findOne({
    userId: token?._id,
  });

  if (cartList) {
    const isProduct = cartList.products.find(
      (product) => product.productId === productId
    );

    if (isProduct) {
      isProduct.quantity += quantity;
      return NextResponse.json({
        message:"UPDATED PRODUCT QUANTITY",
        statusCode:200,
        

      })
    } else {
      cartList.products.push({
        productId: productId,
        quantity: quantity,
      });
    }
    await cartList.save();
  }

  const isProductAlreadyInCart = await CartModel.findOne({
    "products.productId": productId,
    userId: token?._id,
  });

  if (isProductAlreadyInCart) {
    const product = isProductAlreadyInCart.products.find(
      (product) => product.productId === productId
    );

    if (product) {
      product.quantity = quantity;
      await isProductAlreadyInCart.save();
    }
  }
}
