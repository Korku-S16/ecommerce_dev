import connectToDB from "@/lib/db";
import { CartModel } from "@/models/user/userCart.model";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    await connectToDB()
try {
      const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    
      if (!token) {
        return NextResponse.json({
          message: "LOGIN FIRST",
          statusCode: 404,
          success: false,
        });
      }
    
      const cartList = await CartModel.find({ userId: token._id }).populate(
        "products"
      );
    
      if (!cartList || cartList.length === 0) {
        return NextResponse.json({
          message: "NO CART ITEMS FOUND",
          statusCode: 404,
          success: false,
        });
      }
    
      return NextResponse.json({
        message:"SUCCESSFULLY FETCHED CART ITEMS",
        statusCode:200,
        success:true,
        data:cartList
      })
    }
 catch (error) {
    const errMsg = error instanceof Error ? error.message:"SOMETHING WENT WRONG"
    return NextResponse.json({
      message:`ERR: ${errMsg}`,
      statusCode:500,
      success:false
    })
}
}
