import React from 'react';
import './SingleProduct.css'
import Table from '../../Components/Table/Table';
import Laptopbtn from '../../Components/Laptopbtn/Laptopbtn';
import Zoomproduct from '../../Components/Zoomproduct/Zoomproduct';
import Serviceslaptop from '../../Components/Serviceslaptop/Serviceslaptop';

const SingleProduct = () => {
  return (
    <div>
      <Zoomproduct />
      <Table />
      <Laptopbtn />
      <Serviceslaptop />
    </div>
  )
}

export default SingleProduct