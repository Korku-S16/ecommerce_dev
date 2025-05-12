import connectToDB from "@/lib/db";
import { SubcategoryModel } from "@/models/product/subCategory.model";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
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
    const {searchParams} = req.nextUrl;
    const category = searchParams.get('category')
    console.log("line 20 ",category)
    const subcategories = await SubcategoryModel.find({category}).populate("category");
    console.log("Subcategories line 21",subcategories)
    if (!subcategories) {
      return NextResponse.json({
        message: "UNABLE TO FETCH SUBCATEGORIES",
        statusCode: 404,
        success: false,
      });
    }

    return NextResponse.json({
      message: "SUCCESSFULLY FETCHED SUBCATEGORIES",
      statusCode: 200,
      success: true,
      data: subcategories,
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
