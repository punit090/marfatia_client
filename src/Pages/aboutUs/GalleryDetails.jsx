import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HaderContent2 from "../../Commponent/HaderContent2";
import CrsProgram2 from "../../assets/img/CRS2.jpg";
import CrsProgram from "../../assets/img/CRSProgram.jpg";
import Independence2 from "../../assets/img/Independence2.jpg";
import Independence from "../../assets/img/indipendanceDay.jpg";

const GalleryDetails = () => {
  return (
    <React.Fragment>
      <HaderContent2 Title="Gallery Details" SubTitle="Gallery Details" />

      <Container>
        <div style={{ paddingBottom: "80px" }}>
          <div
            className="sec-title mb_50 centred"
            style={{ paddingTop: " 50px" }}
          >
            <h2>Independence Day 2022</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
              <div
                className="team-block-one wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <img src={Independence} alt="img" />
                    </figure>
                  </div>
                  <div className="lower-content">
                    <h3>
                      <Link to="/gallery-details">Independence Day 2022</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
              <div
                className="team-block-one wow fadeInUp animated"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <img src={Independence2} alt="img" />
                    </figure>
                  </div>
                  <div className="lower-content">
                    <h3>
                      <Link to="#">Independence Day 2022</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
              <div
                className="team-block-one wow fadeInUp animated"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <img src={CrsProgram} alt="img" />
                    </figure>
                  </div>
                  <div className="lower-content">
                    <h3>
                      <Link to="#">CSR Program</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
              <div
                className="team-block-one wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <img src={CrsProgram2} alt="img" />
                    </figure>
                  </div>
                  <div className="lower-content">
                    <h3>
                      <Link to="#">CSR Program</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default GalleryDetails;
