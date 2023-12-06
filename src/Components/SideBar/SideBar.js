import React from 'react';
import './SideBar.css'

const SideBar = () => {
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
        {
            icon: "http://rentalplaza.in/wp-content/uploads/2023/08/5.png",
            optionName: "Apple",
            dropDownMenu: [
                "MacBook",
                "iMac",
            ]
        },
        {
            icon: "https://rentalplaza.in/wp-content/uploads/2023/10/Untitled-design-2023-10-16T141143176.png",
            optionName: "Apple",
            dropDownMenu: [
                "MacBook",
                "iMac",
            ]
        },
    ];
    return (
        <div>

            <button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></button>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel"></h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">

                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                {bottomHeaderOptions.map((option, index) => (
                                    <div key={index} className='BottomHeader'>
                                        <div className='BottomHeader_options_image'>
                                            <img src={option.icon} className='BottomHeaders_options_image' alt={option.optionName} />
                                        </div>
                                        <div>{option.optionName}</div>
                                        <div className='BottomHeader_dropdown'>
                                            <img src='https://www.svgrepo.com/show/522521/down-2.svg' className='BottomHeaderss_options_images' alt='Dropdown' />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>





                </div>
            </div>
        </div>
    )
}

export default SideBar