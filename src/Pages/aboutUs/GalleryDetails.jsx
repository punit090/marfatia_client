import React from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import HaderContent2 from "../../Commponent/HaderContent2";
import CrsProgram2 from "../../assets/img/CRS2.jpg";
import CrsProgram from "../../assets/img/CRSProgram.jpg";
import Independence2 from "../../assets/img/Independence2.jpg";
import Independence from "../../assets/img/indipendanceDay.jpg";
import { useSelector } from "react-redux";

const GalleryDetails = () => {

 


  const selectedCategory = useSelector((state) => state.selectedCategory);

  const arrayOfAllImages = useSelector((state) => state.gallery);
  const filterdImages = arrayOfAllImages.filter((item) => item.gallaryCategoryId === selectedCategory._id);
  console.log(filterdImages)
  console.log(arrayOfAllImages)


  return (
    <React.Fragment>
      <HaderContent2 Title="Gallery Details" SubTitle="Gallery Details" />

      <div className="container">
          <div className="sec-title mb_50 centred">
            <h2>{selectedCategory.gallaryCategoryTitle}</h2>
          </div>

          <div className="row clearfix" style={{ padding: "30px 0px" }}>
            {filterdImages && filterdImages.length > 0 ? (
              filterdImages.map((item) => (
                <div className="col-lg-3 col-md-6 mb-4 col-sm-12 team-block">
                 
                    <div
                      className="team-block-one wow fadeInUp animated"
                      data-wow-delay="00ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <img
                              src={`http://localhost:3200/api/gallery-images/${item.imagePath}`}
                              alt="img"
                            />
                          </figure>
                        </div>
                        <div className="lower-content">
                          <h3>
                            <a>

                              {item.imageTitle}
                            </a>
                          </h3>
                          <h6>
                          {item.description}
                          </h6>
                        </div>
                      </div>
                    </div>
                  
                </div>
              ))
            ) : (
              <div className="d-flex justify-content-center align-items-center" style={{height: "50vh"}}><h3>Sorry no images here.</h3></div>
            )}
          </div>
          {/* <div className="more-btn mt_60">
            <Link to="/gallery-details" className="theme-btn-one">
              Explore More
            </Link>
          </div> */}
        </div>
    </React.Fragment>
  );
};

export default GalleryDetails;
