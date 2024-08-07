import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar }  from "./components/index"

function Layout() {
  return (
    <main>
        <Navbar/>
        <Outlet/>
        <Footer/> 
    </main>
  )
}

export default Layout