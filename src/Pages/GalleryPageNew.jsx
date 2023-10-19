 import axios from "axios";
import React, { useEffect, useState } from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useDispatch, useSelector } from "react-redux";
import { BASE_API_URL } from "../helpers/apiHelper";
// import galleryimage2 from "../../images/gallery-image2.png";
// import galleryimage3 from "../../images/gallery-image3.png";
// import galleryimage4 from "../../images/gallery-image4.png";
// import galleryimage5 from "../../images/gallery-image5.png";
import { Col, Row } from "react-bootstrap";
import { AiOutlineCloseCircle } from "react-icons/ai";
import HaderContent2 from "../Commponent/HaderContent2";
import galleryimage1 from "../assets/img/gallary_category_Image.png";
import "../css/elements-css/GalleryNew.css"; // Import your custom CSS for styling
import {
  setCategory,
  storeGallery,
  storeGalleryCategory,
} from "../state/action";

const categoryApiPath = BASE_API_URL + "/api/gallery-category";
const galleryApiPath = BASE_API_URL + "/api/gallery";
const galleryFilesPath = BASE_API_URL + "/api/gallery-images/";

const GalleryPageNew = () => {
  const dispatch = useDispatch();
 

 
  return (
  <React.Fragment>
    this is gallery
  </React.Fragment>
  );
};

export default GalleryPageNew;
