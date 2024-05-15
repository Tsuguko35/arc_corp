import React from "react";
import "../../styles/landingPageHeader.css";

import backgroundImage from "../../assets/images/LandingPage/headerBackground.png";

function LandingPageHeader() {
  return (
    <header id="landingPageHeader" className="landingPageHeader">
      <div className="wrapper">
        <div className="overlay">
          <div className="text-content">
            <div className="header-text">"We're Coming Soon"</div>
            <div className="sub-text">
              Expert roofing solutions to protect and enhance your home –
              launching soon!
            </div>
          </div>
        </div>
        <img src={backgroundImage} alt="" className="background-image" />
      </div>
    </header>
  );
}

export default LandingPageHeader;
