import React, { useState } from "react";
import "../../styles/productGallery.css";
import { Link } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";

function ProductGallery() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div id="productGallery" className="productGallery">
      <div className="wrapper feature4">
        <div className="text">FOLLOW US ON FACEBOOK</div>
        <div className="links">
          <Link
            to={
              "https://www.facebook.com/profile.php?id=61559432554065&mibextid=qi2Omg&rdid=kdAAkPtlpB6fv6K9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F9tLwJiQk5u9Engff%2F%3Fmibextid%3Dqi2Omg"
            }
            target="_blank"
            className="icon"
          >
            <FaFacebookF />
          </Link>
        </div>
        <div className="products">
          <div className="product">
            <img
              src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1720137097/Arc_Landing_Page/Content/jukxwtxc2whuqtev6cpu.webp"
              alt="product"
            />
          </div>
          <div className="product">
            <img
              src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1720137097/Arc_Landing_Page/Content/gpscdp9hjze9qejnjy7p.webp"
              alt="product"
            />
          </div>
          <div className="product">
            <img
              src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1720137096/Arc_Landing_Page/Content/jtg1dupdkhd3nhbkg4hv.webp"
              alt="product"
            />
          </div>
          <div className="product">
            <img
              src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1720137345/Arc_Landing_Page/Content/lkftjeobaammjorjkpf9.webp"
              alt="product"
            />
          </div>
          {showAll && (
            <React.Fragment>
              <div className="product">
                <img
                  src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1720137344/Arc_Landing_Page/Content/wdslirnchjihh1bvjyrh.webp"
                  alt="product"
                />
              </div>
              <div className="product">
                <img
                  src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1720137345/Arc_Landing_Page/Content/nfskpjri8qvif3rqlu94.webp"
                  alt="product"
                />
              </div>
              <div className="product">
                <img
                  src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1720137345/Arc_Landing_Page/Content/tva9wqojie3dfxvzuidi.webp"
                  alt="product"
                />
              </div>
              <div className="product">
                <img
                  src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1720137345/Arc_Landing_Page/Content/lw8ugd1fmzxtutnvev9b.webp"
                  alt="product"
                />
              </div>
            </React.Fragment>
          )}
        </div>
        <div className="action">
          {!showAll && (
            <button onClick={() => setShowAll(true)}>Load More</button>
          )}
          {showAll && (
            <button onClick={() => setShowAll(false)}>Load Less</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductGallery;
