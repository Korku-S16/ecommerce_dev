
import mongoose,{Model, Schema}from "mongoose";



export interface ProductSchema {
    productId:mongoose.Schema.Types.ObjectId,
    quantity:number,
}

interface Cart{
    userId : mongoose.Schema.Types.ObjectId,
    products:ProductSchema[]
}

export const productSchema:Schema<ProductSchema> = new Schema({

    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProductModel",
        required:true
    },
    quantity:{
        type:Number,
        default:1,
        required:true
    },
    

},{_id:false},)

const cartSchema:Schema<Cart> = new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserModel",
        required:true
    },
    products:{
        type:[productSchema],
        required:true
    }

},{timestamps:true})

export const CartModel:Model<Cart> = (mongoose.models.CartModel as Model<Cart>)||(mongoose.model<Cart>("CartModel",cartSchema))