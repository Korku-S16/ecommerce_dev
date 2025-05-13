import { OrderModel } from "@/models/user/userOrders.model";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
 try {
     const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
   
     if (!token) {
       return NextResponse.json({
         message: "LOGIN FIRST",
         statusCode: 404,
         success: false,
       });
     }
   
     const {orderId} = await req.json();
   
     const orderDetails = await OrderModel.findById(orderId).populate("products.productId")
   
     if(!orderDetails){
       return NextResponse.json({
         message: "ORDER DETAILS NOT FOUND",
         statusCode: 404,
         success: false,
       });
     }
   
     return NextResponse.json({
       message:"SUCCESSFULLY FETCHED ORDER DETAILS",
       statusCode:200,
       success:true,
       data:orderDetails
     })
 } 

 catch (error) {
    const errMsg = error instanceof Error? error.message:"SOMETHING WENT WRONG"

    return NextResponse.json({
        message:`ERR:${errMsg} `,
        statuCode:500,
        success:false
    })

 }
}
