import mongoose, { Model, Schema } from "mongoose"

interface Rating {
    rating:number;
    productId:mongoose.Schema.Types.ObjectId;
    userId:mongoose.Schema.Types.ObjectId;
}

const ratingSchema:Schema<Rating> = new Schema({
    rating:{
        type:Number,
        required:true
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProductModel",
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserModel",
        required:true
    }
},{timestamps:true})

export const RatingModel:Model<Rating> = (mongoose.models.RatingModel as Model<Rating>)||(mongoose.model<Rating>("RatingModel",ratingSchema))