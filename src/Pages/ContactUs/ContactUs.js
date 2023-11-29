import React from "react";
import "./ContactUs.css";

import cont from "../../Assets/cont.svg";
import l1 from "../../Assets/loca1.svg";
import l2 from "../../Assets/loca2.svg";
import l3 from "../../Assets/loca3.svg";

import tele from '../../Assets/telephone.svg'

const ContactUs = () => {
  const cardData = [
    {
      image: l1,
      title: "Address",
      subtitle1: "Rental Plaza",
      subtitle2: "SCO 68, Second Floor, Sector 20C, CHANDIGARH 160019",
    },
    {
      image: l2,
      title: "OPENING HOURS",
      subtitle1: "HOURS:",
      workhrs: "Mon-Sat: 10:00 - 19:00",
      leave: "Sunday: Closed",
    },
    {
      image: l3,
      title: "Contact",
      mobnum: "9790447694 | 9080100345",
      mail1: "info@rentalplaza.in",
      mail2: "pcrentalindia@gmail.com",
    },
    // Add more objects for additional cards if needed
  ];
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h1>
              Contact <span className="text-primary ">with us</span>{" "}
            </h1>
            <h5 className="text-primary mt-5">
            <img src={tele} className="" alt="" />
              <span className="mx-2">9073927182 </span>
            </h5>
            <h5 className="text-primary mt-3">
              <img src={tele} alt="" />
              <span className="mx-2">9073927182 </span>
            </h5>

            <div class="form-box ">
              <h1 className="write">Have a question? Write to us!</h1>
              <form action="https://api.formbucket.com/f/c2K3QTQ" method="post">
                <div className="form-group mt-4 ">
                  <input
                    className="form-control"
                    id="name"
                    placeholder="Full name*"
                    type="text"
                    name="Name"
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    className="form-control"
                    id="phone"
                    placeholder="Phone*"
                    type="number"
                    name="Phone"
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    className="form-control"
                    id="phone"
                    placeholder="E-mail address*"
                    type="email"
                    name="Email"
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    id="message"
                    name="Message"
                    placeholder="Your messages..."
                    defaultValue={""}
                  />
                </div>
                <input
                  className="btn btn-primary mt-3"
                  type=""
                  defaultValue="Send a message"
                />
              </form>
            </div>
          </div>
          <div className="col-sm-8 mt-5">
            <img src={cont} className="img-fluid" alt="" />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-12">
            <h1>
              We are here <span className="text-primary">for you</span>
            </h1>
            <p>
              We warmly invite you to visit our office and experience our
              exceptional services firsthand. At Rental Plaza, we take pride in
              providing top-quality technology solutions for your business
              needs. Whether you’re looking for high-end desktops, gaming
              laptops, or any other IT equipment, our office is the perfect
              place to explore our extensive range of offerings.
            </p>
          </div>
        </div>

        <div className="row">
          {cardData.map((data, index) => (
            <div className="col-sm-4  mt-3" key={index}>
              <div className="card " style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title fs-1">
                    <div className="beat-container">
                      <img src={data.image} alt="" className="image-beat" />
                    </div>
                  </h5>
                  <h3 className="card-subtitle mb-2 ">{data.title}</h3>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {data.subtitle1}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {data.subtitle2}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {data.workhrs}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {data.leave}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {data.mobnum}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {data.mail1}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {data.mail2}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-sm-12" style={{ width: "100%", marginTop: 60 }}>
            <iframe1
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
              width="100%"
              height={500}
              frameBorder={0}
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
