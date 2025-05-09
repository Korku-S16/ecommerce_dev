"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import AuthHeader from "./auth-header";
import BackButton from "./back-button";
import React from "react";

interface CardWrapperProps {
  label: string;
  title: string;
  backbuttonhref: string;
  backbuttonlabel: string;
  children: React.ReactNode;
}

const CardWrapper = ({
  label,
  title,
  backbuttonhref,
  backbuttonlabel,
  children,
}: CardWrapperProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 py-8">
  <Card className="w-full max-w-[1400px] shadow-2xl p-0 flex flex-col md:flex-row rounded-lg overflow-hidden">

    {/* Left Half - Form */}
    <div className="w-full md:w-3/5 p-10">
      <CardHeader>
        <AuthHeader label={label} title={title} />
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
      <CardFooter className="pt-6">
        <BackButton label={backbuttonlabel} href={backbuttonhref} />
      </CardFooter>
    </div>

    {/* Right Half - Image/Content */}
    <div className="w-full md:w-2/5 bg-black text-white flex flex-col items-center justify-center p-10">
      <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
      <p className="text-sm mb-6">
        Manage your account, track orders, and explore exclusive deals. Sign in or register to get started.
      </p>
      <div className="flex justify-center space-x-4">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h11M9 21V3m0 0l-6 6m6-6l6 6"
        />
        </svg>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 12H4m16 0l-6 6m6-6l-6-6"
        />
        </svg>
      </div>
      </div>
    </div>

  </Card>
</div>


  );
};

export default CardWrapper;

