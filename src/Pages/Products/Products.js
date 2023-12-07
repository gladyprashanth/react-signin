import React from 'react';
import './Products.css'

import desktop_pc_one from "../../Assets/desktop_pc_one.webp"
import desktop_pc_two from "../../Assets/desktop_pc_two.webp"
import desktop_pc_three from "../../Assets/desktop_pc_three.webp"

import { MdOutlineShoppingCart } from "react-icons/md";
import { FiLink } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { VscOpenPreview } from "react-icons/vsc";

const Products = () => {

  const desktops = [
    {
        id: 1,
        image: desktop_pc_one,
        title: "Desktop on Rent i3 4th Gen 8GB RAM-320 GB HDD 18.5 Inch Screen Keyboard And Mouse",
    },
    {
        id: 2,
        image: desktop_pc_two,
        title: "Desktop on Rent i3 6th Gen 8GB RAM-320 GB HDD 16.5 Inch Screen Keyboard And Mouse",
    },
    {
        id: 3,
        image: desktop_pc_three,
        title: "Desktop on Rent i3 8th Gen 8GB RAM-320 GB HDD 20.5 Inch Screen Keyboard And Mouse"
    },
    {
        id: 1,
        image: desktop_pc_one,
        title: "Desktop on Rent i3 4th Gen 8GB RAM-320 GB HDD 18.5 Inch Screen Keyboard And Mouse"
    },
    {
        id: 2,
        image: desktop_pc_two,
        title: "Desktop on Rent i3 6th Gen 8GB RAM-320 GB HDD 16.5 Inch Screen Keyboard And Mouse"
    },
    {
        id: 3,
        image: desktop_pc_three,
        title: "Desktop on Rent i3 8th Gen 8GB RAM-320 GB HDD 20.5 Inch Screen Keyboard And Mouse"
    },
    {
        id: 2,
        image: desktop_pc_two,
        title: "Desktop on Rent i3 6th Gen 8GB RAM-320 GB HDD 16.5 Inch Screen Keyboard And Mouse"
    },
    {
        id: 1,
        image: desktop_pc_one,
        title: "Desktop on Rent i3 4th Gen 8GB RAM-320 GB HDD 18.5 Inch Screen Keyboard And Mouse"
    },
  ];
  return (
    <div>
    <div className="Office_desktop_start ">
        <div className="desktop_heading">
            <div className="container-fluid bg_color_vj">
                <div className="row mx-auto">
                    <div className="col-sm-4 ">
                      <br></br>  <br></br>
                        <h1>Office Desktop</h1> <br />
                    </div>
                    <div className="col-sm-8"></div>
                </div>
                
                <div className="row mx-auto">
                </div> <br /> <br />
            </div>

        </div>
    </div>
    <div className="container-fluid bg_color_vj mx-auto">
        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
                <div className="row">
                    {desktops.map(desktop => (
                        <div key={desktop.id} className="col-sm-4 mx-auto">
                            <div className="card desktop_card border-0 box_color_vj" style={{ width: '18rem', height: '26rem' }}>
                                <img src={desktop.image} className="desktop_pc_one" alt="Desktop" />
                                <h4>{desktop.title}</h4>
                                <div className="desktop_react_icons circle">
                                    <div className="circle">  <MdOutlineShoppingCart /> </div>
                                    <div className="circle">   <FiLink />  </div>
                                    <div className="circle">  <IoMdHeartEmpty /> </div>
                                    <div className="circle">  <VscOpenPreview /> </div>
                                </div>
                            </div>
                            <br /> <br />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
</div>
    
  )
}

export default Products