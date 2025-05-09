import connectToDB from "@/lib/db";
import { UserModel } from "@/models/user/user.model";
import { UserProfileModel } from "@/models/user/userProfile.model";
import mongoose from "mongoose";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectToDB();
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
      return NextResponse.json({
        message: "PLEASE LOGIN FIRST",
        statusCode: 500,
        success: false,
      });
    }

    const userId = token._id;
    const { gender, altEmail, altContact } = await req.json()

    const isProfile = await UserProfileModel.findOne({userId})

    if(isProfile){
        isProfile.altContact=altContact
        isProfile.altEmail=altEmail
        isProfile.gender= gender
        await isProfile.save()

        return NextResponse.json({
            message:"PROFILE DETAILS UPDATED SUCCESSFULLY",
            statusCode:500,
            success:false,
            })
    }

    const newProfile = await UserProfileModel.create({
        altContact,
        altEmail,
        gender,
        userId
    })
    if(!newProfile._id){
        return NextResponse.json({
        message:"UNABLE TO CREATE PROFILE",
        statusCode:500,
        success:false,
        })
    }
    const user = await UserModel.findById(userId);
    if(!user){
        return NextResponse.json({
            message:"USER NOT FOUND",
            statusCode:500,
            success:false,
            })
    }
    user.profileId = new mongoose.Types.ObjectId(newProfile._id)
    await user.save()

    return NextResponse.json({
        message:"PROFILE IS CREATED SUCCESSFULLY",
        statusCode:500,
        success:false,
        })
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : "SOMETHING WENT WRONG";
    return NextResponse.json({
      message: `ERR: ${errMsg}`,
      statusCode: 500,
      success: false,
    });
  }
}
