import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import Menyu from '../pages/Menyu'
import Contact from '../pages/Contact'
import About from '../pages/About'

function Router() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/Menyu' element={<Menyu/>}/>
                <Route path='/Əlaqə' element={<Contact/>}/>
                <Route path='/Haqqımızda' element={<About/>}/>
            </Route>
        </Routes>
    </div>
  )
}

export default Router
