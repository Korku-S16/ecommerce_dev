import { WishlistModel } from "@/models/user/userWishlist.model";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const { productId, quantity } = await req.json();

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const wishList = await WishlistModel.findOne({
    userId: token?._id,
  });

  if (wishList) {
    const isProduct = wishList.products.find(
      (product) => product.productId === productId
    );

    if (isProduct) {
      isProduct.quantity += quantity;
      await wishList.save();
      return NextResponse.json({
        message:"UPDATED PRODUCT QUANTITY",
        statusCode:200,
        success:true
      })
      
    } else {
      wishList.products.push({
        productId: productId,
        quantity: quantity,
      });
      await wishList.save();
      return NextResponse.json({
        message:"NEW PRODUCT ADDED IN WISHLIST",
        statusCode:200,
        success:true
      })
    }
    
  }

 
  
}
