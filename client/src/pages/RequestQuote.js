import React from "react";
import { MainFooter, RequestQuoteContent } from "../components";
import "../styles/requestQuote.css";

function RequestQuote() {
  return (
    <div id="requestQuote" className="requestQuote">
      {/* Content */}
      <RequestQuoteContent />

      {/* Footer */}
      <MainFooter />
    </div>
  );
}

export default RequestQuote;
