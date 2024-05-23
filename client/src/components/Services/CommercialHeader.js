import React from "react";
import "../../styles/serviceComHeader.css";
import QouteForm from "../reusable/QouteForm";

function CommercialHeader() {
  return (
    <div id="commercialHeader" className="commercialHeader">
      <div className="wrapper">
        <header className="header">
          <div className="background">
            <div className="overlay"></div>
            <img
              src={
                "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716382178/Arc_Landing_Page/Header/s1rvavbz65in9cm1bcgt.webp"
              }
              alt="Header Background"
            />
          </div>
          <div className="header-content">
            <div className="text-content start-fade-bottom">
              <p className="title">Commercial Roofing Services</p>
              <div className="description">
                Arc Roofing Corporation provides top-quality roofing services
                for property owners across the Southeastern United States. We
                are ranked as a leading roofing company and have been entrusted
                to help build and restore communities one roof at a time.
              </div>
            </div>
            <div className="form">
              <QouteForm />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default CommercialHeader;
