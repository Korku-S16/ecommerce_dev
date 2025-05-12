import connectToDB from "@/lib/db";
import { ProductModel } from "@/models/product/product.model";
import { SubcategoryModel } from "@/models/product/subCategory.model";
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

    const { category, page=1 } = await req.json();

    console.log(category)

    const limit = 10;

 

    const subcategories = await SubcategoryModel.find({ category: category });
    const subcategoriesId = subcategories.map((e) => e._id);
    console.log("subcategories:::::::",subcategories)
    if (!subcategories || subcategories.length === 0) {
      return NextResponse.json({
        message: "NO PRODUCTS FOUND",
        statusCode: 404,
        success: false,
      });
    }
    const totalDocs = await ProductModel.countDocuments({
      subcategory: { $in: subcategoriesId },
    });

    if (totalDocs === 0) {
      return NextResponse.json({
        message: "NO PRODUCTS FOUND",
        statusCode: 404,
        success: false,
      });
    }

    const products = await ProductModel.find({
      subcategory: { $in: subcategoriesId },
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
