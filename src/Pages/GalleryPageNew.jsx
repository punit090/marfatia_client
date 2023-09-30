import React, { useState } from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
// import galleryimage2 from "../../images/gallery-image2.png";
// import galleryimage3 from "../../images/gallery-image3.png";
// import galleryimage4 from "../../images/gallery-image4.png";
// import galleryimage5 from "../../images/gallery-image5.png";
import HaderContent2 from "../Commponent/HaderContent2";
import galleryimage1 from "../assets/img/gallary_category_Image.png";
import "../css/elements-css/GalleryNew.css"; // Import your custom CSS for styling
const GalleryPage = () => {
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

  const openSlider = (index) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

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
  return (
    <>
      <HaderContent2 Title="Gallery " SubTitle="Gallery" />
      <div className="gallery-container main">
        <div className="gallery container">
          {initialImages.map((image, index) => (
            // <div key={index} className="gallery-item card gallery-card">
            //   <div className="card-image">
            //     <img
            //       src={image.thumbnail}
            //       alt={`Nature Image ${index + 1}`}
            //       onClick={() => openSlider(index)}
            //     />
            //   </div>
            // </div>
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
                      src={image.thumbnail}
                      alt={`Nature Image ${index + 1}`}
                      onClick={() => openSlider(index)}
                    />
                    <div className="lower-content">
                      <h3>
                        <a className="lower-content" href="#">
                          {image.Title}
                        </a>
                      </h3>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isOpen && (
          <div className="overlay">
            <div className="slider-modal ">
              <button className="close-button" onClick={closeSlider}>
                X
              </button>
              <Gallery
                items={initialImages}
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

export default GalleryPage;
