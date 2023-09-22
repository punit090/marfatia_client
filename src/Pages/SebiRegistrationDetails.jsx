import React from "react";
import Accordion from "react-bootstrap/Accordion";

const SebiRegistration = () => {
  return (
    <React.Fragment>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="investorContact">
            Exchange/SEBI Registration Details
          </Accordion.Header>
          <Accordion.Body>
            <p>Member Code NSE: - 11925</p>
            <p>Member Code BSE: - 3065</p>
            <p>SEBI Reg. No.: - INZ000215330</p>
            <p>PMS SEBI Registration No.: INP000005117</p>
            <p>Research Analyst SEBI Registration No.: INH000002178</p>
            <p>DP: - CDSL</p>
            <p>DP ID: 12044400</p>
            <p>DP SEBI Reg. No.:- IN-DP-CDSL-227-2016</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </React.Fragment>
  );
};

export default SebiRegistration;
