import React from 'react'
import MyNav from '../NavBar'
import { Footer } from '../Footer'
import { Outlet } from 'react-router-dom'

export  function Layout() {
  return (
    
    <>
        <MyNav></MyNav > <Outlet></Outlet>

        <Footer></Footer>
    
    </>

  )
}
