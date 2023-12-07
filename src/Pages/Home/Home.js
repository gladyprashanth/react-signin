import React from 'react';
import './Home.css'
import Bestservices from '../../Components/Bestservices/Bestservices';
import ITEquipment from '../../Components/ITEquipment/ITEquipment';
import AboutRental from '../../Components/AboutRental/AboutRental';
import WhyChoose from '../../Components/WhyChoose/WhyChoose';
import Satisfied from '../../Components/Satisfied/Satisfied';
import BannerHome from '../../Components/BannerHome/BannerHome';
import Welook from '../../Components/Welook/Welook';
import Form from '../../Components/Form/Form';
import Ourpresence from '../../Components/Ourpresence/Ourpresence';
import Highend from '../../Components/Highend/Highend';
import Toprated from '../../Components/Toprated/Toprated';
import Toprated2 from '../../Components/Toprated2/Toprated2';
import Timer from '../../Components/Timer/Timer';
import BannerCarousel from '../../Components/BannerCarousel/BannerCarousel';
import Services from '../../Components/Services/Services';
import Equipments from '../../Components/Equipments/Equipments';


const Home = () => {
  return (
    <div>
      <BannerHome />
      {/*<BannerCarousel/> */}
      {/*<Bestservices /> */}

      {/*Reworked the Best Services due to alignment and mobile responsive was not good */}
      <Services /> {/*Chandru */}

      <ITEquipment /> {/*Not good in mobile responsive */}
      {/*<Equipments/> */} {/*Working */}
      <Highend />
      <Toprated />
      <Timer />
      <Toprated2 />
      <AboutRental />
      <WhyChoose />
      <Satisfied />
      <Welook />
      <Form />
      <Ourpresence />
    </div>
  )
}

export default Home