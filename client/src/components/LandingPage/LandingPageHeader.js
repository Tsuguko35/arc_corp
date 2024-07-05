import React, { useEffect, useRef, useState } from "react";
import "../../styles/landingPageHeader.css";

import * as fiIcons from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import InfiniteCarousel from "react-leaf-carousel";

function LandingPageHeader() {
  const navigate = useNavigate();

  const backgroundImages = [
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716590055/Arc_Landing_Page/Header/j27owsqkjy7d0tvyvehr.webp",
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716590056/Arc_Landing_Page/Header/wy43n8nicxheh7afc3rk.webp",
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716590055/Arc_Landing_Page/Header/vkxrlivhk2fwzwichavq.webp",
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716590055/Arc_Landing_Page/Header/xcjdtwd2qlqhobcs9s7f.webp",
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

  const videoSources = [
    "https://res.cloudinary.com/dkwgg59ur/video/upload/v1720133028/Arc_Landing_Page/Header/Videos/wwkm8e34fc7olms9gwac.mp4",
    "https://res.cloudinary.com/dkwgg59ur/video/upload/v1720133042/Arc_Landing_Page/Header/Videos/f1t1qkwe8g8d8g3kawpl.mp4",
    "https://res.cloudinary.com/dkwgg59ur/video/upload/v1720133033/Arc_Landing_Page/Header/Videos/bkuzgroovlexkyeufgsu.mp4",
    "https://res.cloudinary.com/dkwgg59ur/video/upload/v1720133031/Arc_Landing_Page/Header/Videos/tvvtmlmy079zqao0aqgx.mp4",
    "https://res.cloudinary.com/dkwgg59ur/video/upload/v1720133028/Arc_Landing_Page/Header/Videos/nlt5hc6rzb9bp2v8hswy.mp4",
    "https://res.cloudinary.com/dkwgg59ur/video/upload/v1720133027/Arc_Landing_Page/Header/Videos/ztzygsawojudgc6ysvd7.mp4",
    "https://res.cloudinary.com/dkwgg59ur/video/upload/v1720133027/Arc_Landing_Page/Header/Videos/ksrpqxpcwzkvvjqfjrpo.mp4",
  ];

  const videoRefs = useRef(
    Array(videoSources.length)
      .fill()
      .map(() => React.createRef())
  );

  const changeVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
  };

  const handleVideoEnded = () => {
    changeVideo();
  };

  useEffect(() => {
    videoRefs.current.forEach((ref, index) => {
      if (index === currentVideoIndex) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    });
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
                ref={videoRefs.current[index]}
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
