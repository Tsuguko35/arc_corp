import React from "react";
import "../../styles/portfolioHighlights.css";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function PortfolioHighlights() {
  return (
    <div id="portfolioHighlights" className="portfolioHighlights feature3">
      <div className="highlight-header">
        <div className="title-desc">
          <p>Ready for your Residential Home?</p>
          <p>
            Inquire now at ARC Corporation now to see home listings and many
            more services.
          </p>
        </div>
        <Link to={"/Services"}>Inquire Now</Link>
      </div>
      <div className="portfolio-carousel">
        <div className="carousel">
          <Swiper
            grabCursor={true}
            slidesPerView={1}
            loop={true}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="swiper-container"
          >
            <SwiperSlide>
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716774609/Arc_Portfolio/Projects/iwrcivqk3miqtldae5o8.webp"
                className="swiper-img"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716774609/Arc_Portfolio/Projects/tzkoerefjuupnqdkvcvi.webp"
                className="swiper-img"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716774609/Arc_Portfolio/Projects/urdgdtidlwrd1q2etfgh.webp"
                className="swiper-img"
                alt="Slide 1"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="carousel-description">
          <div className="text">
            <p>View our finest works here</p>
            <p>PORTFOLIO HIGHLIGHTS</p>
          </div>
          <Link to={"/Portfolio"}>View Portfolio</Link>
        </div>
      </div>
    </div>
  );
}

export default PortfolioHighlights;
