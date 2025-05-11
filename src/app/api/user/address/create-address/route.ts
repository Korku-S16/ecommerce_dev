import { UserAddressModel } from "@/models/user/userAddress.model";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
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

    const { pincode, streetAddress, city, state, contactNO } = await req.json();

    if (!pincode || !streetAddress || !city || !state || !contactNO) {
      return NextResponse.json({
        message: "REQUIRED DETAILS NECESSARY",
        statusCode: 200,
        success: false,
      });
    }

    await UserAddressModel.create({
      city,
      contactNO,
      pincode,
      state,
      streetAddress,
      userId,
    });

    return NextResponse.json({
      message: "NEW ADDRESS CREATED SUCCESSFULLY ",
      success: true,
      statusCode: 200,
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
