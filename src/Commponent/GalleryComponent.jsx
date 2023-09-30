import axios from "axios";
import React, { useEffect } from "react";
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
        <div className="container">
          <div className="sec-title mb_50 centred">
            <h2>Gallery</h2>
          </div>

          <div className="row clearfix" style={{ padding: "30px 0px" }}>
            {arrayOfContents && arrayOfContents.length > 0 ? (
              arrayOfContents.map((item) => (
                <div className="col-lg-3 col-md-6 mb-4 col-sm-12 team-block">
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
                </div>
              ))
            ) : (
              <div>loading plese wait ...</div>
            )}
          </div>
          {/* <div className="more-btn mt_60">
            <Link to="/gallery-details" className="theme-btn-one">
              Explore More
            </Link>
          </div> */}
        </div>
      </section>
      {/* team-section end */}
    </div>
  );
};

export default GalleryComponent;
