import React from 'react'
import Header from '../inc/Header'
import Footer from '../inc/Footer'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout
