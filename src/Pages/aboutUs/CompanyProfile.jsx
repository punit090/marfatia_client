import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import HaderContent2 from "../../Commponent/HaderContent2";
import "../../css/elements-css/page-title.css";
import "../../css/elements-css/stock.css";

const CompanyProfile = () => {
  useEffect(() => {
    const scrollDelay = 100; // 100 ms delay

    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 200);
    }, scrollDelay);

    return () => clearTimeout(timeoutId); // Cleanup the timeout when the component unmounts
  }, []);
  return (
    <div>
      <HaderContent2 Title=" Company  Profile" SubTitle="Company  Profile" />
      <Container>
        <div className="container">
          <Row className=" justify-content-center align-items-center">
            <Col md="12" className="mt-5">
              <Card className="card">
                <h2 className="card-header" style={{ color: "#a2ce3c" }}>
                  Who We Are
                </h2>
                <div className="card-body">
                  <ul>
                    <li>
                      ✓ Vadodara's Best Leading Financial Advisory Firm of
                      Gujarat
                    </li>
                    <li>✓ Head Office at Vadodara, Alkapuri area</li>
                    <li>
                      ✓ In the business of share broking since more than 20
                      years
                    </li>
                    <li>
                      ✓ Having Facilities of trading in BSE/NSE/Future
                      Options/MCX and NCDEX
                    </li>
                    <li>✓ Mobile Trading</li>
                    <li>✓ Stock Lending and Borrowing</li>
                    <li>✓ Professional Supportive and Knowledgeable Staff</li>
                  </ul>
                </div>
              </Card>
            </Col>
            <div className="col-md-12 mt-5">
              <Card className="card">
                <h2 className="card-header" style={{ color: "#a2ce3c" }}>
                  What We Offer
                </h2>
                <div className="card-body">
                  <ul>
                    <li>✓ Advice-Based Broking (Equities &amp; Derivatives)</li>
                    <li>✓ Online Portfolio Tracker</li>
                    <li>✓ E-Broking (Internet Trading)</li>
                    <li>✓ Depository Services (CDSL)</li>
                    <li>✓ IPO</li>
                    <li>✓ Mutual Fund Investment</li>
                    <li>✓ Company Fixed Deposit</li>
                    <li>✓ Portfolio management Services</li>
                    <li>✓ Research Reports</li>
                  </ul>
                </div>
              </Card>
            </div>
          </Row>
        </div>

        <div className="mainDivBtn">
          <div
            className="btn-box"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="0265-2351355"
          >
            <Link className="theme-btn-one" to="tel:0265-2351355">
              CALL TO TRADE
            </Link>
          </div>
          <div className="btn-box">
            <Link
              className="theme-btn-one"
              to="https://etrade.marfatia.net/#/app"
              target="_blanck"
            >
              LOGIN TO ONLINE TRADING
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CompanyProfile;
