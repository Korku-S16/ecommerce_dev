import { Gender } from "@/src/types/enumTypes";
import mongoose, { Model, Schema } from "mongoose";


interface Profile {
    gender:string;
    altEmail:string;
    altContact:string;
    userId:mongoose.Schema.Types.ObjectId
}

const profileSchema:Schema<Profile> = new Schema({
gender:{
    type:String,
    enum: Object.values(Gender),
},
altEmail:{
    type:String,
    unique:true,
    trim:true
},
altContact:{
    type:String,
    unique:true,
    trim:true
},
userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"UserModel"
}
},{timestamps:true})

export const UserProfileModel:Model<Profile> = (mongoose.models.UserProfileModel as Model<Profile>)||(mongoose.model<Profile>("UserProfileModel",profileSchema));

