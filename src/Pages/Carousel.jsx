import React, { useState } from 'react'
import CarouselData from '../Data/Carousel.json'

const Carousel = () => {
    const [current, setcurrent] = useState(0);
    const next = ()=>{
        setcurrent(current === CarouselData -1 ? 0 : current + 1);
    }
    const previous = ()=>{
        setcurrent(current === 0 ? CarouselData -1 : current - 1);
    }
  return (
    <div className=' h-32 w-screen p-4 gap-10 flex md:flex-row flex-col overflow-y-auto'>
        <div onClick={previous} className="previous">
            A
        </div>
        <div  className="image flex flex-row gap-4 ">
            {CarouselData.map((item,id)=>{
                return <div className='h-full w-96 
                '>
                    <img className='h-full w-full object-fill' src={item.img} alt="" />
                    </div>
                
            })}
        </div>
        <div onClick={next} className="next">
            B
        </div>

    </div>
  )
}

export default Carousel