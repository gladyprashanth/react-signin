import React from 'react'

import desktop_pc_one from "../../Components/assets/images/desktop_pc_one.webp"
import desktop_pc_two from "../../Components/assets/images/desktop_pc_two.webp"
import desktop_pc_three from "../../Components/assets/images/desktop_pc_three.webp"

import { FiHeart } from "react-icons/fi";


const Laptopbtn = () => {
  return (
    <div>
          <div>


      <div className="Office_desktop_start">
        <div className="desktop_heading">
            <div className="container-fluid bg_color_vj">
                <div className="row">
                  
                    <div className="col-8"></div>
                </div>
               
                <div className="row">
                    <div className="col-2 text-start font_col_vj p-4">
                    </div>
                    <div className="col-3">
                            
                    <div className="card desktop_card border-0 box_color_vj" style={{width: '18rem', height: '31rem'}}>
                        <img src={desktop_pc_one} className="desktop_pc_one" alt="Desktop" />
                        <h4>Desktop on Rent i3 4th Gen 8GB RAM-320 GB HDD 18.5 Inch Screen Keyboard And Mouse</h4> <br />
                        <div className="heart_button">
                        <button className='rent_desk_bton mx-auto'>READ MORE</button>      &nbsp;  &nbsp;
                        <FiHeart className='heart_reacticon' />
                        </div>                        
                    </div>  <br />

                    </div>
                    <div className="col-3">
                    <div className="card desktop_card border-0 box_color_vj" style={{width: '18rem', height: '31rem'}}>
                        <img src={desktop_pc_two} className="desktop_pc_one" alt="Desktop" />
                        <h4>Desktop on Rent i3 6th Gen 8GB RAM-320 GB HDD 18.5 Inch Screen Keyboard And Mouse</h4> <br />
                        <div className="heart_button">
                        <button className='rent_desk_bton mx-auto'>READ MORE</button>      &nbsp;  &nbsp;
                        <FiHeart className='heart_reacticon' />
                        </div>
                    </div> <br />

                    </div>
                    <div className="col-3">
                    <div className="card desktop_card border-0 box_color_vj" style={{width: '18rem', height: '31rem'}}>
                        <img src={desktop_pc_three} className="desktop_pc_one" alt="Desktop" />
                        <h4>Laptop on Rent i3 8th Gen 8GB RAM-320 GB HDD 18.5 Inch Screen Keyboard And Mouse</h4> <br />
                        <div className="heart_button">
                        <button className='rent_desk_bton mx-auto'>READ MORE</button>      &nbsp;  &nbsp;
                        <FiHeart className='heart_reacticon'/>
                        </div>
                        
                    </div>
                    </div> <br />
                </div>
            </div>
        </div>
    </div>




    
    </div> 


    <div className="container-fluid bg_color_vj ">
      

      <div className="row">
        <div className="col-2"></div>
        <div className="col-9">
            <div className="row">
        {desktops.map(desktop => (
          <div key={desktop.id} className="col-4">
            <div className="card desktop_card border-0 box_color_vj" style={{ width: '18rem', height: '31rem' }}>
              <img src={desktop.image} className="desktop_pc_one" alt="Desktop" />
              <h4>{desktop.title}</h4>
              <br />
              <div className="heart_button">
                <button className='rent_desk_bton mx-auto'>READ MORE</button> &nbsp; &nbsp;
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
