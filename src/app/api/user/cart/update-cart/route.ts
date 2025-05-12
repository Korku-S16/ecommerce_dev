import { CartModel } from "@/models/user/userCart.model";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { productId, quantity } = await req.json();

    if (!productId) {
      return NextResponse.json(
        { message: "Product ID is required", success: false },
        { status: 400 }
      );
    }

    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token || !token._id) {
      return NextResponse.json(
        { message: "Unauthorized", success: false },
        { status: 401 }
      );
    }

    let cartList = await CartModel.findOne({ userId: token._id });


    if (!cartList) {
      cartList = new CartModel({
        userId: token._id,
        products: [{ productId, quantity }],
      });
      await cartList.save();
      return NextResponse.json(
        {
          message: "New cart created and product added",
          success: true,
          statusCode: 201,
        },
        { status: 201 }
      );
    }

   
    const existingProduct = cartList.products.find(
      (product) => product.productId.toString() === productId
    );

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cartList.products.push({ productId, quantity });
    }

    await cartList.save();

    return NextResponse.json({
      message: existingProduct ? "Product quantity updated" : "New product added to cart",
      success: true,
      statusCode: 200,
    });
  } catch (error) {
    console.error("Error updating cart:", error);
    return NextResponse.json(
      { message: "Internal Server Error", success: false },
      { status: 500 }
    );
  }
}
