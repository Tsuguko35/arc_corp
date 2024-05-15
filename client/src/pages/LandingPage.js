import React from "react";
import "../styles/landingPage.css";
import { LandingPageHeader } from "../components";

function LandingPage() {
  return (
    <div id="landingPage" className="landingPage">
      {/* Header */}
      <LandingPageHeader />
    </div>
  );
}

export default LandingPage;
