import React, { useEffect, useRef, useState } from "react";
import "../styles/navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GetWindowWidth, bottomNavItems } from "../utils";

import { Sling as Hamburger } from "hamburger-react";

import { MdKeyboardArrowDown } from "react-icons/md";

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const windowWidth = GetWindowWidth();
  const [hide, setHide] = useState(false);
  const prevScrollY = useRef(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showHidden, setShowHidden] = useState(false);
  const [hoveredNav, setHoveredNav] = useState("");
  const navItems = bottomNavItems;

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

  const handleMouseEnter = (item) => {
    setShowHidden(true);
    setHoveredNav(item);
  };

  const redirectToPageContent = (target) => {
    setShowHidden(false);
    navigate(target);
  };

  const resetState = () => {
    setShowHidden(false);
    setHoveredNav("");
  };

  return (
    <nav
      id="navbar"
      className={`navbar ${hide ? "hide" : ""}`}
      onMouseLeave={() => resetState()}
    >
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
              onMouseEnter={() => resetState()}
            >
              Home
            </Link>
            <Link
              to={"/Services"}
              className={`nav-item ${
                location.pathname.includes("/Services") ? "active" : ""
              }`}
              onMouseEnter={() => handleMouseEnter("Services")}
            >
              Services <MdKeyboardArrowDown />
            </Link>
            <Link
              to={"/Portfolio"}
              className={`nav-item ${
                location.pathname.includes("/Portfolio") ? "active" : ""
              }`}
              onMouseEnter={() => handleMouseEnter("Portfolio")}
            >
              Portfolio <MdKeyboardArrowDown />
            </Link>
            <Link
              to={"/About"}
              className={`nav-item ${
                location.pathname.includes("/About") ? "active" : ""
              }`}
              onMouseEnter={() => handleMouseEnter("About Us")}
            >
              About Us <MdKeyboardArrowDown />
            </Link>
            <Link
              to={"/Contact"}
              className={`nav-item ${
                location.pathname.includes("/Contact") ? "active" : ""
              }`}
              onMouseEnter={() => resetState()}
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
      <div className={`hidden-nav ${showHidden ? "show" : ""}`}>
        <div className="wrapper">
          <div className="title" style={{ opacity: hoveredNav ? 1 : 0 }}>
            {hoveredNav ? hoveredNav : "Sub Menu"}
          </div>
          <div className="sub-nav">
            <div className="content-nav">
              {showHidden &&
                navItems
                  .filter((nav) => nav.title === hoveredNav)
                  .map((nav) => (
                    <React.Fragment key={nav.title}>
                      {nav.items.map((item, index) => (
                        <div
                          className="nav-item"
                          key={index}
                          onClick={() =>
                            redirectToPageContent(item.serviceTarget)
                          }
                        >
                          <img
                            src={item.serviceIcon}
                            alt=""
                            draggable={false}
                          />
                          <div className="title">
                            <p>{item.serviceName}</p>
                            <p className="desc">{item.serviceDesc}</p>
                          </div>
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
            </div>
            <div className="vertical-divider"></div>
            <div className="quote-container">
              <p className="title">Get A Quote</p>
              <div className="quote">
                <img
                  src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1718062199/Icons/Sub_Menu/Services/xwesrntxbvjc7zhceurj.webp"
                  alt="quote img"
                />
              </div>
              <p className="link">
                Click here to get a quote{" "}
                <Link to={`/Services#_getQuote`}>Learn more.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
