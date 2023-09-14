import { Formik } from "formik";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "./../Modal/modal.css";

const QuickContact = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
    applying: Yup.string().required("required !!!"),
    name: Yup.string().required("Name is must be required !!!"),
    mobileNumber: Yup.string().required("number is must be required !!!"),
    choiseFile: Yup.string().required("required !!!"),
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
          {" "}
          {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
          <Formik
            validationSchema={schema}
            initialValues={{
              email: "",
              password: "",
              applying: "",
              name: "",
              mobileNumber: "",
              choiseFile: "",
              message: "",
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
                      name="mobileNumber"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mobileNumber}
                      placeholder="Enter your number"
                      className="form-control inp_text modalInput"
                      id="mobileNumber"
                    />
                    {/* If validation is not passed show errors */}
                    <p className="error">
                      {errors.mobileNumber &&
                        touched.mobileNumber &&
                        errors.mobileNumber}
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
                    <select class="form-select" id="sel1" name="sellist1">
                      <option>-- Select Subject --</option>
                      <option>Currency</option>
                      <option>Depository Services</option>
                      <option>Mobile Trading</option>
                      <option>Portfolio Management Services</option>
                      <option>Premium Client Services</option>
                      <option>Mutual Fundss</option>
                      <option>Digital Library</option>
                      <option>NRI Desk</option>
                      <option>Dial N Trade</option>
                      <option>
                        SLBM [Security Landing & Borrowing Merchandise]
                      </option>
                    </select>
                    <lable className="modalLable">Message</lable>
                    <textarea
                      name="message"
                      placeholder="Type message"
                      defaultValue={values.message}
                      rows={4}
                      className="contactTextAria modalInput"
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
