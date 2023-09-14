import { Formik } from "formik";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Select from "react-select";
import * as Yup from "yup";
import Footer from "../Commponent/Footer";
import Hader from "../Commponent/Hader";
import HaderContent2 from "../Commponent/HaderContent2";

const Feedback = () => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
    clinetCode: Yup.string().required("Clinet Code  is a required "),
    suggestion: Yup.string().required("Suggestion  is a required "),
    fName: Yup.string().required("First name  is a required "),
    contactNumber: Yup.string().required("Contact number  is a required "),
    lName: Yup.string().required(" Last name  is a required "),
    address: Yup.string().required(" Addres  is a required "),
  });
  const options = [
    { value: "Our Representative", label: "Our Representative" },
    { value: "Website", label: "Website" },
    { value: "Search Engine", label: "Search Engine" },
    { value: "Email", label: "Email" },
    { value: "News Paper", label: "News Paper" },
    { value: "Friend", label: "Friend" },
    { value: "Hoardings", label: "Hoardings" },
    { value: "Advertisement", label: "Advertisement" },
    { value: "Company", label: "Company" },
    { value: "Others", label: "Others" },
  ];
  return (
    <React.Fragment>
      <HaderContent2 Title="Feedback" SubTitle="Feedbcak" />
      <Container>
        <Formik
          validationSchema={schema}
          initialValues={{
            email: "",
            password: "",
            clinetCode: "",
            suggestion: "",
            fName: "",
            contactNumber: "",
            lName: "",
            address: "",
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
              <div className="form">
                {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                <form noValidate onSubmit={handleSubmit}>
                  <h1 className="formTitle">Feedback</h1>
                  {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                  <Card style={{ padding: "20px" }}>
                    <Row>
                      <Col lg="6">
                        <div className="mainLableDiv">
                          <lable>First Name*</lable>
                          <input
                            type="text"
                            name="fName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.fName}
                            placeholder="Enter your first name"
                            className="form-control inp_text"
                            id="clinetCode"
                          />
                          {/* If validation is not passed show errors */}
                          <p className="error">
                            {errors.fName && touched.fName && errors.fName}
                          </p>
                        </div>
                      </Col>
                      {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                      <Col lg="6">
                        <div className="mainLableDiv">
                          <lable>Last Name*</lable>
                          <input
                            type="text"
                            name="lName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lName}
                            placeholder="Enter your last name"
                            className="form-control"
                          />
                          {/* If validation is not passed show errors */}
                          <p className="error">
                            {errors.lName && touched.lName && errors.lName}
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <div className="mainLableDiv">
                          <lable>Contact Number:*</lable>
                          <input
                            type="text"
                            name="contactNumber"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.contactNumber}
                            placeholder="Enter your contact number"
                            className="form-control inp_text"
                            id="email"
                          />
                          {/* If validation is not passed show errors */}
                          <p className="error">
                            {errors.contactNumber &&
                              touched.contactNumber &&
                              errors.contactNumber}
                          </p>
                        </div>
                      </Col>
                      <Col lg="4">
                        <div className="mainLableDiv">
                          <lable>Email*</lable>
                          <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Enter email"
                            className="form-control"
                          />
                          {/* If validation is not passed show errors */}
                          <p className="error">
                            {errors.email && touched.email && errors.email}
                          </p>
                        </div>
                      </Col>
                      <Col lg="4">
                        <div className="mainLableDiv">
                          <lable>How did you know about this site? :*</lable>
                          <Select options={options} />
                          {/* If validation is not passed show errors */}
                          {/* <p className="error">
                            {errors.withdraw &&
                              touched.withdraw &&
                              errors.withdraw}
                          </p> */}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <div className="mainLableDiv">
                          <lable>Address</lable>
                          <textarea
                            name="address"
                            placeholder="Type message"
                            defaultValue={values.address}
                            rows={4}
                            className="contactTextAria"
                          />
                          {/* If validation is not passed show errors */}
                          {/* <p className="error">
                            {errors.address &&
                              touched.address &&
                              errors.address}
                          </p> */}
                        </div>
                      </Col>
                      {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                      <Col lg="6">
                        <div className="mainLableDiv">
                          <lable>Suggestions*</lable>
                          <textarea
                            name="suggestion"
                            placeholder="Type message"
                            defaultValue={values.suggestion}
                            rows={4}
                            className="contactTextAria"
                          />
                          {/* If validation is not passed show errors */}
                          {/* <p className="error">
                            {errors.suggestion &&
                              touched.suggestion &&
                              errors.suggestion}
                          </p> */}
                        </div>
                      </Col>
                    </Row>

                    {/* Click on submit button to submit the form */}
                    <div className="more-btn">
                      <Button
                        style={{ border: "none" }}
                        type="submit"
                        to="#"
                        className="theme-btn-one"
                      >
                        Submit
                      </Button>
                    </div>
                  </Card>
                </form>
              </div>
            </div>
          )}
        </Formik>
      </Container>
    </React.Fragment>
  );
};

export default Feedback;
