import React from "react";
import { Link } from "react-router-dom";
import News1 from "./../assets/img/Sensex.jpg";
import "./../css/elements-css/news.css";

const LatestNews = () => {
  return (
    <div>
      {/* news-section */}
      <section className="news-section sec-pad">
        <div className="auto-container">
          <div className="sec-title centred mb_50">
            <span className="sub-title">Latest News</span>
            <h2>
              Get More Update For <br />
              Tread
            </h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                className="news-block-one wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link to="/news">
                        <img src={News1} alt="img" />
                      </Link>
                    </figure>
                    <h2>
                      15<span>APRIL</span>
                    </h2>
                  </div>
                  <div className="lower-content">
                    <h3>
                      <Link to="/news">
                        Rishabh Instruments IPO GMP (Grey Market Premium)
                      </Link>
                    </h3>
                    <p>
                      Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                      Will Be Coming Soon...Text Will Be Coming Soon
                    </p>
                    <ul className="post-info">
                      <li>
                        <i className="icon-21" />
                        <Link to="/news">29-08-2023</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                className="news-block-one wow fadeInUp animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link to="/news">
                        <img src={News1} alt="img" />
                      </Link>
                    </figure>
                    <h2>
                      14<span>APRIL</span>
                    </h2>
                  </div>
                  <div className="lower-content">
                    <h3>
                      <Link to="/news">
                        Vishnu Prakash R Punglia IPO subscribed 87.82 times at
                        close
                      </Link>
                    </h3>
                    <p>
                      Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                      Will Be Coming Soon...Text Will Be Coming Soon.
                    </p>
                    <ul className="post-info">
                      <li>
                        <i className="icon-21" />
                        <Link to="/news">29-08-2023</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                className="news-block-one wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link to="/news">
                        <img src={News1} alt="img" />
                      </Link>
                    </figure>
                    <h2>
                      13<span>APRIL</span>
                    </h2>
                  </div>
                  <div className="lower-content">
                    <h3>
                      <Link to="/news">
                        Tiger Global Fully Exits Zomato, Sells 1.4% Stake?
                      </Link>
                    </h3>
                    <p>
                      Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                      Will Be Coming Soon...Text Will Be Coming Soon
                    </p>
                    <ul className="post-info">
                      <li>
                        <i className="icon-21" />
                        <Link to="/news">29-08-2023</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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
  );
};

export default LatestNews;
