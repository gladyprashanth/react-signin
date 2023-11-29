import React from 'react';
import './TopHeader.css'
import { SlArrowDown } from "react-icons/sl";

const TopHeader = () => {
    const topHeaderTitle = [{
        title: "Best Rental Guarantee PAN India"
    }];

    const topHeaderOptions = [
        {
            title: "About",
            dropDownMenu: [
                "Why Rentals",
                "What do we do?",
                "Who We Are"
            ]
        },
        {
            title: "Services",
            dropDownMenu: [
                "Laptop on Rent",
                "Computer on Rent",
                "MacBook on Rent"
            ]
        },
        {
            title: "Locations",
            dropDownMenu: [
                "Laptop on Rent in Delhi",
                "Laptop on Rent in Chennai",
                "Laptop on Rent in Banglore"
            ]
        },
        {
            title: "Blog",
            dropDownMenu: [
                
            ]
        },
        {
            title: "Contact",
            dropDownMenu: [
                
            ]
        },
    ];

    return (
        <div className='TopHeader'>
            <div className='topHeader_Title'>
                {/* Render the title */}
                {topHeaderTitle.map((item, index) => (
                    <div key={index}>{item.title}</div>
                ))}
            </div>

            {/* Render the options dynamically */}
            <div className='dropdowns'>
                {topHeaderOptions.map((option, index) => (
                    <div key={index} className="dropdown">
                        <button className="dropdown-button">
                            <span>{option.title}</span>
                            <span className='dropdown-button-icon'>{option.dropDownMenu[0] !== "" ? <SlArrowDown /> : null}</span>
                        </button>
                        <div className="dropdown-menu">
                            {option.dropDownMenu.map((menuItem, menuItemIndex) => (
                                <button key={menuItemIndex}>{menuItem}</button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopHeader;
