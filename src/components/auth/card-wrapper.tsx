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
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <Card className="w-full max-w-[500px] sm:max-w-[600px] md:max-w-[650px] lg:max-w-[700px] shadow-xl p-6">
        <CardHeader>
          <AuthHeader label={label} title={title} />
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter>
          <BackButton label={backbuttonlabel} href={backbuttonhref} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardWrapper;
