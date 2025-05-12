import mongoose from "mongoose"
import { DATABASE_NAME } from "./constant"
import { NextResponse } from "next/server"

interface ConnectionObject{
    isConnected:boolean
}

const connectionObject:ConnectionObject = {
    isConnected:false
}

const connectToDB = async  ()=>{
   try {
     const connection = await mongoose.connect(`${process.env.DATABASE_URL}/${DATABASE_NAME}`)
     
     if(connection.connection.readyState==1){
         console.log('DB ALREADY CONNECTED');
         return 
     }
     else{
         connectionObject.isConnected=true
     }
     
   } catch (error) {
     console.log(error)
     const errMsg = error instanceof Error ? error.message :"UNABLE TO CONNECT DB"
    
     return NextResponse.json({
        message:`ERR:${errMsg}`,
        statusCode:500
     })
   }
}

export default connectToDB