import axios from "axios";
import { Formik } from "formik";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { BASE_API_URL } from "../helpers/apiHelper";
import "./../Modal/modal.css";

const QuickContact = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [errorBanner, setErrorBanner] = useState("");
  const [successBanner, setSuccessBanner] = useState("");

  const addContect = async (data) => {
    console.log("called postPI");

    try {
      const res = await axios.post(BASE_API_URL + "/api/quick-connect", data);
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
    name: Yup.string().required(" Name is required !!!"),
    contactNo: Yup.string().required("Phone No. is required !!!"),
    subject: Yup.string().required("Subject is required !!!"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    message: Yup.string().required("Message is required !!!"),
  });

  return (
    <React.Fragment>
      {" "}
      <div>
        <Link to="#" onClick={handleShow}>
          Quick Contact Form
        </Link>
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title> Quick Contact Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {successBanner ? (
            <div class="alert alert-success" role="alert">
              {successBanner}
            </div>
          ) : null}
          {errorBanner ? (
            <div class="alert alert-danger" role="alert">
              {errorBanner}
            </div>
          ) : null}{" "}
          {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
          <Formik
            validationSchema={schema}
            initialValues={{
              name: "",
              email: "",
              contactNo: "",
              subject: "",
              message: "",
            }}
            onSubmit={async (values, { resetForm }) => {
              // Alert the input values of the form that we filled
              console.log(values);
              await addContect(values);
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
                <div>
                  {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                  <form noValidate onSubmit={handleSubmit}>
                    {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                    <lable className="modalLable">Name *</lable>
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      placeholder="Enter your name"
                      className="form-control modalInput"
                    />
                    {/* If validation is not passed show errors */}
                    <p className="error">
                      {errors.name && touched.name && errors.name}
                    </p>
                    {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                    <lable className="modalLable">Phone Number *</lable>
                    <input
                      type="text"
                      name="contactNo"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.contactNo}
                      placeholder="Enter your number"
                      className="form-control inp_text modalInput"
                      id="contactNo"
                    />
                    {/* If validation is not passed show errors */}
                    <p className="error">
                      {errors.contactNo &&
                        touched.contactNo &&
                        errors.contactNo}
                    </p>
                    {/* <lable className="modalLable">Prefered Location *</lable>
                    <Select className=" modalInput" options={options} /> */}
                    <label className="modalLable">Email *</label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="Enter email id / username"
                      className="form-control inp_text modalInput"
                      id="email"
                    />
                    {/* If validation is not passed show errors */}
                    <p className="error">
                      {errors.email && touched.email && errors.email}
                    </p>
                    <lable className="modalLable">
                      Subject (Let us know your topic of interest) *
                    </lable>
                    <select
                      class="form-select"
                      name="subject"
                      type="subject"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.subject}
                      placeholder="Enter email id / username"
                      className="form-control inp_text modalInput"
                      id="subject"
                    >
                      <option value="">-- Select Subject --</option>
                      <option value="Currency">Currency</option>
                      <option value="Depository Services">
                        Depository Services
                      </option>
                      <option value="Mobile Trading">Mobile Trading</option>
                      <option value="Portfolio Management Services">
                        Portfolio Management Services
                      </option>
                      <option value="Premium Client Services">
                        Premium Client Services
                      </option>
                      <option value="Mutual Funds">Mutual Funds</option>
                      <option value="Digital Library">Digital Library</option>
                      <option value="NRI Desk">NRI Desk</option>
                      <option value="Dial N Trade">Dial N Trade</option>
                      <option value="SLBM [Security Landing & Borrowing Merchandise]">
                        SLBM [Security Landing & Borrowing Merchandise]
                      </option>
                    </select>
                    <p className="error">
                      {errors.subject && touched.subject && errors.subject}
                    </p>

                    <lable className="modalLable">Message</lable>
                    <textarea
                      name="message"
                      placeholder="Type message"
                      defaultValue={values.message}
                      rows={4}
                      className="contactTextAria modalInput"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                      id="message"
                    />
                    {/* If validation is not passed show errors */}
                    {/* <p className="error">
                      {errors.message && touched.message && errors.message}
                    </p> */}
                    {/* Click on submit button to submit the form */}

                    <button
                      className="theme-btn theme-btn-one"
                      type="submit"
                      name="submit-form"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default QuickContact;
