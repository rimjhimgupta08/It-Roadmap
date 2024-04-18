import React from 'react'
// import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Navbar1 from './Navbar1'

const Layout = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Navbar1/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout