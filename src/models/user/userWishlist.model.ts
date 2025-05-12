// products []
// userid

import mongoose, { Model, Schema } from "mongoose";
import { productSchema, ProductSchema } from "./userCart.model";

interface Wishlist {
  products: ProductSchema[];
  userId: mongoose.Schema.Types.ObjectId;
}


export const wishList:Schema<{productId:mongoose.Schema.Types.ObjectId}> = new Schema({

    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProductModel",
        required:true
    },
},{_id:false},)

const wishlistSchema: Schema<Wishlist> = new Schema(
  {
    products: {
      type: [productSchema],
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
      required: true,
    },
  },
  { timestamps: true }
);


export const WishlistModel:Model<Wishlist> = (mongoose.models.WishlistModel as Model<Wishlist>)||(mongoose.model<Wishlist>("WishlistModel",wishlistSchema))