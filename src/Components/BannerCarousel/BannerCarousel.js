import React from 'react';
import './BannerCarousel.css';

const BannerCarousel = () => {
    const imageUrl = 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/DecWRS/Teaser/1-3000-Rec-AF._CB572450286_.jpg'; // Replace with the actual image URL
    const imageDescription = 'Your image description here';

    return (
        <div className='BannerCarousel'>
            <div className='innerBannerCarousel'>
                <div className='innerBannerImageContainer'>
                    <img src={imageUrl} alt={imageDescription} />
                </div>
            </div>
        </div>
    );
};

export default BannerCarousel;
