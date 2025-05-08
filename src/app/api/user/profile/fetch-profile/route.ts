import connectToDB from "@/lib/db";
import { UserModel } from "@/models/user/user.model";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectToDB();

  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
      return NextResponse.json({
        message: "LOGIN FIRST",
        statusCode: 404,
        success: false,
      });
    }
    const userId = token?._id;

    const profileDetails = await UserModel.findById(userId)
      .populate("profileId")
      .populate("accountId", "fullName email phoneNO");

    if (!profileDetails) {
      return NextResponse.json({
        message: "UNABLE TO FIND PROFILE DETAILS",
        statusCode: 404,
        success: true,
      });
    }

    return NextResponse.json({
      message: "SUCCESSFULLY FETCHED WISHLIST ITEMS",
      statusCode: 200,
      success: true,
      data: profileDetails,
    });
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
