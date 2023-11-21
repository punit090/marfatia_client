import React from "react";
import { Container } from "react-bootstrap";
import HaderContent2 from "../Commponent/HaderContent2";

const ResearchReport = () => {
  return (
    <React.Fragment>
      <HaderContent2 Title="Research Report" SubTitle="Research Report" />
      <Container>
        <h1 style={{ padding: "10px 0px", textAlign: "center" }}>
          Research Report
        </h1>
      </Container>
    </React.Fragment>
  );
};

export default ResearchReport;
