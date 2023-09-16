import React, { useEffect } from "react";
import HaderContent2 from "../Commponent/HaderContent2";
import { useDispatch, useSelector } from "react-redux";
import { Container, Spinner } from "react-bootstrap";
import ContentFooterButton from "../Commponent/Footer";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { setNews, storeNews } from "../state/action";
import { BASE_API_URL } from "../helpers/apiHelper";

const AllNews = () => {
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

  const newsImagesPath = BASE_API_URL + "/api/news-images/";
  const newsApi = BASE_API_URL + "/api/news-master";

  const arrayOfNews = useSelector((state) => state.newsList);
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
    fetchNews();
  }, []);

  return (
    <React.Fragment>
      <React.Fragment>
        <HaderContent2 Title="All News" SubTitle="All News" />
        <Container>
          <div>
            {/* news-section */}
            <section className="news-section sec-pad">
              <div className="auto-container">
                <div className="sec-title centred mb_50">
                  <div class="news-section">
                    <p class="section-description sub-title">
                      Stay updated with the latest news.
                    </p>
                    <h1 class="section-title">Stock Market News</h1>
                  </div>
                </div>
                <div className="row clearfix">
                  {arrayOfNews && arrayOfNews.length > 0 ? (
                    arrayOfNews.map((item) => (
                      <React.Fragment>
                        <div className="col-lg-4 mt-4 col-md-6 col-sm-12 news-block">
                          <div
                            className="news-block-one wow fadeInUp animated"
                            data-wow-delay="00ms"
                            data-wow-duration="1500ms"
                          >
                            <div className="inner-box">
                              <div className="image-box">
                                <figure className="image">
                                  <Link to="/news">
                                    <img
                                    style={{height:"200px",width: "100%",    // Ensure the width scales proportionally
                                    objectFit: "cover"}}
                                      src={newsImagesPath + item.imagePath}
                                      alt="img"
                                      onClick={() => {
                                        handleClick(item);
                                      }}
                                    />
                                  </Link>
                                </figure>
                                <h2>
                                  {item.date.split("T")[0].split("-")[2]}
                                  <span>
                                    {
                                      shortMonthNames[
                                        parseInt(
                                          item.date.split("T")[0].split("-")[2],
                                          10
                                        ) - 1
                                      ]
                                    }
                                  </span>
                                </h2>
                              </div>
                              <div className="lower-content">
                                <h3>
                                  <Link
                                    to="/news"
                                    onClick={() => {
                                      handleClick(item);
                                    }}
                                  >
                                    {item.newsTitle.length > 30
                                    ? item.newsTitle.substring(0, 30) + "..."
                                    : item.newsTitle}
                                  </Link>
                                </h3>
                                <p>
                                  {item.description.length > 100
                                    ? item.description.substring(0, 100) + "..."
                                    : item.description}
                                </p>
                                <ul className="post-info">
                                  <li>
                                    <i className="icon-21" />
                                    <Link
                                      to="/news"
                                      onClick={() => {
                                        handleClick(item);
                                      }}
                                    >
                                      {item.date.split("T")[0]}
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    ))
                  ) : (
                    <div>loading plese wait ...</div>
                  )}
                </div>
              </div>
              <div className="more-btn ">
                <Link to="/news" className="theme-btn-one">
                  See More
                </Link>
              </div>
            </section>
            {/* news-section end */}
          </div>
        </Container>
      </React.Fragment>
    </React.Fragment>
  );
};

export default AllNews;
