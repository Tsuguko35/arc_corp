import React from "react";
import "../../styles/contactUsContent.css";
import * as GoIcons from "react-icons/go";
import { Link } from "react-router-dom";
import ContactUsForm from "../reusable/ContactUsForm";

function ContactUsContent() {
  return (
    <div id="contactUsContent" className="contactUsContent">
      <div className="wrapper">
        <header className="header">
          <div className="background">
            <div className="overlay"></div>
            <img
              src={
                "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716424233/Contact/qtidmhneryksfaepesfg.webp"
              }
              alt="contact bg"
            />
          </div>
          <div className="header-content">
            <div className="text-content start-fade-bottom">
              <div className="title">Feel Free to Message with Us</div>
              <div className="desc">
                We’re here to help! Whether you have questions about our
                services, need more information, or want to discuss a project,
                feel free to message us. Our team is ready to provide you with
                the support and answers you need. Reach out to us today and
                let’s start a conversation!
              </div>
              <div className="contact-infos">
                <div className="contact">
                  <p className="label">Contact Details</p>
                  <p className="contact-detail">
                    https://www.linkedin.com/in/william-beliles-5b747a10b +090
                    4057 1667
                  </p>
                </div>
                <div className="contact">
                  <p className="label">Address</p>
                  <p className="contact-detail">
                    458 Old york Court hamington station, ny 11746
                  </p>
                </div>
                <div className="contact">
                  <p className="label">Social Media</p>
                  <div className="contact-detail links">
                    <Link>
                      Facebook{" "}
                      <span className="link-arrow">
                        <GoIcons.GoArrowUpRight />
                      </span>
                    </Link>
                    <Link>
                      Twitter{" "}
                      <span className="link-arrow">
                        <GoIcons.GoArrowUpRight />
                      </span>
                    </Link>
                    <Link>
                      LinkedIn{" "}
                      <span className="link-arrow">
                        <GoIcons.GoArrowUpRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="form">
              <ContactUsForm />
            </div>
          </div>
        </header>
        <div className="contact-us-content">
          <div className="message-us-container">
            <div className="image">
              <img
                src={
                  "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716767567/Contact/myq3izgckcxhqbwpvjna.webp"
                }
                alt="chat"
              />
            </div>
            <div className="text-content">
              <div className="text">
                <p className="title">Live Chat</p>
                <div className="desc">
                  <p>Urgently want to reach us?</p>
                  <p>
                    We are available 24hrs, seven days a week. (And I respond
                    within 5 minutes!)
                  </p>
                </div>
              </div>

              <div className="action">
                <p className="button">Message Us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsContent;
