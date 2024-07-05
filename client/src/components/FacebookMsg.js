import React from "react";
import { FaFacebookMessenger } from "react-icons/fa";

function FacebookMsg() {
  return (
    <a
      title="Send a message"
      className="messenger"
      href="https://m.me/303695626163278"
      target="_blank"
    >
      <FaFacebookMessenger />
    </a>
  );
}

export default FacebookMsg;
