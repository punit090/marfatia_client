import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Select from "react-select";
import HaderContent2 from "../Commponent/HaderContent2";

const MtualFundDetails = () => {
  useEffect(() => {
    const scrollDelay = 100; // 100 ms delay
  
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, scrollDelay);
  
    return () => clearTimeout(timeoutId); // Cleanup the timeout when the component unmounts
  }, []);
  const options = [
    { value: "test1", label: "test1" },
    { value: "test2", label: "test2" },
    { value: "test3", label: "test3" },
  ];
  return (
    <React.Fragment>
      <HaderContent2 Title="Mutual Funds " SubTitle="Mutual Funds" />
      <Container>
        <div style={{ padding: "40px 0px" }}>
          <h5 style={{ padding: "15px 0px", color: "#85c226" }}>
            Check out Dividend details of a particular scheme along with the
            latest NAV for various time periods. You can widen your search on
            the basis of the Fund House, Category or a particular Scheme.
          </h5>
          <Card style={{ padding: "20px" }}>
            <Row>
              <Col className="mtualFundDiv" lg="3" md="6">
                <h2>Select AMC :</h2>
                <Select options={options} />
              </Col>
              <Col className="mtualFundDiv" lg="3" md="6">
                <h2>Category :</h2>
                <Select options={options} />
              </Col>
              <Col className="mtualFundDiv" lg="3" md="6">
                <h2>Scheme :</h2>
                <Select options={options} />
              </Col>
              <Col className="mtualFundDiv" lg="3" md="6">
                <div className="more-btn m">
                  <Link to="#" className="theme-btn-one">
                    Submit
                  </Link>
                </div>
              </Col>
            </Row>
          </Card>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default MtualFundDetails;
