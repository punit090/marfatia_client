import React, { useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./../css/elements-css/news.css";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_API_URL } from "../helpers/apiHelper";
import { setNews, storeNews } from "../state/action";

const LatestNews = () => {
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
    fetchNews();
  }, []);

  return (
    <React.Fragment>
      <Container>
        <marquee
          style={{
            background: " #85c226",
            color: "#000",
            fontSize: "20px",
            fontWight: "600",
          }}
        >
          No need to issue cheques by investors while subscribing to IPO. Just
          write the bank account number and sign in the application form to
          authorise your bank to make payment in case of allotment. No worries
          for refund as the money remains in investor's account.
        </marquee>
      </Container>
      {/* news-section */}
      <section className="news-section sec-pad">
        <div className="auto-container">
          <div className="sec-title centred mb_50">
            <span className="sub-title">Latest News</span>
            <h2>
              Get More Update For <br />
              Trade
            </h2>
          </div>
          <Row className=" clearfix">
            {arrayOfNews && arrayOfNews.length > 0 ? (
              arrayOfNews.map((item) => (
                <React.Fragment>
                  <Col lg="4" md="6" sm="12" className=" mt-4  news-block">
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
                                style={{
                                  height: "200px",
                                  width: "100%", // Ensure the width scales proportionally
                                  objectFit: "cover",
                                }}
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
                                    item.date.split("T")[0].split("-")[1],
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
                              {item.newsTitle.length > 40
                                ? item.newsTitle.substring(0, 40) + "..."
                                : item.newsTitle}
                            </Link>
                          </h3>
                          <p>
                            {item.description.length > 120
                              ? item.description.substring(0, 120) + "..."
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
                                {new Date(item.date).toLocaleDateString(
                                  "en-GB"
                                )}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Col>
                </React.Fragment>
              ))
            ) : (
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "100vh" }}
              >
                <Spinner animation="border" variant="primary" size="lg" />
              </div>
            )}
          </Row>
        </div>
        <div className="more-btn ">
          <Link to="/all-news" className="theme-btn-one">
            See More
          </Link>
        </div>
      </section>
      {/* news-section end */}
    </React.Fragment>
  );
};

export default LatestNews;
