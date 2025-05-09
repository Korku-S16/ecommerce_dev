
import mongoose,{Model, Schema} from "mongoose";


interface Product extends Document{
    name:string;
    subcategory: mongoose.Schema.Types.ObjectId;
    description:string;
    price:number;
    rating:number;
    sellerName:string;
    image:string;
    specifications:JSON;
    color:string[];
    sizes:string[];
    sellerDetails:mongoose.Schema.Types.ObjectId;
}

const productSchema:Schema<Product> = new Schema({

    name:{
        type:String,
        required:true,
    },
    subcategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubcategoryModel",
        required:true
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
        required:true,
    },
    rating:{
        type:Number,
        required:true
    },
    sellerName:{
        type:String,
        required:true
    },
    sellerDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SellerModel",
    },
    image:{
        type:String,
        required:true
    },
    specifications:{
        type:JSON,
        required:false
    },
    color:[String],
    sizes:[String]
})

export const ProductModel:Model<Product> = (mongoose.models.ProductModel as Model<Product>)||(mongoose.model<Product>("ProductModel",productSchema))