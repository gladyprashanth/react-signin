import React, { useState } from "react";
import "./AboutRental.css";
import img_2 from "../../Assets/img_2.jpg";
import img_35 from "../../Assets/img_35.webp";
<<<<<<< Updated upstream
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiLink } from "react-icons/fi";
=======
>>>>>>> Stashed changes
import { IoMdHeartEmpty } from "react-icons/io";
import { VscOpenPreview } from "react-icons/vsc";


// import { IoMdHeartEmpty } from "react-icons/io";

const AboutRental = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };

  const desktops = [
    {
      id: 1,
      image: img_2,
      title: "Gaming Laptop-i7 10th Onward Gen -16GB RAM-512GB SSD-15.6",
      title2: "Additionally, ensure that your meta",
      label: "from",
      value: "$29.00/",
      frequency: "month",
    },
    {
      id: 2,
      image: img_35,
      title: "MacBook Air M3 on Rent | 8GB RAM | 256GB Storage on Rent",
      title2: "Additionally, ensure that your meta",
      label: "from",
      value: "$29.00/",
      frequency: "month",
    },
  ];

  return (
<<<<<<< Updated upstream
    <div>
      <div className="container back py-4 words">
        <div className="row">
          <div className="col-sm-5 mt-5 ">
            <h2 className="text-start">About Rental Plaza</h2>
            <h4 className="text-start">
              Rental Plaza, with a decade of experience, provides <br />
              comprehensive laptop <br />
              rental services.
            </h4>
          </div>
          <div className="col-sm-3 mt-5  ">
            <div
              class="card border-0 normal_1"
              style={{ width: "18rem", height: "32rem" }}
            >
               <div className="normal circle4 position-absolute ">
                                    <div className="circle4">  <MdOutlineShoppingCart /> </div>
                                    <div className="circle4">   <FiLink />  </div>
                                    <div className="circle4">  <IoMdHeartEmpty /> </div>
                                    <div className="circle4">  <VscOpenPreview /> </div>
                                </div>

              <img src={img_2} class="card-img-top " alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  MacBook Pro on Rent A1989 (2019) i7-2.8GHz-16GB SSD-512GB
                  SSD-13” Retina Display
                </h5>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
                <span className="mx-3 fs-5 heart">
                <i class="bi bi-heart"></i>

                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 mt-5">
            <div
              class="card border-0 normal_2"
              style={{ width: "18rem", height: "32rem" }}
            >
              <div className="normal circle5 position-absolute ">
                                    <div className="circle5">  <MdOutlineShoppingCart /> </div>
                                    <div className="circle5">   <FiLink />  </div>
                                    <div className="circle5">  <IoMdHeartEmpty /> </div>
                                    <div className="circle5">  <VscOpenPreview /> </div>
                                </div>
              <img src={img_35} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  Apple MacBook Pro on Rent | M2 Max chip with 12‑core CPU and
                  30‑core GPU: 33.74 cm (14.2-inch), 32GB Unified Memory, 1TB
                  SSD Storage
                </h5>

                <a href="#" class="btn btn-primary">
                  Read More
                </a>
                <span className="mx-3 fs-5 heart">
                <i class="bi bi-heart"></i>
                </span>
              </div>
            </div>
          </div>
=======
    <div className="container back py-4 words">
      <div className="row">
        <div className="col-sm-4 mt-5 ">
          <h2 className="text-start">About Rental Plaza</h2>
          <h4 className="text-start">
            Rental Plaza, with a decade of experience, provides <br />
            comprehensive laptop <br />
            rental services.
          </h4>
>>>>>>> Stashed changes
        </div>
        {/* <div className="col-sm-9  mt-5   "> */}
          {/* <div className="row "> */}
            {desktops.map((desktop) => (
              <div key={desktop.id} className="col-sm-4  ">
                <div
                  className="card desktop_card91 border-0"
                  style={{ width: "100" }}
                >
                  <div className=" circper90 d-flex ">
                    <p className="mt-2 mx-2">-17%</p>
                    <span className="fs-5 hsize09  ">
                      <IoMdHeartEmpty />
                    </span>
                    
                  </div>
                  <img
                    src={desktop.image}
                    className="pc_on "
                    alt="Desktop"
                  />
                  <h5 className="letters9 text-start">
                    {showFullText ? desktop.title : desktop.title.slice(0, 60)}
                    {!showFullText && (
                      <span
                        onClick={toggleReadMore}
                        style={{ cursor: "pointer" }}
                      >
                        {" "}
                        ...
                      </span>
                    )}
                  </h5>
                  <p className="text-start fw-lighter ">
                    {showFullText ? desktop.title2 : desktop.title.slice(60)}
                    {showFullText && (
                      <span
                        onClick={toggleReadMore}
                        style={{ cursor: "pointer" }}
                      >
                        {" "}
                        ...
                      </span>
                    )}
                  </p>

                  <h6 className="text-start" key={desktop.id}>
                    {desktop.label}{" "}
                    <span className="fw-bold">{desktop.value}</span>{" "}
                    {desktop.frequency}
                  </h6>
                </div>
                
              </div>
            ))}
          {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default AboutRental;
