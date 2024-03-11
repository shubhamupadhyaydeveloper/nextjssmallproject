import Image from 'next/image';
import React from 'react'

const Home = () => {
  return (
    <div className='overflow-hidden h-[93vh] flex gap-10 justify-between bg-[#0B0B21] p-10'>
      <div className='flex flex-col flex-1 text-white pl-10 mb-5'>
        <h1 className='text-[9rem] font-bold mb-[-4rem]'>Creative</h1>
        <h1 className='text-[9rem] font-bold mb-[-4rem]'>Thoughts</h1>
        <h1 className='text-[9rem] font-bold mb-1'>Agency.</h1>
        <div className='mb-5'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id hic soluta ea totam quasi sequi doloremque odit optio iste culpa in vitae, a corrupti magni voluptates debitis, at, earum quod. Inventore deleniti quae quidem quod temporibus laudantium labore adipisci repellendus eligendi
        </div>
        <div className='flex gap-4'>
          <button className='bg-blue-500 text-white p-3 rounded-sm'>Learn More</button>
          <button className='bg-slate-600 text-white p-3 rounded-sm'>Contact</button>
        </div>
        <Image src="/brands.png" alt='photto' width={500} height={100} style={{ filter: 'grayscale(100%)' }} />

      </div>

      <div className='flex-1'>
        <Image src='/hero.gif' alt='photo' width={650} height={650}  />
      </div>
    </div>
  )
}

export default Home;
1