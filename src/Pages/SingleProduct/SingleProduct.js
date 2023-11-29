import React from 'react';
import './SingleProduct.css'
import Table from '../../Components/Table/Table';
import Laptopbtn from '../../Components/Laptopbtn/Laptopbtn';
import Zoomproduct from '../../Components/Zoomproduct/Zoomproduct';

const SingleProduct = () => {
  return (
    <div>
      <Zoomproduct />
      <Table />
      <Laptopbtn />
    </div>
  )
}

export default SingleProduct