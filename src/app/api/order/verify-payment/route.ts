// import { ADMIN } from "@/lib/constants";

import connectToDB from "@/lib/db";

import { OrderDelivery } from "@/models/user/userOrderDeliveryDetails";
import { OrderModel } from "@/models/user/userOrders.model";

import crypto from "crypto";

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

// interface InputData {
//   razorpay_payment_id: string;
//   razorpay_order_id: string;
//   razorpay_signature: string;
// }
export async function POST(req: NextRequest) {
  await connectToDB();

  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
      return NextResponse.json({
        message: "Authentication required. Please log in to continue.",
        statusCode: 401,
        success: false,
      });
    }

    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      await req.json();

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(body.toString())
      .digest("hex");

    const isVerified = expectedSignature === razorpay_signature ? true : false;

    if (!isVerified) {
      return NextResponse.json({
        message: "Payment Verification Failed",
        statusCode: 404,
        success: false,
      });
    }

    const orderDetails = await OrderModel.findOne({
      paymentId: razorpay_order_id,
    });

    if (!orderDetails) {
      return NextResponse.json({
        message: "purchase record not found",
        statusCode: 500,
        success: false,
      });
    }

    const deliveryStatus = await OrderDelivery.findOne({
      orderId: orderDetails._id,
    });

    deliveryStatus?.paymentStatus = "PAID";
    await deliveryStatus?.save();

    console.log(isVerified);
    return NextResponse.json({
      message: "Payment Verified",
      statusCode: 200,
      success: true,
      data: isVerified,
    });
  } catch (error) {
    console.error("Error verifying the payment:", error);

    return NextResponse.json({
      message: "Something went wrong",
      statusCode: 500,
      success: false,
      error: error instanceof Error ? error.message : error,
    });
  }
}
