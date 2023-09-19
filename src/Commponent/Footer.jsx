import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  BiLogoFacebook,
  BiLogoGooglePlus,
  BiLogoTwitter,
  BiLogoWhatsapp,
  BiLogoYoutube,
  BiSolidPhoneCall,
} from "react-icons/bi";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import DetailsClintBanckAc from "../Modal/DetailsClintBanckAc";
import KeyManagerialPersonnels from "../Modal/KeyManagerialPersonnels";
import QuickContact from "../Modal/QuickContact";
import DownloadForm from "../Modal/downloadForm";
import Background20 from "./../assets/img/shape-20.png";
import Background21 from "./../assets/img/shape-21.png";

const Footer = () => {
  return (
    <React.Fragment>
      {/* main-footer */}

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
                        <Link to="#">About Us</Link>
                      </li>

                      <li>
                        <Link to="/feedback">Feedback</Link>
                      </li>

                      <li>
                        <Link to="http://203.88.142.27:8181/webmail3/">
                          Web Mail
                        </Link>
                      </li>
                      <li>
                        <Link to="/new-downloads">Support</Link>
                      </li>
                      <li>
                        <Link to="/new-downloads" target="_blank">
                          New Downloads
                        </Link>
                      </li>
                      <li>
                        <Link to="https://attendee.gotowebinar.com/pageNotFound.tmpl">
                          Webiner
                        </Link>
                      </li>
                      <li>
                        <Link to="/complains">Complains</Link>
                      </li>

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
                        <Link to="#">NSE EXCHANGE MARGIN FILE</Link>
                      </li>
                      <li>
                        <Link to="#">DIGITAL CONTRACTS</Link>
                      </li>
                      <li>
                        <Link to="#">POLICIES AND CIRCULARS</Link>
                      </li>
                      <li>
                        <DownloadForm />
                      </li>
                      <li>
                        <Link to="#">VERNACULAR LANGUAGES</Link>
                      </li>
                      <li>
                        <DetailsClintBanckAc />
                      </li>
                      <li>
                        <Link to="#">ONLINE DISPUTE RESOLUTION LINK</Link>
                      </li>
                      <li>
                        <Link to="#">AUTHORIZED PERSON LIST</Link>
                      </li>
                      <li>
                        <Link to="#">FILLING COMPLAINTS</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="links-widget footer-widget ml_30">
                  <div className="widget-title">
                    <h3>Usefull Links</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link to="/cms" state={"6501c8cf15bfa912f1831857"}>Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/cms" state={"6501c8db15bfa912f183185a"}>Terms &amp; Condition</Link>
                      </li>
                      <li>
                        <Link to="#">Client's Reg. Form</Link>
                      </li>
                      <li>
                        <Link to="/cms" state={"6501c8bb15bfa912f1831854"}>Disclaimer</Link>
                      </li>
                      <li>
                        <Link to="#">PMS Disclosure</Link>
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
                        <Link to="#">FTP Access</Link>
                      </li>
                      <li>
                        <Link to="https://evoting.cdslindia.com/Evoting/EvotingLogin">
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
                        <Link to="#">For Investor Grievances Contact:</Link>
                      </li>
                      <li>
                        <Link to="#">Exchange/SEBI Registration Details</Link>
                      </li>
                      <li>
                        <QuickContact />
                      </li>
                      <li>
                        <Link to="/cms" state={"6501c8f015bfa912f183185d"}>Advisory for Investors</Link>
                      </li>
                      <li>
                        <Link to="/cms" state={"6501c90415bfa912f1831860"}>Investor Charter Stock Broker</Link>
                      </li>
                      <li>
                        <Link to="/cms" state={"6501c91515bfa912f1831863"}>Investor Charter Research Analyst</Link>
                      </li>
                      <li>
                        <Link to="/cms" state={"6501c92315bfa912f1831866"}>
                          Investor Charter of Depository Participant
                        </Link>
                      </li>
                      <li>
                        <Link to="/cms" state={"6501c93115bfa912f1831869"}>Advisory KYC Compliance</Link>
                      </li>
                      <li>
                        <Link to="/cms" state={"6501c94115bfa912f183186c"}>
                          Investor Charter in Respect of Portfolio Management
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link to="#">Step by Step Producer of eKYC</Link>
                      </li>
                      <li>
                        <KeyManagerialPersonnels />
                      </li>
                      <li>
                        <Link to="#">
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
                  <h3>Usefull Links</h3>
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
                <Link className="footerLink" to="#">
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
              <Col lg="4" md="4">
                
                <i className="icon-3">
                  <HiOutlineMail className="footerLink" />
                </i>
                <Link className="footerLinkContact" to="#">
                  marfatiastockbroking@example.com
                </Link>
              </Col>
              <Col lg="2" md="3">
                <i className="icon-23">
                  <HiOutlineLocationMarker className="footerLink" />
                </i>
                <span className="footerLinkContact"> vadodara Gujarat</span>
              </Col>
              <Col lg="2" md="3">
                <i className="icon-2">
                  <BiSolidPhoneCall className="footerLink" />{" "}
                </i>
                <Link className="footerLinkContact" to="#">
                  0265-2351355
                </Link>
              </Col>
              <Col lg="3" md="3">
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
                <Link
                  className="footerLinkContact"
                  to="https://twitter.com/i/flow/login?redirect_after_login=%2FMarfatiaSeo"
                  target="_blanck"
                >
                  <BiLogoTwitter className="shareIconFooter" />
                </Link>
                <Link
                  className="footerLinkContact"
                  to="https://workspace.google.com/blog/product-announcements/what-you-need-to-know-about-the-sunset-of-consumer-google-plus-on-april-second"
                  target="_blnck"
                >
                  <BiLogoGooglePlus className="shareIconFooter" />
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
