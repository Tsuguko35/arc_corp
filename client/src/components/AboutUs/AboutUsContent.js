import React from "react";
import "../../styles/aboutUsContent.css";
import about_image1 from "../../assets/images/AboutUs/aboutImage1.jpg";
import about_Icon from "../../assets/images/AboutUs/Icons/aboutUsIcon.svg";
import hero_Icon from "../../assets/images/AboutUs/Icons/heroIcon.svg";
import hero_card_icon1 from "../../assets/images/AboutUs/Icons/heroCardIcon1.svg";
import hero_card_icon2 from "../../assets/images/AboutUs/Icons/heroCardIcon2.svg";
import hero_card_icon3 from "../../assets/images/AboutUs/Icons/heroCardIcon3.svg";
import { Link } from "react-router-dom";

import william from "../../assets/images/AboutUs/william.svg";
import amanda from "../../assets/images/AboutUs/amanda.svg";
import bill from "../../assets/images/AboutUs/bill.svg";
import hero_image from "../../assets/images/AboutUs/aboutUsHero2.jpg";

function AboutUsContent() {
  return (
    <div id="aboutUsContent" className="aboutUsContent">
      <div className="wrapper">
        <div className="about-details">
          <div className="image">
            <img src={about_image1} alt="" />
          </div>
          <div className="company-details">
            <div className="label">
              <img src={about_Icon} alt="" />
              <p>About Us</p>
            </div>
            <div className="overview-container">
              <p className="title">Our Company Overview</p>
              <p className="company-description">
                Arc Corporation is a premier provider of construction and
                roofing services in the Southeastern United States. Our
                expertise spans residential and commercial roofing, luxury home
                building, and commercial property development.
              </p>
              <div className="actions">
                <p className="active">Company</p>
                <p>Services</p>
                <p>Our Team</p>
              </div>
            </div>
            <div className="description">
              We offer specialized services such as One Click Roof for instant
              solar roofing quotes, Arc Engineering for thorough diagnostics,
              and Arc Standard for guaranteed property inspections. Committed to
              excellence and innovation, Arc Corporation ensures top-quality
              craftsmanship and exceptional customer satisfaction in every
              project.
            </div>
            <div className="action">
              <p>Learn More.</p>
            </div>
          </div>
        </div>

        <div className="team-details">
          <p className="label">Meet The Team</p>
          <div className="team-member">
            <div className="image">
              <img src={william} alt="" />
            </div>
            <div className="member-details">
              <div className="name-position">
                <p className="name">William Beliles</p>
                <p className="position">Chief Executive Officer</p>
              </div>
              <p className="description">
                Meet William Beliles, our visionary CEO leading Genesis Solar
                Power with a profound dedication to innovative and sustainable
                energy solutions. His strategic vision drives our company to the
                forefront of the solar energy industry, inspiring us to
                revolutionize the energy landscape and deliver exceptional solar
                power services to our customers
              </p>
              <div className="action">
                <Link to={"/About/Profile/WilliamBeliles"}>Learn More.</Link>
              </div>
            </div>
          </div>

          <div className="team-member inverted">
            <div className="image">
              <img src={amanda} alt="" />
            </div>
            <div className="member-details">
              <div className="name-position">
                <p className="name">Amanda Beliles</p>
                <p className="position">President</p>
              </div>
              <p className="description">
                Meet Amanda Beliles, a passionate nurse for 12 years, a
                dedicated mom to four girls, and a wife and business partner,
                She finds a fulfillment in merging her role. She engage with the
                community as a PTO board member at her daughters' school and
                delve into solar energy beyond healthcare. Witnessing solar's
                impact on savings in administration, She embraced both roles for
                their flexibility. Her goal is conserve energy for a better
                Earth and guide others on their solar journey.
              </p>
              <div className="action">
                <Link to={"/About/Profile/WilliamBeliles"}>Learn More.</Link>
              </div>
            </div>
          </div>

          <div className="team-member">
            <div className="image">
              <img src={bill} alt="" />
            </div>
            <div className="member-details">
              <div className="name-position">
                <p className="name">Bill Hicks</p>
                <p className="position">Vice President of Dealer Relations</p>
              </div>
              <p className="description">
                Meet Bill Hicks, our dedicated Vice President of Dealer
                Relations. With a passion for building strong partnerships, Bill
                excels in fostering lasting relationships with our dealers.
                Outside of work, he is a committed father and an active
                community member, often volunteering at local events. Bill's
                goal is to ensure seamless collaboration with our dealers,
                helping them thrive and succeed in the solar industry while
                promoting sustainable energy solutions.
              </p>
              <div className="action">
                <Link to={"/About/Profile/WilliamBeliles"}>Learn More.</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="background">
          <div className="overlay"></div>
          <img src={hero_image} alt="" />
        </div>
        <div className="wrapper">
          <div className="hero-content">
            <div className="hero-message">
              <div className="label">
                <img src={hero_Icon} alt="" />
                <p>ARC Production</p>
              </div>
              <div className="text-content">
                <p className="title">Do you want to be a dealer?</p>
                <p className="desc">
                  Our partner Solar Powur ON, offers the most competitive prices
                  in the industry. With a national install partner Genesis Solar
                  Power to help you turn your solar Powur ON! Our mission is to
                  provide lasting savings and quality products for your peace of
                  mind. Explore our options and make informed decisions for your
                  solar system.
                </p>
                <div className="action">
                  <Link>Message Us Now!</Link>
                </div>
              </div>
            </div>
            <div className="hero-cards">
              <div className="card">
                <img src={hero_card_icon1} alt="" />
                <p>High Quality Product</p>
              </div>
              <div className="card">
                <img src={hero_card_icon2} alt="" />
                <p>Competitive Savings</p>
              </div>
              <div className="card">
                <img src={hero_card_icon3} alt="" />
                <p>Saving Protection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsContent;
