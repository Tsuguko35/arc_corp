import React from "react";
import "../../styles/landingPageContent.css";

import { Link } from "react-router-dom";

function LandingPageContent() {
  return (
    <div id="landingPageContent" className="landingPageContent">
      <div className="wrapper">
        <div className="company-description feature3">
          <div className="left">
            <p className="title">
              What is <span style={{ color: "#D6AE30" }}>ARC Solutions?</span>
            </p>
            <div className="paragraphs">
              <p>
                <span className="bold">ARC Solutions</span> stands out as a
                trailblazer, revolutionizing roofing with a blend of innovation
                and sustainability.Through advanced technology and data-driven
                insights, ARC Solutions ensures precision engineering from
                consultation to completion.
              </p>
              <p>
                Committed to environmental stewardship, they lead the charge in
                Eco-friendly roofing materials and practices, forging a path
                towards a greener future.Their unwavering dedication to quality
                and personalized service has earned them the trust of clients
                nationwide, setting the standard for excellence in the field.
              </p>
              <p>
                As they continue to push boundaries and redefine industry norms,
                ARC Solutions remains at the forefront, shaping the future of
                roofing with every project they undertake.
              </p>
            </div>
            <div className="action">
              <Link to={"/About"}>Learn more.</Link>
            </div>
          </div>
          <div className="right">
            <div className="container">
              <div className="with-overlay-holder">
                <div className="img-overlay">
                  <div className="overlay"></div>
                  <img
                    src={
                      "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716590055/Arc_Landing_Page/Header/xcjdtwd2qlqhobcs9s7f.webp"
                    }
                    alt="company 1"
                    className="with-overlay"
                  />
                </div>
              </div>

              <img
                src={
                  "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716590208/Arc_Landing_Page/Content/mpnwmel4yla6pqnp6sfp.webp"
                }
                alt="company 2"
                className="clear"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageContent;
