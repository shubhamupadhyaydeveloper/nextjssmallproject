'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Backbutton = () => {
    const router = useRouter()
    const handleclick = () => {
        router.back()
    }
  return (
    <div>
      <button className='p-3 bg-slate-600 text-white rounded-sm' onClick={handleclick}>Back</button>
    </div>
  )
}

export default Backbutton;
