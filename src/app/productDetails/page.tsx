"use client"


import { Button } from "@/components/ui/button"
import CardList from "./components/CardList"
import { useState } from "react"

function Page() {
    const [isPrev,setIsPrev] = useState(false);
    const [isNext,setIsNext] = useState(false)
  return (
    <div className="flex flex-col justify-center items-center">
        <p className="text-2xl font-semibold">My WishList</p>
      <CardList productList={[]}/>

      <div className=" flex flex-row gap-2 mb-2">
        <Button disabled={!isPrev}>Back</Button>
        <Button disabled={!isNext}>Next</Button>
      </div>
    </div>
  )
}

export default Page
