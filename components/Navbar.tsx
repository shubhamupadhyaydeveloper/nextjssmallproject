import Link from 'next/link';
import React from 'react'
import { auth } from '@/lib/auth';
import { FaSun } from "react-icons/fa";
import { Loginpage } from './Logout';

const Navbar = async () => {
  const user = await auth()
  console.log(user)
  const isAdmin:boolean = true
  const session = user
  return (
    <div className='flex p-4 text-white bg-black justify-between '>
      <div className='font-bold text-xl pl-16'>
        <Link href='/'>Social</Link>
      </div>
    <div className='flex gap-4 pr-10'>
       {
        session?.user ? (
          session.user && (
            <>
            <Link href='/admin'>Admin</Link>
            <Loginpage/>
            </>
          )
        ) : <Link href='/login'>login</Link>
       }
      <Link href='/'>Contact</Link>
      <Link href='/user' >User</Link>
     <button className='px-3 text-white'><FaSun size={25}/></button>
    </div>
    </div>
  )
}

export default Navbar;
