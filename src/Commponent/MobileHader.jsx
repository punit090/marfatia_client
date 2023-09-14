import React, { useState } from "react";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
//Now i get access to all the icons
import { GiArchiveResearch } from "react-icons/gi";
import {
  MdOutlineMiscellaneousServices,
  MdOutlinePayments,
  MdOutlinePermContactCalendar,
} from "react-icons/md";
import { PiHandCoinsLight } from "react-icons/pi";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import * as AiIcons from "react-icons/ai";
// import { GiHamburgerMenu } from "react-icons/gi";

const MobileHader = () => {
  const [sidebar, setSidebar] = useState(false);
  const [show, setShow] = useState(false);
  const [market, setMarket] = useState(false);
  const [fund, setFund] = useState(false);
  const [research, setResearch] = useState(false);
  const [payment, setPayment] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <React.Fragment>
      <div className="mainDivMobileHader">
        <IconContext.Provider value={{ color: "#FFF" }}>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items">
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose onClick={showSidebar} />
                </Link>
              </li>
              <div style={{ padding: "20px" }}>
                <li className="mobileHaderLi">
                  <Link className="mobileHaderLink" to="/">
                    <AiIcons.AiFillHome className="iconDiv" />
                    <span>Home</span>
                  </Link>
                </li>
                <div>
                  <div
                    className="dropdowMobile"
                    onClick={() => setAbout(!about)}
                  >
                    <li className="mobileHaderLi">
                      <Link className="mobileHaderLink" to="#">
                        <FaIcons.FaInfoCircle className="iconDiv" />
                        <span>About us</span>
                      </Link>
                    </li>
                    <div>
                      {about ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                    </div>
                  </div>
                  {about && (
                    <div className="list">
                      <div>
                        <Link className="titleLink" to="/company-profile">
                          {" "}
                          Company Profile
                        </Link>
                      </div>
                      <div>
                        <Link className="titleLink" to="#">
                          {" "}
                          Vision and Mission
                        </Link>
                      </div>
                      <div>
                        <Link className="titleLink" to="#">
                          {" "}
                          Advantagesn
                        </Link>
                      </div>
                      <div>
                        <Link className="titleLink" to="#">
                          The Team
                        </Link>
                      </div>
                      <div>
                        <Link className="titleLink" to="#">
                          Milestones
                        </Link>
                      </div>
                      <div>
                        <Link className="titleLink" to="#">
                          Client Speaks
                        </Link>
                      </div>
                      <div>
                        <Link className="titleLink" to="/gallery">
                          Gallery
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <div className="dropdowMobile" onClick={() => setShow(!show)}>
                    <li className="mobileHaderLi">
                      <Link className="mobileHaderLink" to="#">
                        <MdOutlineMiscellaneousServices className="iconDiv" />
                        <span>Services</span>
                      </Link>
                    </li>
                    <div>
                      {show ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                    </div>
                  </div>
                  {show && (
                    <div className="list">
                      <div>
                        <Link className="titleLink" to="#">
                          {" "}
                          Stock Market
                        </Link>
                      </div>
                      <div>
                        <Link className="titleLink" to="#">
                          {" "}
                          Currency
                        </Link>
                      </div>
                      <div>
                        <Link className="titleLink" to="#">
                          {" "}
                          Depository Services
                        </Link>
                      </div>
                      <div>
                        <Link className="titleLink" to="#">
                          {" "}
                          Mobile Trading{" "}
                        </Link>
                      </div>
                      <div>
                        <Link className="titleLink" to="#">
                          {" "}
                          Portfolio Management Services
                        </Link>
                      </div>
                      <div>
                        <Link className="titleLink" to="#">
                          Premium Client Services
                        </Link>
                      </div>
                      <div>
                        <Link className="titleLink" to="#">
                          Mutual Funds
                        </Link>
                      </div>
                      <div>
                        <Link className="titleLink" to="#">
                          {" "}
                          Digital Library
                        </Link>
                      </div>
                      <div>
                        <Link className="titleLink" to="#">
                          {" "}
                          Dial N Trade
                        </Link>
                      </div>
                      <div>
                        <Link className="titleLink" to="#">
                          {" "}
                          NRI Desk
                        </Link>
                      </div>
                      <div>
                        <Link className="titleLink" to="#">
                          {" "}
                          NRI DeskSLBM [Security Landing & Borrowing
                          Merchandise]
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className="dropdowMobile"
                  onClick={() => setMarket(!market)}
                >
                  <li className="mobileHaderLi">
                    <Link className="mobileHaderLink" to="#">
                      <AiIcons.AiOutlineStock className="iconDiv" />
                      <span>Market</span>
                    </Link>
                  </li>
                  <div>
                    {market ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                  </div>
                </div>
                {market && (
                  <div className="list">
                    <div>
                      <Link className="titleLink" to="#">
                        {" "}
                        Equity
                      </Link>
                    </div>
                    <div>
                      <Link className="titleLink" to="#">
                        {" "}
                        Derivatives
                      </Link>
                    </div>
                    <div>
                      <Link className="titleLink" to="#">
                        {" "}
                        Currency
                      </Link>
                    </div>
                    <div>
                      <Link className="titleLink" to="#">
                        {" "}
                        IPO{" "}
                      </Link>
                    </div>
                    <div>
                      <Link className="titleLink" to="/news">
                        News
                      </Link>
                    </div>
                  </div>
                )}

                <div className="dropdowMobile" onClick={() => setFund(!fund)}>
                  <li className="mobileHaderLi">
                    <Link className="mobileHaderLink" to="#">
                      <PiHandCoinsLight className="iconDiv" />
                      <span>Mutual Fund</span>
                    </Link>
                  </li>
                  <div>{fund ? <RiArrowUpSLine /> : <RiArrowDownSLine />}</div>
                </div>
                {fund && (
                  <div className="list">
                    <div>
                      <Link className="titleLink" to="/mtual-fund-details">
                        {" "}
                        MF Schemes
                      </Link>
                    </div>
                  </div>
                )}

                <div
                  className="dropdowMobile"
                  onClick={() => setResearch(!research)}
                >
                  <li className="mobileHaderLi">
                    <Link className="mobileHaderLink" to="#">
                      <GiArchiveResearch className="iconDiv" />
                      <span>Research & Knowledge</span>
                    </Link>
                  </li>
                  <div>
                    {research ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                  </div>
                </div>
                {research && (
                  <div className="list">
                    <div>
                      <Link className="titleLink" to="/daily-tips">
                        {" "}
                        Daily Tips
                      </Link>
                    </div>
                    <div>
                      <Link className="titleLink" to="/research -report">
                        Research Reports
                      </Link>
                    </div>
                    <div>
                      <Link className="titleLink" to="#">
                        How to Trade
                      </Link>
                    </div>

                    <div>
                      <Link className="titleLink" to="#">
                        Mobile App
                      </Link>
                    </div>
                    <div>
                      <Link className="titleLink" to="#">
                        PMS
                      </Link>
                    </div>
                  </div>
                )}

                <div
                  className="dropdowMobile"
                  onClick={() => setPayment(!payment)}
                >
                  <li className="mobileHaderLi">
                    <Link className="mobileHaderLink" to="#">
                      <MdOutlinePayments className="iconDiv" />
                      <span>Payment /Withdraw Funds</span>
                    </Link>
                  </li>
                  <div>
                    {payment ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                  </div>
                </div>
                {payment && (
                  <div className="list">
                    <div>
                      <Link
                        className="titleLink"
                        to="http://136.233.133.90:8787"
                        target="_blanck"
                      >
                        {" "}
                        Transfer Marfatia
                      </Link>
                    </div>
                    <div>
                      <Link className="titleLink" to="/withdrawl-form">
                        Withdraw Funds
                      </Link>
                    </div>
                  </div>
                )}

                <div
                  className="dropdowMobile"
                  onClick={() => setContact(!contact)}
                >
                  <li className="mobileHaderLi">
                    <Link className="mobileHaderLink" to="#">
                      <MdOutlinePermContactCalendar className="iconDiv" />
                      <span>Contact Us </span>
                    </Link>
                  </li>
                  <div>
                    {contact ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                  </div>
                </div>
                {contact && (
                  <div className="list">
                    <div>
                      <Link className="titleLink" to="/contact-us">
                        {" "}
                        Contact Details
                      </Link>
                    </div>
                    <div>
                      <Link
                        className="titleLink"
                        to="https://www.marfatia.net/uploads/pdf/NEWKYCFORM.pdf"
                      >
                        Open An Account
                      </Link>
                    </div>
                    <div>
                      <Link className="titleLink" to="#">
                        Partner With Us
                      </Link>
                    </div>
                  </div>
                )}
                <li className="mobileHaderLi">
                  <Link
                    className="mobileHaderLink"
                    to="https://etrade.marfatia.net/#/app"
                  >
                    <AiIcons.AiOutlineUser className="iconDiv" />
                    <span>Sing in (E Trade) </span>
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    </React.Fragment>
  );
};

export default MobileHader;
