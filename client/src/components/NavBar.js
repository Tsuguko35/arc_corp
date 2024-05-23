import React, { useEffect, useRef, useState } from "react";
import "../styles/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { GetWindowWidth } from "../utils";

import { Sling as Hamburger } from "hamburger-react";

function NavBar() {
  const location = useLocation();
  const windowWidth = GetWindowWidth();
  const [hide, setHide] = useState(false);
  const prevScrollY = useRef(0);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 300 && currentScrollY > prevScrollY.current) {
      setHide(true);
    } else {
      setHide(false);
    }

    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="navbar" className={`navbar ${hide ? "hide" : ""}`}>
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
            <Link
              to={"/Portfolio"}
              className={`nav-item ${
                location.pathname.includes("/Portfolio") ? "active" : ""
              }`}
            >
              Portfolio
            </Link>
            <Link
              to={"/About"}
              className={`nav-item ${
                location.pathname.includes("/About") ? "active" : ""
              }`}
            >
              About Us
            </Link>
            <Link
              to={"/Contact"}
              className={`nav-item ${
                location.pathname.includes("/Contact") ? "active" : ""
              }`}
            >
              Contact Us
            </Link>
          </div>
        )}
        {windowWidth <= 1024 && (
          <>
            <div
              className="hamburgerMenu"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Hamburger
                color="#060606"
                label="Show menu"
                toggled={sidebarOpen}
              />
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
              <Link
                to={"/Portfolio"}
                className={`nav-item ${
                  location.pathname.includes("/Portfolio") ? "active" : ""
                }`}
              >
                Portfolio
              </Link>
              <Link
                to={"/About"}
                className={`nav-item ${
                  location.pathname.includes("/About") ? "active" : ""
                }`}
              >
                About Us
              </Link>
              <Link
                to={"/Contact"}
                className={`nav-item ${
                  location.pathname.includes("/Contact") ? "active" : ""
                }`}
              >
                Contact Us
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
