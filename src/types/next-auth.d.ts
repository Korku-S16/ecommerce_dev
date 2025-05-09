import { Role } from "./enumTypes"
import { DefaultSession } from "next-auth"
import { DefaultJWT } from "next-auth/jwt"
import mongoose from "mongoose"

declare module 'next-auth'{
    interface User {
        fullName?:string,
        email?:string,
        _id?:mongoose.Types.ObjectId,
        accessToken?:string, 
        role:Role
    }
   interface Session extends DefaultSession{
    accessToken:string,
    role:Role,
    _id:mongoose.Types.ObjectId
   }
}

declare module 'next-auth/jwt'{
    interface JWT extends DefaultJWT{
        accessToken?:string, 
        role:Role,
        _id:mongoose.Types.ObjectId
    }
}