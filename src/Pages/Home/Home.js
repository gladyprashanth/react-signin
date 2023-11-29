import React from 'react';
import './Home.css'
import Bestservices from '../../Components/Bestservices/Bestservices';
import ITEquipment from '../../Components/ITEquipment/ITEquipment';

const Home = () => {
  return (
    <div>
      <Bestservices />
      <ITEquipment />
    </div>
  )
}

export default Home