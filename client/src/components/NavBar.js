import React, { useState } from "react";
import "../styles/navbar.css";

import arcLogo from "../assets/images/LandingPage/Logo.png";
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
          <img src={arcLogo} alt="" className="logo" />
        </Link>
        {windowWidth > 1024 && (
          <div className="nav-menu">
            <Link
              to={"/"}
              className={`nav-item ${
                location.pathname === "/" ||
                location.pathname === "/RequestQuote"
                  ? "active"
                  : ""
              }`}
            >
              Home
            </Link>
            <Link
              to={"/Services"}
              className={`nav-item ${
                location.pathname.includes("/Services") ? "active" : ""
              }`}
            >
              Services
            </Link>
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
                to={"/"}
                className={`nav-item ${
                  location.pathname === "/" ||
                  location.pathname === "/RequestQuote"
                    ? "active"
                    : ""
                }`}
              >
                Home
              </Link>
              <Link
                to={"/Services"}
                className={`nav-item ${
                  location.pathname.includes("/Services") ? "active" : ""
                }`}
              >
                Services
              </Link>
              <Link className={`nav-item`}>Portfolio</Link>
              <Link className={`nav-item`}>About Us</Link>
              <Link className={`nav-item`}>Contact Us</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
