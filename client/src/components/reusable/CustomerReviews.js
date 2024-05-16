import React from "react";
import "../../styles/customerReviews.css";

function CustomerReviews() {
  return (
    <div id="cutomerReviews" className="cutomerReviews">
      <div className="wrapper">
        <p className="title">What Our Clients Say About Us</p>
        <div className="carousel-container">
          <div className="carousel">
            <div className="card"></div>
            <div className="card active"></div>
            <div className="card"></div>
          </div>
          <div className="carousel-controls"></div>
        </div>
      </div>
    </div>
  );
}

export default CustomerReviews;
