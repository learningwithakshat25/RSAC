import { useState } from 'react'
import Articleheader from './Articleheader'
import { article_array } from '../constant';

const Sidebar = () => {

  const [currentId, setCurrentId] = useState(0);

  return (
    <div className='w-screen min-h-screen bg-[#F6F6F9]'>
      <div className="container mx-auto flex flex-row gap-10 shadow-lg">

        {/* Sidebar */}
        <div className="sidebar w-98 h-screen flex flex-col gap-10 p-4 font-semibold text-lg items-start bg-white shadow-2xl rounded-md">
          <div className="heading w-full">
            <h1 className='font-bold text-xl text-[#0F33A0]'>Articles</h1>
            <hr className='text-black mt-4' />
          </div>
          <div className="side-content flex flex-col gap-10">
            {
              article_array.map((item, id) =>
                <h1 key={id}
                  className='cursor-pointer'
                  onClick={() => setCurrentId(id)}
                >
                  {
                    item.title
                  }
                </h1>
              )
            }
          </div>
        </div>

        {/* Content */}
        <div className=' bg-white shadow-2xl rounded-md w-full p-4 flex flex-col gap-10'>
          <Articleheader title={article_array[currentId].title} />
          <div className="list flex flex-col gap-5">
            {
              article_array[currentId].data.map((content, id) =>
                <p key={"content_" + id}>
                  {content}
                </p>
              )
            }
          </div>
        </div>

      </div>
    </div >
  )
}

export default Sidebar