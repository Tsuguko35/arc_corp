import React from "react";
import { MainFooter, ProductContent } from "../components";

function Product() {
  return (
    <div id="product" className="product">
      {/* Content */}
      <ProductContent />

      {/* Footer */}
      <MainFooter />
    </div>
  );
}

export default Product;
