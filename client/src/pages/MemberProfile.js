import React from "react";
import { MainFooter, MemberProfileContent } from "../components";

function MemberProfile() {
  return (
    <div id="memberProfile" className="memberProfile">
      {/* Content */}
      <MemberProfileContent />

      {/* Footer */}
      <MainFooter />
    </div>
  );
}

export default MemberProfile;
