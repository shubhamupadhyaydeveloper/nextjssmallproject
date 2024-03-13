import Link from 'next/link';
import React from 'react'
import { FaSun } from "react-icons/fa";

const Navbar = () => {
  const isAdmin:boolean = true
  const session:boolean = false
  return (
    <div className='flex p-4 text-white bg-black justify-between '>
      <div className='font-bold text-xl pl-16'>
        <Link href='/'>Social</Link>
      </div>
    <div className='flex gap-4 pr-10'>
       {
        session ? (
          isAdmin && (
            <>
            <Link href='/admin'>Admin</Link>
            <Link href='/'>logout</Link>
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
