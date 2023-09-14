import React from "react";
import { Link } from "react-router-dom";

const ContentFooterButton = () => {
  return (
    <div className="mainDivBtn">
      <div className="btn-box">
        <Link to="#" className="theme-btn-one">
          CALL TO TRADE
        </Link>
      </div>
      <div className="btn-box">
        <Link
          to="https://etrade.marfatia.net/#/app"
          className="theme-btn-one"
          target="_blanck"
        >
          LOGIN TO ONLINE TRADING
        </Link>
      </div>
    </div>
  );
};

export default ContentFooterButton;
