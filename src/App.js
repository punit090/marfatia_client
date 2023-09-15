import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import "./App.css";
import "./css/animate.css";
import "./css/bootstrap.css";
import "./css/color.css";
import "./css/elements-css/about.css";
import "./css/elements-css/feature.css";
import "./css/elpath.css";
import "./css/responsive.css";
// import "./css/flaticon.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompanyProfile from "./Pages/aboutUs/CompanyProfile";
import Complain from "./Pages/Complain";
import ContactUs from "./Pages/ContactUs";
import DailyTips from "./Pages/DailyTips";
import Feedback from "./Pages/Feedback";
import Home from "./Pages/Home";
import MtualFundDetails from "./Pages/MtualFundDetails";
import NewDownloads from "./Pages/NewDownloads";
import News from "./Pages/News";
import PrimiyamClint from "./Pages/PrimiyamClint";
import ResearchReport from "./Pages/ResearchReport";
import StockMarket from "./Pages/StockMarket";
import TodaysTrade from "./Pages/TodaysTrade";
import WithdrawlForm from "./Pages/WithdrawlForm";
import "./css/elements-css/feature.css";
import "./css/main.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { storeBanner, storeContent, storeNews } from "./state/action";
import Hader from "./Commponent/Hader";
import Footer from "./Commponent/Footer";
import GalleryDetails from "./Pages/aboutUs/GalleryDetails";
import Gallery from "./Pages/aboutUs/Gallery";
import DynamicContent from "./Commponent/dynamicContent";
import DownloadForm from "./Modal/downloadForm";

const apiUrl = process.env.API_URL;
function App() {
  const dispatch = useDispatch();

  const fetchContents = () => {
    axios
      .get(`http://localhost:3200/api/content-master`)
      .then((res) => {
        dispatch(storeContent(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("operation done");
      });
  };



  

  useEffect(() => {
    console.log(process.env.NODE_ENV)
    fetchContents();
  }, []);

  return (
    <React.Fragment>
      <BrowserRouter>
        <Hader />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stock-market" element={<StockMarket />} />
          <Route path="/premuium-client" element={<PrimiyamClint />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery-details" element={<GalleryDetails />} />
          <Route path="/news" element={<News />} />
          <Route path="/mtual-fund-details" element={<MtualFundDetails />} />
          <Route path="/daily-tips" element={<DailyTips />} />
          <Route path="/research -report" element={<ResearchReport />} />
          <Route path="/withdrawl-form" element={<WithdrawlForm />} />
          <Route path="/todays-online-trade" element={<TodaysTrade />} />
          {/* <Route path="/careers" element={<Career />} /> */}
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/cms" element={<DynamicContent />} />
          <Route path="/complains" element={<Complain />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/new-downloads" element={<DownloadForm/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
