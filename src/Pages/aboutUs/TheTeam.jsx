import React, { useEffect } from "react";
import DynamicContent from "../../Commponent/dynamicContent";
import HaderContent2 from "../../Commponent/HaderContent2";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import ContentFooterButton from "../../Commponent/contentFooterButton";

const TheTeam = () => {
  const arrayOfContents = useSelector((state) => state.content);
  const pageContent = arrayOfContents.find(
    (item) => item.contentType === "The Team"
  );

  return (
    <React.Fragment>
      <HaderContent2 Title="The Team" SubTitle="The Team" />
      <Container>

        <DynamicContent content={pageContent.content}></DynamicContent>

        
        <ContentFooterButton></ContentFooterButton>

      </Container>
    </React.Fragment>
  );
};

export default TheTeam;
