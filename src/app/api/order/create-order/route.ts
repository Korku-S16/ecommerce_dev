import connectToDB from "@/lib/db";
import { ProductModel } from "@/models/product/product.model";
import { OrderDelivery } from "@/models/user/userOrderDeliveryDetails";
import { OrderModel } from "@/models/user/userOrders.model";
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
      const {productId,quantity=1} = await req.json()
      const productDetails = await ProductModel.findById(productId);
      if(!productDetails){
        return NextResponse.json({
            message: "UNABLE TO FIND PRODUCT",
            statusCode: 404,
            success: false,
          });
      }

      const inserntingProduct={
        productId,
        quantity
      }

      const createNewOrder = await OrderModel.create({
         products:inserntingProduct,
         userId:token._id,
         amount:productDetails.price
      })
     

      await OrderDelivery.create(createNewOrder._id)
      

      return NextResponse.json({
        message:"SUCCESSFULLY CREATED ORDER  ",
        statusCode:200,
        success:true,
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
