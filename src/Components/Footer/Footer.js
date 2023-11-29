import React from 'react'
import './Footer.css'
import Icons from '../Icons/Icons'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer_inner'>
        <div className='Footer_top'>
          <div className='Footer_top_left'>
            <div className='Footer_top_left_calls'>
              <div className='Footer_top_left_calls_icon_container'><img
                src='https://www.svgrepo.com/show/307748/customer-service-customer-support-customer-service-representative-service-center.svg'
              /></div>
              <div className='Footer_top_left_calls_content'>
                <div className='Footer_top_left_calls_content_quote'>Get question? call us now</div>
                <div className='Footer_top_left_calls_content_mobile number'>9789724829</div>
              </div>
            </div>
            <div className='Footer_top_left_address'>
              RENTAL PLAZA, SCO 68, Second Floor, Sector 20C, CHANDIGARH 160019
            </div>
            <div className='footerLeft_Icons_container'>
              <div><Icons url="https://www.svgrepo.com/show/452231/instagram.svg" /></div>
              <div><Icons url="https://www.svgrepo.com/show/473600/facebook.svg" /></div>
            </div>
          </div>
          <div className='footerOption_container'>
            <div className='footerOption_header'>About</div>
            <div className='footerOption_contents'>
              <div>About Rental Plaza</div>
              <div>Who We Are</div>
              <div>Why Rental</div>
              <div>What do we do?</div>
            </div>
          </div>
          <div className='footerOption_container'>
            <div className='footerOption_header'>Useful links</div>
            <div className='footerOption_contents'>
              <div>About</div>
              <div>Services</div>
              <div>Locations</div>
              <div>Blog</div>
              <div>Contact</div>
            </div>
          </div>
          <div className='footerOption_container'>
            <div className='footerOption_header'>MacBook On Rent</div>
            <div className='footerOption_contents'>
              <div>MacBook On Rent in Gurgaon</div>
              <div>MacBook On Rent in Noida</div>
              <div>MacBook On Rent in Delhi</div>
            </div>
          </div>
        </div>
        <div className='Footer_bottom'>© 2024 All Rights Reserved | Powered by Rent daddy</div>
      </div>
    </div>
  )
}

export default Footer