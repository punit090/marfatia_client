import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import HaderContent2 from "../../Commponent/HaderContent2";
import ContentFooterButton from "../../Commponent/contentFooterButton";
import DynamicContent from "../../Commponent/dynamicContent";

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
