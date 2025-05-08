// name
// category ->ref
// description
// price
// qunatity
// rating
// seller
// image 
// specification 
// sizes
// color : 

import mongoose,{Schema} from "mongoose";


interface Product extends Document{
    name:string;
    subcategory: mongoose.Schema.Types.ObjectId;
    description:string;
    price:number;
    rating:number;
    sellerName:string;
    image:string ;
    specifications:JSON;
    color:string[],
    sizes:string[]
}

const productSchema:Schema<Product> = new Schema({

    name:{
        type:String,
        required:true,
    },
    subcategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:""
    }
})