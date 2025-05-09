import connectToDB from "@/lib/db";
import { WishlistModel } from "@/models/user/userWishlist.model";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectToDB();

  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
      return NextResponse.json({
        message: "LOGIN FIRST",
        statusCode: 404,
        success: false,
      });
    }

    //  const wishList = await WishlistModel.find({ userId: token._id }).populate(
    //    "products"
    //  );
    const wishList = await WishlistModel.find({ userId: token._id }).populate(
      "products.productId"
    );

    if (!wishList || wishList.length === 0) {
      return NextResponse.json({
        message: "NO WISHLIST ITEMS FOUND",
        statusCode: 404,
        success: false,
      });
    }

    return NextResponse.json({
      message: "SUCCESSFULLY FETCHED WISHLIST ITEMS",
      statusCode: 200,
      success: true,
      data: wishList,
    });
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : "SOMETHING WENT WRONG";
    return NextResponse.json({
      message: `ERR: ${errMsg}`,
      statusCode: 500,
      success: false,
    });
  }
}
