import React, { useState, useEffect } from 'react';
import './AdsHeader.css';

const AdsHeader = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const adsHeaderContent = [
        {
            id: 1,
            text: 'PAN India Desktop Rentals: Check out',
            linkText: '@rentalplaza.in',
        },
        {
            id: 2,
            text: 'Nationwide Server Rentals: Explore in for PAN India Solutions',
            linkText: '@rentalplaza.in',
        },
        {
            id: 3,
            text: 'Rent Laptops Across India: for Top-notch Choices',
            linkText: '@rentalplaza.in',
        },
    ];

    useEffect(() => {
        // Set an interval to update the currentIndex every 2 seconds
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % adsHeaderContent.length);
        }, 2000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [adsHeaderContent.length]);

    return (
        <div className="AdsHeader">
            <div key={adsHeaderContent[currentIndex].id}>
                {adsHeaderContent[currentIndex].text}
                <span>{adsHeaderContent[currentIndex].linkText}</span>
            </div>
        </div>
    );
};

export default AdsHeader;
