import React, { useEffect } from "react";
import HaderContent2 from "./HaderContent2";
import { useSelector } from "react-redux";
import { Container, Spinner } from "react-bootstrap";
import ContentFooterButton from "./contentFooterButton";
import { Link, useLocation } from "react-router-dom";


const DynamicContent = () => {

  const location = useLocation();
  const propsData = location.state;
  console.log(propsData);

  const arrayOfContents = useSelector((state) => state.content);
  const pageContent = arrayOfContents.find(
    (item) => item._id === propsData
  );

  useEffect(() => {
    window.scrollTo(0, 0)
    
  }, [pageContent]);

  return (
    <React.Fragment>
       {pageContent  ? (
        <React.Fragment>
      <HaderContent2 Title={pageContent.contentType} SubTitle={pageContent.contentType} />
      <Container>
        <div dangerouslySetInnerHTML={{ __html: pageContent.content }} />
        {/* <ContentFooterButton></ContentFooterButton> */}
      </Container>
      </React.Fragment>

      ) :(
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" variant="primary" size="lg" />
      </div>
        )}
    </React.Fragment>
  );
};



export default DynamicContent;