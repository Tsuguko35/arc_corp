import React from "react";
import Slider from "react-slick";
import "../../styles/landingPageProdAndSer.css";
import * as faIcons from "react-icons/fa";
import { Link } from "react-router-dom";

function CustomNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div className={`next-arrow`} style={{ ...style }} onClick={onClick}>
      <faIcons.FaArrowRight />
    </div>
  );
}

function CustomPrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div className={`prev-arrow`} style={{ ...style }} onClick={onClick}>
      <faIcons.FaArrowRight />
    </div>
  );
}

function LandingPageProdAndSer() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div id="landingPageProdAndSer" className="landingPageProdAndSer">
      <div className="wrapper">
        <div className="background-img">
          <div className="overlay"></div>
          <img
            src={
              "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716590208/Arc_Landing_Page/Content/sbme1z3m6fl7hi259nfc.webp"
            }
            alt=""
          />
        </div>
        <div className="title">
          <div className="upper">METAL ROOF MASTER</div>
          <div className="lower">Products & Services</div>
        </div>
        <div className="reviews-container feature">
          <Slider {...settings}>
            <div className="card">
              <div className="card-content">
                <div className="display-picture">
                  <img
                    src={
                      "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716590208/Arc_Landing_Page/Content/idxnngiwtmp9zh7utvqd.webp"
                    }
                    alt="service"
                  />
                </div>
                <div className="service-details">
                  <p className="service-name">TPO Roofing</p>
                  <p className="service-description">
                    Every unit, carton and pallet will be labeled by us as
                    required. Rest easy knowing your shipments will arrive at
                    their designated fulfillment centers as scheduled and on
                    time
                  </p>
                  <div className="action">
                    <Link>READ MORE</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="display-picture">
                  <img
                    src={
                      "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716590208/Arc_Landing_Page/Content/idxnngiwtmp9zh7utvqd.webp"
                    }
                    alt="service"
                  />
                </div>
                <div className="service-details">
                  <p className="service-name">TPO Roofing</p>
                  <p className="service-description">
                    Every unit, carton and pallet will be labeled by us as
                    required. Rest easy knowing your shipments will arrive at
                    their designated fulfillment centers as scheduled and on
                    time
                  </p>
                  <div className="action">
                    <Link>READ MORE</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="display-picture">
                  <img
                    src={
                      "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716590208/Arc_Landing_Page/Content/idxnngiwtmp9zh7utvqd.webp"
                    }
                    alt="service"
                  />
                </div>
                <div className="service-details">
                  <p className="service-name">TPO Roofing</p>
                  <p className="service-description">
                    Every unit, carton and pallet will be labeled by us as
                    required. Rest easy knowing your shipments will arrive at
                    their designated fulfillment centers as scheduled and on
                    time
                  </p>
                  <div className="action">
                    <Link>READ MORE</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="display-picture">
                  <img
                    src={
                      "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716590208/Arc_Landing_Page/Content/idxnngiwtmp9zh7utvqd.webp"
                    }
                    alt="service"
                  />
                </div>
                <div className="service-details">
                  <p className="service-name">TPO Roofing</p>
                  <p className="service-description">
                    Every unit, carton and pallet will be labeled by us as
                    required. Rest easy knowing your shipments will arrive at
                    their designated fulfillment centers as scheduled and on
                    time
                  </p>
                  <div className="action">
                    <Link>READ MORE</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="display-picture">
                  <img
                    src={
                      "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716590208/Arc_Landing_Page/Content/idxnngiwtmp9zh7utvqd.webp"
                    }
                    alt="service"
                  />
                </div>
                <div className="service-details">
                  <p className="service-name">TPO Roofing</p>
                  <p className="service-description">
                    Every unit, carton and pallet will be labeled by us as
                    required. Rest easy knowing your shipments will arrive at
                    their designated fulfillment centers as scheduled and on
                    time
                  </p>
                  <div className="action">
                    <Link>READ MORE</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="display-picture">
                  <img
                    src={
                      "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716590208/Arc_Landing_Page/Content/idxnngiwtmp9zh7utvqd.webp"
                    }
                    alt="service"
                  />
                </div>
                <div className="service-details">
                  <p className="service-name">TPO Roofing</p>
                  <p className="service-description">
                    Every unit, carton and pallet will be labeled by us as
                    required. Rest easy knowing your shipments will arrive at
                    their designated fulfillment centers as scheduled and on
                    time
                  </p>
                  <div className="action">
                    <Link>READ MORE</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="display-picture">
                  <img
                    src={
                      "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716590208/Arc_Landing_Page/Content/idxnngiwtmp9zh7utvqd.webp"
                    }
                    alt="service"
                  />
                </div>
                <div className="service-details">
                  <p className="service-name">TPO Roofing</p>
                  <p className="service-description">
                    Every unit, carton and pallet will be labeled by us as
                    required. Rest easy knowing your shipments will arrive at
                    their designated fulfillment centers as scheduled and on
                    time
                  </p>
                  <div className="action">
                    <Link>READ MORE</Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default LandingPageProdAndSer;
