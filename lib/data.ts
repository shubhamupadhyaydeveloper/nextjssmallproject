import { revalidatePath } from "next/cache";
import prisma from "./client";

// add data
// @ts-ignore
export async function addData(data) {
    'use server'
    revalidatePath('/admin')
    try {
      const {username , email , password} = Object.fromEntries(data)
      const user = await prisma.user.create({
        data : {
            username : username,
            email : email,
            password : password,
            isAdmin : false
        }
      })
      console.log(user)
    } catch (error: unknown) {
        console.log(error)
        throw new Error(error as string)
    }
}

// deletedata
export async function deleteUser(userId : string) {
    'use server'
     await prisma.user.delete({
        where : {
            id : userId
        }
     })
    return 'user deleted'
}

// getdata
export async function getData() {
    'use server'
    try {
     const user = await prisma.user.findMany()
     return user
    } catch (error: unknown) {
        console.log(error)
        throw new Error(error as string)
    }
}

