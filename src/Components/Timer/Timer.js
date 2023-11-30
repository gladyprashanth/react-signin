import React from 'react'
import "./Timer.css"
import img_26 from "../../Assets/img_26.webp"
import Countdown from '../Countdown/Countdown'

const Timer = () => {
  return (
    <div>
        <div className="container-fluid col1 ">
        <div className="container voil rounded ">
            <div className="row">
                <div className="col-sm-5">
                    <img  className='img-fluid' src={img_26} alt="pc img" />

                </div>
                <div className="col-sm-1">

                </div>
                <div className="col-sm-6 text-center  ">
                    <h1 className='text-light text-center' >MacBook Pro with M3 Processor</h1>
                    <h5 className='text-light text-center' >MacBook rentals: M1, M2, M3, Air, Pro – Rental Rates !</h5>

                    <h5 className='mt-5 text-light text-center' >Special Rental Rates For<span className='bolder' >Corporates Call Now</span> </h5>
                  <Countdown />
                    <h6 className='mt-5 text-light text-center'> Launch Date : 7 Nov, Tuesday<br/>
                    
Pre Booking Starts for Rentals</h6>
<a href="#" className="btn btn-primary  btn-lg mt-3 mb-3  ">
              Call Now
            </a>

                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Timer