import React from 'react';
import "./Toprated.css"
import { FiHeart } from "react-icons/fi";
import img_23 from "../../Assets/img_23.webp"
import img_24 from "../../Assets/img_24.webp"
import img_25 from "../../Assets/img_25.webp"


const Toprated = () => {
    
    const desktops = [
        {
          id: 1,
          image: img_23,
          title: "Gaming Laptop-i7 10th Onward Gen -16GB RAM-512GB SSD-15.6 inch screen-4GB Graphics Card",
        },
        {
          id: 2,
          image: img_24,
          title: "MacBook Air M3 on Rent | 8GB RAM | 256GB Storage on Rent",
        },
        {
          id: 3,
          image: img_25,
          title: "Laptop on Rent i7 8th Gen -8GB RAM-240GB SSD-14 inch screen",
        },
       
      ];
  return (
    <div>
        <div className="container-fluid one">
        <div className="container">
            <div className="row mt-5">
               
                <div className="col-sm-12 text-center ">
                    <h1>Top rated products</h1>
                    <h6>Best choice</h6>
                </div>
            </div>
            
      <div className="row">
        <div className="col-sm-1"></div>
       
        <div className="col-sm-10 ">
            <div className="row ">
        {desktops.map(desktop => (
          <div key={desktop.id} className="col-sm-4  ">
            <div className="card desktop_card border-0  " style={{ width: '20rem', height: '33rem' }}>
              <img src={desktop.image} className="desktop_pc_one" alt="Desktop" />
              <h4 className='text-center' >{desktop.title}</h4>
              <br />
              <div className="heart_button text-center">
              <a href="#" className="btn btn-primary  btn-lg  ">
              Read More
            </a>
            <span className='mx-3 fs-5' ><FiHeart/></span>
    
              </div>
            </div> <br />
          </div>
        ))}
        </div> 
        </div> 
        <div className="col-sm-1"></div>
      </div> 


           
        </div>
        </div>
    </div>
  )
}

export default Toprated