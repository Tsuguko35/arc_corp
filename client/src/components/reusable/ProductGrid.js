import React from "react";
import "../../styles/productGrid.css";

import service_image1 from "../../assets/images/Services/serviceImage1.jpg";

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
              <div className="product">
                <div className="background">
                  <div className="overlay"></div>
                  <img src={product.image} alt="product" />
                </div>
                <p className="label">{product.label}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
