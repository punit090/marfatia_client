import React from "react";
import { Container } from "react-bootstrap";
import HaderContent2 from "./HaderContent2";
import { content } from "./content";
// import 'font-awesome/css/font-awesome.min.css'; // Adjust the path as needed

const ContentTesting = () => {
  return (
    <React.Fragment>
      <React.Fragment>
        <HaderContent2 Title="content Test" SubTitle="content Test" />
        <Container>
          {/* // HTML content */}

          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Container>
      </React.Fragment>
    </React.Fragment>
  );
};

export default ContentTesting;
