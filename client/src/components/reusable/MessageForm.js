import React from "react";
import "../../styles/messageForm.css";
import { Link } from "react-router-dom";

function MessageForm() {
  return (
    <form id="messageForm" className="messageForm">
      <div className="input-group">
        <input
          type="text"
          className="user-input"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="input-group">
        <input
          type="email"
          className="user-input"
          placeholder="Enter your email address"
          required
        />
      </div>

      <div className="input-group">
        <input
          type="text"
          className="user-input"
          placeholder="Enter your telephone number"
          required
        />
      </div>
      <textarea
        className="user-input textarea"
        placeholder="Your Message"
        required
      ></textarea>

      <div className="checkbox-input">
        <input type="checkbox" className="checkbox" required />
        <p className="text">
          I have read and accept the &nbsp;
          <Link>privacy policy.</Link>
        </p>
      </div>

      <div className="submit-area">
        <button type="submit" className="message-submit">
          Send Message
        </button>
      </div>
    </form>
  );
}

export default MessageForm;
