import React from 'react';
import './Equipments.css'
import { Link } from 'react-router-dom';

const Equipments = () => {
    return (
        <div className='Equipments_container'>
            <div className='Equipments_container_card'>
                <div className='Equipments_container_card_contents'>
                    <h3>LAPTOP ON RENT</h3>
                    <div>Find the perfect laptop for your</div>
                    <Link>Learn More</Link>
                </div>
                <div className='Equipments_image_container'><img
                    src='https://rentalplaza.in/wp-content/uploads/2023/08/1-3.png'
                    alt=''
                /></div>
            </div>
        </div>
    )
}

export default Equipments