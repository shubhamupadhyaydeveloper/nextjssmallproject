import prisma from "@/lib/client";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
    revalidatePath('/api/user')
    try {
     const user = await prisma.user.findMany()
     return NextResponse.json(user)
    } catch (error:unknown) {
        console.log(error)
        throw new Error(error as string)
    }
}