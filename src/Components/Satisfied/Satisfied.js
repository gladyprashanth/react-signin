import React from 'react'
import "./Satisfied.css"
import img_7 from "../../Assets/img_7.svg";
import img_8 from "../../Assets/img_8.png";
import img_9 from "../../Assets/img_9.png";
import img_10 from "../../Assets/img_10.png";
import img_11 from"../../Assets/img_11.png";
import img_12 from "../../Assets/img_12.png";
import img_13 from"../../Assets/img_13.png";
import img_18 from "../../Assets/img_18.png";
import { FaStar } from "react-icons/fa6";

const Satisfied = () => {
    const cardData = [
        { id: 1,
         title1: "saurav bhardwaj",
         text1:"2023-11-18",
         text: "Excellent customer service",
         imageUrl: img_8,
         imageUrl1: img_18
        },
        { id: 2,
             title1: "Kuber Sondhi",
             text1:"2023-11-16", 
             text: "Dell is very well done",
              imageUrl:img_9 ,
              imageUrl1: img_18
            },
        { id: 3,
            title1: "Jaskaran Chabba",
            text1:"2023-11-13",
             text: "Staff are kind and gud . Gud experience.",
              imageUrl: img_10 ,
              imageUrl1: img_18
            },
        
      ];

      const cardData2 = [
        { id: 1,
            title1: "supar kumar",
            text1:"2023-11-11",
         text: "Laptops of rental plaza are very good👍",
          imageUrl: img_11,
          imageUrl1: img_18 
        },
        { id: 2,
            title1: "Just us events & m...",
            text1:"2023-11-11",
             text: "Top rental service for laptops desktops in Chandigarh",
              imageUrl: img_12 ,
              imageUrl1: img_18 
            },
        { id: 3,
            title1: "Dev Parkash",
            text1:"2023-11-10",
             text: "One of best place to buy second hand laptops...staff is very cooperative",
              imageUrl: img_13,
              imageUrl1: img_18  
            },
        // Add more card data as needed
      ];
  return (
    <div>
      <div className="container-fluid desi">
<div className="container ">
<div className="row">
            <div className="col-sm-12">
              <h1 className="text-center fs-2 mt-5">Satisfied customers</h1>
            </div>

            <div className="col-sm-3 mt-5">
              <h3>Excellent</h3>
              <span className="stars fs-5 text-warning">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <p className='text-start' >Based on 66 reviews</p>
              <img className="img-fluid w-50" src={img_7} alt="google logo" />
            </div>
{/* caroseal test start */}
            <div className="col-sm-9 mt-5">
              


<div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="row">

        <div className="row">
      {cardData.map(card => (
        <div key={card.id} className="col-lg-4">
          <div className="card border-0" style={{ width: '18rem' , height:"13rem" }}>
            <div className="paral d-flex">
            <img src={card.imageUrl} className="card-img-top w-25" alt={card.title} />
            <div className="name">
            <h6 className="card-title">{card.title1}</h6>
            <p className="card-text  ">{card.text1}</p>
            </div>
            <img src={card.imageUrl1} className="card-img-top w-25" alt={card.title} />
            </div>
            
            <div className="card-body">
              {/* <h5 className="card-title">{card.title}</h5> */}
              <span className="stars fs-5 text-warning  ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <p className="card-text text-start ">{card.text}</p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
      ))}
    </div>

       
       
      </div>
    </div>
    <div className="carousel-item">
      <div className="row">
        
        
      <div className="row">
      {cardData2.map(card => (
        <div key={card.id} className="col-lg-4">
          <div className="card border-0 " style={{ width: '18rem', height:"13rem" }}>
          <div className="paral d-flex">
            <img src={card.imageUrl} className="card-img-top w-25" alt={card.title} />
            <div className="name">
            <h6 className="card-title">{card.title1}</h6>
            <p className="card-text  ">{card.text1}</p>
            </div>
            <img src={card.imageUrl1} className="card-img-top w-25 text-end " alt={card.title} />
            </div>
            <div className="card-body">
              {/* <h5 className="card-title">{card.title}</h5> */}
              <span className="stars fs-5 text-warning">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <p className="card-text text-start">{card.text}</p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
      ))}
    </div>


      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>




            </div>
    {/*carosa test end  */}
          </div>
          <div className="row">
            <div className="col-sm-5">

            </div>
                <div className="col-3">
            <a href="#" className="btn btn-primary  btn-lg mt-5 ">Write Review</a>

            </div>
          </div>

          </div>
          </div>
    </div>
  )
}

export default Satisfied