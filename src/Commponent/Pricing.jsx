import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import BackgroundPricing from "./../assets/img/shape-31.png";
import BackgroundPricing2 from "./../assets/img/shape-32.png";
import BackgroundPricing3 from "./../assets/img/shape-33.png";

const Pricing = () => {
  return (
    <div style={{ paddingBottom: "80px" }}>
      {/* Pricing-style-three */}
      <section className="feature-style-three p_relative centred">
        <div
          className="pattern-layer"
          style={{ backgroundImage: `url(${BackgroundPricing})` }}
        />
        <div className="auto-container">
          <div className="sec-title mb_100">
            <span className="sub-title">PRICING</span>
            <h2>PAY LESS. TRADE MORE.</h2>
            <p>
              With minimal brokerage charges, focus more on investments and
              leave the rest to us.
            </p>
          </div>
          <Row className=" clearfix">
            <Col lg="4" md="6" sm="12" className=" feature-block">
              <div
                className="feature-block-three wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div
                    className="block-shape"
                    style={{
                      backgroundImage: `url(${BackgroundPricing2})`,
                    }}
                  />
                  <div className="icon-box">
                    <FaRupeeSign />

                    <i className="icon-7">
                      <span style={{ fontFamily: "cursive" }}>0</span>
                    </i>
                  </div>
                  <sub className="subBrokage">Brokage</sub>

                  <h3>
                    <Link to="#">On Equity Delivery</Link>
                  </h3>
                  <p>
                    Amet minim mollit no duis sit enim aliqua dolor do amet
                    officia.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12" className=" feature-block">
              <div
                className="feature-block-three wow fadeInUp animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <FaRupeeSign />

                    <i className="icon-7">
                      <span style={{ fontFamily: "cursive" }}>20</span>
                    </i>
                  </div>
                  <sub className="subBrokage">Flat</sub>
                  <h3>
                    <Link to="#">Per Order For Intraday</Link>
                  </h3>
                  <p>F&O, Currencies & Commodities</p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12" className=" feature-block">
              <div
                className="feature-block-three wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div
                    className="block-shape"
                    style={{
                      backgroundImage: `url(${BackgroundPricing3})`,
                    }}
                  />
                  <div className="icon-box">
                    <FaRupeeSign />

                    <i className="icon-7">
                      <span style={{ fontFamily: "cursive" }}>0</span>
                    </i>
                  </div>
                  <sub className="subBrokage">Charges</sub>
                  <h3>
                    <Link to="#">For Account Maintenance</Link>
                  </h3>
                  <p>For First Year</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="more-btn ">
          <Link to="#" className="theme-btn-one">
            VIEW PRICING
          </Link>
        </div>
      </section>
      {/* pricing-style-three end */}
    </div>
  );
};

export default Pricing;
