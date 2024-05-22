import React, { useRef } from "react";
import "../../styles/landingPageHeader.css";

import * as faIcons from "react-icons/fa";

import InfiniteCarousel from "react-leaf-carousel";
import { Link } from "react-router-dom";

function LandingPageHeader() {
  const backgroundImages = [
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716382178/Arc_Landing_Page/Header/s1rvavbz65in9cm1bcgt.webp",
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716382216/Arc_Landing_Page/Header/n1aingxn1vs9kraalke4.webp",
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716382177/Arc_Landing_Page/Header/jxw4wqchrmulyll0uly1.webp",
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716382231/Arc_Landing_Page/Header/swvlbxk83mab5nqm4aja.webp",
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
