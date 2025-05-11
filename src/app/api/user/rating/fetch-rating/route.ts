import connectToDB from "@/lib/db";
import { OrderModel } from "@/models/user/userOrders.model";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    await connectToDB()
  try {
    const { productId } = await req.json();
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
      return NextResponse.json({
        message: "PLEASE LOGIN",
        statusCode: 401,
        success: false,
      });
    }
    if (!productId) {
      return NextResponse.json({
        message: "PLEASE SELECT PRODUCT",
        statusCode: 401,
        success: false,
      });
    }

    const rating = await OrderModel.aggregate([
      {
        $unwind: {
          path: "$products",
        },
      },
      {
        $match: {
          "products.productId": productId,
        },
      },
      {
        $group: {
          _id: "$products.rating",
          count: { $sum: 1 },
        },
      },
      {
        $group: {
          _id: null,
          ratingBreakdown: {
            $push: {
              rating: "$_id",
              count: "$count",
            },
          },
          averageRating: {
            $avg: "$_id",
          },
        },
      },
      {
        $project: {
          _id: 0,
          ratingBreakdown: 1,
          averageRating: 1,
        },
      },
    ]);

    if (!rating) {
      return NextResponse.json({
        message: "UNABLE TO FETCH PRODUCT RATING",
        success: false,
      });
    }
    console.log(rating);

    const [ratingBreakdown, averageRating] = rating;

    return NextResponse.json({
      message: "PRODUCT RATING",
      success: true,
      data: {
        ratingBreakDown: ratingBreakdown,
        averageRating: averageRating,
      },
    });
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : "SOMETHING WENT WRONG";
    return NextResponse.json({
      message: `ERR:${errMsg}`,
      success: true,
      errMsg,
    });
  }
}
