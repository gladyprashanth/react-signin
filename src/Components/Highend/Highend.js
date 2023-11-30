import React from "react";
import "./Highend.css";

const Highend = () => {
  return (
    <div>
      <div className="container ">
        <div className="row  ">
          <div className="col-sm-6 compu1 text-light mt-3 let1 rounded-5 ">
            <h1 className="mx-3">High End Desktop Rental</h1>
            <h6 className="mx-3">
              Customized for Graphic Designers, Video Editors, Gamers and Other
              Heavy Worker.
            </h6>
            <h5 className="mx-3 mt-3">Big Tasks Want Big Machine</h5>
            <a href="#" className="btn btn-primary  btn-lg mt-5 mx-3 ">
              Learn More
            </a>
          </div>
          <div className="col-sm-1"></div>

          <div className="col-sm-5  compu2 text-dark mt-3  rounded-5 let2">
            <h6 className="mx-3">Slim & High End Laptops</h6>
            <h1 className="mx-3 mt-3">Office Laptops on Rent</h1>

            <h5 className="mx-3 ">
              Bulk Office Rental Options Available With Best Rate Guarantee
            </h5>
            <a href="#" className="btn btn-primary  btn-lg mt-3 mx-3 ">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highend;
