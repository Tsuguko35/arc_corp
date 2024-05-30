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
              src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="product"
            />
          </div>
          <div className="product">
            <img
              src="https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="product"
            />
          </div>
          <div className="product">
            <img
              src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="product"
            />
          </div>
          <div className="product">
            <img
              src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="product"
            />
          </div>
          {showAll && (
            <React.Fragment>
              <div className="product">
                <img
                  src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="product"
                />
              </div>
              <div className="product">
                <img
                  src="https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="product"
                />
              </div>
              <div className="product">
                <img
                  src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="product"
                />
              </div>
              <div className="product">
                <img
                  src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="product"
                />
              </div>
              <div className="product">
                <img
                  src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="product"
                />
              </div>
              <div className="product">
                <img
                  src="https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="product"
                />
              </div>
              <div className="product">
                <img
                  src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="product"
                />
              </div>
              <div className="product">
                <img
                  src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
