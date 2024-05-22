import React, { useState } from "react";
import "../styles/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { GetWindowWidth } from "../utils";

import { Sling as Hamburger } from "hamburger-react";

function NavBar() {
  const location = useLocation();
  const windowWidth = GetWindowWidth();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div id="navbar" className="navbar">
      <div className="wrapper">
        <Link to={"/"} className="logo-container">
          <img
            src={
              "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716382912/ix9tfxvydepl6juho7jf.webp"
            }
            alt=""
            className="logo"
          />
        </Link>
        {windowWidth > 1024 && (
          <div className="nav-menu">
            <Link
              className={`nav-item ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>
            <Link className={`nav-item`}>Services</Link>
            <Link className={`nav-item`}>Portfolio</Link>
            <Link className={`nav-item`}>About Us</Link>
            <Link className={`nav-item`}>Contact Us</Link>
          </div>
        )}
        {windowWidth <= 1024 && (
          <>
            <div
              className="hamburgerMenu"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Hamburger color="#060606" label="Show menu" />
            </div>
            <div className={`nav-menu mobile ${sidebarOpen ? "open" : ""}`}>
              <Link
                className={`nav-item ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </Link>
              <Link className={`nav-item`}>Services</Link>
              <Link className={`nav-item`}>Portfolio</Link>
              <Link className={`nav-item`}>About</Link>
              <Link className={`nav-item`}>Contact Us</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
