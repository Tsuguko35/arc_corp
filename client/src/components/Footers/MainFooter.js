import React from "react";
import "../../styles/mainFooter.css";
import { Link } from "react-router-dom";

import * as IoIcons from "react-icons/io";

function MainFooter() {
  return (
    <footer id="mainFooter" className="mainFooter">
      <div className="wrapper">
        <div className="icon-adress">
          <div className="icon">
            <img
              src={
                "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716382912/ix9tfxvydepl6juho7jf.webp"
              }
              alt=""
            />
          </div>
          <div className="address">
            <p>12978 SW 132nd Ave, Miami, FL, United States, Florida</p>
            <div className="contact-info">
              <p>+1 305-383-2626</p>
              <p>info@arcroofingco.com</p>
            </div>
          </div>
        </div>

        <div className="nav-top">
          <div className="navigation-and-socials">
            <div className="container">
              <div className="nav">
                <Link to={"/"}>Home</Link>
                <Link>About Us</Link>
                <Link>Services</Link>
                <Link>Portfolio</Link>
                <Link>Contact</Link>
              </div>
              <div className="socials">
                <Link
                  to={
                    "https://www.facebook.com/profile.php?id=61559432554065&mibextid=qi2Omg&rdid=kdAAkPtlpB6fv6K9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F9tLwJiQk5u9Engff%2F%3Fmibextid%3Dqi2Omg"
                  }
                  target="_blank"
                >
                  Facebook
                </Link>
                {/* <Link>Linkedin</Link> */}
              </div>
            </div>
            <div className="copyright">
              © 2024 Arc Corporation. All rights reserved.
            </div>
          </div>
          <div className="to-top">
            <div
              className="action"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <IoIcons.IoMdArrowUp />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
