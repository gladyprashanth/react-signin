import React from 'react'
import "./Toprated2.css"
import { FiHeart } from "react-icons/fi";
import img_27 from "../../Assets/img_27.webp"
import img_28 from "../../Assets/img_28.webp"
import img_29 from "../../Assets/img_29.webp"
import img_30 from "../../Assets/img_30.webp"
import img_31 from "../../Assets/img_31.webp"
import img_32 from "../../Assets/img_32.webp"
import img_33 from "../../Assets/img_33.webp"
import img_34 from "../../Assets/img_34.webp"


const Toprated2 = () => {
    const desktops = [
        {
          id: 1,
          image: img_27,
          title: "Laptop on Rent -i5 10th Gen -16GB RAM-512GB SSD-14",
        },
        {
          id: 2,
          image: img_28,
          title: "Dell 5430 Laptop on Rent | 13th Gen | Core i7-1360P Processor | 16GB/ 1TB SSD",
        },
        {
          id: 3,
          image: img_29,
          title: "MacBook Pro on Rent A1989 (2019) i7-2.8GHz-16GB SSD-512GB SSD-13” Retina Display",
        },
        {
          id: 4,
          image: img_30,
          title: "Laptop i3 8th Gen -8GB RAM-240 GB SSD-14 inch screen",
        },
        {
          id: 5,
          image: img_31,
          title: "MacBook Air M1 on Rent | 8GB RAM | 256GB Storage on Rent",
        },
        {
          id: 6,
          image: img_32,
          title: "Laptop on Rent i5 6th Gen -4GB RAM-240GB SSD-14 inch screen",
        },
        {
          id: 7,
          image: img_33,
          title: "HP 15s Laptop on Rent | 12th Gen | Core i7 | 15.6-inch | 16GB/512GB SSD | Intel Iris Xe Graphics",
        },
        {
          id: 8,
          image: img_34,
          title: "Dell Projector On Rent",
        },
       
      ];
  return (
    <div>
        <div className="container-fluid top1">

            <div className="conatiner">
            <div className="row mt-5">
               
               <div className="col-sm-12 text-center ">
                   <h1>Top rated products</h1>
                   <h6>Best choice</h6>
               </div>
           </div>
           </div>
            
        
       
       <div className="container">
            <div className="row  ">
        {desktops.map(desktop => (
          <div key={desktop.id} className="col-sm-3 mt-3 ">
            <div className="card desktop_card border-0  " style={{ width: '15rem', height: '30rem' }}>
              <img src={desktop.image} className="desktop_pc_one  " alt="Desktop" />
              <h4 className='text-center' >{desktop.title}</h4>
              <br />
              <div className="heart_button text-center">
              <a href="#" className="btn btn-primary  btn-lg  ">
              Read More
            </a>
            <span className='mx-3 fs-5' ><FiHeart/></span>
    
              </div>
            </div>
          </div>
        ))}
        </div> 
     
                </div>
            </div>
        </div>

    
  )
}

export default Toprated2