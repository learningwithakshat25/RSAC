import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Articleheader from './Articleheader'

const Sidebar = () => {

  const [currentId, setCurrentId] = useState(0);

  const article_array = [
    {
      title: "Objective",
      data: [
        "To undertake, promote, guide, coordinate and aid research and development in the field of remote sensing.",
        "To provide consultancy services and arrange airborne survey facilities to user agencies on actual costs basis."
      ]
    },
    {
      title: "Implementation",
      data: [
        "To carry out surveys for monitoring and assessment of the entire gamut of natural resources using remote sensing techniques.",
        "To carry out special temporal surveys to monitor changing land-use patterns, environmental changes, irrigation systems, forest resources, and crop disease surveillance."
      ]
    },
    {
      title: "Approach",
      data: [
        "To develop efficient data acquisition and retrieval system and to act as repository of various natural resources data.",
        "To act as a nodal organisation in the State advising the user agencies and disseminate the remote sensing technology at operational levels."
      ]
    },
    {
      title: "Sphere of Activity",
      data: [
        "To provide research and development support to the teaching and research organisations of the State in specified areas of remote sensing technology.",
        "To carry out field investigations connected with the activities of remote sensing remote sensing technology and its applications."
      ]
    },
    {
      title: "Mobile Apps",
      data: [
        "To cooperate and collaborate with other national and international organisations in the field of remote sensing and disciplines.",
        "To periodically publish the results of remote sensing investigations carried out by the Centre."
      ]
    },
  ]

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
              article_array[currentId].data.map((content,id)=>
              <p key={"content_"+id}>
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