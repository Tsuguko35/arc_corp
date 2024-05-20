import React from "react";
import Slider from "react-slick";

import "../../styles/clientReviews.css";

import profile_img_1 from "../../assets/images/profiles/billHicks.png";

import * as mdIcons from "react-icons/md";

function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={`next-arrow`} style={{ ...style }} onClick={onClick}>
      <mdIcons.MdNavigateNext />
    </div>
  );
}

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={`prev-arrow`} style={{ ...style }} onClick={onClick}>
      <mdIcons.MdNavigateNext />
    </div>
  );
}

function ClientReviews() {
  const settings = {
    className: "center",
    infinite: true,
    dots: true,
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
    <div id="clientReviews" className="clientReviews feature">
      <div className="wrapper">
        <span className="title">What Our Clients Say About Us</span>
        <div className="reviews-container">
          <Slider {...settings}>
            <div className="card">
              <div className="card-content">
                <div className="user-details">
                  <div className="profile-picture">
                    <img src={profile_img_1} alt="User profile" />
                  </div>
                  <div className="details">
                    <p className="name">Bill Hicks</p>
                    <p className="sub">Vice President</p>
                  </div>
                </div>
                <p className="subject">It was a very good experience</p>
                <p className="review">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus nibh mauris, nec turpis orci lectus maecenas.
                  Suspendisse sed magna eget nibh in turpis. Consequat duis diam
                  lacus arcu. Faucibus venenatis felis id augue sit cursus
                  pellentesque enim arcu. Elementum felis magna pretium in
                  tincidunt. Suspendisse sed magna eget nibh in turpis.
                  Consequat duis diam lacus arcu.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="user-details">
                  <div className="profile-picture">
                    <img src={profile_img_1} alt="User profile" />
                  </div>
                  <div className="details">
                    <p className="name">Bill Hicks</p>
                    <p className="sub">Vice President</p>
                  </div>
                </div>
                <p className="subject">It was a very good experience</p>
                <p className="review">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus nibh mauris, nec turpis orci lectus maecenas.
                  Suspendisse sed magna eget nibh in turpis. Consequat duis diam
                  lacus arcu. Faucibus venenatis felis id augue sit cursus
                  pellentesque enim arcu. Elementum felis magna pretium in
                  tincidunt. Suspendisse sed magna eget nibh in turpis.
                  Consequat duis diam lacus arcu.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="user-details">
                  <div className="profile-picture">
                    <img src={profile_img_1} alt="User profile" />
                  </div>
                  <div className="details">
                    <p className="name">Bill Hicks</p>
                    <p className="sub">Vice President</p>
                  </div>
                </div>
                <p className="subject">It was a very good experience</p>
                <p className="review">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus nibh mauris, nec turpis orci lectus maecenas.
                  Suspendisse sed magna eget nibh in turpis. Consequat duis diam
                  lacus arcu. Faucibus venenatis felis id augue sit cursus
                  pellentesque enim arcu. Elementum felis magna pretium in
                  tincidunt. Suspendisse sed magna eget nibh in turpis.
                  Consequat duis diam lacus arcu.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="user-details">
                  <div className="profile-picture">
                    <img src={profile_img_1} alt="User profile" />
                  </div>
                  <div className="details">
                    <p className="name">Bill Hicks</p>
                    <p className="sub">Vice President</p>
                  </div>
                </div>
                <p className="subject">It was a very good experience</p>
                <p className="review">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus nibh mauris, nec turpis orci lectus maecenas.
                  Suspendisse sed magna eget nibh in turpis. Consequat duis diam
                  lacus arcu. Faucibus venenatis felis id augue sit cursus
                  pellentesque enim arcu. Elementum felis magna pretium in
                  tincidunt. Suspendisse sed magna eget nibh in turpis.
                  Consequat duis diam lacus arcu.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="user-details">
                  <div className="profile-picture">
                    <img src={profile_img_1} alt="User profile" />
                  </div>
                  <div className="details">
                    <p className="name">Bill Hicks</p>
                    <p className="sub">Vice President</p>
                  </div>
                </div>
                <p className="subject">It was a very good experience</p>
                <p className="review">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus nibh mauris, nec turpis orci lectus maecenas.
                  Suspendisse sed magna eget nibh in turpis. Consequat duis diam
                  lacus arcu. Faucibus venenatis felis id augue sit cursus
                  pellentesque enim arcu. Elementum felis magna pretium in
                  tincidunt. Suspendisse sed magna eget nibh in turpis.
                  Consequat duis diam lacus arcu.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="user-details">
                  <div className="profile-picture">
                    <img src={profile_img_1} alt="User profile" />
                  </div>
                  <div className="details">
                    <p className="name">Bill Hicks</p>
                    <p className="sub">Vice President</p>
                  </div>
                </div>
                <p className="subject">It was a very good experience</p>
                <p className="review">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus nibh mauris, nec turpis orci lectus maecenas.
                  Suspendisse sed magna eget nibh in turpis. Consequat duis diam
                  lacus arcu. Faucibus venenatis felis id augue sit cursus
                  pellentesque enim arcu. Elementum felis magna pretium in
                  tincidunt. Suspendisse sed magna eget nibh in turpis.
                  Consequat duis diam lacus arcu.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ClientReviews;
