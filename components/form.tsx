import React from 'react'
import { addData } from '@/lib/data';

const formPage = async () => {
  return (
    <form action={addData}>
      <input type="text" name='username' placeholder='enter your name' />
      <input type="email" name='email' placeholder='enter your email' />
      <input type="password" name='password' />
      <button type='submit' className='bg-black text-white text-md p-2 rounded-sm'>Sumbit</button>
    </form>
  )
}

export default formPage;

// username  String   @unique
// email     String   @unique
// password  String