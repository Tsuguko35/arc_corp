import React from "react";
import {
  ClientReviews,
  MainFooter,
  ResidentialContent,
  ResidentialHeader,
} from "../components";

function ServiceResidential() {
  return (
    <div id="serviceResidential" className="serviceResidential">
      {/* Header */}
      <ResidentialHeader />

      {/* Content */}
      <ResidentialContent />
      <ClientReviews />

      {/* Footer */}
      <MainFooter />
    </div>
  );
}

export default ServiceResidential;
