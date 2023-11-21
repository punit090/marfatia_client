import React from "react";
import { Container } from "react-bootstrap";
import HaderContent2 from "../Commponent/HaderContent2";

const DailyTips = () => {
  return (
    <React.Fragment>
      <HaderContent2 Title="Daily Tips" SubTitle="Daily Tips" />
      <Container>
        <h1 style={{ padding: "10px 0px", textAlign: "center" }}>Daily Tips</h1>
      </Container>
    </React.Fragment>
  );
};

export default DailyTips;
