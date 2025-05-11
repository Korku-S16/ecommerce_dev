import { UserAddressModel } from "@/models/user/userAddress.model";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
      return NextResponse.json({
        message: "PLEASE LOGIN",
        statusCode: 200,
        success: false,
      });
    }

    const userId = token._id;

    const userAddresses = await UserAddressModel.find({ userId }).select(
      "-userId"
    );

    if (!userAddresses || userAddresses.length === 0) {
      return NextResponse.json({
        message: "UNABLE TO FETCH ADDRESSES ",
        success: false,
        statusCode: 500,
      });
    }

    return NextResponse.json({
      message: "ADDRESSES FETCHED SUCCESSFULLY ",
      success: true,
      statusCode: 200,
      data: userAddresses,
    });
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : "SOMETHING WENT WRONG";
    return NextResponse.json({
      message: errMsg,
      success: false,
      statusCode: 500,
    });
  }
}
