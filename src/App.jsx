import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Routing from './Routes/Routing';

const router = createBrowserRouter(
  createRoutesFromElements(
    Routing
  )
)

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App