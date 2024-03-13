import React from 'react'
import { Backbutton } from '@/components/button'
interface Params {
  params: { userId: string }
}

interface User {
  id : string,
  username : string,
  email : string,
  isAdmin : boolean,
  img : string,
  createdAt : Date,
  updateAt : Date
}


const Userpage = async ({ params: { userId } }: Params) => {
  const request = await fetch(`http://localhost:3000/api/user/${userId}`, { cache: "no-store" })
  const response:User = await request.json()


  return (
    <>
      <div className='flex flex-col text-xl font-semibold p-16 gap-5 mb-2 '>
        <h1 className='font-bold text-3xl '>User Detail</h1>
        <h1 className='border-b-2 border-gray-500 pb-1 w-[400px]'>Name: {response.username}</h1>
        <h1 className='border-b-2 border-gray-500 pb-1 w-[400px]'>Id: {response.id}</h1>
        <h1 className='border-b-2 border-gray-500 pb-1 w-[400px]'>Username: {response.username}</h1>
        <h1 className='border-b-2 border-gray-500 pb-1 w-[400px]'>Email: {response.email}</h1>
        <h1 className='border-b-2 border-gray-500 pb-1 w-[400px]'>isAdmin: {response.isAdmin ? "Yes":"No"}</h1>
        <h1 className='border-b-2 border-gray-500 pb-1 w-[400px]'>CreatedAt: {response.createdAt.toString().slice(5,16)}</h1>
      <Backbutton />
      </div>

    </>
  )
}

export default Userpage;
