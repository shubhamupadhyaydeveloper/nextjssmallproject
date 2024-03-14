import prisma from "./client";

export const findUser = async (name : string) =>  {
    const user = await prisma.user.findUnique({
        where :{
            username : name
        }
    })
    return user
}

export const createUser = async (username : string,password :string,email:string) => {
  const user = await prisma.user.create({
     data : {
        username : username,
        password : password,
        email : email
     }
  })
  return user
}