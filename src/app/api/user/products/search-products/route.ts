import connectToDB from "@/lib/db";
import { ProductModel } from "@/models/product/product.model";
import { SubcategoryModel } from "@/models/product/subCategory.model";
import { SearchHistoryModel } from "@/models/user/userBrowseHistory";
import { Role } from "@/types/enumTypes";
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
    const query = searchParams.get('query')
    const page = Number(searchParams.get('page'))||1
    console.log("Query:::::::::::::",query)

    const regex = new RegExp(`^${query}`);
   

    const limit = 10;

    
    const totalDocs = await ProductModel.countDocuments({
      name: { $regex: regex, $options: "i" },
    }).populate("subcategory");

    if (totalDocs === 0) {
      return NextResponse.json({
        message: "NO PRODUCTS FOUND",
        statusCode: 404,
        success: false,
      });
    }

    const products = await ProductModel.find({
      name: { $regex: regex, $options: "i" },
    })
      .populate("subcategory")
      .skip((page - 1) * limit)
      .limit(limit);
    const totalPages = Math.ceil(totalDocs / limit);
    const data = {
      products,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    };

    if (!products || products.length == 0) {
      return NextResponse.json({
        message: "NO PRODUCTS FOUND",
        statusCode: 404,
        success: false,
      });
    }
    // adding in searchHistoryModel
    const searchLogs = products.map((p) => {
      return {
        product: p._id,
        userId: token._id,
      };
    });

    await SearchHistoryModel.insertMany(searchLogs);

    return NextResponse.json({
      message: "SUCCESSFULLY FETCHED PRODUCT",
      statusCode: 200,
      success: true,
      data,
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
