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
import { Link, useNavigate } from "react-router-dom";

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
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const navigateToAnother = (id) => {
    setSidebar(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate(`/cms/${id}`);
    }, 700);
  };

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
                        <Link
                          className="titleLink"
                          onClick={() => {
                            navigateToAnother("6501c54415bfa912f1831806");
                          }}
                        >
                          {" "}
                          Company Profile
                        </Link>
                      </div>
                      <div>
                        <Link
                          className="titleLink"
                          onClick={() => {
                            navigateToAnother("6501c56515bfa912f1831809");
                          }}
                        >
                          {" "}
                          Vision and Mission
                        </Link>
                      </div>
                      <div>
                        <Link
                          className="titleLink"
                          onClick={() => {
                            navigateToAnother("6501c59215bfa912f183180c");
                          }}
                        >
                          {" "}
                          Advantages
                        </Link>
                      </div>
                      <div>
                        <Link
                          className="titleLink"
                          onClick={() =>
                            navigateToAnother("6501c5a615bfa912f183180f")
                          }
                        >
                          The Team
                        </Link>
                      </div>
                      <div>
                        <Link
                          className="titleLink"
                          onClick={() =>
                            navigateToAnother("6501c5be15bfa912f1831812")
                          }
                        >
                          Milestones
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
                        <Link
                          className="titleLink"
                          onClick={() =>
                            navigateToAnother("6501c5f215bfa912f1831818")
                          }
                        >
                          {" "}
                          Stock Market
                        </Link>
                      </div>
                      <div>
                        <Link
                          className="titleLink"
                          onClick={() =>
                            navigateToAnother("6501c60615bfa912f183181b")
                          }
                        >
                          {" "}
                          Currency
                        </Link>
                      </div>
                      <div>
                        <Link
                          className="titleLink"
                          onClick={() =>
                            navigateToAnother("6501c61615bfa912f183181e")
                          }
                        >
                          {" "}
                          Depository Services
                        </Link>
                      </div>
                      <div>
                        <Link
                          className="titleLink"
                          onClick={() =>
                            navigateToAnother("6501c62d15bfa912f1831821")
                          }
                        >
                          {" "}
                          Mobile Trading{" "}
                        </Link>
                      </div>
                      <div>
                        <Link
                          className="titleLink"
                          onClick={() =>
                            navigateToAnother("6501c64115bfa912f1831824")
                          }
                        >
                          {" "}
                          Portfolio Management Services
                        </Link>
                      </div>
                      <div>
                        <Link
                          className="titleLink"
                          onClick={() =>
                            navigateToAnother("6501c64f15bfa912f1831827")
                          }
                        >
                          Premium Client Services
                        </Link>
                      </div>
                      <div>
                        <Link
                          className="titleLink"
                          to="https://marfatia.wealthmagic.in/"
                          target="_blanck"
                        >
                          Mutual Funds
                        </Link>
                      </div>
                      <div>
                        <Link
                          className="titleLink"
                          onClick={() =>
                            navigateToAnother("6501c65f15bfa912f183182a")
                          }
                        >
                          {" "}
                          Digital Library
                        </Link>
                      </div>
                      <div>
                        <Link
                          className="titleLink"
                          onClick={() =>
                            navigateToAnother("6501c66d15bfa912f183182d")
                          }
                        >
                          {" "}
                          Dial N Trade
                        </Link>
                      </div>
                      <div>
                        <Link
                          className="titleLink"
                          onClick={() =>
                            navigateToAnother("6501c68415bfa912f1831830")
                          }
                        >
                          {" "}
                          NRI Desk
                        </Link>
                      </div>
                      <div>
                        <Link
                          className="titleLink"
                          onClick={() =>
                            navigateToAnother("6501c69d15bfa912f1831833")
                          }
                        >
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
                      <Link
                        className="titleLink"
                        onClick={() =>
                          navigateToAnother("6501c7ed15bfa912f1831836")
                        }
                      >
                        {" "}
                        Equity
                      </Link>
                    </div>
                    <div>
                      <Link
                        className="titleLink"
                        onClick={() =>
                          navigateToAnother("6501c7fe15bfa912f1831839")
                        }
                      >
                        {" "}
                        Derivatives
                      </Link>
                    </div>
                    <div>
                      <Link
                        className="titleLink"
                        onClick={() =>
                          navigateToAnother("6501c80b15bfa912f183183c")
                        }
                      >
                        {" "}
                        Currency
                      </Link>
                    </div>
                    <div>
                      <Link
                        className="titleLink"
                        onClick={() =>
                          navigateToAnother("6501c81915bfa912f183183f")
                        }
                      >
                        {" "}
                        IPO{" "}
                      </Link>
                    </div>
                    <div>
                      <Link className="titleLink" to="/all-news">
                        News
                      </Link>
                    </div>
                  </div>
                )}

                {/* <div className="dropdowMobile" onClick={() => setFund(!fund)}>
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
                )} */}

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
                      <Link
                        className="titleLink"
                        onClick={() =>
                          navigateToAnother("6501c86415bfa912f1831848")
                        }
                      >
                        How to Trade
                      </Link>
                    </div>

                    <div>
                      <Link
                        className="titleLink"
                        onClick={() =>
                          navigateToAnother("6501c87115bfa912f183184b")
                        }
                      >
                        Mobile App
                      </Link>
                    </div>
                    <div>
                      <Link
                        className="titleLink"
                        onClick={() =>
                          navigateToAnother("6501c88015bfa912f183184e")
                        }
                      >
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
                      <Link
                        className="titleLink"
                        onClick={() =>
                          navigateToAnother("6501c8a115bfa912f1831851")
                        }
                      >
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
