import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsCheck2Circle, BsPlayCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import About2 from "./../assets/img/about-2.jpg";
import About1 from "./../assets/img/investor-hader.jpg";

const AboutOvrCompany = () => {
  return (
    <React.Fragment>
      {/* about-section */}
      <section className="about-section p_relative">
        <Container>
          <Row className=" clearfix">
            <Col lg="6" md="12" sm="12" className=" image-column">
              <div className="image_block_one">
                <div className="image-box p_relative pr_50 mr_30">
                  <figure className="image image-1">
                    <img src={About1} alt="img" />
                  </figure>
                  <figure className="image image-2">
                    <img src={About2} alt="img" />
                  </figure>
                  <div className="video-btn">
                    <Link to="#" className="lightbox-image" data-caption>
                      <i className="icon-10">
                        <BsPlayCircle />
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="6" md="12" sm="12" className=" content-column">
              <div className="content_block_one">
                <div className="content-box p_relative ml_30">
                  <div className="sec-title mb_25">
                    <span className="sub-title">About Marfatia</span>
                    <h2>
                      Dedicated And <br />
                      Professional Consulting Services
                    </h2>
                  </div>
                  <div className="text mb_35">
                    <p>
                      Marfatia Stock Broking is a leading financial services
                      provider with a pan-India presence. Its products and
                      Services include institutional and retail brokerage of
                      equity, commodity, currency, derivatives, IPOs and mutual
                      funds distribution, portfolio management, insurance
                      broking, margin funding and research.
                    </p>
                  </div>
                  <div className="inner-box mb_35">
                    <div className="single-item">
                      <div className="icon-box">
                        <i className="icon-11">
                          <BsCheck2Circle />
                        </i>
                      </div>
                      <h3>Solution Focused</h3>
                      <p>
                        Marfatia Stock Broking is a leading financial services
                        provider with a pan-India presence
                      </p>
                    </div>
                    <div className="single-item">
                      <div className="icon-box">
                        <i className="icon-11">
                          <BsCheck2Circle />
                        </i>
                      </div>
                      <h3>99.99% Success</h3>
                      <p>
                        Marfatia Stock Broking is a leading financial services
                        provider with a pan-India presence
                      </p>
                    </div>
                  </div>
                  <div className="btn-box">
                    <Link to="/company-profile" className="theme-btn-one">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* about-section end */}
    </React.Fragment>
  );
};

export default AboutOvrCompany;
