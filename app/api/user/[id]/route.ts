import prisma from "@/lib/client";
import { NextRequest, NextResponse } from "next/server";
interface Pramas {
    params : {
        id : string
    }
}

export async function GET(request: NextRequest, { params : {id} }: Pramas) {

    try {
        const user = await prisma.user.findFirst({
            where : {
                id : id
            }
        })
        return NextResponse.json(user); // Return the user data instead of 'hello'
    } catch (error: unknown) {
        console.log(error);
        throw new Error(error as string);
    }
}
