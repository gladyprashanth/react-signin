import React from 'react'
import './MainBody.css'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import TopHeader from '../Header/TopHeader/TopHeader'
import AdsHeader from '../Header/AdsHeader/AdsHeader'
import BottomHeader from '../Header/BottomHeader/BottomHeader'
import AboutRental from '../AboutRental/AboutRental'
import WhyChoose from '../WhyChoose/WhyChoose'
import Satisfied from '../Satisfied/Satisfied'
import Welook from '../Welook/Welook'
import Form from '../Form/Form'
import Ourpresence from '../Ourpresence/Ourpresence'


const MainBody = () => {

  return (
    <div className='MainBody'>
      <AdsHeader />
      <TopHeader />
      <Header />
      <BottomHeader />
      <div className='MainBody_contents'>
        <AboutRental />
        <WhyChoose />
        <Satisfied />
        <Welook />
        <Form />
        <Ourpresence />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default MainBody