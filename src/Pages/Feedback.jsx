import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import * as Yup from "yup";
import HaderContent2 from "../Commponent/HaderContent2";
import axios from "axios";
import { BASE_API_URL } from "../helpers/apiHelper";


const Feedback = () => {
  const [errorBanner, setErrorBanner] = useState("");
  const [successBanner, setSuccessBanner] = useState("");

  const addFeedback = async (data) => {
    console.log("called postPI");
  
    try {
      const res = await axios.post(BASE_API_URL+"/api/feedback", data);
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


  const schema = Yup.object().shape({
    fName: Yup.string().required("First name  is a required "),
    lName: Yup.string().required(" Last name  is a required "),
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    contactNo: Yup.string().required("contactNo  is a required "),
    modeOfCommute: Yup.string().required(" required "),
    address: Yup.string().required(" Addres  is a required "),
    feedback: Yup.string().required(" Feedback  is a required "),
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
            fName: "",
            lName: "",
            email: "",
            contactNo: "",
            modeOfCommute: "",
            address: "",
            feedback: "",
          }}
          onSubmit={async (values,{ resetForm }) => {
            // Alert the input values of the form that we filled
            await addFeedback(values);
            resetForm()
            
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
                  {
                      successBanner?(
                        <div class="alert alert-success" role="alert">
                        {successBanner}
                      </div>
                      ):null
                    }
                    {
                      errorBanner?(
                        <div class="alert alert-danger" role="alert">
                        {errorBanner}
                      </div>
                      ):null
                    }
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
                        <label>Select an option:</label>
                        <div className="">
                          <select
                            type="modeOfCommute"
                            name="modeOfCommute"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.modeOfCommute}
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
                            {errors.modeOfCommute && touched.modeOfCommute && errors.modeOfCommute}
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
                           placeholder="Enter your contact number"
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
                          <lable>feedback*</lable>
                          <textarea
                            name="feedback"
                            placeholder="Type message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.feedback}
                            rows={4}
                            className="contactTextAria"
                            id="feedback"
                          />
                          {/* If validation is not passed show errors */}
                          <p className="error">
                            {errors.feedback &&
                              touched.feedback &&
                              errors.feedback}
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

export default Feedback;
