// types/next-auth.d.ts (or wherever you manage your types)
import { Role } from "./enumTypes";
import { DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";
import mongoose from "mongoose";

declare module "next-auth" {
    interface User {
        _id?: mongoose.Types.ObjectId;
        fullName?: string;
        email?: string;
        accessToken?: string;
    }

    interface Session extends DefaultSession {
        accessToken: string;
        _id: mongoose.Types.ObjectId;
        user: {
            name?: string | null;
            email?: string | null;
            image?: string | null;
        } & DefaultSession["user"];
    }
}
// Removed role-related properties from the types as requested.
declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    accessToken?: string;
    _id: mongoose.Types.ObjectId;
    // role: Role;
  }
}
