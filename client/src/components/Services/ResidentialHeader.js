import React from "react";
import "../../styles/serviceResHeader.css";
import QouteForm from "../reusable/QouteForm";

function ResidentialHeader() {
  return (
    <div id="residentialHeader" className="residentialHeader">
      <div className="wrapper">
        <header className="header">
          <div className="background">
            <div className="overlay"></div>
            <img
              src={
                "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716419845/Arc_Services/lgb1v4knafofjhdft9ra.webp"
              }
              alt="Residential Background"
            />
          </div>
          <div className="header-content">
            <div className="text-content start-fade-bottom">
              <p className="title">Residential Roofing Services</p>
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

export default ResidentialHeader;