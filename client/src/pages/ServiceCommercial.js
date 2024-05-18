import React from "react";
import {
  ClientReviews,
  CommercialContent,
  CommercialHeader,
  MainFooter,
} from "../components";

function ServiceCommercial() {
  return (
    <div id="serviceCommercial" className="serviceCommercial">
      {/* Header */}
      <CommercialHeader />

      {/* Content */}
      <CommercialContent />
      <ClientReviews />

      {/* Footer */}
      <MainFooter />
    </div>
  );
}

export default ServiceCommercial;
