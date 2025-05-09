import mongoose, { Document, Model } from "mongoose"
import { Schema } from "mongoose";

interface User extends Document{
accountId:mongoose.Schema.Types.ObjectId;
profileId: mongoose.Schema.Types.ObjectId;
}

const userSchema:Schema<User> = new Schema({
    accountId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"AccountModel",
    },
    profileId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProfileModel"
    }
},{timestamps:true})


export const UserModel:Model<User> = (mongoose.models.UserModel as Model<User>) || (mongoose.model<User>("UserModel",userSchema))