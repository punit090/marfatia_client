import React, { useEffect, useState } from "react";
import HaderContent2 from "./HaderContent2";
import { useSelector } from "react-redux";
import { Container, Spinner } from "react-bootstrap";
import ContentFooterButton from "./contentFooterButton";
import { Link, useLocation } from "react-router-dom";

const DynamicContent = () => {
  const [fatchingData, setFatchingData] = useState(false);

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
    { parent: "Services", child: "SLBM [Security Landing & BorrowingMerchandise]" },
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

  function getParentFromChild(child, data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].child === child) {
            return data[i].parent;
        }
    }
    return null; 
}

  const location = useLocation();
  const propsData = location.state || "6501c54415bfa912f1831806";

  console.log(propsData);

  const arrayOfContents = useSelector((state) => state.content);
  const pageContent = arrayOfContents.find((item) => item._id === propsData);

  const parent = getParentFromChild(pageContent?pageContent.contentType:null, menuArray);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageContent]);

  return (
    <React.Fragment>
      {pageContent ? (
        <React.Fragment>
          <HaderContent2
            Title={pageContent.contentType}
            SubTitle={parent||"nothing"}
          />
          <Container>
            <div dangerouslySetInnerHTML={{ __html: pageContent.content }} />
            {/* <ContentFooterButton></ContentFooterButton> */}
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
