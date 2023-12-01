import React, { useState } from 'react';
import './ITEquipment.css';
import LaptopImage from '../../Assets/laptop_1.webp';
import Desktop from '../../Assets/laptop_2.webp';
import Mackbook from '../../Assets/laptop_3.webp';
import Server from '../../Assets/laptop_4.webp';
import Printer from '../../Assets/laptop_5.webp';
import Apple from '../../Assets/laptop_6.webp';

const equipmentData = [
  {
    title: 'LAPTOP ON RENT',
    description: 'Find the perfect laptop for your rental needs',
    image: LaptopImage,
  },
  {
    title: 'DESKTOP ON RENT',
    description: 'Discover the ideal computer for your rental needs',
    image: Desktop,
  },
  {
    title: 'MACBOOK ON RENT',
    description: 'Rent MacBooks IMAC DESKTOP for your needs',
    image: Mackbook,
  },
  {
    title: 'SERVER ON RENT',
    description: 'Get servers on rent. Reliable and customizable solution',
    image: Server,
  },
  {
    title: 'PRINTER ON RENT',
    description: 'Need a printer? Rent one with ease. Affordable options',
    image: Printer,
  },
  {
    title: 'APPLE IMAC ON RENT',
    description: 'Wide Range of iMac Options Available At Rental Plaza',
    image: Apple,
  },
  // Add more objects for other equipment types
];

const ITEquipment = () => {
  const initialContent = '';
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleReadMore = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-sm-12'>
                <p className='fs-4'>Complete IT Equipment Rentals</p>
                <h1 className='text-center'>Our <span className='text-primary'>Services </span></h1>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          {equipmentData.map((equipment, index) => (
            <div key={index} className="col-sm-6">
              <div className="card mb-3 first bg_box rounded-4 border-0">
                <div className="row g-0">
                  <div className="col-sm-6">
                    <div className="card-body">
                      <h4 className="text-start fw-normal">
                        <a className="on_2 text-black " href="">
                          {equipment.title}
                        </a>
                      </h4>
                      <div>
                        <p className="text-start card-text text-black mt-3">
                          {showFullContent
                            ? equipment.description
                            : `${equipment.description.slice(0, equipment.description.length / 2)}`}
                          <button className="border-0" onClick={toggleReadMore}>
                            {showFullContent ? '...' : '...'}
                          </button>
                        </p>
                      </div>
                      <p className="text-start fs-5 mt-3">
                        <a className="on_3" href="">
                          Learn More
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 ">
                    <a href="">
                      <img src={equipment.image} className="img-fluid p-3 vg_desk1" alt="..." />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ITEquipment;
