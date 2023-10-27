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
  const initialImages = [
    {
      original: galleryimage1,
      Title: "title`1",
      thumbnail: galleryimage1,
    },
    {
      original: galleryimage1,
      thumbnail: galleryimage1,
      Title: "title`1",
    },
    {
      original: galleryimage1,
      Title: "title`1",

      thumbnail: galleryimage1,
    },
    {
      original: galleryimage1,
      thumbnail: galleryimage1,
      Title: "title`1",
    },
    {
      original: galleryimage1,
      Title: "title`1",

      thumbnail: galleryimage1,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [filteredImages, setFilteredImages] = useState([]);

  const selectedCategory =
    useSelector((state) => state.selectedCategory) || "zasd";

  const arrayOfAllImages = useSelector((state) => state.gallery);


  const closeSlider = () => {
    setIsOpen(false);
  };

  const responsiveSettings = [
    {
      breakpoint: 768, // Adjust this value as needed
      settings: {
        slidesToShow: 2, // Number of slides to show at this breakpoint
      },
    },
    {
      breakpoint: 992, // Adjust this value as needed
      settings: {
        slidesToShow: 3, // Number of slides to show at this breakpoint
      },
    },
    {
      breakpoint: 1500, // Adjust this value as needed
      settings: {
        slidesToShow: 4, // Number of slides to show at this breakpoint
      },
    },
  ];

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

  
  const openSlider = (index) => {
    setSelectedImageIndex(index);
    const selectedCategoryId = arrayOfContents[index]._id;
    
    const filteredImages = arrayOfAllImages.filter(
      (item) => item.gallaryCategoryId === selectedCategoryId
    );
  
    const modifiedFilteredImages = filteredImages.map((item) => ({
      original: `${galleryFilesPath}/${item.imagePath}`,
      thumbnail: `${galleryFilesPath}/${item.imagePath}`,
      Title: item.imageTitle, // Assuming 'imageTitle' is a property of 'item'
    }));
    
    setFilteredImages(modifiedFilteredImages);
    setIsOpen(true);
  };

  function handleClick(item) {
    dispatch(setCategory(item));
    console.log(item);
  }

  useEffect(() => {
    fetchgalleryCategory();
    fetchGallery();
  }, [dispatch]);
  return (
    <>
      <HaderContent2 Title="Gallery " SubTitle="Gallery" />
      <div className="gallery-container main">
        <div className="gallery container">
          <Row>
            {arrayOfContents.map((image, index) => (
              <Col className="galleryImgCol" lg="4" md="6" sm="12">
                <div
                  className="team-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                  key={index}
                >
                  <div className="inner-box">
                    <div className="image-box-gallery">
                      <figure className="image">
                        <img
                          src={galleryFilesPath + image.imagePath}
                          alt={`Nature Image ${index + 1}`}
                          onClick={() => openSlider(index)}
                        />
                        <div className="lower-content">
                          <h5>
                            <a
                              className="lower-content"
                              onClick={(image) => {
                                handleClick(image);
                              }}
                            >
                              {image.gallaryCategoryTitle}
                            </a>
                          </h5>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {isOpen && (
          <div className="overlay">
            <div
              className="slider-modal"
              
            >
              <button className="close-button" onClick={closeSlider}>
                <AiOutlineCloseCircle></AiOutlineCloseCircle>
              </button>
              <Gallery
                items={filteredImages}
                startIndex={selectedImageIndex}
                showThumbnails={false}
                showFullscreenButton={false}
                showPlayButton={false}
                showBullets
                onClose={closeSlider}
                responsive={responsiveSettings}
              />
            </div>
          </div>
        )}
      </div>
      {/* <Subscribe />
      <Featured />
      <MidFooter /> */}
    </>
  );
};

export default GalleryPageNew;
