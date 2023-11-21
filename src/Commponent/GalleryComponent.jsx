import axios from "axios";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BASE_API_URL } from "../helpers/apiHelper";
import {
  setCategory,
  storeGallery,
  storeGalleryCategory,
} from "../state/action";
import "./../css/elements-css/team.css";

const categoryApiPath = BASE_API_URL + "/api/gallery-category";
const galleryApiPath = BASE_API_URL + "/api/gallery";
const galleryFilesPath = BASE_API_URL + "/api/gallery-images/";

const GalleryComponent = () => {
  const arrayOfContents = useSelector((state) => state.galleryCategoryList);
  const dispatch = useDispatch();

  const fetchgalleryCategory = () => {
    axios
      .get(categoryApiPath)
      .then((res) => {
        dispatch(storeGalleryCategory(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchGallery = () => {
    axios
      .get(galleryApiPath)
      .then((res) => {
        dispatch(storeGallery(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleClick(item) {
    dispatch(setCategory(item));
  }

  useEffect(() => {
    fetchgalleryCategory();
    fetchGallery();
  }, [dispatch]);

  return (
    <div>
      {/* team-section */}
      <section className="team-section sec-pad">
        <Container>
          <div className="sec-title mb_50 centred">
            <h2>Gallery</h2>
          </div>

          <Row className=" clearfix" style={{ padding: "30px 0px" }}>
            {arrayOfContents && arrayOfContents.length > 0 ? (
              arrayOfContents.map((item) => (
                <Col lg="3" md="6" sm="12" className=" team-block">
                  <Link
                    to="/gallery-details"
                    onClick={() => {
                      handleClick(item);
                    }}
                  >
                    <div
                      className="team-block-one wow fadeInUp animated"
                      data-wow-delay="00ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <img
                              src={galleryFilesPath + item.imagePath}
                              alt="img"
                            />
                          </figure>
                        </div>
                        <div className="lower-content">
                          <h3>
                            <Link
                              to="/gallery-details"
                              onClick={handleClick(item)}
                            >
                              {item.gallaryCategoryTitle}
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Col>
              ))
            ) : (
              <div>loading plese wait ...</div>
            )}
          </Row>
        </Container>
      </section>
      {/* team-section end */}
    </div>
  );
};

export default GalleryComponent;
