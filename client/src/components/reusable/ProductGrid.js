import React from "react";
import "../../styles/productGrid.css";

import service_image1 from "../../assets/images/Services/serviceImage1.jpg";
import { Link } from "react-router-dom";

function ProductGrid({ products }) {
  return (
    <div id="productGrid" className="productGrid">
      <div className="action">
        <p>See all.</p>
      </div>
      <div className="products-container">
        <div className="products">
          {products &&
            products.map((product) => (
              <Link to={product.link} className="product">
                <div className="background">
                  <div className="overlay"></div>
                  <img src={product.image} alt="product" />
                </div>
                <p className="label">{product.label}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
