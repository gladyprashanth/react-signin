import React from 'react'
import './Header.css'
import LogoIcon from '../../Assets/LogoIcon.webp'
import { BiSupport } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import Icon from '../Icon/Icon';
import Logo from '../Logo/Logo';


const Header = () => {
    return (
        <div className='MainHeader'>
            <div className='MainHeader_inner'>
                <div
                    className='menuIcon'
                ><Icon
                        url={'https://www.svgrepo.com/show/522418/menu.svg'}
                    /></div>
                <div><Logo url="https://rentalplaza.in/wp-content/uploads/2023/11/Untitled-design-2023-11-19T100806979.png#4822" /></div>
                <div className='header_SearchBar'>
                    <input
                        placeholder='Search product'
                    />
                </div>
                <div className='header_ContactUs'>
                    <div className='header_ContactUs_content hide'>
                        <Icon
                            url={"https://www.svgrepo.com/show/334294/support.svg"}
                        />
                        <div className='header_ContactUs_content_text '>
                            <div>Call Us</div>
                            <div>9876543210</div>
                        </div>
                    </div>
                    <div className='header_ContactUs_content smhide'>
                        <Icon
                            url={"https://www.svgrepo.com/show/522440/profile.svg"}
                        />
                        <div className='header_ContactUs_content_text '>
                            <div>Email Us</div>
                            <div>chandru@pixalive.me</div>
                        </div>
                    </div>
                    <div><Icon
                        url={'https://www.svgrepo.com/show/522443/search.svg'}
                    /></div>
                </div>
            </div>
        </div>
    )
}

export default Header