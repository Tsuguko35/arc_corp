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
            to={"https://www.facebook.com/ARCRoofingCorp"}
            target="_blank"
            className="icon-container"
          >
            <faIcons.FaFacebookF />
          </Link>
          <Link
            to={"https://www.instagram.com/arcroofingcorp/"}
            target="_blank"
            className="icon-container"
          >
            <faIcons.FaInstagram />
          </Link>
          {/* <Link className="icon-container">
            <faIcons.FaTwitter />
          </Link> */}
        </div>
      </div>
    </footer>
  );
}

export default LandingPageFooter;
