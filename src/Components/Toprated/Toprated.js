import React, { useState } from 'react';
import "./Toprated.css";
import { FiHeart } from "react-icons/fi";
<<<<<<< Updated upstream
import img_23 from "../../Assets/img_23.webp"
import img_24 from "../../Assets/img_24.webp"
import img_25 from "../../Assets/img_25.webp"

import { MdOutlineShoppingCart } from "react-icons/md";
import { FiLink } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { VscOpenPreview } from "react-icons/vsc";

=======
// import { IoMdHeartEmpty } from "react-icons/io";
import img_23 from "../../Assets/img_23.webp";
import img_24 from "../../Assets/img_24.webp";
import img_25 from "../../Assets/img_25.webp";
>>>>>>> Stashed changes

const Toprated = () => {
    
  const [showFullText, setShowFullText] = useState(false);

  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };

  const desktops = [
    {
      id: 1,
      image: img_23,
      title: "Gaming Laptop-i7 10th Onward Gen -16GB RAM-512GB SSD-15.6",
      title2: " Additionally, ensure that your meta  ",
      label: 'from',
       value: '$29.00/',
        frequency: 'month'

    },
    {
      id: 2,
      image: img_24,
      title: "MacBook Air M3 on Rent | 8GB RAM | 256GB Storage on Rent",
      title2: " Additionally, ensure that your meta  ",
      label: 'from',
      value: '$29.00/',
      value4: '$29.00/',
       frequency: 'month'
    },
    {
      id: 3,
      image: img_25,
      title: "Laptop on Rent i7 8th Gen -8GB RAM-240GB SSD-14 inch screen",
      title2: " Additionally, ensure that your meta  ",
      label: 'from',
      value: '$29.00/',
       frequency: 'month'
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
<<<<<<< Updated upstream
            
      <div className="row">
        <div className="col-sm-1"></div>
       
        <div className="col-sm-10 ">
            <div className="row ">
        {desktops.map(desktop => (
          <div key={desktop.id} className="col-sm-4  ">
            <div className="card desktop_card1 border-0  " style={{ width: '20rem', height: '33rem' }}>
            <div className="desktop_react_icons1 circle2 position-absolute ">
                                    <div className="circle2">  <MdOutlineShoppingCart /> </div>
                                    <div className="circle2">   <FiLink />  </div>
                                    <div className="circle2">  <IoMdHeartEmpty /> </div>
                                    <div className="circle2">  <VscOpenPreview /> </div>
                                </div>
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
=======
>>>>>>> Stashed changes
          </div>


{/* card */}



          
          <div className="container resmed">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10  ">

              <div className="row ">
                {desktops.map((desktop) => (
                  <div key={desktop.id} className="col-sm-4 ">
                    <div className="card desktop_card11 border-0  " style={{ width:"100" }}>
                      <div className=" circper  ">
                        <p className='mt-2 mx-2' >-17%</p>
                        <span className=' hsize ' ><FiHeart /></span>
                        
                      </div>
                      <img src={desktop.image} className="desktop_pc_one" alt="Desktop" />
                      <h5 className='letters text-start'>{showFullText ? desktop.title : desktop.title.slice(0, 60)}
                      {!showFullText && (
                          <span onClick={toggleReadMore} style={{ cursor: 'pointer' }}>
                            {' '}
                            ...
                          </span>
                        )}
                         
                      </h5>
                      <p className='text-start fw-lighter '>
                        {showFullText ? desktop.title2 : desktop.title.slice(60)}
                        {showFullText && (
          <span onClick={toggleReadMore} style={{ cursor: 'pointer' }}>
            {' '}
            ...
          </span>
        )}
                        
                      </p>
                    
                      <h6 className='text-start' key={desktop.id}>
  {desktop.label} <span className='fw-bold text-decoration-line-through'>{desktop.value}</span><span className='fw-bold strike3 text-danger'>{desktop.value4} </span> {desktop.frequency}
</h6>

                     
                    </div>
                    <br />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-sm-1"></div>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Toprated;
