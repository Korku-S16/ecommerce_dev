import connectToDB from "@/lib/db";
import { AccountModel } from "@/models/account.model";
import bcrypt from "bcryptjs";
import { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";

import { NextResponse } from "next/server";
export const authOptions:NextAuthOptions = {
providers:[
    CredentialsProvider({
        id:"credentials",
        name:"credentials",

        credentials:{
            username:{
                label:"Email or Phone  ",
                type:"email",
                placeholder:"Enter your email/phone number",
            },
            password:{
                label:"Password",
                type:"password",
                placeholder:"Enter Password"
            }
        },
        async authorize(credentials):Promise<any>{
            await connectToDB()
            try {
                console.log(credentials);

                if (!credentials){
                    return NextResponse.json({
                        message:"INVALID CREDENTIALS",
                        statusCode:500,
                        success:false
                    })
                }
                  
                const username = credentials?.username;
                const password = credentials?.password;

                const user = await AccountModel.findOne({
                    $or:[
                        {email:username},{phoneNO:username}
                    ]
                })

                if (!user){
                    return NextResponse.json({
                     message:"USER NOT REGISTERED",
                     statusCode:404,
                     success:false 
                    })
                }
                const isPasswordCorrect = await bcrypt.compare(
                    password,
                    user.password
                );

                if (!isPasswordCorrect){
                    return NextResponse.json({
                        message:"INCORRECT PASSWORD",
                        statusCode:403,
                        success:false
                    })
                }
                return user;
            } catch (error) {
                const errMsg = error instanceof Error ? error.message: "SOMETHING WENT WRONG"
                

                return NextResponse.json({
                    message:`ERR: ${errMsg}`,
                    status: 500,
                    success:false
                })
            }
        }
    })
],
callbacks:{
    async jwt({account,user,token}){
      token.accessToken = account?.access_token
      token.role = user.role
      token._id = user._id!

      return token;
    },
    async session ({session,token}){
       session.accessToken = token.accessToken!;
       session.role = token.role!;
       session._id = token._id

       return session
    },
},
session:{
    strategy:'jwt',
    maxAge:30*24*60*60
},
pages:{
    signIn:'/auth/login'
},
secret:process.env.NEXTAUTH_SECRET
}