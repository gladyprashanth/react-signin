import React from 'react'
import './Header.css'
import LogoIcon from '../../Assets/LogoIcon.webp'
import { BiSupport } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";


const Header = () => {
    return (
        <div className='Header'>
            <div className='topHeader'>
                <div className='iconAndSearchContainer'>
                    <div>
                        <img
                            src={LogoIcon}
                        />
                    </div>
                    <div className='headerInput'>
                        <input
                            placeholder='Enter your search'
                        />
                    </div>
                </div>
                <div className='contactUsHeader'>
                    <div className='contactUsHeaderContainer'>
                        <div className='contactUsIcon'>
                            <BiSupport />
                        </div>
                        <div className='contactUsContent'>
                            <div>Call Us Now</div>
                            <div>9789724829</div>
                        </div>
                    </div>
                    <div className='contactUsHeaderContainer'>
                        <div className='contactUsIcon'>
                            <CgProfile />
                        </div>
                        <div className='contactUsContent'>
                            <div>Call Us Now</div>
                            <div>chandru@pixalive.me</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header