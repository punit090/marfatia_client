import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";
import Footer from "../Commponent/Footer";
import Hader from "../Commponent/Hader";
import HaderContent2 from "../Commponent/HaderContent2";
import JobApllayModal from "../Modal/JobApllayModal";

const Career = () => {
  return (
    <React.Fragment>
      <HaderContent2 Title="Careers" SubTitle="Careers" />
      <Container>
        <div style={{ padding: "80px 0px" }}>
          <h1 style={{ paddingBottam: "20px", textAlign: "center" }}>
            Careers
          </h1>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="titleCareer">
                Devloper
              </Accordion.Header>
              <Accordion.Body>
                <h6>Locations:</h6>
                <div className="locationDiv">
                  <p className="locationTitle">vadodara gujarat</p>
                  <p className="locationTitle">vadodara gujarat</p>
                  <p className="locationTitle">vadodara gujarat</p>
                  <p className="locationTitle">vadodara gujarat</p>
                  <p className="locationTitle">vadodara gujarat</p>
                </div>
                <div>
                  <strong className="titleCareer">Job Type:</strong>
                  <strong style={{ fontSize: "20px" }}>Full Time </strong>
                </div>
                <div>
                  <strong className="titleCareer">Salary: </strong>
                  <strong className="subTitleCareer">
                    Up to <FaRupeeSign /> 20,000
                  </strong>
                </div>
                <div>
                  <strong className="titleCareer">Job Timings: </strong>
                  <strong className="subTitleCareer">
                    {" "}
                    8:45 am - 6:15 pm{" "}
                  </strong>
                </div>
                <div>
                  <strong className="titleCareer">Job Location: </strong>
                  <strong className="subTitleCareer">vadodara gujarat </strong>
                </div>
                <div>
                  <strong className="titleCareer">
                    Supplemental pay types:{" "}
                  </strong>
                  <strong className="subTitleCareer">
                    Performance-based incentives & appraisals.{" "}
                  </strong>
                </div>
                <div>
                  <h3 className="titleCareer">
                    The candidate should have the following skills/ qualities:
                  </h3>
                  <ul>
                    <li>
                      <AiOutlineArrowRight />
                      Experience of at least 3 months in the
                      education/immigration industry
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      Basic knowledge of computers-word, excel.
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      Excellent at client handling & client satisfaction
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      Capable of generating a high amount of revenue
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      Good communication skills
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="titleCareer">Benefits:</h3>
                  <ul>
                    <li>
                      <AiOutlineArrowRight />
                      Extensive in-house training imparted for every profile
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      Comfortable, friendly, and highly professional working
                      environment
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      Regular appraisals and hikes based on performance
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      ncentives (as per the post)
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="titleCareer">Freshers may also apply</h3>
                  {/* Click on submit button to submit the form */}
                  <JobApllayModal />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Front Office Work</Accordion.Header>
              <Accordion.Body>
                <h6>Locations:</h6>
                <div className="locationDiv">
                  <p className="locationTitle">vadodara gujarat</p>
                  <p className="locationTitle">vadodara gujarat</p>
                  <p className="locationTitle">vadodara gujarat</p>
                  <p className="locationTitle">vadodara gujarat</p>
                  <p className="locationTitle">vadodara gujarat</p>
                </div>
                <div>
                  <strong className="titleCareer">Job Type:</strong>
                  <strong style={{ fontSize: "20px" }}>Full Time </strong>
                </div>
                <div>
                  <strong className="titleCareer">Salary: </strong>
                  <strong className="subTitleCareer">
                    Up to <FaRupeeSign /> 20,000
                  </strong>
                </div>
                <div>
                  <strong className="titleCareer">Job Timings: </strong>
                  <strong className="subTitleCareer">
                    {" "}
                    8:45 am - 6:15 pm{" "}
                  </strong>
                </div>
                <div>
                  <strong className="titleCareer">Job Location: </strong>
                  <strong className="subTitleCareer">vadodara gujarat </strong>
                </div>
                <div>
                  <strong className="titleCareer">
                    Supplemental pay types:{" "}
                  </strong>
                  <strong className="subTitleCareer">
                    Performance-based incentives & appraisals.{" "}
                  </strong>
                </div>
                <div>
                  <h3 className="titleCareer">
                    The candidate should have the following skills/ qualities:
                  </h3>
                  <ul>
                    <li>
                      <AiOutlineArrowRight />
                      Experience of at least 3 months in the
                      education/immigration industry
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      Basic knowledge of computers-word, excel.
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      Excellent at client handling & client satisfaction
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      Capable of generating a high amount of revenue
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      Good communication skills
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="titleCareer">Benefits:</h3>
                  <ul>
                    <li>
                      <AiOutlineArrowRight />
                      Extensive in-house training imparted for every profile
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      Comfortable, friendly, and highly professional working
                      environment
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      Regular appraisals and hikes based on performance
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      ncentives (as per the post)
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="titleCareer">Freshers may also apply</h3>
                  {/* Click on submit button to submit the form */}
                  <JobApllayModal />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Frontend Devloper</Accordion.Header>
              <Accordion.Body>
                <h6>Locations:</h6>
                <div className="locationDiv">
                  <p className="locationTitle">vadodara gujarat</p>
                  <p className="locationTitle">vadodara gujarat</p>
                  <p className="locationTitle">vadodara gujarat</p>
                  <p className="locationTitle">vadodara gujarat</p>
                  <p className="locationTitle">vadodara gujarat</p>
                </div>
                <div>
                  <strong className="titleCareer">Job Type:</strong>
                  <strong style={{ fontSize: "20px" }}>Full Time </strong>
                </div>
                <div>
                  <strong className="titleCareer">Salary: </strong>
                  <strong className="subTitleCareer">
                    Up to <FaRupeeSign /> 20,000
                  </strong>
                </div>
                <div>
                  <strong className="titleCareer">Job Timings: </strong>
                  <strong className="subTitleCareer">
                    {" "}
                    8:45 am - 6:15 pm{" "}
                  </strong>
                </div>
                <div>
                  <strong className="titleCareer">Job Location: </strong>
                  <strong className="subTitleCareer">vadodara gujarat </strong>
                </div>
                <div>
                  <strong className="titleCareer">
                    Supplemental pay types:{" "}
                  </strong>
                  <strong className="subTitleCareer">
                    Performance-based incentives & appraisals.{" "}
                  </strong>
                </div>
                <div>
                  <h3 className="titleCareer">
                    The candidate should have the following skills/ qualities:
                  </h3>
                  <ul>
                    <li>
                      <AiOutlineArrowRight />
                      Experience of at least 3 months in the
                      education/immigration industry
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      Basic knowledge of computers-word, excel.
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      Excellent at client handling & client satisfaction
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      Capable of generating a high amount of revenue
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      Good communication skills
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="titleCareer">Benefits:</h3>
                  <ul>
                    <li>
                      <AiOutlineArrowRight />
                      Extensive in-house training imparted for every profile
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      Comfortable, friendly, and highly professional working
                      environment
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      Regular appraisals and hikes based on performance
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      ncentives (as per the post)
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="titleCareer">Freshers may also apply</h3>
                  {/* Click on submit button to submit the form */}
                  <JobApllayModal />
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Career;
