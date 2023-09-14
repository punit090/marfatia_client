import React from "react";
import CountUp from "react-countup";
import { AiOutlineUser } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { RiShieldUserFill } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import BackgroundShape from "./../assets/img/shape-18.png";
import BackgroundShape2 from "./../assets/img/shape-19.png";
import "./../css/elements-css/funfact.css";

const Counter = () => {
  return (
    <React.Fragment>
      {/* funfact-section */}
      <section className="funfact-section centred">
        <div className="container">
          <div className="inner-container">
            <div className="shape">
              <div
                className="shape-1"
                style={{
                  backgroundImage: `url(${BackgroundShape})`,
                }}
              />
              <div
                className="shape-2"
                style={{
                  backgroundImage: `url(${BackgroundShape2})`,
                }}
              />
            </div>
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                <div className="funfact-block-one">
                  <div className="inner-box">
                    <div className="count-outer count-box">
                      <VscWorkspaceTrusted />
                      <span
                        className="count-text"
                        data-speed={1500}
                        data-stop={50}
                      >
                        <CountUp
                          className="account-balance"
                          start={0}
                          end={25}
                          duration={1}
                          useEasing={true}
                          separator=","
                        />
                      </span>
                      <span>+</span>
                    </div>
                    <p>Years of Trust</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                <div className="funfact-block-one">
                  <div className="inner-box">
                    <div className="count-outer count-box">
                      <AiOutlineUser />
                      <CountUp
                        className="account-balance"
                        start={0}
                        end={1}
                        duration={1}
                        useEasing={true}
                        separator=","
                      />
                      <span>CR+</span>
                    </div>
                    <p>Registered Users</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                <div className="funfact-block-one">
                  <div className="inner-box">
                    <div className="count-outer count-box">
                      <RiShieldUserFill />
                      <CountUp
                        className="account-balance"
                        start={0}
                        end={20}
                        duration={1}
                        useEasing={true}
                        separator=","
                      />
                      <span>K+</span>
                    </div>
                    <p>Authorised Person</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                <div className="funfact-block-one">
                  <div className="inner-box">
                    <div className="count-outer count-box">
                      <BsDownload />
                      <CountUp
                        className="account-balance"
                        start={0}
                        end={1}
                        duration={1}
                        useEasing={true}
                        separator=","
                      />
                      <span>CR+</span>
                    </div>
                    <p>App Downloads</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* funfact-section end */}
    </React.Fragment>
  );
};

export default Counter;
