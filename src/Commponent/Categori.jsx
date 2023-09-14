import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { AiOutlineStock, AiTwotoneGold } from "react-icons/ai";
import { BiCoinStack, BiDollar } from "react-icons/bi";
import { GiGoldBar } from "react-icons/gi";
import { HiOfficeBuilding } from "react-icons/hi";
import { LiaPiggyBankSolid } from "react-icons/lia";
import { MdOutlineTipsAndUpdates, MdToday } from "react-icons/md";
import { RiStockFill } from "react-icons/ri";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Commodity from "./../assets/img/commodity.png";
import EKyc from "./../assets/img/e-kyc.png";

const Categori = () => {
  return (
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
            <Card className="categoryCard">
              <div className="mainDivCategory">
                <div>
                  <MdOutlineTipsAndUpdates className="categoryIcon" />
                </div>
                <h5 className="categoryTitle">Today's Tips</h5>
              </div>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="12">
            <Card className="categoryCard">
              <div className="mainDivCategory">
                <div>
                  {/* <LiaPiggyBankSolid className="categoryIcon" /> */}
                  <img
                    style={{
                      filter:
                        " (48%) sepia(13%) saturate(2000%) hue-rotate(51deg) brightness(143%) contrast(78%) !important",
                    }}
                    src={Commodity}
                    className="categoryIcon"
                    alt="icon"
                  />
                </div>
                <h5 className="categoryTitle">Commodities</h5>
              </div>
            </Card>
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
              to="https://smartkyc.co.in/"
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
              to="https://smartkyc.co.in/"
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
              to="https://smartkyc.co.in/"
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
            <Card className="categoryCard">
              <div className="mainDivCategory">
                <div>
                  <RiStockFill className="categoryIcon" />
                </div>
                <h5 className="categoryTitle">BSE SENSEX N/A </h5>
              </div>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="12">
            <Card className="categoryCard">
              <div className="mainDivCategory">
                <div>
                  <AiOutlineStock className="categoryIcon" />
                </div>
                <h5 className="categoryTitle">NSE NIFTY N/A</h5>
              </div>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="12">
            <Card className="categoryCard">
              <div className="mainDivCategory">
                <div>
                  <BiDollar className="categoryIcon" />
                </div>
                <h5 className="categoryTitle">USD N/A</h5>
              </div>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="12">
            <Card className="categoryCard">
              <div className="mainDivCategory">
                <div>
                  <AiTwotoneGold className="categoryIcon" />
                </div>
                <h5 className="categoryTitle">Gold N/A </h5>
              </div>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="12">
            <Card className="categoryCard">
              <div className="mainDivCategory">
                <div>
                  <GiGoldBar className="categoryIcon" />
                </div>
                <h5 className="categoryTitle">Silver N/A </h5>
              </div>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="12">
            <Link
              className="categoryLink"
              to="/todays-online-trade"
              target="_blank"
            >
              <Card className="categoryCard">
                <div className="mainDivCategory">
                  <div>
                    <MdToday className="categoryIcon" />
                  </div>
                  <h5 className="categoryTitle">Today's Stock market </h5>
                </div>
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Categori;
