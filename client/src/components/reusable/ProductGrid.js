import React from "react";
import "../../styles/productGrid.css";
import { Link } from "react-router-dom";

function ProductGrid({ products }) {
  return (
    <div id="productGrid" className="productGrid feature3">
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
