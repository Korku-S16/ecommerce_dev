import { getToken } from "next-auth/jwt";

export async function POST (){

    // const {productId,rating} = 

    const token = await getToken({req:})

}