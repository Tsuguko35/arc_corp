import React from "react";
import "../styles/landingPage.css";
import { LandingPageFooter, LandingPageHeader } from "../components";

function LandingPage() {
  return (
    <div id="landingPage" className="landingPage">
      {/* Header */}
      <LandingPageHeader />

      {/* Footer */}
      <LandingPageFooter />
    </div>
  );
}

export default LandingPage;
