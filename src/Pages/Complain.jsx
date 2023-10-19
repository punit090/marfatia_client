import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import * as Yup from "yup";
import HaderContent2 from "../Commponent/HaderContent2";
import { BASE_API_URL } from "../helpers/apiHelper";

const Complain = () => {
  useEffect(() => {
    const scrollDelay = 100; // 100 ms delay
  
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 650);
    }, scrollDelay);
  
    return () => clearTimeout(timeoutId); // Cleanup the timeout when the component unmounts
  }, []);

  const [errorBanner, setErrorBanner] = useState("");
  const [successBanner, setSuccessBanner] = useState("");

  const addComplain = async (data) => {
    console.log("called postPI");

    try {
      const res = await axios.post(BASE_API_URL + "/api/complain", data);

      if (res.data) {
        setSuccessBanner(res.data.message);
        setTimeout(() => {
          setSuccessBanner("");
        }, 3000);
      }
      if (res.error) {
        setErrorBanner(res.error.message);
        setTimeout(() => {
          setErrorBanner("");
        }, 3000);
      }
    } catch (err) {
      setErrorBanner(err.message);
      setTimeout(() => {
        setErrorBanner("");
      }, 3000);
    }
  };

  const schema = Yup.object().shape({
    fName: Yup.string()
      .required("  First name is required")
      .min(2, " must be at least 2 characters")
      .max(25, " cannot exceed 25 characters")
      .matches(/^[A-Za-z]+$/, "only contain letters and spaces"),
    lName: Yup.string()
      .required(" Last name is required ")
      .min(2, "must be at least 2 characters")
      .max(25, "cannot exceed 25 characters")
      .matches(/^[A-Za-z]+$/, " only contain letters and spaces"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    contactNo: Yup.string()
      .required("Contact number is required")
      .matches(/^[0-9]+$/, "Contact number must contain only digits")
      .min(10, "Contact number must be at least 10 digits")
      .max(10, "Contact number cannot exceed 10 digits"),
    department: Yup.string().required(" This field  is  required "),
    address: Yup.string()
      .required(" Address is required")
      .min(5, "Address must be at least 5 characters")
      .max(100, "Address cannot exceed 100 characters"),
    complain: Yup.string()
      .required("This field is required ")
      .min(5, "must be at least 5 characters"),
  });
  const options = [
    { value: "", label: "select option" },

    { value: "Back Office", label: "Back Office" },

    { value: "DP ", label: "DP " },

    { value: "IT", label: "IT" },

    { value: "All Others", label: "All Others" },
  ];

  return (
    <React.Fragment>
      <HaderContent2 Title="Complain" SubTitle="Complain" />
      <Container>
      <Card class>ok</Card>


        <Formik
          validationSchema={schema}
          initialValues={{
            fName: "",
            lName: "",
            email: "",
            contactNo: "",
            department: "",
            address: "",
            complain: "",
          }}
          onSubmit={async (values, { resetForm }) => {
            // Alert the input values of the form that we filled
            await addComplain(values);
            resetForm();
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
                  <h1 className="formTitle">Complain</h1>
                  {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                  <Card style={{ padding: "20px" }}>
                    {successBanner ? (
                      <div class="alert alert-success" role="alert">
                        {successBanner}
                      </div>
                    ) : null}
                    {errorBanner ? (
                      <div class="alert alert-danger" role="alert">
                        {errorBanner}
                      </div>
                    ) : null}
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
                            id="fName"
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
                            id="lName"
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
                            name="contactNo"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.contactNo}
                            placeholder="Enter your contact number"
                            className="form-control inp_text"
                            id="contactNo"
                          />
                          {/* If validation is not passed show errors */}
                          <p className="error">
                            {errors.contactNo &&
                              touched.contactNo &&
                              errors.contactNo}
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
                        <label>Select department:</label>
                        <div className="">
                          <select
                            type="department"
                            name="department"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.department}
                            placeholder="Enter email"
                            className="form-control"
                          >
                            {options.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          <p className="error">
                            {errors.department &&
                              touched.department &&
                              errors.department}
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <div className="mainLableDiv">
                          <lable>Address</lable>
                          <textarea
                            type="text"
                            name="address"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.address}
                            placeholder="Enter your address"
                            className="form-control inp_text"
                            id="address"
                            rows={4}
                          />
                          {/* If validation is not passed show errors */}
                          <p className="error">
                            {errors.address &&
                              touched.address &&
                              errors.address}
                          </p>
                        </div>
                      </Col>
                      {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                      <Col lg="6">
                        <div className="mainLableDiv">
                          <lable>Your complain or query*</lable>
                          <textarea
                            name="complain"
                            placeholder="Type message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.complain}
                            rows={4}
                            className="contactTextAria"
                            id="complain"
                          />
                          {/* If validation is not passed show errors */}
                          <p className="error">
                            {errors.complain &&
                              touched.complain &&
                              errors.complain}
                          </p>
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

export default Complain;
