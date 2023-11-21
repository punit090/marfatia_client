import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import HaderContent2 from "../../Commponent/HaderContent2";
import { BASE_API_URL } from "../../helpers/apiHelper";

const GalleryDetails = () => {
  const mainFilePath = BASE_API_URL + "/api/gallery-images/";
  const selectedCategory = useSelector((state) => state.selectedCategory);

  const arrayOfAllImages = useSelector((state) => state.gallery);
  const filterdImages = arrayOfAllImages.filter(
    (item) => item.gallaryCategoryId === selectedCategory._id
  );
  console.log(filterdImages);
  console.log(arrayOfAllImages);

  return (
    <React.Fragment>
      <HaderContent2 Title="Gallery Details" SubTitle="Gallery Details" />

      <Container>
        <div className="sec-title mb_50 centred">
          <h2>{selectedCategory.gallaryCategoryTitle}</h2>
        </div>

        <Row className=" clearfix" style={{ padding: "30px 0px" }}>
          {filterdImages && filterdImages.length > 0 ? (
            filterdImages.map((item) => (
              <Col lg="3" md="6" sm="12" className=" mb-4  team-block">
                <div
                  className="team-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img src={mainFilePath + item.imagePath} alt="img" />
                      </figure>
                    </div>
                    <div className="lower-content">
                      <h3>
                        <a>{item.imageTitle}</a>
                      </h3>
                      <h6>{item.description}</h6>
                    </div>
                  </div>
                </div>
              </Col>
            ))
          ) : (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "50vh" }}
            >
              <h3>Sorry no images here.</h3>
            </div>
          )}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default GalleryDetails;
