import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Modal from "react-modal";
import "../css/elements-css/NewLatestPop.css";
import PopupImg from "./../assets/img/Disclosur.png";

Modal.setAppElement("#root");

const NewsletterPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    // Use setTimeout to hide the element after 3 seconds
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clear the timeout when the component unmounts to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      {isVisible ? (
        <div className="popup">
          <div className="popup-content">
            <div className="iconDiv">
              <AiFillCloseCircle className="croseIcon" onClick={togglePopup} />
            </div>
            <img src={PopupImg} alt="popup" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NewsletterPopup;
