import React, { useEffect, useState } from "react";
import "../../styles/landingPageHeader.css";

import backgroundImage from "../../assets/images/LandingPage/headerBackground.png";
import backgroundImage2 from "../../assets/svg/1.svg";
import backgroundImage3 from "../../assets/svg/2.svg";
import backgroundImage4 from "../../assets/svg/3.svg";

import backgroundVideo from "../../assets/videos/LandingPage/backgroundVideo.mp4";

function LandingPageHeader() {
  const backgroundImages = [
    backgroundImage,
    backgroundImage2,
    backgroundImage3,
    backgroundImage4,
  ];

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [backgroundImages.length]);
  return (
    <header id="landingPageHeader" className="landingPageHeader">
      <div className="wrapper">
        <div className="overlay"></div>
        <div className="text-content">
          <p className="header-text">
            Coming <span style={{ color: "#DCDCDC" }}>Soon</span>
          </p>
          <p className="sub-text">
            Our website is under construction, but we are preparing something
            amazing and exciting for you. Please check back soon for updates.
          </p>
        </div>
        <div className="slideshow">
          {backgroundImages.map((image, index) => (
            <img
              key={`Slide ${index}`}
              src={image}
              alt={`Slide ${bgIndex}`}
              className="background-image"
              style={{ transform: `translateX(${100 * (index - bgIndex)}%)` }}
            />
          ))}
        </div>
        <div className="bottom-details">
          <span className="outside">
            <span className="inside"></span>
          </span>
        </div>
      </div>
    </header>
  );
}

export default LandingPageHeader;
