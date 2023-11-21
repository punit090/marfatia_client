import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";
import { GiTwoCoins } from "react-icons/gi";
import { Link } from "react-router-dom";
import StockBackground from "./../assets/img/page-title.jpg";
import StockBackgroundHelp from "./../assets/img/service-7.jpg";
import ServiceImg from "./../assets/img/service-8.jpg";
import ServiceDetailsImg from "./../assets/img/service-9.jpg";
import "./../css/elements-css/page-title.css";
import "./../css/elements-css/shop-details.css";

const PrimiyamClint = () => {
  return (
    <React.Fragment>
      {/* page-title */}
      <section className="page-title centred">
        <div
          className="bg-layer"
          style={{ backgroundImage: `url(${StockBackground})` }}
        />
        <div className="auto-container">
          <div className="content-box">
            <h1>Premium Client Services</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="/">Home</Link> <AiOutlineRight />{" "}
              </li>
              <li>Premium Client Servicest</li>
            </ul>
          </div>
        </div>
      </section>

      {/* service-details */}
      <section className="service-details p_relative">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <div className="service-sidebar mr_40">
                <div className="sidebar-widget category-widget">
                  <h3>All Services</h3>
                  <ul className="category-list clearfix">
                    <li>
                      <Link to="#" className="current">
                        Stock Market{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">Currency</Link>
                    </li>
                    <li>
                      <Link to="#">Mutual Funds</Link>
                    </li>
                    <li>
                      <Link to="#">Digital Library</Link>
                    </li>
                    <li>
                      <Link to="#">Dial N Trade</Link>
                    </li>
                    <li>
                      <Link to="#">NRI Desk</Link>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-widget contact-widget centred">
                  <div className="widget-content">
                    <div
                      className="bg-layer"
                      style={{ backgroundImage: `url(${StockBackgroundHelp})` }}
                    />
                    <h3>
                      Do You Need <br />
                      Any <span>Help?</span>
                    </h3>
                    <div className="icon-box">
                      <i className="icon-29" />
                    </div>
                    <div className="inner-box">
                      <p>
                        <Link to="mailto:example@info.com">
                          marfatiastockbroking@example.com
                        </Link>
                      </p>
                      <h3>
                        <Link to="#">0265-2351355</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
              <div className="service-details-content">
                <div className="content-one mb_90">
                  <figure className="image-box">
                    <img src={ServiceImg} alt="img" />
                  </figure>
                  <div className="text">
                    <h2>Premium Client Services </h2>
                    <p>
                      Personalised Real time market information with news
                      updates. Investment advisory services with dedicated
                      relationship managers. Online technical analysis software
                      shall be provided.
                    </p>
                  </div>
                </div>
                <div className="content-two mb_90">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                      <div className="text-box">
                        <h3>Our premium clients benefit from</h3>
                        <p>
                          Personalised Real time market information with news
                          updates. Investment advisory services with dedicated
                          relationship managers. Online technical analysis
                          software shall be provided.
                        </p>
                        <ul className="list-style-one clearfix">
                          <li>
                            Free services and reduced charges from our advanced
                            charting package and cutting-edge tools to live data
                            feeds, we waive fees and reduce charges where
                            possible for premium clients.
                          </li>
                          <li>Better margins</li>
                          <li>Enjoy the potential for better margin rates.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                      <figure className="image-box">
                        <img src={ServiceDetailsImg} alt="img" />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="content-three mb_85">
                  <div className="text mb_100">
                    <h3>Our Solutions</h3>
                    <p>
                      Personalised Real time market information with news
                      updates. Investment advisory services with dedicated
                      relationship managers. Online technical analysis software
                      shall be provided.
                    </p>
                  </div>
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                      <div className="single-item">
                        <div className="icon-box">
                          <i className="icon-8">
                            <GiTwoCoins />{" "}
                          </i>
                        </div>
                        <h3>Invest Strategy</h3>
                        <p>
                          Text Will Be Comming Soon...Text Will Be Comming
                          Soon...Text Will Be Comming Soon...
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                      <div className="single-item">
                        <div className="icon-box">
                          <i className="icon-13">
                            <BsCardChecklist />{" "}
                          </i>
                        </div>
                        <h3>Investor Planing</h3>
                        <p>
                          Text Will Be Comming Soon...Text Will Be Comming
                          Soon...Text Will Be Comming Soon...
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text mt_50">
                    <p>
                      EPersonalised Real time market information with news
                      updates. Investment advisory services with dedicated
                      relationship managers. Online technical analysis software
                      shall be provided.
                    </p>
                  </div>
                </div>
                {/* <div className="content-four">
                                    <h3>Download Resources</h3>
                                    <ul className="download-list clearfix">
                                        <li>
                                            <div className="icon-box"><i className="icon-30" /></div>
                                            <h5>Company Briefing Update for the Year</h5>
                                            <span>Pdf(160kb)</span>
                                            <button type="button">Download</button>
                                        </li>
                                        <li>
                                            <div className="icon-box"><i className="icon-30" /></div>
                                            <h5>Cultural Centers and Event schedule</h5>
                                            <span>Pdf(160kb)</span>
                                            <button type="button">Download</button>
                                        </li>
                                    </ul>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* service-details end */}
    </React.Fragment>
  );
};

export default PrimiyamClint;
