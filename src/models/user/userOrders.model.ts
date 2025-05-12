import mongoose, { Model, Schema } from "mongoose";
import { productSchema, ProductSchema } from "./userCart.model";
interface Order{
    userId:mongoose.Schema.Types.ObjectId,
    products: ProductSchema[],
    amount:number,
    paymentId?:string
}
const orderSchema:Schema<Order> = new Schema({

userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"UserModel"
},
products:{
    type:[productSchema],
    required:true
},
amount:{
    type:Number,
    required:true
},
paymentId:{
    type:String,
},

},{timestamps:true})

export const OrderModel:Model<Order> = (mongoose.models.OrderModel as Model<Order>)||(mongoose.model<Order>("OrderModel",orderSchema))