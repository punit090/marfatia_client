import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HaderContent2 from "../Commponent/HaderContent2";
import PostNews from "../assets/img/post-1.jpg";
import "../css/elements-css/blog.css";
import { BASE_API_URL } from "../helpers/apiHelper";
import { setNews, storeNews } from "../state/action";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const News = () => {
  const shortMonthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const mainFilePath = BASE_API_URL + "/api/news-images/";

  const selectedNews = useSelector((state) => state.selectedNews);

  const newsImagesPath = BASE_API_URL + "/api/news-images/";
  const newsApi = BASE_API_URL + "/api/news-master";
  const allNews = useSelector((state) => state.newsList);
  const arrayOfNews = allNews.slice(0, 3);
  const dispatch = useDispatch();

  const fetchNews = () => {
    if (arrayOfNews.length === 0) {
      axios
        .get(newsApi)
        .then((res) => {
          dispatch(storeNews(res.data.data));
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          console.log("news master done");
        });
    }
  };

  function handleClick(item) {
    dispatch(setNews(item));
  }

  useEffect(() => {
    if (allNews.length === 0) {
      fetchNews();
    }
  }, []);

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo(0, 800);
    }, 10);

    return () => clearTimeout(scrollTimeout);
  }, []);

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
                        <img
                          src={mainFilePath + selectedNews.imagePath}
                          alt="img"
                        />
                      </figure>
                      <h2>
                        {selectedNews.date.split("T")[0].split("-")[2]}
                        <span>
                          {
                            shortMonthNames[
                              parseInt(
                                selectedNews.date.split("T")[0].split("-")[2],
                                10
                              ) - 1
                            ]
                          }
                        </span>
                      </h2>
                    </div>
                    <div className="lower-content">
                      <h2>{selectedNews.newsTitle}</h2>
                      <p>{selectedNews.description}</p>
                      <div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: selectedNews.news,
                          }}
                        />
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
                        <Link to="https://www.bseindia.com/" target="_blanck">
                          BSE{" "}
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
                  {arrayOfNews && arrayOfNews.length > 0 ? (
                    arrayOfNews.map((item) => (
                      <div className="post-inner mt-4">
                        <div className="post">
                          <figure className="post-thumb">
                            <Link to="#" >
                              <img
                                src={newsImagesPath + item.imagePath}
                                onClick={() => {
                                  handleClick(item);
                                }}
                                alt="img"
                                style={{
                                  borderRadius: '50%',
                                  width: '100px', // Adjust the width and height as needed
                                  height: '100px',
                                }}
                              />
                            </Link>
                          </figure>
                          <h5>
                            <Link to="#" onClick={() => {
                                handleClick(item);
                              }}>
                             {item.newsTitle.length > 40
                                ? item.newsTitle.substring(0, 40) + "..."
                                : item.newsTitle}
                            </Link>
                          </h5>
                          <span className="post-date">{new Date(item.date).toLocaleDateString(
                                  "en-GB"
                                )}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "100vh" }}
                    >
                      <Spinner animation="border" variant="primary" size="lg" />
                    </div>
                  )}
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
