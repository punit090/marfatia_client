import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import StockBackground from "./../assets/img/page-title.jpg";

const HaderContent2 = ({ Title, SubTitle }) => {
  return (
    <div>
      {" "}
      {/* page-title */}
      <section className="page-title centred">
        <div
          className="bg-layer"
          style={{ backgroundImage: `url(${StockBackground})` }}
        />
        <div className="auto-container">
          <div className="content-box">
            <h1>{Title}</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="/">Home</Link> <AiOutlineRight />{" "}
              </li>
              <li>{SubTitle}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HaderContent2;
