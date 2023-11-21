import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillBank, AiFillFile } from "react-icons/ai";
import { BsPersonVcardFill } from "react-icons/bs";
import { FaFileDownload, FaHandsHelping } from "react-icons/fa";
import { IoMdFiling } from "react-icons/io";
import { LiaFileContractSolid } from "react-icons/lia";
import { LuLanguages } from "react-icons/lu";
import { MdPolicy } from "react-icons/md";
import { Link } from "react-router-dom";

const HelpFullContant = () => {
  return (
    <div>
      {/* service-style-three */}
      <section className="service-style-three p_relative bg-color-2">
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(assets/images/shape/shape-34.png)" }}
        />
        <div
          className="pattern-layer-2"
          style={{ backgroundImage: "url(assets/images/shape/shape-35.png)" }}
        />
        <Container>
          <Row className=" clearfix">
            <Col lg="4" md="6" sm="12" className=" service-block">
              <div
                className="service-block-three wow fadeInLeft animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-7">
                      <AiFillFile />
                    </i>
                  </div>
                  <h3>
                    <Link to="/new-downloads">NSE EXCHANGE MARGIN FILE</Link>
                  </h3>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12" className=" service-block">
              <div
                className="service-block-three wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-12">
                      <LiaFileContractSolid />
                    </i>
                  </div>
                  <h3>
                    <Link to="#">DIGITAL CONTRACTS</Link>
                  </h3>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12" className=" service-block">
              <div
                className="service-block-three wow fadeInRight animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-8">
                      <MdPolicy />
                    </i>
                  </div>
                  <h3>
                    <Link to="#">POLICIES AND CIRCULARS</Link>
                  </h3>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12" className=" service-block">
              <div
                className="service-block-three wow fadeInLeft animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-13">
                      <FaFileDownload />
                    </i>
                  </div>
                  <h3>
                    <Link to="service-details-4.html">DOWNLOAD FORMS</Link>
                  </h3>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12" className=" service-block">
              <div
                className="service-block-three wow fadeInUp animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-14">
                      <LuLanguages />
                    </i>
                  </div>
                  <h3>
                    <Link to="#">VERNACULAR LANGUAGES</Link>
                  </h3>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12" className=" service-block">
              <div
                className="service-block-three wow fadeInRight animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-15">
                      <AiFillBank />
                    </i>
                  </div>
                  <h3>
                    <Link to="#">DETAILS OF CLIENT BANK ACCOUNT</Link>
                  </h3>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12" className=" service-block">
              <div
                className="service-block-three wow fadeInLeft animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-7">
                      <FaHandsHelping />
                    </i>
                  </div>
                  <h3>
                    <Link to="#">ONLINE DISPUTE RESOLUTION LINK</Link>
                  </h3>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12" className=" service-block">
              <div
                className="service-block-three wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-12">
                      <BsPersonVcardFill />
                    </i>
                  </div>
                  <h3>
                    <Link to="#">AUTHORIZED PERSON LIST</Link>
                  </h3>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12" className=" service-block">
              <div
                className="service-block-three wow fadeInRight animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-8">
                      <IoMdFiling />
                    </i>
                  </div>
                  <h3>
                    <Link to="#">FILLING COMPLAINTS</Link>
                  </h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* service-style-three end */}
    </div>
  );
};

export default HelpFullContant;
