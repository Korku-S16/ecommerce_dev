import connectToDB from "@/lib/db";
import { ProductModel } from "@/models/product/product.model";
import { SearchHistoryModel } from "@/models/user/userBrowseHistory";
import { OrderModel } from "@/models/user/userOrders.model";
import { ProductType } from "@/types/enumTypes";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
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
    const limit = 10;

    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page")) || 1;
    const productType = searchParams.get("productType");
    const skip = (page - 1) * limit;

    const products = {
      newArrival: [],
      // bestSeller: [],
      featuredProducts: [],
      popularProducts: [],
    };

    const randomProducts = await ProductModel.find().limit(10);

    if (productType === ProductType.newlyCreated) {
      const totalnewArrivalProducts = await ProductModel.countDocuments();
      const totalNewlyArrivalPages = Math.ceil(totalnewArrivalProducts / limit);

      const newArrivalProducts = await ProductModel.find({
        createdAt: {
          $lte: new Date(Date.now()),
          $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        },
      })
        .skip(skip)
        .limit(limit);

      // newly created
      const newlyCreatedProductsPaginated = {
        newArrivalProducts,
        totalnewArrivalProducts,
        totalNewlyArrivalPages,
        currentPage: page,
        hasNextPage: page < totalNewlyArrivalPages,
        hasPreviousPage: page > 1,
      };
      products.newArrival = newlyCreatedProductsPaginated || randomProducts;
    }

    if (productType === ProductType.popularProducts) {
      const popularProducts = await OrderModel.aggregate([
        { $unwind: "$products" },
        {
          $lookup: {
            from: "productmodels",
            localField: "products",
            foreignField: "_id",
            as: "productDetails",
          },
        },
        { $unwind: "$productDetails" },
        {
          $group: {
            _id: "$productDetails._id",
            name: { $first: "$productDetails.name" },
            avgRating: { $avg: "$productDetails.rating" },
            totalOrders: { $sum: 1 },
            product: { $first: "$productDetails" },
          },
        },
        {
          $sort: { avgRating: -1 },
        },
        {
          $facet: {
            paginatedResults: [{ $skip: skip }, { $limit: limit }],
            totalCount: [{ $count: "count" }],
          },
        },
      ]);

      console.log(popularProducts);

      const popularProductList = popularProducts[0].paginatedResults;
      const totalDocs = popularProducts[0].totalCount[0]?.count || 0;

      const totalPages = Math.ceil(totalDocs / limit);

      // popular
      const popularProductsPaginated = {
        popularProductList,
        totalPages,
        currentPage: page,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      };
      products.popularProducts = popularProductsPaginated || randomProducts;
    }

    // featured products
    if (productType === ProductType.featuredProducts) {
      const totalFeaturedProducts = await SearchHistoryModel.countDocuments({
        userId: token._id,
      });
      const totalFeaturedPages = totalFeaturedProducts / limit;

      const featuredProducts = await SearchHistoryModel.find({
        userId: token._id,
      })
        .populate("product")
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 });

      const paginatedfeaturedProducts = {
        featuredProducts,
        totalFeaturedProducts,
        totalFeaturedPages,
        currentPage: page,
        hasNextPage: page < totalFeaturedPages,
        hasPreviousPage: page > 1,
      };
      products.featuredProducts = paginatedfeaturedProducts || randomProducts;
    }

    return NextResponse.json({
      message: `${productType}, PRODUCTS FETCHED SUCCESSFULLY`,
      statusCode: 200,
      success: false,
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
