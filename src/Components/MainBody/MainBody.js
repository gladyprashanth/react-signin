import React from 'react'
import './MainBody.css'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import TopHeader from '../Header/TopHeader/TopHeader'
import AdsHeader from '../Header/AdsHeader/AdsHeader'
import BottomHeader from '../Header/BottomHeader/BottomHeader'


const MainBody = () => {

  return (
    <div className='MainBody'>
      <AdsHeader />
      <TopHeader />
      <Header />
      <BottomHeader />
      <div className='MainBody_contents'>
       
        <Outlet />
        <Footer />

      </div>
    </div>
  )
}

export default MainBody