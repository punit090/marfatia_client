import React from "react";
import { Link } from "react-router-dom";
import HaderContent2 from "../Commponent/HaderContent2";
import NewsImg from "../assets/img/Sensex.jpg";
import PostNews from "../assets/img/post-1.jpg";
import "../css/elements-css/blog.css";
import { useSelector } from "react-redux";
import { BASE_API_URL } from "../helpers/apiHelper";


const News = () => {
  const shortMonthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const mainFilePath = BASE_API_URL+"/api/news-images/"

  const selectedNews = useSelector((state) => state.selectedNews);


  return (
    <React.Fragment>
      <HaderContent2 Title="News" SubTitle="News" />
      {/* sidebar-page-container */}
      <section className="sidebar-page-container pt_150 pb_150">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-8 col-md-12 col-sm-12 sidebar-side">
              <div className="blog-details-content">
                <div className="news-block-one">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img src={mainFilePath+selectedNews.imagePath} alt="img" />
                      </figure>
                      <h2>
                      {selectedNews.date.split("T")[0].split("-")[2]}<span>{shortMonthNames[parseInt(selectedNews.date.split("T")[0].split("-")[2], 10)-1]}</span>
                      </h2>
                    </div>
                    <div className="lower-content">
                      <h2>
                      {selectedNews.newsTitle}
                      </h2>
                      <p>
                      {selectedNews.description}
                      </p>
                     <div>
                     <div dangerouslySetInnerHTML={{ __html: selectedNews.news }} />
                     </div>
                      {/* <blockquote>
                        <div className="icon-box">
                          <i className="icon-47" />
                        </div>
                        <p>
                          Text Will Be Coming Soon...Text Will Be Coming
                          Soon...Text Will Be Coming Soon...Text Will Be Coming
                        </p>
                        <h4>Text Will Be Coming Soon...</h4>
                      </blockquote> */}
                      <p>
                        Text Will Be Coming Soon...Text Will Be Coming
                        Soon...Text Will Be Coming Soon...Text Will Be Coming
                        Soon.Text Will Be Coming Soon...Text Will Be Coming
                        Soon...Text Will Be Coming Soon...Text Will Be Coming
                        Soon.Text Will Be Coming Soon...Text Will Be Coming
                        Soon...Text Will Be Coming Soon...Text Will Be Coming
                        Soon.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <div className="blog-sidebar ml_40">
                {/* <div className="sidebar-widget search-widget">
                  <div className="search-form">
                    <form
                      action="http://azim.commonsupport.com/Biztech/blog-2.html"
                      method="post"
                    >
                      <div className="form-group">
                        <input
                          type="search"
                          name="search-field"
                          placeholder="Search..."
                          required
                        />
                        <button type="submit">
                          <i className="icon-4">
                            <AiOutlineSearch />
                          </i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div> */}
                <div className="sidebar-widget category-widget">
                  <div className="widget-title">
                    <h3>Categories</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="category-list clearfix">
                      <li>
                        <Link
                          to="https://marfatia.wealthmagic.in/"
                          target="_blanck"
                        >
                          Online Mutual Fund
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.nseindia.com/" target="_blanck">
                          NSE{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.bseindia.com/">BSE </Link>
                      </li>
                      <li>
                        <Link
                          to="http://203.88.142.26:84/TradeWeb/login.aspx?ReturnUrl=%2fTradeWeb"
                          target="_blanck"
                        >
                          Back Office{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://etrade.marfatia.net/#/app"
                          target="_blanck"
                        >
                          E-trade
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.sebi.gov.in/" target="_blanck">
                          SEBI
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar-widget post-widget">
                  <div className="widget-title">
                    <h3>Recent News</h3>
                  </div>
                  <div className="post-inner">
                    <div className="post">
                      <figure className="post-thumb">
                        <Link to="#">
                          <img src={PostNews} alt="img" />
                        </Link>
                      </figure>
                      <h5>
                        <Link to="#">
                          Tiger Global Fully Exits Zomato, Sells 1.4% Stake?
                        </Link>
                      </h5>
                      <span className="post-date">Apr 17, 2023</span>
                    </div>
                    <div className="post">
                      <figure className="post-thumb">
                        <Link to="#">
                          <img src={PostNews} alt="img" />
                        </Link>
                      </figure>
                      <h5>
                        <Link to="#">
                          Rishabh Instruments IPO GMP (Grey Market Premium)
                        </Link>
                      </h5>
                      <span className="post-date">Apr 16, 2023</span>
                    </div>
                    <div className="post">
                      <figure className="post-thumb">
                        <Link to="#">
                          <img src={PostNews} alt="img" />
                        </Link>
                      </figure>
                      <h5>
                        <Link to="#">
                          Vishnu Prakash R Punglia IPO subscribed 87.82 times at
                          close
                        </Link>
                      </h5>
                      <span className="post-date">Apr 15, 2023</span>
                    </div>
                  </div>
                </div>
                <div className="sidebar-widget tags-widget">
                  <div className="widget-title">
                    <h3>Popular Tags</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="tags-list clearfix">
                      <li>
                        <Link
                          to="https://marfatia.wealthmagic.in/"
                          target="_blanck"
                        >
                          Mutual Fund
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="http://203.88.142.26:84/TradeWeb/login.aspx?ReturnUrl=%2fTradeWeb"
                          target="_blanck"
                        >
                          Back Office{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.bseindia.com/" target="_blanck">
                          BSE
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://etrade.marfatia.net/#/app"
                          target="_blanck"
                        >
                          E-trade
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.nseindia.com/" target="_blanck">
                          NSE{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.sebi.gov.in/" target="_blanck">
                          SEBI
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://www.ncdex.com/market-watch/live_quotes"
                          target="_blanck"
                        >
                          NCDEX
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://www.mcxindia.com/home"
                          target="_blanck"
                        >
                          MCX{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* sidebar-page-container end */}

    </React.Fragment>
  );
};

export default News;
