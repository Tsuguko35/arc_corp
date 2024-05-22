import React, { useEffect, useRef, useState } from "react";
import "../../styles/landingPageHeader.css";

import backgroundImage from "../../assets/images/LandingPage/headerBackground.png";
import backgroundImage2 from "../../assets/svg/1.svg";
import backgroundImage3 from "../../assets/svg/2.svg";
import backgroundImage4 from "../../assets/svg/3.svg";

import video1 from "../../assets/videos/LandingPage/landingVideo1.mp4";
import video2 from "../../assets/videos/LandingPage/landingVideo2.mp4";
import video3 from "../../assets/videos/LandingPage/landingVideo3.mp4";

import * as fiIcons from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import InfiniteCarousel from "react-leaf-carousel";

function LandingPageHeader() {
  const navigate = useNavigate();
  const backgroundImages = [
    backgroundImage,
    backgroundImage2,
    backgroundImage3,
    backgroundImage4,
  ];

  const imageRef = useRef(null);

  const scrollToFooter = () => {
    const navbarHeight = 100;
    const footer = document.getElementById("footerWithMessage");

    if (footer) {
      const topOffset =
        footer.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  // Video
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoSources = [video1, video2, video3];

  const changeVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
  };

  const handleVideoEnded = () => {
    changeVideo();
  };

  useEffect(() => {
    switch (currentVideoIndex) {
      case 0:
        videoRef1.current.play();
        break;
      case 1:
        videoRef2.current.play();
        break;
      case 2:
        videoRef3.current.play();
        break;
    }
  }, [currentVideoIndex]);

  return (
    <header id="landingPageHeader" className="landingPageHeader">
      <div className="wrapper">
        <div className="overlay start-slide-left"></div>
        <div className="text-content start-fade-bottom-delay">
          <p className="header-text">“We Build America”</p>
          <p className="sub-text">
            Elevating Your Home's Protection with Precision Construction
          </p>
          <div className="stack start-flip-top">
            <Link to={"/RequestQuote"}>Request a Quote</Link>
            <div className="quick-action-group">
              <fiIcons.FiPhone onClick={() => navigate(`/Contact`)} />
              <fiIcons.FiMail onClick={() => scrollToFooter()} />
            </div>
          </div>
        </div>
        {/* <div className="slideshow">
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
                  key={`Slide ${index}`}
                  src={image}
                  alt={`Slide ${index}`}
                  className="background-image"
                  role="presentation"
                  decoding="async"
                  fetchPriority="high"
                  ref={imageRef}
                />
              ))}
            </InfiniteCarousel>
          )}
        </div> */}
        <div className="slideshow">
          {videoSources &&
            videoSources.map((video, index) => (
              <video
                className={`background-image ${
                  currentVideoIndex === index ? "active" : ""
                }`}
                autoPlay={currentVideoIndex === index ? true : false}
                muted
                loop={false} // Disable loop here
                onEnded={handleVideoEnded}
                ref={
                  index === 0
                    ? videoRef1
                    : index === 1
                    ? videoRef2
                    : index === 2 && videoRef3
                }
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
