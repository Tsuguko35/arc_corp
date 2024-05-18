import React, { useRef } from "react";
import "../../styles/landingPageHeader.css";

import backgroundImage from "../../assets/images/LandingPage/headerBackground.png";
import backgroundImage2 from "../../assets/svg/1.svg";
import backgroundImage3 from "../../assets/svg/2.svg";
import backgroundImage4 from "../../assets/svg/3.svg";

import backgroundVideo from "../../assets/videos/LandingPage/backgroundVideo.mp4";

import * as fiIcons from "react-icons/fi";
import { Link } from "react-router-dom";

import InfiniteCarousel from "react-leaf-carousel";

function LandingPageHeader() {
  const backgroundImages = [
    backgroundImage,
    backgroundImage2,
    backgroundImage3,
    backgroundImage4,
  ];

  const imageRef = useRef(null);

  return (
    <header id="landingPageHeader" className="landingPageHeader">
      <div className="wrapper">
        <div className="overlay"></div>
        <div className="text-content">
          <p className="header-text">“We Build America”</p>
          <p className="sub-text">
            Elevating Your Home's Protection with Precision Construction
          </p>
          <div className="stack">
            <Link to={"/RequestQuote"}>Request a Quote</Link>
            <div className="quick-action-group">
              <fiIcons.FiPhone />
              <fiIcons.FiMail />
            </div>
          </div>
        </div>
        <div className="slideshow">
          {backgroundImages && (
            <InfiniteCarousel
              autoCycle={true}
              cycleInterval={6000}
              arrows={false}
              dots={false}
              slidesToShow={1}
              incrementalSides={true}
              slidesSpacing={0}
              animationDuration={1000}
            >
              {backgroundImages.map((image, index) => (
                <img
                  loading="lazy"
                  key={`Slide ${index}`}
                  src={image}
                  alt={`Slide ${index}`}
                  className="background-image"
                  ref={imageRef}
                />
              ))}
            </InfiniteCarousel>
          )}
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
