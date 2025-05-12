import connectToDB from "@/lib/db";
import { AccountModel } from "@/models/account.model";
import { OrderDelivery } from "@/models/user/userOrderDeliveryDetails";
import { OrderModel } from "@/models/user/userOrders.model";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

export const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });



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

    const { orderId } = await req.json();
    const user = await AccountModel.findById(token._id)
    

    const orderDetails = await OrderDelivery.findOne({ orderId });
    const order = await OrderModel.findById(orderId)
    

    if(!order){
        return NextResponse.json({
            message:"ORDER NOT FOUND",
            statusCode:404,
            success:false
        })
    }
     


    if (!orderDetails) {
      return NextResponse.json({
        message: "UNABLE TO FIND ORDER",
        statusCode: 404,
        success: false,
      });
    }
    

    
    const options = {
        // amount: Number(amount) *100,
        amount:Number(order.amount*100),
        currency: "INR",
        receipt: `${user?._id}`,
        notes: {
          clientName: user?.fullName,
        },
      };
          

    const creatingOrder = await razorpay.orders.create(options)

    if (!creatingOrder) {
      return NextResponse.json({
        message: "Failed to create Razorpay order",
        statusCode: 500,
        success: false,
      });
    }

    return NextResponse.json({
      message: "ORDERS CREATED SUCCESSFULLY",
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

