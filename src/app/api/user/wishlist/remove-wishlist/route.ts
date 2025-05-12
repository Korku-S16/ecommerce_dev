import connectToDB from "@/lib/db";
import { WishlistModel } from "@/models/user/userWishlist.model";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectToDB();
  try {
    const { productId } = await req.json();

    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
      return NextResponse.json({
        message: "LOGIN FIRST",
        statusCode: 401,
        success: false,
      });
    }

    const wishList = await WishlistModel.findOne({ userId: token._id });

    if (!wishList) {
      return NextResponse.json({
        message: "WISHLIST NOT FOUND",
        statusCode: 404,
        success: false,
      });
    }

    const isProduct = wishList.products.find(
      (product) => product.productId.toString() === productId
    );

    if (!isProduct) {
      return NextResponse.json({
        message: "PRODUCT NOT FOUND IN WISHLIST",
        statusCode: 404,
        success: false,
      });
    }

    wishList.products = wishList.products.filter(
      (e) => e.productId.toString() !== productId
    );

    await wishList.save();

    return NextResponse.json({
      message: "PRODUCT REMOVED FROM WISHLIST",
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
