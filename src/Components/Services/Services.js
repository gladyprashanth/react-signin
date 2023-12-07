import React from 'react';
import './Services.css';

const Services = () => {
    const cardData = [
        {
            image: "https://rentalplaza.in/wp-content/uploads/2022/08/bethemestore2-home-icon5.svg",
            title: "Best Service",
            description: "Best service guarantee PAN India"
        },
        {
            image: "https://rentalplaza.in/wp-content/uploads/2022/08/bethemestore2-home-icon1.svg",
            title: "Quality Checked",
            description: "Quality Checked Products"
        },
        {
            image: "https://rentalplaza.in/wp-content/uploads/2022/08/bethemestore2-home-icon2.svg",
            title: "PAN India",
            description: "Our delivery available PAN India"
        },
        {
            image: "https://rentalplaza.in/wp-content/uploads/2022/08/bethemestore2-home-icon3.svg",
            title: "Rental Plans",
            description: "Customized rental plans are available"
        },
        {
            image: "https://rentalplaza.in/wp-content/uploads/2022/08/bethemestore2-home-icon4.svg",
            title: "Affordable Prices",
            description: "We are available with all types range"
        },
    ];

    return (
        <div className='Services'>
            <div className='innerServices'>
                {cardData.map((card, index) => (
                    <div className='servicesCard' key={index}>
                        <div className='servicesCardImageContainer'>
                            <img
                                src={card.image}
                                alt={card.title}
                            />
                        </div>
                        <div className='servicesCard_Title'>
                            {card.title}
                        </div>
                        <div className='servicesCard_Description'>
                            {card.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
