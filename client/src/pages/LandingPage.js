import React, { useEffect } from "react";
import {
  ClientReviews,
  LandingPageContent,
  LandingPageFooter,
  LandingPageHeader,
  LandingPageProdAndSer,
} from "../components";

function LandingPage() {
  useEffect(() => {
    document.title = "Arc Corporation";
  });
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
