import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsCardChecklist } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";
import { Link } from "react-router-dom";
import FetureImg from "./../assets/img/investor-hader.jpg";
import Background1 from "./../assets/img/shape-2.png";
import Background2 from "./../assets/img/shape-3.png";
const Invester = () => {
  return (
    <React.Fragment>
      <section className="feature-section bg-color-1 sec-pad centred">
        <Container>
          <div className="pattern-layer">
            <div
              className="pattern-1"
              style={{
                backgroundImage: `url(${Background1})`,
              }}
            />
            <div
              className="pattern-2"
              style={{
                backgroundImage: `url(${Background2})`,
              }}
            />
          </div>
          <div className="auto-container">
            <div className="sec-title mb_50">
              <span className="sub-title">Investor Relationship</span>
              <h2>
                Professional And Dedicated <br />
                Investor.
              </h2>
            </div>
            <Row className=" clearfix">
              <Col lg="4" md="6" sm="12" className=" feature-block">
                <div
                  className="feature-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src={FetureImg} alt />
                    </figure>
                    <div className="lower-content">
                      <div className="icon-box">
                        <i className="icon-7">
                          <BsCardChecklist />{" "}
                        </i>
                      </div>
                      <h3>
                        <Link to="#">Investor Planing</Link>
                      </h3>
                      <p>
                        Amet minim mollit no duis sit enim aliqua dolor do amet
                        officia.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="6" sm="12" className="feature-block">
                <div
                  className="feature-block-one wow fadeInUp animated"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src={FetureImg} alt />
                    </figure>
                    <div className="lower-content">
                      <div className="icon-box">
                        <i className="icon-8">
                          <GiTwoCoins />
                        </i>
                      </div>
                      <h3>
                        <Link to="#">Invest Strategy</Link>
                      </h3>
                      <p>
                        Amet minim mollit no duis sit enim aliqua dolor do amet
                        officia.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="6" sm="12" className=" feature-block">
                <div
                  className="feature-block-one wow fadeInUp animated"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src={FetureImg} alt />
                    </figure>
                    <div className="lower-content">
                      <div className="icon-box">
                        <i className="icon-9">
                          <FaChalkboardTeacher />
                        </i>
                      </div>
                      <h3>
                        <Link to="#">Investor Intelligence</Link>
                      </h3>
                      <p>
                        Amet minim mollit no duis sit enim aliqua dolor do amet
                        officia.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Invester;
