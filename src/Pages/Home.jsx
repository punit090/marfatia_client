import React from "react";
import AboutOvrCompany from "../Commponent/AboutOvrCompany";
import Categori from "../Commponent/Categori";
import Footer from "../Commponent/Footer";
import LatestNews from "../Commponent/LatestNews";
import Services from "../Commponent/Services";
import Hader from "./../Commponent/Hader";
import HaderSlider from "./../Commponent/HaderSlider";

const Home = () => {
  return (
    <div>
      
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
    </div>
  );
};

export default Home;
