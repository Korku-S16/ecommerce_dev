import connectToDB from "@/lib/db";
import { ProductModel } from "@/models/product/product.model";
import { Role } from "@/types/enumTypes";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectToDB();
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    
    if (!token) {
      return NextResponse.json({
        message: "LOGIN FIRST",
        statusCode: 403,
        success: false,
      });
    }

    const { role } = token;

    if (role !== Role.CUSTOMER) {
      return NextResponse.json({
        message: "YOU ARE NOT AUTHORISED",
        statusCode: 401,
        success: false,
      });
    }

    const products = await ProductModel.find({}).populate("subcategory");

    if (!products || products.length == 0) {
      return NextResponse.json({
        message: "NO PRODUCTS FOUND",
        statusCode: 404,
        success: false,
      });
    }

    return NextResponse.json({
      message: "SUCCESSFULLY FETCHED PRODUCT",
      statusCode: 200,
      success: true,
      data: products,
    });
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : "SOMETHING WENT WRONG";
    return NextResponse.json({
      message: errMsg,
      statusCode: 500,
      success: false,
    });
  }
}
