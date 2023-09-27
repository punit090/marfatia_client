import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Select from "react-select";
import HaderContent2 from "../Commponent/HaderContent2";
import axios from "axios";
import { BASE_API_URL } from "../helpers/apiHelper";

const MtualFundDetails = () => {
  const [AMCData, setAMC] = useState([]);
  const [AMCCategoryData, setAMCCategoryData] = useState([]);
  const [AMCSchemeData, setAMCSchemeData] = useState([]);

  const AMCUrl = BASE_API_URL + "/api/amc-master";
  const AMCCategoryUrl = BASE_API_URL + "/api/amc-category";
  const AMCSchemeUrl = BASE_API_URL + "/api/amc-scheme";

  const fetchAMC = () => {
    axios
      .get(AMCUrl)
      .then((res) => {
        setAMC(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchAMCCategory = async () => {
    try {
      const res2 = await axios.get(AMCCategoryUrl);
      setAMCCategoryData(res2);
    } catch (err) {
      console.log(err);
    }
  };
  
  const fetchAMCScheme = () => {
    axios
      .get(AMCSchemeUrl)
      .then((res2) => {
        setAMCSchemeData(res2);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchAMC();
    fetchAMCCategory();
  }, []);

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
                <h5>Category :</h5>
                <select
                  className="form-select"
                  id="category"
                  name="category"
                  onChange={(e) => {
                    // productForm.handleChange(e);
                    // handelCategorySelect(e);
                  }}
                >
                  <option value={null}>--select--</option>
                  {/* {AMCData
                    ? (AMCData.map((category) => (
                        <option key={category.AMCName} value={category.AMCName}>
                          {category.AMCName}
                        </option>
                      ))
                      ):(
                        <option value="" disabled>Loading...</option>
                      )}  */}
                </select>
              </Col>
              <Col className="mtualFundDiv" lg="3" md="6">
                <h5>Select AMC :</h5>

                <select
                  className="form-select"
                  id="category"
                  name="category"
                  onChange={(e) => {
                    // productForm.handleChange(e);
                    // handelCategorySelect(e);
                  }}
                >
                  <option value={null}>--select--</option>
                  {/* {AMCCategoryData
                    ? (AMCCategoryData.map((category) => (
                        <option key={category.CategoryName} value={category.CategoryName}>
                          {category.CategoryName}
                        </option>
                      ))
                      ):(
                        <option value="" disabled>Loading...</option>
                      )}  */}
                </select>
              </Col>
              
              <Col className="mtualFundDiv" lg="3" md="6">
                <h5>Scheme :</h5>
                <select
                  className="form-select"
                  id="category"
                  name="category"
                  onChange={(e) => {
                    // productForm.handleChange(e);
                    // handelCategorySelect(e);
                  }}
                >
                  <option value={null}>--select--</option>
                  {/* {AMCCategoryData
                    ? (AMCCategoryData.map((category) => (
                        <option key={category.CategoryName} value={category.CategoryName}>
                          {category.CategoryName}
                        </option>
                      ))
                      ):(
                        <option value="" disabled>Loading...</option>
                      )} */}
                </select>
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
