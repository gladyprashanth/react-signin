import React from 'react';
import './BottomHeader.css'
import { Link } from 'react-router-dom';

const BottomHeader = () => {

    const topHeaderOptions = [
        {
            title: "Desktops",
            dropDownMenu: [
                "Office Desktops",
                "High End Desktops",
                "Gaming Desktops"
            ]
        },
        {
            title: "Laptops",
            dropDownMenu: [
                "Office Laptops",
                "Gaming Laptops",
                "Developer Laptops",
                "WFH Laptops"
            ]
        },
        {
            title: "Apple",
            dropDownMenu: [
                "MacBook",
                "iMac",
            ]
        },
        {
            title: "Projector",
            dropDownMenu: []
        },
        {
            title: "Server",
            dropDownMenu: []
        },
        {
            title: "Workstation",
            dropDownMenu: []
        },
    ];

    return (
        <div className='BottomHeader'>
            <nav>
                <ul>
                    {topHeaderOptions.map((item, index) => (
                        <li key={index}>
                            <div className='BottomHeader_main_options'
                                onMouseEnter={() => document.querySelector('.contentBody').classList.add('blur')}
                                onMouseLeave={() => document.querySelector('.contentBody').classList.remove('blur')}
                            >
                                <div className='BottomHeader_icon_container'>
                                    <img
                                        src='https://www.svgrepo.com/show/374847/desktop-and-phone.svg'
                                    />
                                </div>
                                <div>{item.title}</div>
                                {item.dropDownMenu.length !== 0 ? <div className='BottomHeader_dropdownicon_container'>
                                    <img
                                        src='https://www.svgrepo.com/show/496796/arrow-down.svg'
                                    />
                                </div> : null}
                            </div>
                            {item.dropDownMenu.length !== 0 ?
                                <ul className="dropdown"
                                    onMouseEnter={() => document.querySelector('.contentBody').classList.add('blur')}
                                    onMouseLeave={() => document.querySelector('.contentBody').classList.remove('blur')}
                                >
                                    {item.dropDownMenu.map((subItem, subIndex) => (
                                        <li key={subIndex}><Link to={`/products/${subItem}`}>{subItem}</Link></li>
                                    ))}
                                </ul>
                                :
                                null
                            }
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default BottomHeader;



{/*
                        <li>
                        <div className='BottomHeader_main_options'>
                            <div className='BottomHeader_icon_container'><img
                                src='https://www.svgrepo.com/show/374847/desktop-and-phone.svg'
                            /></div>
                            <div>Desktop</div>
                            <div className='BottomHeader_dropdownicon_container'><img
                                src='https://www.svgrepo.com/show/496796/arrow-down.svg'
                            /></div>
                        </div>
                        <ul class="dropdown">
                            <li><div >Sub-1</div></li>
                            <li><div >Sub-2</div></li>
                            <li><div >Sub-3</div></li>
                        </ul>
                    </li>
                    */}