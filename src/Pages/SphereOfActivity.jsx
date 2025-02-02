import React from 'react'
import Sidebar from '../Components/Sidebar'

const SphereOfActivity = () => {
  return (
    <div className='w-screen h-screen bg-[#F6F6F9]'>
    <div className="container mx-auto flex flex-row gap-10">
        <Sidebar/>
        <div className=' bg-white shadow-2xl rounded-md w-full h-screen p-4'>
            <h1>SphereOfActivity</h1>
            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quod at ullam sint ex amet dolorem perferendis labore accusamus est fugiat, exercitationem harum repellat porro. Quia vel enim earum non!</p>
        </div>
    </div>
</div>
  )
}

export default SphereOfActivity