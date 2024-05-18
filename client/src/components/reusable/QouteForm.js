import React from "react";
import { Link } from "react-router-dom";
import "../../styles/quoteForm.css";

function QouteForm() {
  return (
    <form id="quoteForm" className="quoteForm">
      <div className="title">Your Quotation</div>
      <div className="inputs">
        <div className="input-group two">
          <div className="input-with-label">
            <p className="label">First Name</p>
            <input
              required
              type="text"
              className="user-input"
              placeholder="First Name"
            />
          </div>
          <div className="input-with-label">
            <p className="label">Last Name</p>
            <input
              required
              type="text"
              className="user-input"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="input-group two">
          <div className="input-with-label">
            <p className="label">Email Address</p>
            <input
              required
              type="text"
              className="user-input"
              placeholder="Email Address"
            />
          </div>
          <div className="input-with-label">
            <p className="label">Phone Number</p>
            <input
              required
              type="text"
              className="user-input"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-with-label">
            <p className="label">Home Address</p>
            <input
              required
              type="text"
              className="user-input"
              placeholder="Home Address"
            />
          </div>
        </div>
        <div className="input-group">
          <div className="city-and-state">
            <div className="input-with-label city">
              <p className="label">City</p>
              <input
                required
                type="text"
                className="user-input"
                placeholder="City"
              />
            </div>
            <div className="input-with-label state">
              <p className="label">State</p>
              <input
                required
                type="text"
                className="user-input"
                placeholder="State"
              />
            </div>
          </div>

          <div className="input-with-label zipcode">
            <p className="label">Postal Code</p>
            <input
              required
              type="text"
              className="user-input"
              placeholder="Zip Code"
            />
          </div>
        </div>

        <div className="input-group">
          <div className="input-with-label">
            <p className="label">Type of Property</p>
            <select name="service" id="service" value={""} required>
              <option value="" disabled>
                Type of Property
              </option>
            </select>
          </div>
        </div>
        <div className="input-group">
          <div className="input-with-label">
            <p className="label">Message (Optional)</p>
            <textarea placeholder="Your Message" required></textarea>
          </div>
        </div>

        <div className="submit-area">
          <button type="submit" className="message-submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default QouteForm;
