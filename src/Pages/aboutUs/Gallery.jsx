import React from "react";
import GalleryComponent from "../../Commponent/GalleryComponent";
import HaderContent2 from "../../Commponent/HaderContent2";

const Gallery = () => {
  return (
    <React.Fragment>
      <HaderContent2 Title="Gallery" SubTitle="Gallery" />
      <GalleryComponent />
    </React.Fragment>
  );
};

export default Gallery;
