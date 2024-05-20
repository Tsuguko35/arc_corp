import React from "react";
import { ContactUsContent, Faq, MainFooter } from "../components";

function ContactUs() {
  return (
    <div id="contactUs" className="contactUs">
      {/* Content */}
      <ContactUsContent />
      <Faq />

      {/* Footer */}
      <MainFooter />
    </div>
  );
}

export default ContactUs;
