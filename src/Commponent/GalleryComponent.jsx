import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Awards from "./../assets/img/Awards.jpg";
import CrsProgram2 from "./../assets/img/CRS2.jpg";
import CrsProgram from "./../assets/img/CRSProgram.jpg";
import Independence2 from "./../assets/img/Independence2.jpg";
import Successfully from "./../assets/img/Successfully.jpg";
import Trading from "./../assets/img/Trading.jpg";
import Independence from "./../assets/img/indipendanceDay.jpg";
import Waterfall from "./../assets/img/whaterFall.jpg";
import "./../css/elements-css/team.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { storeGallery, storeGalleryCategory } from "../state/action";

const GalleryComponent = () => {

  const arrayOfContents = useSelector((state) => state.galleryCategoryList);
  const dispatch = useDispatch();

  const fetchgalleryCategory = () => {
    axios
      .get(`http://localhost:3200/api/gallery-category`)
      .then((res) => {
        dispatch(storeGalleryCategory(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      })
      
  };

  const fetchGallery = () => {
    axios
      .get(`http://localhost:3200/api/gallery`)
      .then((res) => {
        dispatch(storeGallery(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      })
      
  };

  useEffect(()=>{
    fetchgalleryCategory();
    fetchGallery()

  },[dispatch])

  return (
    <div>
      {/* team-section */}
      <section className="team-section sec-pad">
        <div className="container">
          <div className="sec-title mb_50 centred">
            <h2>Gallery</h2>
          </div>

 

          <div className="row clearfix" style={{ padding: "30px 0px" }}>
          {arrayOfContents && arrayOfContents.length > 0 ? arrayOfContents.map(item=> (
            <div className="col-lg-3 col-md-6 mb-4 col-sm-12 team-block">
              <Link to="/gallery-details" categoryId={item._id}>
                <div
                  className="team-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img src={`http://localhost:3200/api/gallery-images/${item.imagePath}`} alt="img" />
                      </figure>
                    </div>
                    <div className="lower-content">
                      <h3>
                        <Link to="/gallery-details" categoryId={item._id}>{item.gallaryCategoryTitle}</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )):(<div>loading plese wait ...</div>)}
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
