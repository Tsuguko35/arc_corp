import React, { useState } from "react";
import "../../styles/faq.css";

import * as FiIcons from "react-icons/fi";

export default function Faq() {
  const [activeFaq, setActiveFaq] = useState(0);

  const openFaq = (faqNumber) => {
    if (faqNumber === activeFaq) {
      setActiveFaq(0);
    } else {
      setActiveFaq(faqNumber);
    }
  };
  return (
    <div id="faq" className="faq feature">
      <div className="wrapper">
        <div className="faq-container">
          <div className="image">
            <img
              src={
                "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716424368/Arc_Faq/qilfotzrqpifrfg7duvx.webp"
              }
              alt="Faq"
            />
          </div>
          <div className="faq-content">
            <div className="label">
              <img
                src={
                  "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716424368/Arc_Faq/yx9jg1anfagqgiit94zs.webp"
                }
                alt="Faq"
              />
              <p>FAQ Question</p>
            </div>
            <p className="title">Frequently asked questions</p>
            <div className="faq-accordion">
              <div
                className={`faq ${activeFaq === 1 ? "active" : ""}`}
                onClick={() => openFaq(1)}
              >
                <div className="text-container">
                  <div className="question">
                    <p>Lorem Ipsum is simply dummy text of the prin....?</p>
                    <p className="icon">
                      {activeFaq !== 1 && <FiIcons.FiPlus />}

                      {activeFaq === 1 && <FiIcons.FiMinus />}
                    </p>
                  </div>
                  <p className="answer">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
              <div
                className={`faq ${activeFaq === 2 ? "active" : ""}`}
                onClick={() => openFaq(2)}
              >
                <div className="text-container">
                  <div className="question">
                    <p>Lorem Ipsum is simply dummy text of the prin....?</p>
                    <p className="icon">
                      {activeFaq !== 2 && <FiIcons.FiPlus />}

                      {activeFaq === 2 && <FiIcons.FiMinus />}
                    </p>
                  </div>
                  <p className="answer">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
              <div
                className={`faq ${activeFaq === 3 ? "active" : ""}`}
                onClick={() => openFaq(3)}
              >
                <div className="text-container">
                  <div className="question">
                    <p>Lorem Ipsum is simply dummy text of the prin....?</p>
                    <p className="icon">
                      {activeFaq !== 3 && <FiIcons.FiPlus />}

                      {activeFaq === 3 && <FiIcons.FiMinus />}
                    </p>
                  </div>
                  <p className="answer">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
              <div
                className={`faq ${activeFaq === 4 ? "active" : ""}`}
                onClick={() => openFaq(4)}
              >
                <div className="text-container">
                  <div className="question">
                    <p>Lorem Ipsum is simply dummy text of the prin....?</p>
                    <p className="icon">
                      {activeFaq !== 4 && <FiIcons.FiPlus />}

                      {activeFaq === 4 && <FiIcons.FiMinus />}
                    </p>
                  </div>
                  <p className="answer">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
