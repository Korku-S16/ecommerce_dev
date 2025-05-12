import connectToDB from "@/lib/db";
import { OrderDelivery } from "@/models/user/userOrderDeliveryDetails";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
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

    const { orderId, addressId } = await req.json();

    const orderDetails = await OrderDelivery.findOne({ orderId });

    if (!orderDetails) {
      return NextResponse.json({
        message: "UNABLE TO FIND PRODUCT",
        statusCode: 404,
        success: false,
      });
    }

    orderDetails.shippingAddress = addressId;

    await orderDetails.save();

    return NextResponse.json({
      message: "SHIPPING ADDRESS ADDED ",
      statusCode: 200,
      success: true,
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
