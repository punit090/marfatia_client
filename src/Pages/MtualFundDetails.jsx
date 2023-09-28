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

  const [selectedAMC, setSelectedAMC] = useState("");
  const [selectedAMCCategory, setSelectedCategory] = useState("");

  const [schemsLoading,setSchemsLoading] = useState(false);

  const AMCUrl = BASE_API_URL + "/api/amc-master";
  const AMCCategoryUrl = BASE_API_URL + "/api/amc-category";
  const AMCSchemeUrl = BASE_API_URL + "/api/amc-scheme/";

  const fetchAMC = () => {
    axios
      .get(AMCUrl)
      .then((res) => {
        setAMC(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchAMCCategory = async () => {
    try {
      const res2 = await axios.get(AMCCategoryUrl);
      setAMCCategoryData(res2.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAMCScheme = async (url) => {
    setSchemsLoading(true);
  
    try {
      const res2 = await axios.get(url);
      setAMCSchemeData(res2.data.data);
    } catch (err) {
      console.error(err);
    }
  
    setSchemsLoading(false);
  };
  

  useEffect(() => {
    fetchAMC();
    fetchAMCCategory();

  }, []);

  const bindAmcScheme = () => {
    if (selectedAMC && selectedAMCCategory) {
      const EncodedSelectedAMC = encodeURIComponent(selectedAMC);
      const EncodedSelectedAMCCategory =
        encodeURIComponent(selectedAMCCategory);
      fetchAMCScheme(
        AMCSchemeUrl + EncodedSelectedAMC+"/"+EncodedSelectedAMCCategory  
      );
      console.log(AMCSchemeUrl+EncodedSelectedAMC+"/"+EncodedSelectedAMCCategory )
    }
  };

  useEffect(() => {
    const scrollDelay = 100; // 100 ms delay

    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, scrollDelay);

    return () => clearTimeout(timeoutId); // Cleanup the timeout when the component unmounts
  }, []);

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
                <h5>Select AMC:</h5>
                <select
                  className="form-select"
                  id="category"
                  name="category"
                  onChange={(e) => {
                    setSelectedAMC(e.target.value);
                    setAMCSchemeData([])
                  }}
                >
                  <option value={null}>--select--</option>
                  {AMCData ? (
                    AMCData.map((category, key) => (
                      <option key={key} value={category.AMCName}>
                        {category.AMCName}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>
                      Loading...
                    </option>
                  )}
                </select>
              </Col>
              <Col className="mtualFundDiv" lg="3" md="6">
                <h5>Select Category :</h5>

                <select
                  className="form-select"
                  id="category"
                  name="category"
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setAMCSchemeData([])

                  }}
                >
                    <option value="" >
                     --select--
                    </option>
                  {AMCCategoryData ? (
                    AMCCategoryData.map((category, key) => (
                      <option key={key} value={category.CategoryName}>
                        {category.CategoryName}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>
                    loading...
                   </option>
                  )}
                </select>
              </Col>

              <Col className="mtualFundDiv" lg="3" md="6">
                <h5>Scheme :</h5>
                <select
                  className="form-select"
                  id="category"
                  name="category"
                  onClick={() => {
                    bindAmcScheme();
                  }}
                >
                   <option value="" >
                     --select--
                    </option>
                 { schemsLoading?
                    <option value="" disabled>
                      Loading...
                    </option>:null}
                  {AMCSchemeData ? (
                    AMCSchemeData.map((category, key) => (
                      <option key={key} value={category.SchemeName}>
                        {category.SchemeName}
                      </option>
                    ))
                  ) : (
                   
                    schemsLoading?
                    <option value="" disabled>
                      Loading...
                    </option>:<option value="" disabled>
                      no scheme
                    </option>
                  )}
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
