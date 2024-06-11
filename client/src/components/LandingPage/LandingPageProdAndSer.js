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
              "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                      "https://images.pexels.com/photos/314937/pexels-photo-314937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt="service"
                  />
                </div>
                <div className="service-details">
                  <p className="service-name">Green Roof</p>
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
                      "https://mlovkzekrrny.i.optimole.com/cb:1Hzz.1ca7/w:320/h:180/q:mauto/f:best/https://www.americanhomecontractors.com/wp-content/uploads/2021/12/tesla-solar-roof-close.jpg"
                    }
                    alt="service"
                  />
                </div>
                <div className="service-details">
                  <p className="service-name">Solar Roofing (Tesla)</p>
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
                      "https://images.pexels.com/photos/5691639/pexels-photo-5691639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt="service"
                  />
                </div>
                <div className="service-details">
                  <p className="service-name">Home Building</p>
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
                      "https://images.pexels.com/photos/9875418/pexels-photo-9875418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt="service"
                  />
                </div>
                <div className="service-details">
                  <p className="service-name">Eng. Sevice (Solar/Insurance)</p>
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
                      "https://images.pexels.com/photos/9875418/pexels-photo-9875418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt="service"
                  />
                </div>
                <div className="service-details">
                  <p className="service-name">Nono</p>
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
                      "https://images.pexels.com/photos/9875418/pexels-photo-9875418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt="service"
                  />
                </div>
                <div className="service-details">
                  <p className="service-name">Solar Property Guarantee</p>
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
                      "https://images.pexels.com/photos/9875418/pexels-photo-9875418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt="service"
                  />
                </div>
                <div className="service-details">
                  <p className="service-name">One Click Roof</p>
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
                      "https://images.pexels.com/photos/9875418/pexels-photo-9875418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt="service"
                  />
                </div>
                <div className="service-details">
                  <p className="service-name">Detach & Reset Solar</p>
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
                      "https://images.pexels.com/photos/9875418/pexels-photo-9875418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt="service"
                  />
                </div>
                <div className="service-details">
                  <p className="service-name">Roofing in a Box</p>
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
