import { ProductModel } from "@/models/product/product.model";
import { OrderModel } from "@/models/user/userOrders.model";
import { AwardIcon } from "lucide-react";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.json({
      message: "LOGIN FIRST",
      statusCode: 404,
      success: false,
    });
  }
  const limit = 10;

  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page")) || 1;
  const skip = (page - 1) * limit;

  const products = {
    newArrival: [],
    // bestSeller: [],
    featuredProducts: [],
    popularProducts: [],
  };

  const 
  const newArrivalProducts = await ProductModel.find({
    createdAt: {
      $lte: new Date(Date.now()),
      $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    },
  }).skip(skip).limit(limit);

  // getting products according to  avg rating

  const popularProducts = await OrderModel.aggregate([
    { $unwind: "$products" },
    {
      $lookup: {
        from: "productmodels",
        localField: "products",
        foreignField: "_id",
        as: "productDetails"
      }
    },
    { $unwind: "$productDetails" },
    {
      $group: {
        _id: "$productDetails._id",
        name: { $first: "$productDetails.name" },
        avgRating: { $avg: "$productDetails.rating" },
        totalOrders: { $sum: 1 },
        product: { $first: "$productDetails" }
      }
    },
    {
      $sort: { avgRating: -1 }
    },
    {
      $facet: {
        paginatedResults: [
          { $skip: skip },
          { $limit: limit }
        ],
        totalCount: [
          { $count: "count" }
        ]
      }
    }
  ]);

  console.log(popularProducts);

  const popularProductList= popularProducts[0].paginatedResults;
  const totalDocs = popularProducts[0].totalCount[0]?.count||0;

  const totalPages = Math.ceil(totalDocs/limit);

  const popularProductsPaginated = {
    popularProductList,
    totalDocs,
    totalPages,
    currentPage: page,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1
  };
}
