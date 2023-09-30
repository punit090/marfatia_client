import { Formik } from "formik";
import React, { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoWhatsapp,
  BiLogoYoutube,
} from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineLocationMarker, HiOutlineMailOpen } from "react-icons/hi";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import HaderContent2 from "../Commponent/HaderContent2";
import ShaperImg from "../assets/img/shape-32.png";
import ShaperImg2 from "../assets/img/shape-33.png";
import "../css/elements-css/contact.css";

const ContactUs = () => {

  useEffect(() => {
    const scrollDelay = 100; // 100 ms delay
  
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 650);
    }, scrollDelay);
  
    return () => clearTimeout(timeoutId); // Cleanup the timeout when the component unmounts
  }, []);

  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is  required ")
      .email("Invalid email format"),
    name: Yup.string().required("Name  is  required "),
    subject: Yup.string().required("subject  is  required "),
    phone: Yup.string().required("Contact number  is  required "),
    message: Yup.string().required(" message  is  required "),
  });
  return (
    <React.Fragment>
      <HaderContent2 Title="Contact Us" SubTitle="Contact Us" />
      {/* feature-style-three */}
      <section className="feature-style-three p_relative centred">
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(assets/images/shape/shape-31.png)" }}
        />
        <div className="auto-container">
          <div className="sec-title mb_100">
            <span className="sub-title">Contact Info</span>
            <h2>We’d Love To Help You</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-three wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div
                    className="block-shape"
                    style={{
                      backgroundImage: `url(${ShaperImg})`,
                    }}
                  />
                  <div className="icon-box">
                      <HiOutlineLocationMarker />{" "}
                  </div>
                  <h3>Our Location</h3>
                  <p>
                    216, Glacier complex, Jetalpur Road, <br />
                    Vadodara-390 005.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-three wow fadeInUp animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box">
                      <HiOutlineMailOpen />
                  </div>
                  <h3>Email Address</h3>
                  <p>
                    <Link to="#">customercare@marfatia.net</Link>
                    <br />

                    <Link to="#">compliance@marfatia.net</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-three wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div
                    className="block-shape"
                    style={{
                      backgroundImage: `url(${ShaperImg2})`,
                    }}
                  />
                  <div className="icon-box">
                      <FiPhoneCall />
                  </div>
                  <h3>Phone Number</h3>
                  <p>
                    Emergency Cases <br />
                    <Link to="#">0265-2351355</Link> (24/7)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* feature-style-three end */}

      {/* contact-style-two */}
      <section className="contact-style-two sec-pad">
        <div className="container">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-12 col-sm-12 content-column">
              <div className="content-box mr_70">
                <div className="sec-title mb_35">
                  <span className="sub-title">Message</span>
                  <h2>Feel Free to Contact with us</h2>
                  <p className="mt_20">
                    Do you have questions about how Marfatia can help your
                    business? Send us an email and we’ll get in touch shortly,
                    our dedicated sales team are always happy to help
                  </p>
                </div>
                <ul className="social-links clearfix">
                  <li>
                    <Link
                      to="https://www.facebook.com/vadodaraMarfati"
                      target="_blanck"
                    >
                        <BiLogoFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://twitter.com/i/flow/login?redirect_after_login=%2FMarfatiaSeo"
                      target="_blanck"
                    >
                        <BiLogoTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.youtube.com/channel/UCRmBOZt6mmMekA7_UbxdLSw"
                      target="_blanck"
                    >
                        <BiLogoYoutube />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://api.whatsapp.com/send?phone=919925142538&"
                      target="_blanck"
                    >
                        <BiLogoWhatsapp />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://workspace.google.com/blog/product-announcements/what-you-need-to-know-about-the-sunset-of-consumer-google-plus-on-april-second"
                      target="_blanck"
                    >
                        <FcGoogle />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 form-column">
              <Formik
                validationSchema={schema}
                initialValues={{
                  email: "",
                  name: "",
                  phone: "",
                  message: "",
                  subject: "",
                }}
                onSubmit={(values) => {
                  // Alert the input values of the form that we filled
                  alert(JSON.stringify(values));
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <div className="login">
                    <div>
                      {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                      <form noValidate onSubmit={handleSubmit}>
                        {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                        <Card style={{ padding: "20px" }}>
                          <Row className="clearfix">
                            <Col lg="6" className="form-group">
                              <div className="mainLableDiv">
                                <input
                                  type="text"
                                  name="name"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.name}
                                  placeholder="Your Name"
                                  className="form-control inp_text"
                                  id="name"
                                />
                                {/* If validation is not passed show errors */}
                                <p className="error">
                                  {errors.name && touched.name && errors.name}
                                </p>
                              </div>
                            </Col>
                            {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                            <Col lg="6" className="form-group">
                              <div className="mainLableDiv">
                                <input
                                  type="email"
                                  name="email"
                                  placeholder="Your email"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.email}
                                  className="form-control"
                                />
                                {/* If validation is not passed show errors */}
                                <p className="error">
                                  {errors.email &&
                                    touched.email &&
                                    errors.email}
                                </p>
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="6">
                              <div className="mainLableDiv">
                                <input
                                  type="text"
                                  name="phone"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.phone}
                                  placeholder="Phone"
                                  className="form-control inp_text"
                                  id="phone"
                                />
                                {/* If validation is not passed show errors */}
                                <p className="error">
                                  {errors.phone &&
                                    touched.phone &&
                                    errors.phone}
                                </p>
                              </div>
                            </Col>
                            {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                            <Col lg="6">
                              <div className="mainLableDiv">
                                <input
                                  type="text"
                                  name="subject"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.subject}
                                  placeholder="Subject"
                                  className="form-control"
                                />
                                {/* If validation is not passed show errors */}
                                <p className="error">
                                  {errors.subject &&
                                    touched.subject &&
                                    errors.subject}
                                </p>
                              </div>
                            </Col>
                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                              <textarea
                                name="message"
                                placeholder="Type message"
                                onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.message}
                                rows={4}
                                className="contactTextAria"
                              />
                              {/* If validation is not passed show errors */}
                              <p className="error">
                                {errors.message &&
                                  touched.message &&
                                  errors.message}
                              </p>
                            </div>
                          </Row>

                          {/* Click on submit button to submit the form */}
                          <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                            <button
                              className="theme-btn theme-btn-one"
                              type="submit"
                              name="submit-form"
                            >
                              Send Message
                            </button>
                          </div>
                        </Card>
                      </form>
                    </div>
                  </div>
                )}
              </Formik>
            </div>
          </div>
          <div className="contactTable">
            <h1 style={{ paddingBottom: "10px" }}>Escalation Matrix</h1>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Details of </th>
                  <th>Contact Person</th>
                  <th>Address</th>
                  <th>Direct Contact No</th>
                  <th>Email Id</th>
                  <th>Operational/ Working Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Customer care</td>
                  <td>Ms. Ashita </td>
                  <td>
                    216, Glacier complex, Jetalpur Road, Vadodara-390 005.{" "}
                  </td>
                  <td>0265-3501500 / 0265-2351355 </td>
                  <td>
                    <Link className="tableLink" to="#">
                      customercare@marfatia.net
                    </Link>
                  </td>
                  <td>8.30 AM TO 5.30 PM</td>
                </tr>
                <tr>
                  <td>Head of Customer Care</td>
                  <td>Mr. Mahesh Vasava </td>
                  <td>
                    216, Glacier Complex, Jetalpur Road, Vadodara-390 005.{" "}
                  </td>
                  <td>9925002653</td>
                  <td>
                    <Link className="tableLink" to="#">
                      kyc@marfatia.net
                    </Link>
                  </td>
                  <td>10.00 AM TO 7.00 PM</td>
                </tr>
                <tr>
                  <td>Compliance Officer </td>
                  <td>Mr. Chintan Majumundar </td>
                  <td>
                    216, Glacier Complex, Jetalpur Road, Vadodara-390 005.{" "}
                  </td>
                  <td>0265-3501500 / 0265-2351355 (Ext.-508) </td>
                  <td>
                    <Link className="tableLink" to="#">
                      compliance@marfatia.net
                    </Link>
                  </td>
                  <td>10.00 AM TO 7.00 PM</td>
                </tr>
                <tr>
                  <td>CEO </td>
                  <td> Shreya Marfatia </td>
                  <td>
                    216, Glacier Complex, Jetalpur Road, Vadodara-390 005.{" "}
                  </td>
                  <td>0265-3501500 / 0265-2351355 (Ext.-514)</td>
                  <td>
                    <Link className="tableLink" to="#">
                      shreyanishil@yahoo.com
                    </Link>
                  </td>
                  <td>10.00 AM TO 7.00 PM</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <div style={{ fontSize: "16px" }}>
                In absence of response/complaint not addressed to your
                satisfaction, you may lodge a complaint with SEBI at
                <Link
                  to="In absence of response/complaint not addressed "
                  className="linkContact"
                >
                  {" "}
                  https://scores.gov.in/scores/Welcome.html
                </Link>
                Or Exchange at
                <Link
                  to="https://bsecrs.bseindia.com/ecomplaint/frmInvestorHome.aspx"
                  className="linkContact"
                >
                  https://bsecrs.bseindia.com/ecomplaint/frmInvestorHome.aspx
                </Link>
              </div>
              <p>
                Please quote your Service Ticket/Complaint Ref No. while raising
                your complaint at SEBI SCORES/Exchange portal
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* contact-style-two end */}
      {/* google-map-section */}
      <section className="google-map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3691.19531130448!2d73.16880217529278!3d22.30845202968073!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8afb052a7d9%3A0xe7ea93d6d56a1976!2sMarfatia%20Stock%20Broking%20PVT%20LTD.!5e0!3m2!1sen!2sin!4v1694583936586!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          title="addresh"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      {/* google-map-section end */}
    </React.Fragment>
  );
};

export default ContactUs;
