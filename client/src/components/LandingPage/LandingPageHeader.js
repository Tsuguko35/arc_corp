import React, { useRef, useState } from "react";
import "../../styles/landingPageHeader.css";

import backgroundImage from "../../assets/images/LandingPage/headerBackground.png";
import backgroundImage2 from "../../assets/svg/1.svg";
import backgroundImage3 from "../../assets/svg/2.svg";
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

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videoRef = useRef(null);
  const videoSources = [video1, video2, video3];

  const changeVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
  };

  const handleVideoEnded = () => {
    changeVideo();
    videoRef.current.load(); // Reload the video to update the source
    videoRef.current.play(); // Ensure the new video starts playing
  };

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
          <video
            className="background-image"
            autoPlay
            muted
            loop={false} // Disable loop here
            onEnded={handleVideoEnded}
            ref={videoRef}
          >
            <source src={videoSources[currentVideoIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
