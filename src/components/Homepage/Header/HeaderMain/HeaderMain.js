import React from "react";
import "./HeaderMain.css";
import banner from "../../../../img/banner.png";

const HeaderMain = () => {
  return (
    <main className="header-main">
      <div className="container px-lg-0">
        <div className="row">
          <div className="col-lg-6">
            <div className="banner-text">
              <h1>
                We Build <span className="d-block">Your Dream</span>
              </h1>
              <p>
                Online Easte Agency, the mordern way to sell your own home, You
                can use Griffin Residential to market your property
              </p>
              <button className="">Booking</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-img">
              <img className="img-fluid" src={banner} alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;
