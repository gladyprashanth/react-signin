import React from 'react';
import './BottomHeader.css';

const BottomHeader = () => {
    const bottomHeaderOptions = [
        {
            icon: "https://www.svgrepo.com/show/510951/desktop-tower.svg",
            optionName: "Desktops",
            dropDownMenu: [
                "Office Desktops",
                "High End Desktops",
                "Gaming Desktops",
            ]
        },
        {
            icon: "https://www.svgrepo.com/show/529662/laptop.svg",
            optionName: "Laptops",
            dropDownMenu: [
                "Office Laptops",
                "Gaming Laptops",
                "Gaming Laptops",
            ]
        },
        {
            icon: "https://www.svgrepo.com/show/509722/apple-inc.svg",
            optionName: "Apple",
            dropDownMenu: [
                "MacBook",
                "iMac",
            ]
        },
    ];

    const topHeaderOptions = [
        {
            title: "About",
            dropDownMenu: [
                "Why Rentals",
                "What do we do?",
                "Who We Are",
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
        <div className='BottomHeader'>
            <div className='BottomHeader_inner_container'>
                {bottomHeaderOptions.map((option, index) => (
                    <div key={index} className='BottomHeader_options'>
                        <div className='BottomHeader_options_image_container'>
                            <img src={option.icon} className='BottomHeader_options_image' alt={option.optionName} />
                        </div>
                        <div>{option.optionName}</div>
                        <div className='BottomHeader_options_dropdown_image_container'>
                            <img src='https://www.svgrepo.com/show/522521/down-2.svg' className='BottomHeader_options_image' alt='Dropdown' />
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default BottomHeader;
