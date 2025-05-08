
import mongoose, { Model, Schema } from "mongoose";

interface SubCategory extends Document {
    name:string;
    category:mongoose.Schema.Types.ObjectId;
    isAvailable:boolean;
    isFeatured:boolean;
}

const subcategorySchema:Schema<SubCategory> = new Schema({
    name:{
        type:String,
        required:true,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CategoryModel",
        required:true
    },
    isAvailable:{
        type:Boolean,
        required:true
    },
    isFeatured:{
        type:Boolean
    }
},{timestamps:true})

export const SubcategoryModel:Model<SubCategory> = (mongoose.models.SubcategoryModel as Model<SubCategory>)||(mongoose.model("SubcategoryModel",subcategorySchema))