import React from 'react';
import './AdsHeader.css';

const AdsHeader = () => {
    const adsHeaderContent = [
        {
            id: 1,
            text: 'PAN India Desktop Rentals: Check out',
            linkText: '@rentalplaza.in',
        },
        // {
        //     id: 1,
        //     text: 'Nationwide Server Rentals: Explore in for PAN India Solutions',
        //     linkText: '@rentalplaza.in',
        // },
        // {
        //     id: 1,
        //     text: 'Rent Laptops Across India: for Top-notch Choices',
        //     linkText: '@rentalplaza.in',
        // },
    ];

    return (
        <div className='AdsHeader'>
            {adsHeaderContent.map((item) => (
                <div key={item.id}>
                    {item.text}
                    <span>{item.linkText}</span>
                </div>
            ))}
        </div>
    );
};

export default AdsHeader;
