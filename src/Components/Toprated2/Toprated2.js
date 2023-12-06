import React, { useState } from 'react';
import "./Toprated2.css"
// import { FiHeart } from "react-icons/fi";
import img_27 from "../../Assets/img_27.webp"
import img_28 from "../../Assets/img_28.webp"
import img_29 from "../../Assets/img_29.webp"
import img_30 from "../../Assets/img_30.webp"
import img_31 from "../../Assets/img_31.webp"
import img_32 from "../../Assets/img_32.webp"
import img_33 from "../../Assets/img_33.webp"
import img_34 from "../../Assets/img_34.webp"

import { MdOutlineShoppingCart } from "react-icons/md";
import { FiLink } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { VscOpenPreview } from "react-icons/vsc";


// import { MdOutlineShoppingCart } from "react-icons/md";
// import { FiLink } from "react-icons/fi";
// import { IoMdHeartEmpty } from "react-icons/io";
// import { VscOpenPreview } from "react-icons/vsc";


const Toprated2 = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };

  const desktops = [
      {
        id: 1,
        image: img_27,
        title: "Laptop on Rent -i5 10th Gen -16GB RAM-512GB SSD-14",
        title2: " Additionally, ensure that your meta  ",
      label: 'ab',
       value: '$29.00/',
       value1: '$29.00/',
        frequency: 'Monat'


        
      },
      {
        id: 2,
        image: img_28,
        title: "Dell 5430 Laptop on Rent | 13th Gen | Core i7-1360P",
        title2: "Dell 5430 Laptop on Rent | 13th Gen" ,
        label: 'ab',
        value: '',
        value3: '$29.00/',
        value1: '',
         frequency:  'Monat'
      },
      {
        id: 3,
        image: img_29,
        title: "MacBook Pro on Rent A1989 (2019) i7-2.8GHz-16GB SSD",
        title2: "Dell 5430 Laptop on Rent | 13th Gen" ,
        label: 'ab',
        value: '$29.00/',
        value1: '$29.00/',
         frequency:  'Monat'
      },
      {
        id: 4,
        image: img_30,
        title: "Laptop i3 8th Gen -8GB RAM-240 GB SSD-14 inch screen",
        title2: "Dell 5430 Laptop on Rent | 13th Gen" ,
        label: 'ab',
        value: '',
        value3: '$29.00/',
        value1: '',
         frequency:  'Monat',
      },
      {
        id: 5,
        image: img_31,
        title: "MacBook Air M1 on Rent | 8GB RAM | 256GB Storage on Rent",
        title2: "Dell 5430 Laptop on Rent | 13th Gen" ,
        value: '$29.00/',
        value1: '$29.00/',
        value3: '',
        label: 'ab',
         frequency:  'Monat',
      },
      {
        id: 6,
        image: img_32,
        title: "Laptop on Rent i5 6th Gen -4GB RAM-240GB SSD-14 inch screen",
        title2: "Dell 5430 Laptop on Rent | 13th Gen" ,
        label: 'ab',
        value: '',
        value1: '',
        value: '$29.00/',
         frequency:  'Monat',
      },
      {
        id: 7,
        image: img_33,
        title: "HP 15s Laptop on Rent | 12th Gen | Core i7 | 15.6-inch | 16G",
        title2: "Dell 5430 Laptop on Rent | 13th Gen" ,
        label: 'ab',
        value: '',
        value1: '',
        value3: '$29.00/',
         frequency:  'Monat',
      },
      {
        id: 8,
        image: img_34,
        title: "Dell Projector On Rent",
        title2: "Dell 5430 Laptop on Rent | 13th Gen" ,
        label: 'ab',
        value: '$29.00/',
        value1: '$29.00/',
         frequency:  'Monat',
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
          {/* <div className="row  ">
      {desktops.map(desktop => (
        <div key={desktop.id} className="col-sm-3 mt-3 ">
          <div className="card desktop_card3 border-0  " style={{ width: '15rem', height: '30rem' }}>
          <div className="desktop_react_icons3 circle3 position-absolute ">
                                  <div className="circle3">  <MdOutlineShoppingCart /> </div>
                                  <div className="circle3">   <FiLink />  </div>
                                  <div className="circle3">  <IoMdHeartEmpty /> </div>
                                  <div className="circle3">  <VscOpenPreview /> </div>
                              </div>
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
      </div>  */}
        <div className="row ">
                {desktops.map((desktop) => (
                  <div key={desktop.id} className="col-sm-3 ">
                    <div className="card desktop_card12" style={{ width: '100' }}>

                      <div className=" circper02 d-flex ">
                        <p className=' crane5 mt-2 mx-2 ' >-17%</p>
                        <div className=' hsize05  ' ><IoMdHeartEmpty /></div>
                        
                      </div>
                      <img src={desktop.image} className="desktop_pc_one" alt="Desktop" />
                      <h5 className='yezthu text-start mx-2'>
  {showFullText ? desktop.title : desktop.title.slice(0, 60)}
  {!showFullText && (
    <span onClick={toggleReadMore} style={{ cursor: 'pointer' }}>
      {' '}
      ...
    </span>
  )}
 
</h5>
<p className='text-start fw-lighter mx-2 '>
  {showFullText ? desktop.title2 : desktop.title.slice(60)}
  {showFullText && (
    <span onClick={toggleReadMore} style={{ cursor: 'pointer' }}>
      {' '}
      ...
    </span>
  )}
</p>

                      {/* <br /> */}
                      <h6 className='text-start mx-2' key={desktop.id}>
  {desktop.label} <span className='fw-bold text-decoration-line-through'>{desktop.value} </span><span className='fw-bold strike2'>{desktop.value3} </span><span className=' strike fw-bold text-danger'>{desktop.value1}</span> {desktop.frequency}
</h6>
                      {/* <h6 className='text-start mx-2' key={desktop.id}>
  {desktop.label1}  {desktop.frequency1}
</h6> */}

                      {/* <h6 className='text-start' >{desktop.title5}</h6> */}
                      {/* <h6>from <span className='fw-bold' >$29.00/</span> month</h6> */}
                      {/* <div className="heart_button text-center">
                        <a href="#" className="btn btn-primary  btn-lg  ">
                          Read More
                        </a>
                        <span className='mx-3 fs-5' ><FiHeart /></span>
                      </div> */}
                    </div>
                    <br />
                  </div>
                ))}
              </div>
   
              </div>
          </div>
      </div>

  
)
}

export default Toprated2