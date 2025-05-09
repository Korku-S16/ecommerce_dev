
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req:NextRequest) {
 const token = await getToken({req,secret:process.env.NEXTAUTH_SECRET})   

 const currURL= req.nextUrl;

 if (token 
    && currURL.pathname.startsWith('/auth')
 ){
    console.log(req.url)
    return NextResponse.redirect(new URL('/',req.url))
 }

 return NextResponse.next()
}

// where to run middleware 
export const config = {
    matcher:['/','/auth/login','/auth/register']
}