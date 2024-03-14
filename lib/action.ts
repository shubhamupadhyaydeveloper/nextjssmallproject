import prisma from './client';
import bcrypt from 'bcryptjs';
import { findUser } from './data';

export const register = async (data:FormData) => {
    'use server'
    const username = data.get('username')
    const email = data.get('email')
    const password = data.get('password')
    const salt = await bcrypt.genSalt(10)
    const hassedpassword = await bcrypt.hash(password as string,salt)
    try {
    const user = await findUser(username as string)
    if(!user) {
      await prisma.user.create({
        data :{
            username : username as string,
            email : email as string,
            password : hassedpassword
        }
      })
    }
    return {error : 'user is already exist'}
    } catch (error:unknown) {
        console.log(error)
        throw new Error(error as string)
    }
}