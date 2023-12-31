import React from "react";
import { AiFillAndroid, AiFillApple, AiOutlineDown } from "react-icons/ai";
import { BiSearch, BiSolidPhoneCall } from "react-icons/bi";
import { FaClock, FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import MobileHader from "./../Commponent/MobileHader";
import Logo from "./../assets/img/Logo1new.png";
import "./../css/color.css";

const Hader = () => {
  return (
    <div>
      {/*Search Popup*/}

      <div id="search-popup" className="search-popup">
        <div className="popup-inner">
          <div className="upper-box clearfix">
            <figure className="logo-box pull-left">
              <Link to="/">
                <img
                  src="assets/images/logo.png"
                  alt="img"
                  onClick={() => {
                    window.location.reload();
                  }}
                />
              </Link>
            </figure>
            <div className="close-search pull-right">
              <span className="far fa-times" />
            </div>
          </div>
          <div className="overlay-layer" />
          <div className="auto-container">
            <div className="search-form">
              <form
                method="post"
                action="http://azim.commonsupport.com/Biztech/index.html"
              >
                <div className="form-group">
                  <fieldset>
                    <input
                      type="search"
                      className="form-control"
                      name="search-input"
                      defaultValue
                      placeholder="Type your keyword and hit"
                      required
                    />
                    <button type="submit">
                      <i className="far fa-search" />
                    </button>
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* main header */}
      <header className="main-header">
        {/* header-top */}

        <div className="header-top">
          <div className="auto-container">
            <div className="top-inner">
              <div className="top-left">
                <ul className="info clearfix">
                  <li>
                    <i className="icon-1">
                      {" "}
                      <FaClock />{" "}
                    </i>
                    Mon-Fri 8:00 am-6:00 pm
                  </li>
                  <li>
                    <i className="icon-2">
                      <BiSolidPhoneCall />{" "}
                    </i>
                    <a href="tel:0265-2351355"> 0265-2351355</a>
                  </li>
                  <li>
                    <i className="icon-3">
                      <FiMail />
                    </i>
                    <Link to="mailto:info@example.com">
                      customercare@marfatia.net
                    </Link>
                  </li>
                  <li>
                    <Link to="/new-downloads" className="blink-link">
                      Support
                      <b>
                        <span className="blink-text">Live</span>
                      </b>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://evoting.cdslindia.com/Evoting/EvotingLogin"
                      className="blink-link"
                    >
                      <b>
                        <span className="blink-text">E Voting from CDSL</span>
                      </b>
                    </Link>
                  </li>
                  <li>
                    <div className="login">
                      <Link
                        to="https://etrade.marfatia.net/#/app"
                        target="_blanck"
                      >
                        Sing in (E Trade)
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="top-right">
                <ul className="social-links clearfix shareLinkHader">
                  <li>
                    <Link
                      to="https://www.facebook.com/vadodaraMarfatia"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://api.whatsapp.com/send?phone=919925142538&"
                      target="_blank"
                    >
                      <FaWhatsapp />
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="https://apps.apple.com/in/app/share4surepro/id6446141699"
                      target="_blank"
                    >
                      <AiFillApple />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://play.google.com/store/apps/details?id=com.marfatia.xts&pcampaignid=web_share"
                      target="_blank"
                    >
                      <AiFillAndroid />
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="https://www.youtube.com/channel/UCRmBOZt6mmMekA7_UbxdLSw"
                      target="_blank"
                    >
                      <FaYoutube />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* header-lower */}
        <div className="header-lower">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link to="/">
                    <img src={Logo} alt="img" />
                  </Link>
                </figure>
              </div>
              <div className="menu-area clearfix">
                {/*Mobile Navigation Toggler*/}
                {/* <div className="mobile-nav-toggler">
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                </div> */}
                <MobileHader />
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li className="current">
                        <div className="dropdown">
                          <button className="dropbtn">
                            About us <AiOutlineDown />
                          </button>
                          <div className="dropdown-content2">
                            <Link to="/cms/6501c54415bfa912f1831806">
                              Company Profile
                            </Link>
                            <Link to="/cms/6501c56515bfa912f1831809">
                              Vision and Mission
                            </Link>
                            <Link to="/cms/6501c59215bfa912f183180c">
                              Advantages
                            </Link>
                            <Link to="/cms/6501c5a615bfa912f183180f">
                              The Team
                            </Link>
                            <Link to="/cms/6501c5be15bfa912f1831812">
                              Milestones
                            </Link>

                            <Link to="/gallery">Gallery</Link>
                          </div>
                        </div>
                      </li>

                      <li className="current">
                        <div className="dropdown">
                          <button className="dropbtn">
                            Services <AiOutlineDown />
                          </button>
                          <div className="dropdown-content">
                            <div className="row">
                              <div className="col-lg-6">
                                <Link to="/cms/6501c5f215bfa912f1831818">
                                  Stock Market
                                </Link>
                                <Link to="/cms/6501c60615bfa912f183181b">
                                  Currency
                                </Link>
                                <Link to="/cms/6501c61615bfa912f183181e">
                                  Depository Services
                                </Link>

                                <Link to="/cms/6501c64115bfa912f1831824">
                                  Portfolio Management Services
                                </Link>
                              </div>
                              <div className="col-lg-6">
                                <Link to="/cms/6501c5be15bfa912f1831812">
                                  Premium Client Services
                                </Link>
                                <Link
                                  to="https://marfatia.wealthmagic.in/"
                                  target="_blanck"
                                >
                                  Mutual Funds
                                </Link>
                                <Link to="/cms/6501c65f15bfa912f183182a">
                                  Digital Library
                                </Link>
                                <Link to="/cms/6501c66d15bfa912f183182d">
                                  Dial N Trade
                                </Link>
                                <Link to="/cms/6501c68415bfa912f1831830">
                                  NRI Desk
                                </Link>
                                <Link to="/cms/6501c69d15bfa912f1831833">
                                  SLBM [Security Landing & Borrowing
                                  Merchandise]
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="current">
                        <div className="dropdown">
                          <button className="dropbtn">
                            Markets <AiOutlineDown />
                          </button>
                          <div className="dropdown-content2">
                            <Link to="/cms/6501c7ed15bfa912f1831836">
                              Equity
                            </Link>
                            <Link to="/cms/6501c7fe15bfa912f1831839">
                              Derivatives
                            </Link>
                            <Link to="/cms/6501c80b15bfa912f183183c">
                              Currency{" "}
                            </Link>
                            <Link to="/cms/6501c81915bfa912f183183f">IPO</Link>
                            <Link to="/all-news">News</Link>
                          </div>
                        </div>
                      </li>

                      <li className="current">
                        <div className="dropdown">
                          <button className="dropbtn">
                            Research & Knowledge <AiOutlineDown />
                          </button>
                          <div className="dropdown-content2">
                            <Link to="/cms/6501c86415bfa912f1831848">
                              How to Trade
                            </Link>

                            <Link to="/cms/6501c88015bfa912f183184e">PMS</Link>
                          </div>
                        </div>
                      </li>
                      <li className="current">
                        <div className="dropdown">
                          <button className="dropbtn">
                            Payment /Withdraw Funds <AiOutlineDown />
                          </button>
                          <div className="dropdown-content2">
                            <Link to="/withdrawl-form">Withdraw Funds</Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown">
                          <button className="dropbtn">
                            Contact Us <AiOutlineDown />
                          </button>
                          <div className="dropdown-content2">
                            <Link to="/contact-us">Contact Details</Link>
                            <Link
                              to="https://www.marfatia.net/uploads/pdf/NEWKYCFORM.pdf"
                              target="_blank"
                            >
                              Open An Account
                            </Link>
                            <Link to="/cms/6501c8a115bfa912f1831851">
                              Partner With Us
                            </Link>

                            <Link to="/complains">Support / Query</Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <ul className="menu-right-content">
                <li className="btn-box">
                  <Link
                    to="https://smartkyc.co.in/m/gbrk_130psp"
                    target="_blank"
                  >
                    Activate Dormant A/C
                  </Link>
                </li>
                <li className="btn-box">
                  <Link
                    to="http://203.88.142.26:84/iTradeNet/Login.aspx?ReturnUrl=%2fiTradenet%2fdefault.aspx"
                    target="_blank"
                  >
                    Trade Net
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*sticky Header*/}
        <div className="sticky-header">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link to="#">
                    <img src="assets/images/logo.png" alt="img" />
                  </Link>
                </figure>
              </div>
              <div className="menu-area clearfix">
                <nav className="main-menu clearfix">
                  {/*Keep This Empty / Menu will come through Javascript*/}
                </nav>
              </div>
              <ul className="menu-right-content">
                <li className="search-box-outer search-toggler">
                  <i className="icon-4">
                    <BiSearch />
                  </i>
                </li>
                <li className="btn-box">
                  <Link to="#">Free Consulting</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* main-header end */}
      {/* Mobile Menu  */}

      {/* End Mobile Menu */}

      {/* <Team /> */}
    </div>
  );
};

export default Hader;
