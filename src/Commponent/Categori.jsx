import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { AiFillSound, AiOutlineStock } from "react-icons/ai";
import { BiCoinStack } from "react-icons/bi";
import { HiOfficeBuilding } from "react-icons/hi";
import { LiaPiggyBankSolid } from "react-icons/lia";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import EKyc from "./../assets/img/e-kyc.png";

const Categori = () => {
  return (
    <React.Fragment>
      <div className="mainDivCaresol">
        <div className="container">
          <Row>
            <div className="sec-title mb_25">
              <span className="sub-title"> Our Category</span>
            </div>
            <Col lg="3" md="6" sm="12">
              <Link
                className="categoryLink"
                to="https://marfatia.wealthmagic.in/"
                target="_blank"
              >
                <Card className="categoryCard">
                  <div className="mainDivCategory">
                    <div>
                      <LiaPiggyBankSolid className="categoryIcon" />
                    </div>
                    <h5 className="categoryTitle">Online Mutual Fund</h5>
                  </div>
                </Card>
              </Link>
            </Col>
            <Col lg="3" md="6" sm="12">
              <Link
                className="categoryLink"
                to="https://etrade.marfatia.net/#/app"
                target="_blank"
              >
                <Card className="categoryCard">
                  <div className="mainDivCategory">
                    <div>
                      <AiOutlineStock className="categoryIcon" />
                    </div>
                    <h5 className="categoryTitle">E-trade</h5>
                  </div>
                </Card>
              </Link>
            </Col>
            <Col lg="3" md="6" sm="12">
              <Link
                className="categoryLink"
                to="http://203.88.142.26:84/TradeWeb/login.aspx?ReturnUrl=%2fTradeWeb"
                target="_blanck"
              >
                <Card className="categoryCard">
                  <div className="mainDivCategory">
                    <div>
                      <HiOfficeBuilding className="categoryIcon" />
                    </div>
                    <h5 className="categoryTitle">Back Office </h5>
                  </div>
                </Card>
              </Link>
            </Col>

            <Col lg="3" md="6" sm="12">
              <Link className="categoryLink" to="#">
                <Card className="categoryCard">
                  <div className="mainDivCategory">
                    <div>
                      <BiCoinStack className="categoryIcon" />
                    </div>
                    <h5 className="categoryTitle">Margin Trading Funding</h5>
                  </div>
                </Card>
              </Link>
            </Col>
            <Col lg="3" md="6" sm="12">
              <Link
                className="categoryLink"
                to="https://smartkyc.co.in/d/gbrk_130psp"
                target="_blank"
              >
                <Card className="categoryCard">
                  <div className="mainDivCategory">
                    <div>
                      <img src={EKyc} className="categoryIcon" alt="icon" />
                    </div>
                    <h5 className="categoryTitle">eKyc</h5>
                  </div>
                </Card>
              </Link>
            </Col>

            <Col lg="3" md="6" sm="12">
              <Link
                className="categoryLink"
                to="https://smartkyc.co.in/m/gbrk_130psp"
                target="_blank"
              >
                <Card className="categoryCard">
                  <div className="mainDivCategory">
                    <div>
                      <img src={EKyc} className="categoryIcon" alt="icon" />
                    </div>
                    <h5 className="categoryTitle">ReKyc</h5>
                  </div>
                </Card>
              </Link>
            </Col>
            <Col lg="3" md="6" sm="12">
              <Link
                className="categoryLink"
                to="https://smartkyc.co.in/d/gbrk_130psp"
                target="_blank"
              >
                <Card className="categoryCard">
                  <div className="mainDivCategory">
                    <div>
                      <img src={EKyc} className="categoryIcon" alt="icon" />
                    </div>
                    <h5 className="categoryTitle">Close Kyc </h5>
                  </div>
                </Card>
              </Link>
            </Col>
            <Col lg="3" md="6" sm="12">
              <Link
                className="categoryLink"
                to="https://meon.space/static/marfatia/marfatia.html"
                target="_blank"
              >
                <Card className="categoryCard">
                  <div className="mainDivCategory">
                    <div>
                      <AiFillSound className="categoryIcon" />
                    </div>
                    <h5 className="categoryTitle">IPO </h5>
                  </div>
                </Card>
              </Link>
            </Col>
          </Row>
          <marquee
            style={{
              backgroundColor: "#85c226",
              color: "#000",
              fontSize: "20px",
              fontWight: "600",
            }}
          >
            <span style={{ color: "red" }}>Attention Investors:</span>- SCORES -
            Filing compliant on SCORES – Easy &amp; quick a. register on SCORES
            portal. b. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, Email ID. c. Benefits: Effective
            communication. Speedy redressal of the grievances Website:
            https://scores.gov.in
          </marquee>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Categori;
