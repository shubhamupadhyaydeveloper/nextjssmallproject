import React from 'react'
import Backbutton from '@/components/Backbutton'
interface Params {
  params: { userId: number }
}

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    city: string,
    zipcode: number,
  },
}


const Userpage = async ({ params: { userId } }: Params) => {
  const request = await fetch(`https://jsonplaceholder.typicode.com/users/${userId
    }`, { cache: "no-store" })
  const response: User = await request.json()

  return (
    <>
      <div className='flex flex-col text-xl font-semibold p-16 gap-5 mb-2 '>
        <h1 className='font-bold text-3xl '>User Detail</h1>
        <h1 className='border-b-2 border-gray-500 pb-1 w-[400px]'>Name: {response.name}</h1>
        <h1 className='border-b-2 border-gray-500 pb-1 w-[400px]'>Id: {response.id}</h1>
        <h1 className='border-b-2 border-gray-500 pb-1 w-[400px]'>Username: {response.username}</h1>
        <h1 className='border-b-2 border-gray-500 pb-1 w-[400px]'>Email: {response.email}</h1>
        <h1 className='border-b-2 border-gray-500 pb-1 w-[400px]'>City: {response.address.city}</h1>
        <h1 className='border-b-2 border-gray-500 pb-1 w-[400px]'>Street: {response.address.street}</h1>
        <h1 className='border-b-2 border-gray-500 pb-1 w-[400px]'>Zipcode: {response.address.zipcode}</h1>
      <Backbutton />
      </div>

    </>
  )
}

export default Userpage;
