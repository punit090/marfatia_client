import axios from "axios";
import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import * as Yup from "yup";
import HaderContent2 from "../Commponent/HaderContent2";
import { BASE_API_URL } from "../helpers/apiHelper";

const WithdrawlForm = () => {
  const [errorBanner, setErrorBanner] = useState("");
  const [successBanner, setSuccessBanner] = useState("");

  const addWidrow = async (data) => {
    console.log("called postPI");

    try {
      const res = await axios.post(BASE_API_URL + "/api/withdrow", data);
      console.log("res == >", res);

      if (res.data) {
        setSuccessBanner(res.data.message);
        setTimeout(() => {
          setSuccessBanner(""); // Clear the success banner message
        }, 3000);
      }
      if (res.error) {
        setErrorBanner(res.error.message);
        setTimeout(() => {
          setErrorBanner(""); // Clear the success banner message
        }, 3000);
      }
    } catch (err) {
      setErrorBanner(err.message); // Assuming err.message contains the error message
    }
  };

  // Creating schema
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),

    clinetCode: Yup.string().required("Clinet Code  is  required "),
    name: Yup.string().required("Name  is  required "),
    segment: Yup.string().required("Segment  is  required "),
    contactNumber: Yup.string().required("Contact number is required")
    .matches(/^[0-9]+$/, "Contact number must contain only digits")
    .min(10, "Contact number must be at least 10 digits")
    .max(10, "Contact number cannot exceed 10 digits"),
    panNo: Yup.string().required(" pan number  is  required "),
    withdraw: Yup.string().required(" withdraw amount  is  required "),
  });
  return (
    <React.Fragment>
      <HaderContent2 Title="Withdraw Funds" SubTitle="Withdraw Funds" />
      <Container>
        <Formik
          validationSchema={schema}
          initialValues={{
            email: "",
            password: "",
            clinetCode: "",
            name: "",
            segment: "",
            contactNumber: "",
            panNo: "",
            withdraw: "",
          }}
          onSubmit={async (values, { resetForm }) => {
            // Alert the input values of the form that we filled
            console.log(values);
            await addWidrow(values);
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
                  <h1 className="formTitle">Withdraw Funds From Marfatia</h1>
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
                          <label>Client Code*</label>
                          <input
                            type="text"
                            name="clinetCode"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.clinetCode}
                            placeholder="Client Code"
                            className="form-control inp_text"
                            id="clinetCode"
                          />
                          {/* If validation is not passed show errors */}
                          <p className="error">
                            {errors.clinetCode &&
                              touched.clinetCode &&
                              errors.clinetCode}
                          </p>
                        </div>
                      </Col>
                      {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                      <Col lg="6">
                        <div className="mainLableDiv">
                          <lable>Segment*</lable>
                          <input
                            type="text"
                            name="segment"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.segment}
                            placeholder="For Eg : NSE Cash,NSE FAO, BSE"
                            className="form-control"
                          />
                          {/* If validation is not passed show errors */}
                          <p className="error">
                            {errors.segment &&
                              touched.segment &&
                              errors.segment}
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <div className="mainLableDiv">
                          <lable>Name*</lable>
                          <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            placeholder="Enter your name"
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
                      <Col lg="6">
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
                          <lable>PAN No*</lable>
                          <input
                            type="text"
                            name="panNo"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.panNo}
                            placeholder="PAN NO"
                            className="form-control inp_text"
                            id="panNo"
                          />
                          {/* If validation is not passed show errors */}
                          <p className="error">
                            {errors.panNo && touched.panNo && errors.panNo}
                          </p>
                        </div>
                      </Col>
                      <Col lg="4">
                        <div className="mainLableDiv">
                          <lable>Withdraw Amount (in Rs.):*</lable>
                          <input
                            type="number"
                            name="withdraw"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.withdraw}
                            placeholder="Amount"
                            className="form-control inp_text"
                            id="withdraw"
                          />
                          {/* If validation is not passed show errors */}
                          <p className="error">
                            {errors.withdraw &&
                              touched.withdraw &&
                              errors.withdraw}
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

export default WithdrawlForm;
