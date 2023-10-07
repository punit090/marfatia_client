import React, { useEffect, useState } from "react";
import HaderContent2 from "./HaderContent2";
import { useSelector } from "react-redux";
import { Container, Spinner } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";

const DynamicContent = () => {
  const menuArray = [
    { parent: "About us", child: "Company Profile" },
    { parent: "About us", child: "Vision and Mission" },
    { parent: "About us", child: "Advantages" },
    { parent: "About us", child: "The Team" },
    { parent: "About us", child: "Milestones" },

    { parent: "Services", child: "Stock Market" },
    { parent: "Services", child: "Currency" },
    { parent: "Services", child: "Depository Services" },
    { parent: "Services", child: "Mobile Trading" },
    { parent: "Services", child: "Portfolio Management Services" },
    { parent: "Services", child: "Premium Client Services" },
    { parent: "Services", child: "Mutual Funds" },
    { parent: "Services", child: "Digital Library" },
    { parent: "Services", child: "Dial N Trade" },
    { parent: "Services", child: "NRI Desk" },
    {
      parent: "Services",
      child: "SLBM [Security Landing & BorrowingMerchandise]",
    },
    { parent: "Services", child: "Mutual Funds" },

    { parent: "Markets", child: "Equity" },
    { parent: "Markets", child: "Derivatives" },
    { parent: "Markets", child: "Currency" },
    { parent: "Markets", child: "IPO" },
    { parent: "Markets", child: "News" },

    { parent: "Mutual Funds", child: "MF Schemes" },

    { parent: "Research & Knowledge ", child: "How to Trade" },
    { parent: "Research & Knowledge ", child: "Mobile App" },
    { parent: "Research & Knowledge ", child: "PMS" },

    { parent: "Contact Us", child: "Partner With Us" },
    { parent: "Contact Us", child: "" },
    { parent: "Contact Us", child: "" },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [pageContent, setpageContent] = useState(null);

  function getParentFromChild(child, data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].child === child) {
        return data[i].parent;
      }
    }
    return null;
  }

  const parent = getParentFromChild(
    pageContent ? pageContent.contentType : null,
    menuArray
    );
    const { contentId } = useParams();
    
    const arrayOfContents = useSelector((state) => state.content);

  useEffect(() => {
    setpageContent(arrayOfContents.find((item) => item._id === contentId));
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 700);

   

  }, [contentId, pageContent,arrayOfContents]);

  if (isLoading) {
    return (
      <React.Fragment>
        <div className="container">
          <div className="loading-spinner-overlay">
            <div
              className="spinner-border  text-success"
              style={{ width: "6rem", height: "6rem" }}
              role="status"
            ></div>
          </div>
        </div>
        <Container>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        ></div>
        </Container>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      {pageContent ? (
        <React.Fragment>
          <HaderContent2
            Title={pageContent.contentType}
            SubTitle={parent ? parent : pageContent.contentType}
          />
          <Container>
            <div dangerouslySetInnerHTML={{ __html: pageContent.content }} />
          </Container>
        </React.Fragment>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Spinner animation="border" variant="primary" size="lg" />
        </div>
      )}
    </React.Fragment>
  );
};

export default DynamicContent;
