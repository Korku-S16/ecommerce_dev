import mongoose, { Model, Schema } from "mongoose";

interface OTP {
    otp:string,
    expiresIn:Date,
    email:string
}

const otpSchema:Schema<OTP> = new Schema({
    otp:{
        type:String,
        required:true
    },
    expiresIn:{
        type:Date,
        default:()=>new Date(Date.now()+10*60*1000),
        expires:0,
        required:true
    },
    email:{
        type:String,
        required:true
    }
    
},{timestamps:true})

export const OTPModel:Model<OTP> = (mongoose.models.OTPModel as Model<OTP>)||(mongoose.model<OTP>("OTPModel",otpSchema))