//name
//isAvailabel 
//isFeatured: boolean;

import mongoose, { Model, Schema } from "mongoose"


interface Category extends Document {
    name:string,
    isAvailable:boolean,
    isFeatured:boolean
}

const categorySchema:Schema<Category> = new Schema({
    name:{
        type:String,
        required:true,
    },
    isAvailable:{
        type:Boolean,
        required:true,
        default:true
    },
    isFeatured:{
        type:Boolean
    }

},{timestamps:true})


export const CategoryModel:Model<Category> = (mongoose.models.CategoryModel as Model<Category>)||(mongoose.model<Category>("CategoryModel",categorySchema))

