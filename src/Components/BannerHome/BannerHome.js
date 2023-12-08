import React from "react";
import './BannerHome.css'
import bannerImage from "../../Assets/first_ban.webp";
import boyimage from "../../Assets/boy.png";
import laP from "../../Assets/lap.png";
import AOS from "aos";
import "aos/dist/aos.css";



const BannerHome = () => {
  AOS.init();

  const carouselItems = [
    {
      id: 1,
      image: bannerImage,
    },
    {
      id: 2,
      image: boyimage,
    },
    {
      id: 3,
      image: laP,
    },

  ];

  return (
    <div className="container-fluid outimg mt-5">
      <div
        id="carouselExample"
        className="carousel slide sm-center img-fluid"
        data-bs-ride="carousel"
        data-bs-interval="1500"
      >
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="row">
                <div className="col-sm-12 col-md-4 text-center txt_three">

                </div>
                <div className="col-sm-12 col-md-4 ">
                  <img
                    src={item.image}
                    className="d-block ban vert-move  "
                    alt={`img-${item.id}`}
                  />
                </div>
                <div className="col-sm-12 col-md-4 logos_ram text-center">

                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default BannerHome;
