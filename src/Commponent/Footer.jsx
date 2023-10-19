import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";

import {
  BiLogoFacebook,
  BiLogoWhatsapp,
  BiLogoYoutube,
  BiSolidPhoneCall,
} from "react-icons/bi";

import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import AddreshHadeOffice from "../Modal/AddreshHadeOffice";
import DetailsClintBanckAc from "../Modal/DetailsClintBanckAc";
import KeyManagerialPersonnels from "../Modal/KeyManagerialPersonnels";
import QuickContact from "../Modal/QuickContact";
import DownloadForm from "../Modal/downloadForm";
import InvestoContact from "../Pages/InvestorContact";
import SebiRegistration from "../Pages/SebiRegistrationDetails";
import { BASE_API_URL } from "../helpers/apiHelper";
import Background20 from "./../assets/img/shape-20.png";
import Background21 from "./../assets/img/shape-21.png";

const Footer = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const navigateToAnother = (id) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate(`/cms/${id}`);
    }, 700);
  };

  return (
    <React.Fragment>
      {/* main-footer */}

      {isLoading ? (
        <div className="container">
          <div className="loading-spinner-overlay">
            <div
              className="spinner-border  text-success"
              style={{ width: "6rem", height: "6rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      ) : null}

      <footer className="main-footer">
        <div className="widget-section">
          <div className="pattern-layer">
            <div
              className="pattern-1"
              style={{
                backgroundImage: `url(${Background20})`,
              }}
            />
            <div
              className="pattern-2"
              style={{
                backgroundImage: `url(${Background21})`,
              }}
            />
          </div>
          <div className="container">
            <div className="row clearfix">
              {/* <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="logo-widget footer-widget">
                  <figure className="footer-logo">
                    <Link to="/">
                      <img src={FooterLogo} alt />
                    </Link>
                  </figure>
                  <div className="text">
                    <p>
                      Text Will Be Cooming Soon...Text Will Be Coming
                      Soon...Text Will Be Coming Soon....
                    </p>
                    <div className="footerDiv">
                      <div>
                        <Link to="#">
                          <img src={AppSoter} alt="img" />
                        </Link>
                      </div>
                      <div>
                        <Link to="#">
                          <img src={PlayStore} alt="img" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                <div className="links-widget footer-widget ">
                  <div className="widget-title">
                    <h3>Quick Link</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link  to="/cms/6501c54415bfa912f1831806"
                         
                        >
                          About Us
                        </Link>
                      </li>

                      <li>
                        <Link to="/feedback">Feedback</Link>
                      </li>

                      <li>
                        <Link
                          to="http://203.88.142.27:8181/webmail3/"
                          target="_blank"
                        >
                          Web Mail
                        </Link>
                      </li>

                      <li>
                        <Link to="/new-downloads">New Downloads</Link>
                      </li>
                      <li>
                        <Link
                          to="https://attendee.gotowebinar.com/pageNotFound.tmpl"
                          target="_blank"
                        >
                          Webinar
                        </Link>
                      </li>
                      {/* <li>
                        <Link to="/complains">Complains</Link>
                      </li> */}

                      <li>
                        <Link to="/contact-us">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <Col lg="3" md="6" sm="12">
                <div className="links-widget footer-widget ml_30">
                  <div className="widget-title">
                    <h3>OTHER LINKS </h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link to="/new-downloads">
                          NSE EXCHANGE MARGIN FILE
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="http://203.88.142.26:84/TradeWeb/login.aspx?ReturnUrl=%2fTradeWeb"
                          target="_blank"
                        >
                          DIGITAL CONTRACTS
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${BASE_API_URL}/api/files/Policies%20and%20Circulars.rar`}
                        >
                          POLICIES AND CIRCULARS
                        </Link>
                      </li>
                      <li>
                        <DownloadForm />
                      </li>
                      <li>
                        <Link
                          to={`${BASE_API_URL}/api/files/VERNACULAR_LANGUAGES.rar`}
                        >
                          VERNACULAR LANGUAGES
                        </Link>
                      </li>
                      <li>
                        <DetailsClintBanckAc />
                      </li>
                      <li>
                        <Link
                          to="https://smartodr.in/intermediary/login"
                          target="_blank"
                        >
                          ONLINE DISPUTE RESOLUTION LINK
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${BASE_API_URL}/api/files/AUTHORISED_PERSON_LIST.pdf`}
                          target="_blank"
                        >
                          AUTHORIZED PERSON LIST
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${BASE_API_URL}/api/files/FilingComplaints.pdf`}
                          target="_blank"
                        >
                          FILLING COMPLAINTS
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="links-widget footer-widget ml_30">
                  <div className="widget-title">
                    <h3>Useful Links</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link to="/cms/6501c8cf15bfa912f1831857">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link to="/cms/6501c8db15bfa912f183185a">
                          Terms &amp; Condition
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${BASE_API_URL}/api/files/NEWKYCFORM.pdf`}
                          target="_blank"
                        >
                          Client's Reg. Form
                        </Link>
                      </li>
                      <li>
                        <Link to="/cms" state={"6501c8bb15bfa912f1831854"}>
                          Disclaimer
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${BASE_API_URL}/api/files/Disclosure_Document_September_2021_PMS.pdf`}
                          target="_blanck"
                        >
                          PMS Disclosure
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://www.nseindia.com/circulars/circular.htm"
                          target="_blanck"
                        >
                          NSE Circulars
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="https://evoting.cdslindia.com/Evoting/EvotingLogin"
                          target="_blanck"
                        >
                          E Voting from CDSL
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="https://www.scores.gov.in/scores/Welcome.html"
                          target="_blanck"
                        >
                          SEBI SCORES
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <Col lg="4" md="6" sm="12">
                <div className="links-widget footer-widget ml_30">
                  <div className="widget-title">
                    <h3>OTHER LINKS </h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <InvestoContact />
                      </li>
                      <li>
                        <SebiRegistration />
                      </li>
                      <li>
                        <QuickContact />
                      </li>
                      <li>
                        <Link to="/cms/6501c8f015bfa912f183185d" >
                          Advisory for Investors
                        </Link>
                      </li>
                      <li>
                        <Link to="/cms/6501c90415bfa912f1831860" >
                          Investor Charter Stock Broker
                        </Link>
                      </li>
                      <li>
                        <Link to="/cms/6501c91515bfa912f1831863" >
                          Investor Charter Research Analyst
                        </Link>
                      </li>
                      <li>
                        <Link to="/cms/6501c92315bfa912f1831866">
                          Investor Charter of Depository Participant
                        </Link>
                      </li>
                      <li>
                        <Link to="/cms/6501c93115bfa912f1831869">
                          Advisory KYC Compliance
                        </Link>
                      </li>
                      <li>
                        <Link to="/cms/6501c94115bfa912f183186c" >
                          Investor Charter in Respect of Portfolio Management
                          Services
                        </Link> 
                      </li>
                      <li>
                        <Link
                          to={`${BASE_API_URL}/api/files/StepbyStep-Procedure-for-Account-opening.pdf`}
                          target="_blank"
                        >
                          Step by Step Procedure of eKYC
                        </Link>
                      </li>
                      <li>
                        <KeyManagerialPersonnels />
                      </li>
                      <li>
                        <Link to="/cms/6521652926a358f4961ecec5" >
                        Registered Address of Head Office and Branches
                        </Link> 
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </div>
            <Row className="footerRow">
              <Col lg="2" md="3" sm="12">
                <div className="widget-title">
                  <h3>useful Links</h3>
                </div>
              </Col>
              <Col lg="1" md="2">
                <Link
                  className="footerLink"
                  to="https://www.nseindia.com/"
                  target="_blanck"
                >
                  NSE
                </Link>
              </Col>
              <Col lg="1" md="2">
                <Link
                  className="footerLink"
                  to="https://www.bseindia.com/"
                  target="_blanck"
                >
                  BSE
                </Link>
              </Col>
              <Col lg="1" md="2">
                <Link
                  className="footerLink"
                  to="https://www.sebi.gov.in/"
                  target="_blanck"
                >
                  SEBI
                </Link>
              </Col>
              <Col lg="1" md="2">
                <Link
                  className="footerLink"
                  target="_blanck"
                  to="https://www.nsdl.co.in/"
                >
                  NSDL
                </Link>
              </Col>
              <Col lg="1" md="2">
                <Link
                  className="footerLink"
                  to="https://www.ncdex.com/market-watch/live_quotes"
                  target="_blanck"
                >
                  NCDEX
                </Link>
              </Col>
              <Col lg="1" md="2">
                <Link
                  className="footerLink"
                  to="https://www.mcxindia.com/home"
                  target="_blanck"
                >
                  MCX
                </Link>
              </Col>
              <Col lg="1" md="2">
                <Link
                  className="footerLink"
                  to="https://www.cdslindia.com/index.html"
                  target="_blanck"
                >
                  CDSL
                </Link>
              </Col>
              <Col lg="1" md="2">
                <Link
                  className="footerLink"
                  to="https://www.rbi.org.in/"
                  target="_blanck"
                >
                  RBI
                </Link>
              </Col>
              <Col lg="1" md="2">
                <Link
                  className="footerLink"
                  to="https://www.fmc.com/en"
                  target="_blanck"
                >
                  FMC
                </Link>
              </Col>
            </Row>
            <Row className="footerRow">
              <Col lg="2" md="2">
                <div className="widget-title">
                  <h3>Contact</h3>
                </div>
              </Col>
              <Col lg="3" md="4">
                <i className="icon-3">
                  <HiOutlineMail className="footerLink" />
                </i>
                <a
                  className="footerLinkContact"
                  href="mailto:customercare@marfatia.net"
                >
                  customercare@marfatia.net
                </a>
              </Col>
              <Col lg="2" md="3">
                <i className="icon-23">
                  <HiOutlineLocationMarker className="footerLink" />
                </i>
                <span className="footerLinkContact"> vadodara , Gujarat</span>
              </Col>
              <Col lg="2" md="3">
                <i className="icon-2">
                  <BiSolidPhoneCall className="footerLink" />{" "}
                </i>
                <a className="footerLinkContact" href="tel:0265-2351355">
                  0265-2351355
                </a>
              </Col>
              <Col lg="3" md="4">
                <Link
                  className="footerLinkContact"
                  to="https://www.facebook.com/vadodaraMarfatia"
                  target="_blanck"
                >
                  <BiLogoFacebook className="shareIconFooter" />
                </Link>
                <Link
                  className="footerLinkContact"
                  to="https://api.whatsapp.com/send?phone=919925142538&"
                  target="_blanck"
                >
                  <BiLogoWhatsapp className="shareIconFooter" />
                </Link>
                {/* <Link
                  className="footerLinkContact"
                  to="https://twitter.com/i/flow/login?redirect_after_login=%2FMarfatiaSeo"
                  target="_blanck"
                >
                  <BiLogoTwitter className="shareIconFooter" />
                </Link> */}
                <Link
                  className="footerLinkContact"
                  to="https://apps.apple.com/in/app/share4surepro/id6446141699"
                  target="_blnck"
                >
                  <AiFillApple className="shareIconFooter" />
                </Link>
                <Link
                  className="footerLinkContact"
                  to="https://play.google.com/store/apps/details?id=com.marfatia.xts&pcampaignid=web_share"
                  target="_blnck"
                >
                  <AiFillAndroid className="shareIconFooter" />
                </Link>
                <Link
                  className="footerLinkContact"
                  to="https://www.youtube.com/channel/UCRmBOZt6mmMekA7_UbxdLSw"
                  target="_blanck"
                >
                  <BiLogoYoutube className="shareIconFooter" />
                </Link>
              </Col>
            </Row>
          </div>
        </div>
        <div className="footer-bottom centred">
          <div className="auto-container">
            <div className="copyright">
              <p>
                Copyright 2023 by{" "}
                <Link to="#">Marfatia Stock Broking Pvt. Ltd</Link> theme All
                Right Reserved.
              </p>
              <p>
                Developed & Designed By:
                <Link to="https://www.barodaweb.com/" target="_blank">
                  Barodaweb | The E-Catalogue Designe
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* main-footer end */}
    </React.Fragment>
  );
};

export default Footer;
