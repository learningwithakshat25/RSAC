import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <div className='w-full h-fit bg-[#0F33A0] sticky top-0'>
      <button onClick={() => settoggle(!toggle)} className='md:hidden flex flex-row items-end justify-end w-screen p-5'>
        <i className="fa-solid fa-bars text-white font-bold text-2xl"></i>
      </button>
      <ul className='hidden md:container mx-auto md:p-4 md:flex flex-row items-center justify-between p-2 font-semibold text-white text-md md:text-sm md:gap-4'>
        <Link><li className='hover:border-b text-white'>Home</li></Link>
        <Link><li className='hover:border-b text-white'>About US</li></Link>
        <Link><li className='hover:border-b text-white'>Divisions</li></Link>
        <Link><li className='hover:border-b text-white'>Facilities</li></Link>
        <Link><li className='hover:border-b text-white'>Academics</li></Link>
        <Link><li className='hover:border-b text-white'>Gro-Portal</li></Link>
        <Link><li className='hover:border-b text-white'>Flood</li></Link>
        <Link><li className='hover:border-b text-white'>Photo Gallery</li></Link>
        <Link><li className='hover:border-b text-white'>RTI</li></Link>
        <Link><li className='hover:border-b text-white'>Tender</li></Link>
        <Link><li className='hover:border-b text-white'>FAQ</li></Link>
        <Link><li className='hover:border-b text-white'>Contact Us</li></Link>
      </ul>
      {toggle && (
        <ul className='md:hidden flex flex-col items-center justify-center p-2 font-semibold text-white text-md'>
          <Link><li className='p-2 hover:bg-white hover:text-black w-screen border'>Home</li></Link>
          <Link><li className='p-2 hover:bg-white hover:text-black w-screen border-b'>About US</li></Link>
          <Link><li className='p-2 hover:bg-white hover:text-black w-screen border-b'>Divisions</li></Link>
          <Link><li className='p-2 hover:bg-white hover:text-black w-screen border-b'>Facilities</li></Link>
          <Link><li className='p-2 hover:bg-white hover:text-black w-screen border-b'>Academics</li></Link>
          <Link><li className='p-2 hover:bg-white hover:text-black w-screen border-b'>Gro-Portal</li></Link>
          <Link><li className='p-2 hover:bg-white hover:text-black w-screen border-b'>Flood</li></Link>
          <Link><li className='p-2 hover:bg-white hover:text-black w-screen border-b'>Photo Gallery</li></Link>
          <Link><li className='p-2 hover:bg-white hover:text-black w-screen border-b'>RTI</li></Link>
          <Link><li className='p-2 hover:bg-white hover:text-black w-screen border-b'>Tender</li></Link>
          <Link><li className='p-2 hover:bg-white hover:text-black w-screen border-b'>FAQ</li></Link>
          <Link><li className='p-2 hover:bg-white hover:text-black w-screen border-b'>Contact Us</li></Link>
        </ul>
      )}
    </div>
  )
}

export default Header