import React from "react";
import {
  ClientReviews,
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
      <LandingPageProdAndSer />

      {/* Footer */}
      <LandingPageFooter />
    </div>
  );
}

export default LandingPage;
