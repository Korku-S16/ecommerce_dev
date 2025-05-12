import connectToDB from "@/lib/db";
import { AccountModel } from "@/models/account.model";
import bcrypt from "bcryptjs";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: {
          label: "Email or Phone",
          type: "text",
          placeholder: "Enter your email or phone number",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials): Promise<any> {
        await connectToDB();

        try {
          if (!credentials) return null;

          const { username, password } = credentials;

          const user = await AccountModel.findOne({
            $or: [{ email: username }, { phoneNO: username }],
          });

          if (!user) return null;

          const isValid = await bcrypt.compare(password, user.password);
          if (!isValid) return null;

          // Return only necessary info
          return {
            _id: user._id.toString(),
            email: user.email,
            role: user.role,
          };
        } catch (error) {
          console.error("Authorize Error:", error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id!;
        token.email = user.email;
        token.accessToken = user.accessToken
        // token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {
      session._id = token._id;
      session.user.email = token.email;
      session.accessToken= token.accessToken!
    //   session.user.role = token.role;
      return session;
    },
  },

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  pages: {
    signIn: "/auth/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};
