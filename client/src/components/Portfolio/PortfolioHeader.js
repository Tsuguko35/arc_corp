import React from "react";
import "../../styles/portfolioHeader.css";

function PortfolioHeader() {
  return (
    <div id="portfolioHeader" className="portfolioHeader">
      <div className="background">
        <div className="overlay"></div>
        <img
          src={
            "https://images.pexels.com/photos/4254158/pexels-photo-4254158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="Portfolio Header"
        />
      </div>
      <div className="wrapper">
        <div className="text-content start-fade-bottom">
          <div className="title">Project Portfolio</div>
          <div className="description">
            Explore our diverse project portfolio showcasing Arc Roofing
            Corporation's expertise across residential, commercial, and
            specialty roofing projects. From stunning residential installations
            to large-scale commercial ventures, each project exemplifies our
            commitment to quality craftsmanship and customer satisfaction. Dive
            into our portfolio to discover the superior results we deliver to
            clients across the Southeastern United States.
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioHeader;
