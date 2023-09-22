import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

const InvestoContact = () => {
  return (
    <React.Fragment>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="investorContact">
            For Investor Grievances Contact:
          </Accordion.Header>
          <Accordion.Body>
            <Link to="#">
              <p>customercare@marfatia.net</p>
              <p>Compliance Officer: Mr. Chintan Majumdar</p>
              <p>0265-2351355</p>
            </Link>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </React.Fragment>
  );
};

export default InvestoContact;
