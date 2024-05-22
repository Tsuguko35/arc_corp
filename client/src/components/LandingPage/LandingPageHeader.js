import React, { useEffect, useRef, useState } from "react";
import "../../styles/landingPageHeader.css";

import backgroundImage from "../../assets/images/LandingPage/headerBackground2.png";
import backgroundImage2 from "../../assets/svg/1.svg";
import backgroundImage3 from "../../assets/images/LandingPage/headerBackground3.jpg";
import backgroundImage4 from "../../assets/svg/3.svg";

import video1 from "../../assets/videos/LandingPage/landingVideo1.mp4";
import video2 from "../../assets/videos/LandingPage/landingVideo2.mp4";
import video3 from "../../assets/videos/LandingPage/landingVideo3.mp4";

import * as faIcons from "react-icons/fa";

import InfiniteCarousel from "react-leaf-carousel";
import { Link } from "react-router-dom";

function LandingPageHeader() {
  const backgroundImages = [
    backgroundImage,
    backgroundImage2,
    backgroundImage3,
    backgroundImage4,
  ];

  const imageRef = useRef(null);

  // const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // const videoRef1 = useRef(null);
  // const videoRef2 = useRef(null);
  // const videoRef3 = useRef(null);
  // const videoSources = [video1, video2, video3];

  // const changeVideo = () => {
  //   setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
  // };

  // const handleVideoEnded = () => {
  //   changeVideo();
  // };

  // useEffect(() => {
  //   switch (currentVideoIndex) {
  //     case 0:
  //       videoRef1.current.play();
  //       break;
  //     case 1:
  //       videoRef2.current.play();
  //       break;
  //     case 2:
  //       videoRef3.current.play();
  //       break;
  //   }
  // }, [currentVideoIndex]);

  return (
    <header id="landingPageHeader" className="landingPageHeader">
      <div className="wrapper">
        <div className="overlay"></div>
        <div className="text-content">
          <p className="header-text">Coming Soon</p>
          <p className="sub-text">
            Our website is under construction, but we are preparing something
            amazing and exciting for you. Please check back soon for updates.
          </p>

          <div className="socials">
            <Link
              to={
                "https://www.facebook.com/profile.php?id=61559432554065&mibextid=qi2Omg&rdid=kdAAkPtlpB6fv6K9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F9tLwJiQk5u9Engff%2F%3Fmibextid%3Dqi2Omg"
              }
              target="_blank"
              className="icon-container"
            >
              <faIcons.FaFacebookF />
            </Link>
            {/* <Link
            to={"https://www.instagram.com/arcroofingcorp/"}
            target="_blank"
            className="icon-container"
          >
            <faIcons.FaInstagram />
          </Link> */}
            {/* <Link className="icon-container">
            <faIcons.FaTwitter />
          </Link> */}
          </div>
        </div>
        <div className="slideshow">
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
          </div>
          {/* {videoSources &&
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
            ))} */}
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
