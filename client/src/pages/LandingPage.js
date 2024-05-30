import React, { useEffect } from "react";
import {
  ClientReviews,
  ContactUsBanner,
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
      <LandingPageProdAndSer />
      <LandingPageContent />
      <ClientReviews />
      <ContactUsBanner />

      {/* Footer */}
      <LandingPageFooter />
    </div>
  );
}

export default LandingPage;
