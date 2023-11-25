import React from 'react'
import './Header.css'
import LogoIcon from '../../Assets/LogoIcon.webp'

const Header = () => {
    return (
        <div className='Header'>
            <div className='topHeader'>
                <div>
                    <img
                        src={LogoIcon}
                    />
                </div>
                <div className=''>
                    <input
                        placeholder='Enter your search'
                    />
                </div>
                <div>call us</div>
                <div>Email Us</div>
            </div>
            <div>Dropdown Header</div>
        </div>
    )
}

export default Header