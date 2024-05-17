import React from "react";
import "../styles/landingPage.css";
import {
  ClientReviews,
  CustomerReviews,
  LandingPageContent,
  LandingPageFooter,
  LandingPageHeader,
  LandingPageProdAndSer,
} from "../components";

function LandingPage() {
  return (
    <div id="landingPage" className="landingPage">
      {/* Header */}
      <LandingPageHeader />

      {/* Content */}
      <LandingPageContent />
      <ClientReviews />
      {/* <LandingPageProdAndSer /> */}

      {/* Footer */}
      <LandingPageFooter />
    </div>
  );
}

export default LandingPage;
