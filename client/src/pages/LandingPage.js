import React from "react";
import "../styles/landingPage.css";
import {
  CustomerReviews,
  LandingPageContent,
  LandingPageFooter,
  LandingPageHeader,
} from "../components";

function LandingPage() {
  return (
    <div id="landingPage" className="landingPage">
      {/* Header */}
      <LandingPageHeader />

      {/* Content */}
      <LandingPageContent />
      <CustomerReviews />

      {/* Footer */}
      <LandingPageFooter />
    </div>
  );
}

export default LandingPage;
