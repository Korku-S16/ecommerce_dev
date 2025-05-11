import connectToDB from "@/lib/db";
import { ProductModel } from "@/models/product/product.model";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    await connectToDB()
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
      return NextResponse.json({
        message: "LOGIN FIRST",
        success: false,
        statusCode: 401,
      });
    }

    const { searchParams } = req.nextUrl;

    const productId = searchParams.get("productId");

    const productDetails = await ProductModel.findById(productId);

    if (!productDetails) {
      return NextResponse.json({
        message: "PRODUCT DETAILS NOT FOUND",
        statusCode: 404,
        success: false,
      });
    }

    return NextResponse.json({
      message: "SUCCESSFULLY FETCHED PRODUCTS",
      statusCode: 200,
      success: true,
      data: productDetails,
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
