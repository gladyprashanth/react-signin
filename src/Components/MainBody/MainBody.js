import React from 'react'
import './MainBody.css'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const MainBody = () => {

  return (
    <div>
        <Header/>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default MainBody