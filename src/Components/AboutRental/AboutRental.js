import React from "react";
import "./AboutRental.css";
import img_2 from "../../Assets/img_2.jpg";
import img_3 from "../../Assets/img_3.jpg";
import { IoMdHeartEmpty } from "react-icons/io";

const AboutRental = () => {
  return (
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
              class="card border-0"
              style={{ width: "18rem", height: "32rem" }}
            >
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
              class="card border-0"
              style={{ width: "18rem", height: "32rem" }}
            >
              <img src={img_3} class="card-img-top" alt="..." />
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
        </div>
      </div>
    </div>
  );
};

export default AboutRental;
