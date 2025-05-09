import connectToDB from "@/lib/db";
import { AccountModel } from "@/models/account.model";

import bcrypt from "bcryptjs";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectToDB();
  try {
    const { email, name, password } = await req.json();

    if (!email || !name || !password) {
      return NextResponse.json({
        message: "REQUIRED FIELDS ARE MISSING",
        statusCode: 401,
        success: false,
      });
    }

    const isAlreadyRegistered = await AccountModel.findOne({
      email,
    });

    if (isAlreadyRegistered) {
      return NextResponse.json({
        message: "ALREADY REGISTERED, PLEASE LOGIN",
        statusCode: 401,
        success: false,
      });
    }

    const encryptPassword = await bcrypt.hash(password, 10);
   
     await AccountModel.create({
      fullName: name,
      email,
      password: encryptPassword,
    });

    // if (role === "" || role === Role.CUSTOMER) {
    //   await UserModel.create({
    //     accountId: newUser._id,
    //   });
    // }

    // THIS IS FOR SELLER 
    /*
    else if(role===Role.SELLER){
        await SellerModel.create({
            accountId:newUser._id
        })
    } */

    // THIS IS FOR ADMIN 

     /*
    else if(role===Role.ADMIN){
        await AdminModel.create({
            accountId:newUser._id
        })
    } */

        return NextResponse.json({
            message: `${name}, REGISTERED SUCCESSFULLY`,
            statusCode:200,
            success:true
        })
  } catch (error) {
    const errMsg = error instanceof Error ? error.message :"SOMETHING WENT WRONG"

    return NextResponse.json({
        message:errMsg,
        statusCode:500,
        success:false
    })
  }
}
