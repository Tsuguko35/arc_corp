import React from "react";
import "../../styles/portfolioContent.css";
import ServiceKeyPoints from "../reusable/ServiceKeyPoints";
import { portfolioKeyPoints } from "../../utils";
import project from "../../assets/images/Portfolio/roofProject.jpg";

function PortfolioContent() {
  const keypoints = portfolioKeyPoints;
  return (
    <div id="portfolioContent" className="portfolioContent">
      <div className="wrapper">
        <div className="text-content">
          <p className="title">Services</p>
          <p className="description">
            Explore my design services, from user interface and experience to
            prototyping and testing. Let's craft exceptional digital experiences
            together.
          </p>
        </div>

        {/* Key Points */}
        <ServiceKeyPoints keypoints={keypoints} />

        <div className="projects-container">
          <p className="title">Projects</p>
          <div className="actions">
            <p className="toggle active">Residential</p>
            <p className="toggle">Commercial</p>
          </div>
          <div className="project-grid">
            <div className="project">
              <img src={project} alt="" />
            </div>
            <div className="project">
              <img src={project} alt="" />
            </div>
            <div className="project">
              <img src={project} alt="" />
            </div>
            <div className="project">
              <img src={project} alt="" />
            </div>
            <div className="project">
              <img src={project} alt="" />
            </div>
            <div className="project">
              <img src={project} alt="" />
            </div>
          </div>
          <p className="load-more">Load more</p>
        </div>

        <div className="company-skills">
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
