import React from "react";
import AboutOvrCompany from "../Commponent/AboutOvrCompany";
import Categori from "../Commponent/Categori";
import LatestNews from "../Commponent/LatestNews";
import NewsletterPopup from "../Commponent/NewlestPopup";
import Services from "../Commponent/Services";
import HaderSlider from "./../Commponent/HaderSlider";

const Home = () => {
  return (
    <React.Fragment>
      <NewsletterPopup />
      {/* hader slider section --> */}
      <HaderSlider />
      {/* category section ---> */}
      <Categori />
      <AboutOvrCompany />
      <Services />
      <LatestNews />
      <marquee style={{ background: " #85c226", fontSize: "20px" }}>
        PLEASE LINKING YOUR AADHAR WITH YOUR DEMAT ACCOUNT
      </marquee>
      <marquee
        style={{
          background: "#1d1826",
          color: "#fff",
          fontSize: " 20px",
          fontWeight: "500",
        }}
      >
        KYC - "KYC is one time exercise while dealing in securities markets -
        once KYC is done through a SEBI registered intermediary (broker, DP,
        Mutual Fund etc.), you need not undergo the same process again when you
        approach another intermediary."
      </marquee>
    </React.Fragment>
  );
};

export default Home;
