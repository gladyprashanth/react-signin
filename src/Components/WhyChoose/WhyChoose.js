import React from "react";
import "./WhyChoose.css";
import img_4 from "../../Assets/img_4.svg";
import img_5 from "../../Assets/img_5.svg";
import img_6 from "../../Assets/img_6.svg";

const WhyChoose = () => {
  const cardDataArray = [
    {
      id: 1,
      imgSrc: img_4,
      title: "Quality Equipment",
      description:
        "We offer top-of-the-line IT equipment, meticulously maintained to ensure optimal performance.",
    },

    {
      id: 2,
      imgSrc: img_5,
      title: "Cost-Efficiency",
      description:
        "We understand the importance of cost management. With Rental Plaza, you can access the latest technology.",
    },
    {
      id: 3,
      imgSrc: img_6,
      title: "Exceptional Service",
      description:
        "Our commitment to customer satisfaction is unwavering. From personalized solutions at rental plaza.",
    },
  ];

  return (
    <div>
      <div className="container-fluid black">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="text-center fs-2 mt-5">
                Why Choose Rental Plaza ?
              </h1>
              <h1 className="text-center fs-2">
                What Make Us Different From Another ?
              </h1>
            </div>
          </div>

          <div className="row mt-5">
            <div className="row">
              {cardDataArray.map((cardData) => (
                <div key={cardData.id} className="col-sm-4">
                  <div className="card" style={{ width: "22rem" }}>
                    <img
                      className="card-img-top"
                      src={cardData.imgSrc}
                      alt="Card image cap"
                      style={{ height: "100px" }}
                    />
                    <div className="card-body">
                      <h1 className="word fs-3 text-center">
                        {cardData.title}
                      </h1>
                      <p className="card-text text-center">
                        {cardData.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
