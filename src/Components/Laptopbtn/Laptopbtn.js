import React from 'react'

import desktop_pc_one from "../../Assets/desktop_pc_one.webp"
import desktop_pc_two from "../../Assets/desktop_pc_two.webp"
import desktop_pc_three from "../../Assets/desktop_pc_three.webp"

import { FiHeart } from "react-icons/fi";

const desktops = [
    {
      id: 1,
      image: desktop_pc_one,
      title: "Desktop on Rent i3 4th Gen 8GB RAM-320 GB HDD 18.5 Inch Screen Keyboard And Mouse",
    },
    {
      id: 2,
      image: desktop_pc_two,
      title: "Desktop on Rent i3 6th Gen 8GB RAM-320 GB HDD 18.5 Inch Screen Keyboard And Mouse",
    },
    {
      id: 3,
      image: desktop_pc_three,
      title: "Laptop on Rent i3 8th Gen 8GB RAM-320 GB HDD 18.5 Inch Screen Keyboard And Mouse",
    },
    {
        id: 2,
        image: desktop_pc_two,
        title: "Desktop on Rent i3 6th Gen 8GB RAM-325 GB HDD 18.5 Inch Screen Keyboard And Mouse",
      },
      {
        id: 3,
        image: desktop_pc_three,
        title: "Laptop on Rent i3 8th Gen 8GB RAM-320 GB HDD 18.5 Inch Screen Keyboard And Mouse",
      },
      {
        id: 1,
        image: desktop_pc_one,
        title: "Desktop on Rent i3 4th Gen 8GB RAM-320 GB HDD 18.5 Inch Screen Keyboard And Mouse",
      },
  ];


const Laptopbtn = () => {
  return (
    <div>


    <div className="container-fluid bg_color_vj ">
      

      <div className="row">
        <div className="col-sm-2 col-md-2"></div>
        <div className="col-9 col-md-9">
            <div className="row">
        {desktops.map(desktop => (
          <div key={desktop.id} className="col-sm-4 col-md-4">
            <div className="card desktop_card border-0 box_color_vj" style={{ width: '18rem', height: '31rem' }}>
              <img src={desktop.image} className="desktop_pc_one" alt="Desktop" />
              <h4>{desktop.title}</h4>
              <br />
              <div className="heart_button">
                <button className='rent_desk_bton mx-5'>READ MORE</button> 
                <FiHeart className='heart_reacticon' />
              </div>
            </div> <br />
          </div>
        ))}
        </div> 
        </div> 
      </div> 
    </div>
      
    </div>
  )
}

export default Laptopbtn
