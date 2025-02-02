import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar w-98 h-screen  flex flex-col gap-10 p-4 font-semibold text-lg items-start bg-white shadow-2xl rounded-md">
    <div className="heading w-full">
        <h1 className='font-bold text-xl text-[#0F33A0]'>Articles</h1>
        <hr className='text-black mt-4' />
    </div>
    <div className="side-content flex flex-col gap-10">
    <Link to='/objective'><h1>Objective</h1></Link>
    <Link to='/implementation'><h1>Implementation</h1></Link>
    <Link to='/approach'><h1>Approach</h1></Link>
    <Link to='/sphereOfActivity'><h1>Sphere of Activity</h1></Link>
    <Link to='/mobileApps'><h1>Mobile Apps</h1></Link>
    </div>

</div>
  )
}

export default Sidebar