import React from "react";
import { Card, Container } from "react-bootstrap";

import ContentFooterButton from "../../Commponent/contentFooterButton";

import HaderContent2 from "../../Commponent/HaderContent2";
import "../../css/elements-css/page-title.css";
import "../../css/elements-css/stock.css";

const CompanyProfile = () => {
  return (
    <div>
      <HaderContent2 Title=" Company  Profile" SubTitle="Company  Profile" />
      <Container>
        <div className="cardDiv">
          <Card className="contanerCard">
            <h2 className="contnetTitle">What We are ?</h2>
            <p>
              Vadodara Best Leading Financial Advisory Firm of Gujarat <br />
              Head Office at Vadodara , Alkapuri area
              <br /> In the business of share broking since more than 20 years
              <br />
              Having Facilities of trading in BSE/NSE/Future Options/MCX and
              NCDEX
              <br /> Mobile Trading
              <br /> Stock Lending and Borrowing <br />
              Professional Supporting and Knowledgeable Staff
            </p>
          </Card>
        </div>
        <div>
          <Card className="contanerCard">
            <h2 className="contnetTitle">What We Offer ?</h2>
            <p>
              Advice Base Broking (Equities & Derivatives).
              <br />
              Online Portfolio Tracker.
              <br />
              E- Broking (Internet Trading).
              <br />
              Depository Services(CDSL).
              <br />
              IPO
              <br /> Mutual Fund Investment <br />
              Company Fixed Deposit <br />
              Portfolio management Services
              <br />
              Research Reports
            </p>
          </Card>
        </div>
       <ContentFooterButton></ContentFooterButton>
      </Container>

    </div>
  );
};

export default CompanyProfile;
