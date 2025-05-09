"use client"
import { useSession } from "next-auth/react";

export default function Home() {
  const {data,status} = useSession()
  console.log(data?.accessToken)

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}
