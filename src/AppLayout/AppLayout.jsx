import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Testimonials from '../Pages/Testimonials'
import Carousel from '../Pages/Carousel'
import Article from '../Pages/Article'
import Objective from '../Pages/Objective'


const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AppLayout