import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './AppLayout/AppLayout';
import Hero from './Pages/Hero';
import Testimonials from './Pages/Testimonials';
import Objective from './Pages/Objective';
import Implementation from './Pages/Implementation';
import Approach from './Pages/Approach';
import SphereOfActivity from './Pages/SphereOfActivity';
import MobileApps from './Pages/MobileApps';
import RemoteSensing from './Pages/RemoteSensing';
import Article from './Pages/Article';

const App = () => {
  const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children:[
            {
              path: '/',
              element: <Hero/>
            },
            {
              path:'/testimonials',
              element: <Testimonials/>
            },
            {
              path: '/objective',
              element: <Objective/>
            },
            {
              path: '/implementation',
              element: <Implementation/>
            },
            {
              path: 'approach',
              element: <Approach/>
            },
            {
              path: '/sphereOfActivity',
              element: <SphereOfActivity/>
            },
            {
              path: '/mobileApps',
              element: <MobileApps/>
            },
            {
              path: '/remoteSensing',
              element: <RemoteSensing/>
            },
            {
              path: '/article',
              element: <Article/>
            }
        ]
    }
])
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App