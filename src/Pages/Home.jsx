import React from "react";
import AboutOvrCompany from "../Commponent/AboutOvrCompany";
import Categori from "../Commponent/Categori";
import LatestNews from "../Commponent/LatestNews";
import Services from "../Commponent/Services";
import HaderSlider from "./../Commponent/HaderSlider";

const Home = () => {
  return (
    <React.Fragment>
      {/* hader slider section --> */}
      <HaderSlider />
      {/* category section ---> */}
      <Categori />

      {/* investor section --->  */}
      {/* <Invester /> */}
      {/* about comapny section ---> */}
      <AboutOvrCompany />

      {/* services section ---->  */}
      <Services />
      {/* counter section ---->  */}
      {/* <Counter /> */}
      {/* pricing section ---> */}
      {/* <Pricing /> */}
      {/* helpfullcontant section ----> */}
      {/* <HelpFullContant /> */}
      {/* latest news -->  */}
      <LatestNews />
      {/* footer section ---> */}
    </React.Fragment>
  );
};

export default Home;
