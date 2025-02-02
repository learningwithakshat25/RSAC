import React from 'react'
import Logo from '../assets/assets/logo.png';
import Heroimg3 from '../assets/assets/Heroimg3.webp'
import Banner from '../Components/Banner';
import Testimonials from './Testimonials';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='w-screen h-screen'>
      <Banner/>
      <div className="container mx-auto flex flex-col md:flex-row">
      <div className="Hero-left md:justify-center w-full md:w-2/4 flex flex-col items-center md:items-start gap-4 p-4 container mx-auto">
        {/* <div className="logos">
          <img className='md:hidden w-28' src={Logo} alt="RSAC-Logo" />
        </div> */}
        <h1 className='text-4xl md:text-5xl font-extrabold text-[#0F33A0] text-center md:text-start'>Remote Sensing Applications Center, Uttar Pradesh</h1>
        <h2 className='text-center md:text-start text-[#0F33A0] md:font-semibold'>An Autonomous Organization under the Department of Science & Technology, Government of Uttar Pradesh</h2>
      <Link to='/remoteSensing'><button className='bg-[#0F33A0] text-white font-semibold rounded-2xl p-3 w-fit text-md md:text-lg md:font-bold px-10'>Know more</button></Link>
      </div>
      <div className="hidden md:flex items-center justify-center Hero-right w-2/4">
        <img className='h-98 object-cover' src={Heroimg3} alt="Hero-Right-Logo" />
      </div>
      </div>

    </div>
  )
}

export default Hero