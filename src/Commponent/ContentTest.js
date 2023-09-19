import React, { useEffect } from "react";
import HaderContent2 from "./HaderContent2";
import { useSelector } from "react-redux";
import { Container, Spinner } from "react-bootstrap";
import { content } from "./content";


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