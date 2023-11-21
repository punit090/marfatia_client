import axios from "axios";
import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { BASE_API_URL } from "../helpers/apiHelper";
import { storeBanner } from "../state/action";

const HaderSlider = () => {
  const arrayOfContents = useSelector((state) => state.bannerList);
  const dispatch = useDispatch();

  const bannerApi = BASE_API_URL + "/api/banner";
  const bannerImagePath = BASE_API_URL + "/api/banner-images/";

  const fetchBanner = () => {
    axios
      .get(bannerApi)
      .then((res) => {
        dispatch(storeBanner(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("banner done");
      });
  };

  useEffect(() => {
    fetchBanner();
  }, [dispatch]);

  return (
    <div>
      <Carousel>
        {arrayOfContents && arrayOfContents.length > 0 ? (
          arrayOfContents.map((item) => (
            <Carousel.Item>
              <img src={bannerImagePath + item.imagePath} alt="img" />
            </Carousel.Item>
          ))
        ) : (
          <Carousel.Item>
            <img src={bannerImagePath + "1694670147496_banner.png"} alt="img" />
          </Carousel.Item>
        )}
      </Carousel>
      <iframe
        width="100%"
        height="70"
        allowtransparency="true"
        frameborder="0"
        scrolling="no"
        title="market"
        src=" http://jksec.acemf.co.in/HOME/Home_Ticker.aspx"
      ></iframe>
    </div>
  );
};

export default HaderSlider;
