import React from 'react'
import './Bestservices.css'
import icon1 from '../../Assets/bethemestore2-icon1.svg';
import icon2 from '../../Assets/bethemestore-icon2.svg';
import icon3 from '../../Assets/bethemestore-icon3.svg';
import icon4 from '../../Assets/bethemestore-icon4.svg';
import icon5 from '../../Assets/bethemestore-icon5.svg';


const iconData = [
    {
      image: icon5,
      title: 'Best Service',
      description: 'Best service guarantee PAN India',
    },
    {
      image: icon1,
      title: 'Quality Checked',
      description: 'Quality Checked Products',
    },
    {
      image: icon2,
      title: 'PAN India ',
      description: 'Our delivery available PAN India',
    },
    {
      image: icon3,
      title: 'Rental Plans ',
      description: 'Customized rental plans are available',
    },
    {
      image: icon4,
      title: 'ServicAffordable Pricese',
      description: 'We are available with all types range',
    },
  ];
  

const Bestservices = () => {
  return (
    <div>
  <div className="container mt-5">
      <div className="row ">
        {iconData.map((icon, index) => (
          <div key={index} className="col-sm-2 mx-3 text-center">
            <figure className="zoom ">
              <img src={icon.image} alt={icon.title} />
            </figure>
            <h5 className='mt-3 service '>{icon.title}</h5>
            <p>{icon.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Bestservices