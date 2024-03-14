import React from 'react'
import { register } from '@/lib/action';

const LoginForm = () => {
  return (
    <form action={register} className='p-10 flex flex-col gap-5 w-[30rem] mt-4 outline-dashed'>
        <input type="text" placeholder='enter your username' name='username' />
        <input type="email" placeholder='enter your email' name='email' />
        <input type="password" placeholder='enter your password' name='password' />
        <button className='bg-black text-white p-3 rounded-sm'>Submit</button>
    </form>
  )
}

export default LoginForm;
