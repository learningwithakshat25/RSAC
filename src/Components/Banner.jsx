import React from 'react'
import Logo from '../assets/assets/logo.png';
import Logo2 from '../assets/assets/asset 1.png'

const Banner = () => {
  return (
    <div className='w-screen'>
        <div className="container mx-auto flex flex-row items-center justify-between p-2">
            <img className='w-20' src={Logo} alt="Banner-Logo-1" />
            
            <img src={Logo2} alt="Banner-Logo-2" />
        </div>
    </div>
  )
}

export default Banner