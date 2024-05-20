import React from "react";
import "../../styles/contactUsForm.css";

function ContactUsForm() {
  return (
    <form id="contactUsForm" className="contactUsForm">
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
            <p className="label">Subject</p>
            <input
              required
              type="text"
              className="user-input"
              placeholder="How can we help you?"
            />
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

export default ContactUsForm;
