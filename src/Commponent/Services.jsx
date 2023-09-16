import React from "react";
import { AiOutlineStock } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { GiPiggyBank } from "react-icons/gi";
import { PiHandCoinsFill } from "react-icons/pi";
import { RiStockLine, RiTeamFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Background10 from "./../assets/img/shape-10.png";
import Background11 from "./../assets/img/shape-11.png";
import Background12 from "./../assets/img/shape-12.png";
import Background4 from "./../assets/img/shape-4.png";
import Background5 from "./../assets/img/shape-5.png";
import Background6 from "./../assets/img/shape-6.png";
import Background7 from "./../assets/img/shape-7.png";
import Background8 from "./../assets/img/shape-8.png";
import Background9 from "./../assets/img/shape-9.png";
import "./../css/elements-css/service.css";

const Services = () => {
  return (
    <div>
      {/* service-section */}
      <section className="service-section p_relative centred bg-color-1 sec-pad">
        <div
          className="pattern-layer"
          style={{ backgroundImage: `url(${Background12})` }}
        />
        <div className="container">
          <div className="sec-title mb_70">
            <span className="sub-title">Services</span>
            <h2>
              Provide the Best Treding <br />
              Services
            </h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-one wow fadeInLeft animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="static-content">
                    <div
                      className="shape"
                      style={{
                        backgroundImage: `url(${Background4})`,
                      }}
                    />
                    <div className="icon-box">
                      <i className="icon-7">
                        <AiOutlineStock />
                      </i>
                    </div>
                    <h3>
                      <Link to="/cms" state={"6501c5f215bfa912f1831818"}>Stock &amp; Market</Link>
                    </h3>
                    <p>
                    </p>
                  </div>
                  <div className="overlay-content">
                    <div
                      className="shape"
                      style={{
                        backgroundImage: `url(${Background5})`,
                      }}
                    />
                    <h3>
                      <Link to="/cms" state={"6501c5f215bfa912f1831818"}>Stock &amp; Market</Link>
                    </h3>
                    <p>
                    stock market is the aggregation of buyers and sellers
                    </p>
                    <div className="btn-box">
                      <Link to="/cms" state={"6501c5f215bfa912f1831818"} className="theme-btn-one">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-one wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="static-content">
                    <div className="icon-box">
                      <i className="icon-12">
                        <GiPiggyBank />
                      </i>
                    </div>
                    <h3>
                      <Link tto="/cms" state={"6501c61615bfa912f183181e"}>Depository Services</Link>
                    </h3>
                    <p>
                    </p>
                  </div>
                  <div className="overlay-content">
                    <h3>
                      <Link to="/cms" state={"6501c61615bfa912f183181e"}>Depository Services</Link>
                    </h3>
                    <p>
                      The first central securities depository in India based in Mumbai
                    </p>
                    <div className="btn-box">
                      <Link to="/cms" state={"6501c61615bfa912f183181e"} className="theme-btn-one">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-one wow fadeInRight animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="static-content">
                    <div
                      className="shape"
                      style={{
                        backgroundImage: `url(${Background6})`,
                      }}
                    />
                    <div className="icon-box">
                      <i className="icon-8">
                        <RiStockLine />
                      </i>
                    </div>
                    <h3>
                      <Link to="/cms" state={"6501c62d15bfa912f1831821"}>Mobile Trading </Link>
                    </h3>
                    <p>
                    </p>
                  </div>
                  <div className="overlay-content">
                    <div
                      className="shape"
                      style={{
                        backgroundImage: `url(${Background7})`,
                      }}
                    />
                    <h3>
                      <Link to="/cms" state={"6501c62d15bfa912f1831821"}>Mobile Trading</Link>
                    </h3>
                    <p>
                    So you want to trade from any where?
                    </p>
                    <div className="btn-box">
                      <Link to="/cms" state={"6501c62d15bfa912f1831821"} className="theme-btn-one">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-one wow fadeInLeft animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="static-content">
                    <div
                      className="shape"
                      style={{
                        backgroundImage: `url(${Background8})`,
                      }}
                    />
                    <div className="icon-box">
                      <i className="icon-13">
                        <RiTeamFill />
                      </i>
                    </div>
                    <h3>
                      <Link to="/cms" state={"6501c64115bfa912f1831824"}>Portfolio Management Services</Link>
                    </h3>
                    <p>
                    </p>
                  </div>
                  <div className="overlay-content">
                    <div
                      className="shape"
                      style={{
                        backgroundImage: `url(${Background9})`,
                      }}
                    />
                    <h3>
                      <Link to="/cms" state={"6501c64115bfa912f1831824"}>Portfolio Management</Link>
                    </h3>
                    <p>
                    designed to provide total end to end customised/personalised services to HNI
                    </p>
                    <div className="btn-box">
                      <Link to="/cms" state={"6501c64115bfa912f1831824"} className="theme-btn-one">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-one wow fadeInUp animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="static-content">
                    <div className="icon-box">
                      <i className="icon-14">
                        <FaUserTie />
                      </i>
                    </div>
                    <h3>
                      <Link to="/cms" state={"6501c64f15bfa912f1831827"}>Premium Client Services</Link>
                    </h3>
                    <p>
                      
                    </p>
                  </div>
                  <div className="overlay-content">
                    <h3>
                      <Link to="/cms" state={"6501c64f15bfa912f1831827"}>Premium Client Services</Link>
                    </h3>
                    <p>
                    reduced charges from our advanced charting package and cutting-edge tools to live data feeds.
                    </p>
                    <div className="btn-box">
                      <Link to="/cms" state={"6501c64f15bfa912f1831827"} className="theme-btn-one">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-one wow fadeInRight animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="static-content">
                    <div
                      className="shape"
                      style={{
                        backgroundImage: `url(${Background10})`,
                      }}
                    />
                    <div className="icon-box">
                      <i className="icon-15">
                        <PiHandCoinsFill />
                      </i>
                    </div>
                    <h3>
                      <Link to="https://marfatia.wealthmagic.in/" target="_blanck">Mutual Funds</Link>
                    </h3>
                    <p>
                     
                    </p>
                  </div>
                  <div className="overlay-content">
                    <div
                      className="shape"
                      style={{
                        backgroundImage: `url(${Background11})`,
                      }}
                    />
                    <h3>
                      <Link to="https://marfatia.wealthmagic.in/" target="_blanck">Mutual Funds</Link>
                    </h3>
                    <p>
                    A mutual fund is a pool of money managed by a professional Fund Manager.
                    </p>
                    <div className="btn-box">
                      <Link to="https://marfatia.wealthmagic.in/" target="_blanck" className="theme-btn-one">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="more-btn mt_60">
            <Link to="#" className="theme-btn-one">
              More Services
            </Link>
          </div> */}
        </div>
      </section>
      {/* service-section end */}
    </div>
  );
};

export default Services;
