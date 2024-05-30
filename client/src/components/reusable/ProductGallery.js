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
              src="https://img.freepik.com/free-photo/living-room-modern-apartment-with-two-identical-sofas-opposite-each-other_181624-14768.jpg?t=st=1717027863~exp=1717031463~hmac=0ead8d100a87c2901be396daec32e9401fc2cf2ac951aa30d12a8a6a363b0f8b&w=1380"
              alt="product"
            />
          </div>
          <div className="product">
            <img
              src="https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table-counter_105762-2105.jpg?t=st=1717027916~exp=1717031516~hmac=f7e4f7e5fe3f446c9a863ac5fcd5e0011109c9269a1cb12c0640d9ab64d13b3c&w=1380"
              alt="product"
            />
          </div>
          <div className="product">
            <img
              src="https://img.freepik.com/free-photo/3d-rendering-loft-scandinavian-living-room-with-working-table-bookshelf_105762-2162.jpg?t=st=1717027943~exp=1717031543~hmac=874101829ce8121ed018a2d6b3c536ce50c4045fb80c2083c7f65a38dbc2e291&w=1380"
              alt="product"
            />
          </div>
          <div className="product">
            <img
              src="https://img.freepik.com/free-photo/beautiful-shot-modern-house-kitchen_181624-4007.jpg?t=st=1717027963~exp=1717031563~hmac=39941f7d6192e68fb85b8f5563646af2f19bd8077af5584044852a4ea92a0896&w=1380"
              alt="product"
            />
          </div>
          {showAll && (
            <React.Fragment>
              <div className="product">
                <img
                  src="https://img.freepik.com/free-photo/living-room-modern-apartment-with-two-identical-sofas-opposite-each-other_181624-14768.jpg?t=st=1717027863~exp=1717031463~hmac=0ead8d100a87c2901be396daec32e9401fc2cf2ac951aa30d12a8a6a363b0f8b&w=1380"
                  alt="product"
                />
              </div>
              <div className="product">
                <img
                  src="https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table-counter_105762-2105.jpg?t=st=1717027916~exp=1717031516~hmac=f7e4f7e5fe3f446c9a863ac5fcd5e0011109c9269a1cb12c0640d9ab64d13b3c&w=1380"
                  alt="product"
                />
              </div>
              <div className="product">
                <img
                  src="https://img.freepik.com/free-photo/3d-rendering-loft-scandinavian-living-room-with-working-table-bookshelf_105762-2162.jpg?t=st=1717027943~exp=1717031543~hmac=874101829ce8121ed018a2d6b3c536ce50c4045fb80c2083c7f65a38dbc2e291&w=1380"
                  alt="product"
                />
              </div>
              <div className="product">
                <img
                  src="https://img.freepik.com/free-photo/beautiful-shot-modern-house-kitchen_181624-4007.jpg?t=st=1717027963~exp=1717031563~hmac=39941f7d6192e68fb85b8f5563646af2f19bd8077af5584044852a4ea92a0896&w=1380"
                  alt="product"
                />
              </div>
              <div className="product">
                <img
                  src="https://img.freepik.com/free-photo/living-room-modern-apartment-with-two-identical-sofas-opposite-each-other_181624-14768.jpg?t=st=1717027863~exp=1717031463~hmac=0ead8d100a87c2901be396daec32e9401fc2cf2ac951aa30d12a8a6a363b0f8b&w=1380"
                  alt="product"
                />
              </div>
              <div className="product">
                <img
                  src="https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table-counter_105762-2105.jpg?t=st=1717027916~exp=1717031516~hmac=f7e4f7e5fe3f446c9a863ac5fcd5e0011109c9269a1cb12c0640d9ab64d13b3c&w=1380"
                  alt="product"
                />
              </div>
              <div className="product">
                <img
                  src="https://img.freepik.com/free-photo/3d-rendering-loft-scandinavian-living-room-with-working-table-bookshelf_105762-2162.jpg?t=st=1717027943~exp=1717031543~hmac=874101829ce8121ed018a2d6b3c536ce50c4045fb80c2083c7f65a38dbc2e291&w=1380"
                  alt="product"
                />
              </div>
              <div className="product">
                <img
                  src="https://img.freepik.com/free-photo/beautiful-shot-modern-house-kitchen_181624-4007.jpg?t=st=1717027963~exp=1717031563~hmac=39941f7d6192e68fb85b8f5563646af2f19bd8077af5584044852a4ea92a0896&w=1380"
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
