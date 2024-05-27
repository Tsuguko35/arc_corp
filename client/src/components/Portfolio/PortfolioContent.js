import React from "react";
import "../../styles/portfolioContent.css";
import ServiceKeyPoints from "../reusable/ServiceKeyPoints";
import { portfolioKeyPoints } from "../../utils";
import { Link } from "react-router-dom";

function PortfolioContent() {
  const keypoints = portfolioKeyPoints;
  const project =
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423355/Arc_Portfolio/eqzqqxmgbhgnsxedob4d.webp";
  return (
    <div id="portfolioContent" className="portfolioContent">
      <div className="wrapper">
        <div className="text-content start-fade-bottom">
          <p className="title">Services</p>
          <p className="description">
            Explore my design services, from user interface and experience to
            prototyping and testing. Let's craft exceptional digital experiences
            together.
          </p>
        </div>

        {/* Key Points */}
        <ServiceKeyPoints keypoints={keypoints} />

        <div className="projects-container feature3">
          <p className="title">Projects</p>
          <div className="project-grid">
            <Link to={`/Portfolio/Projects/Residential`} className="project">
              <div className="overlay"></div>
              <img
                src={
                  "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716423795/Arc_About/euo6dumragehk0ccykmb.webp"
                }
                alt=""
              />
              <div className="text-content">
                <p className="title">Residential Projects</p>
                <p className="sub">14 Projects</p>
              </div>
            </Link>
            <Link to={`/Portfolio/Projects/Commercial`} className="project">
              <div className="overlay"></div>
              <img
                src={
                  "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716419846/Arc_Services/blbqbawnhzpw7n4muzbg.webp"
                }
                alt=""
              />
              <div className="text-content">
                <p className="title">Commercial Projects</p>
                <p className="sub">8 Projects</p>
              </div>
            </Link>
          </div>
          <p className="load-more">Browse more.</p>
        </div>

        <div className="company-skills feature">
          <div className="label">
            <div className="title">Core Design Skills</div>
            <div className="desc">
              I excel in essential design skills, creating visually stunning and
              functional digital experiences. From UI design to UX research, my
              passion is to craft effective and memorable digital solutions.
            </div>
          </div>
          <div className="skills-grid">
            <div className="skill">
              <span className="skill-name">Interaction Design</span>
              <div className="progress-group">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "60%" }}></div>
                </div>
                <span className="percentage">60%</span>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Figma</span>
              <div className="progress-group">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "95%" }}></div>
                </div>
                <span className="percentage">95%</span>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Usability Testing</span>
              <div className="progress-group">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "70%" }}></div>
                </div>
                <span className="percentage">70%</span>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Prototyping</span>
              <div className="progress-group">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "80%" }}></div>
                </div>
                <span className="percentage">80%</span>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">User Research</span>
              <div className="progress-group">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "45%" }}></div>
                </div>
                <span className="percentage">45%</span>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Information Architecture</span>
              <div className="progress-group">
                <div className="progress-bar">
                  <div className="progress" style={{ width: "50%" }}></div>
                </div>
                <span className="percentage">50%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioContent;
