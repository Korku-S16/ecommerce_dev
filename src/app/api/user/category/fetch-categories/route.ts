
import connectToDB from "@/lib/db";
import { CategoryModel } from "@/models/product/category.model";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectToDB();
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
      return NextResponse.json({
        message: "LOGIN FIRST",
        success: false,
        statusCode: 404,
      });
    }

    const categories = await CategoryModel.find({});

    if (!categories || categories.length === 0) {
      return NextResponse.json({
        message: "CATEGORIES NOT FOUND",
        success: false,
        statusCode: 404,
      });
    }

    return NextResponse.json({
      message: "CATEGORIES FETCHED SUCCESSFULLY",
      data: categories,
      success: true,
      statusCode: 200,
    });
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : "SOMETHING WENT WRONG";

    return NextResponse.json({
      message: `ERR:${errMsg}`,
      success: false,
      statusCode: 500,
    });
  }
}
