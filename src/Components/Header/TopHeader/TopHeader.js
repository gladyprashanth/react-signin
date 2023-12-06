import React, { useEffect } from 'react';
import './TopHeader.css'
import { RiArrowDropDownLine } from 'react-icons/ri';

const TopHeader = () => {
    useEffect(() => {
        // Get the navbar after the component mounts
        const navbar = document.getElementById('navbar');
        if (navbar) {
            const sticky = navbar.offsetTop;

            // Add the sticky class to the navbar when you reach its scroll position.
            // Remove "sticky" when you leave the scroll position
            function handleScroll() {
                if (window.scrollY >= sticky) {
                    navbar.classList.add('sticky');
                } else {
                    navbar.classList.remove('sticky');
                }
            }

            // Attach the event listener
            window.addEventListener('scroll', handleScroll);

            // Cleanup the event listener when the component is unmounted
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []); // Empty dependency array ensures the effect runs only once after mount

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
            <nav>
                <div className='innerHeader'>
                    {topHeaderTitle.map((item, index) => (
                        <div className='innerHeader_title' key={index}>{item.title}</div>
                    ))}
                    <ul>
                        {topHeaderOptions.map((item, index) => (
                            <li key={index}>
                                <div
                                    className='dropdownOptionTitle'
                                    onMouseEnter={() => document.querySelector('.contentBody').classList.add('blur')}
                                    onMouseLeave={() => document.querySelector('.contentBody').classList.remove('blur')}
                                >
                                    {item.title}
                                    {item.dropDownMenu.length === 0 ? null : <div><RiArrowDropDownLine /></div>}
                                </div>
                                {item.dropDownMenu.length > 0 && (
                                    <ul
                                        className='dropdown'
                                        onMouseEnter={() => document.querySelector('.contentBody').classList.add('blur')}
                                        onMouseLeave={() => document.querySelector('.contentBody').classList.remove('blur')}
                                    >
                                        {item.dropDownMenu.map((menuItem, menuItemIndex) => (
                                            <li key={menuItemIndex}><div>{menuItem}</div></li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default TopHeader;
