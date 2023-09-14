import { Formik } from "formik";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Select from "react-select";
import * as Yup from "yup";
import "./../Modal/modal.css";

function JobApllayModal() {
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
  const options = [
    { value: "Vadodara", label: "Vadodara" },
    { value: "Vadodara", label: "Vadodara" },
    { value: "Vadodara", label: "Vadodara" },
  ];
  return (
    <React.Fragment>
      <div>
        <Button
          style={{ border: "none" }}
          className="theme-btn-one"
          onClick={handleShow}
        >
          Apply Now <AiOutlineDoubleRight />
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send Application</Modal.Title>
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
                    <lable className="modalLable">Applying For*</lable>
                    <input
                      type="text"
                      name="applying"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.applying}
                      placeholder="Applying For"
                      className="form-control inp_text modalInput"
                      id="applying"
                    />
                    {/* If validation is not passed show errors */}
                    <p className="error">
                      {errors.applying && touched.applying && errors.applying}
                    </p>
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
                    <lable className="modalLable">Prefered Location *</lable>
                    <Select className=" modalInput" options={options} />
                    <lable className="modalLable">Select Resume *</lable>
                    <input
                      _ngcontent-serverapp-c52=""
                      type="file"
                      id="customFile"
                      class="form-control modalInput"
                      name="choiseFile"
                      value={values.choiseFile}
                    />
                    {/* If validation is not passed show errors */}
                    {/* <p className="error">
                      {errors.choiseFile &&
                        touched.choiseFile &&
                        errors.choiseFile}
                    </p> */}
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
}

export default JobApllayModal;
