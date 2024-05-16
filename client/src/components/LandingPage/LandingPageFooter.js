import React from "react";
import "../../styles/landingPageFooter.css";
import { Link } from "react-router-dom";

import * as faIcons from "react-icons/fa";

function LandingPageFooter() {
  return (
    <footer id="landingPageFooter" className="landingPageFooter">
      <div className="wrapper">
        <div className="socials">
          <Link
            to={
              "https://www.facebook.com/profile.php?id=61559432554065&mibextid=qi2Omg&rdid=kdAAkPtlpB6fv6K9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F9tLwJiQk5u9Engff%2F%3Fmibextid%3Dqi2Omg"
            }
            target="_blank"
            className="icon-container"
          >
            <faIcons.FaFacebookF />
          </Link>
          {/* <Link
            to={"https://www.instagram.com/arcroofingcorp/"}
            target="_blank"
            className="icon-container"
          >
            <faIcons.FaInstagram />
          </Link> */}
          {/* <Link className="icon-container">
            <faIcons.FaTwitter />
          </Link> */}
        </div>
      </div>
    </footer>
  );
}

export default LandingPageFooter;
