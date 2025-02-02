import React from 'react'
import Data from '../Data/Testimonials.json'

const TestimonialCard = () => {
    return (
        <div className='flex flex-col items-center justify-center md:flex-row gap-10 p-4 flex-wrap '>
            {
                Data.map((alldata) => {
                    const { id, img, chiefname, title, post } = alldata
                    return (
                        <div className=' w-full h-98 md:w-54 p-4  shadow-lg shadow-black flex flex-col items-center justify-center text-center gap-2 rounded-md bg-white'>
                            <img className='h-52 w-52 object-cover object-center rounded-md' src={img} alt="" />
                            <h1 className='font-bold text-[#0F33A0]'>{chiefname}</h1>
                            <p>{title}</p>
                            <p>{post}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default TestimonialCard