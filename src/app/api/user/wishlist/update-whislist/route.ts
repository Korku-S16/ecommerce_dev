import connectToDB from "@/lib/db";
import { WishlistModel } from "@/models/user/userWishlist.model";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectToDB();

  try {
    const { productId } = await req.json();

    if (!productId) {
      return NextResponse.json({
        message: "PRODUCT ID IS REQUIRED",
        statusCode: 400,
        success: false,
      });
    }

    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
      return NextResponse.json({
        message: "LOGIN FIRST",
        statusCode: 401,
        success: false,
      });
    }

    let wishList = await WishlistModel.findOne({ userId: token._id });

    if (!wishList) {
      // Create a new wishlist if not found
      wishList = await WishlistModel.create({
        userId: token._id,
        products: [{ productId }],
      });

      return NextResponse.json({
        message: "WISHLIST CREATED AND PRODUCT ADDED",
        statusCode: 201,
        success: true,
      });
    }

    const isProduct = wishList.products.find(
      (product) => product.productId.toString() === productId
    );

    if (isProduct) {
      return NextResponse.json({
        message: "PRODUCT ALREADY IN WISHLIST",
        statusCode: 409,
        success: false,
      });
    }

    wishList.products.push(productId);
    await wishList.save();

    return NextResponse.json({
      message: "PRODUCT ADDED TO WISHLIST",
      statusCode: 200,
      success: true,
    });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "SOMETHING WENT WRONG";
    return NextResponse.json({
      message: `ERR: ${errMsg}`,
      statusCode: 500,
      success: false,
    });
  }
}
