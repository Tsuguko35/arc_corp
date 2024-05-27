import React from "react";
import "../../styles/projectsContent.css";
import { Link } from "react-router-dom";

function ProjectsContent() {
  return (
    <div id="projectsContent" className="projectsContent">
      <div className="wrapper">
        <div className="header">
          <p className="title">Residential Projects</p>
          <p className="desc">
            Arc Roofing Corporation excels in delivering top-quality residential
            roofing solutions. Our services include roof repairs, maintenance,
            and new installations, utilizing high-performance materials to
            ensure durability and aesthetic appeal. Whether you're building a
            new home or upgrading your existing roof, our experienced team is
            dedicated to providing exceptional craftsmanship and customer
            satisfaction. Trust us to protect and enhance your home with a roof
            that stands the test of time.
          </p>
        </div>

        <div className="projects-container">
          <div className="project">
            <div className="project-image">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716774609/Arc_Portfolio/Projects/urdgdtidlwrd1q2etfgh.webp"
                alt=""
              />
            </div>
            <div className="project-details">
              <p className="name">Single-Family Homes</p>
              <p className="desc">
                Single family homes are often found in neighborhoods or out in
                the country. These homes can have small yards, or enough green
                space to include a few farm animals, depending on where they are
                located.
              </p>
              <div className="tags">
                <p>Residential Roofing</p>
                <p>Home Construction</p>
                <p>Home Improvement</p>
              </div>
              <div className="action">
                <Link>View Project</Link>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-image">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716774609/Arc_Portfolio/Projects/tzkoerefjuupnqdkvcvi.webp"
                alt=""
              />
            </div>
            <div className="project-details">
              <p className="name">Multi-Family Homes</p>
              <p className="desc">
                These residential construction units are often used as an
                investment, which is why some contractors will build them to
                earn a little extra money for their own investments. 
              </p>
              <div className="tags">
                <p>Multi-Unit Residential</p>
                <p>Home Construction</p>
                <p>Residential Complex Roofing</p>
              </div>
              <div className="action">
                <Link>View Project</Link>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-image">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1716774609/Arc_Portfolio/Projects/iwrcivqk3miqtldae5o8.webp"
                alt=""
              />
            </div>
            <div className="project-details">
              <p className="name">Townhouses</p>
              <p className="desc">
                These residential construction units are often used as an
                investment, which is why some contractors will build them to
                earn a little extra money for their own investments. 
              </p>
              <div className="tags">
                <p>Multi-Unit Residential</p>
                <p>Home Construction</p>
                <p>Residential Complex Roofing</p>
              </div>
              <div className="action">
                <Link>View Project</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsContent;
