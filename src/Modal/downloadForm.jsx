import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import "./../Modal/modal.css";

const DownloadForm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div>
        <Link to="#" onClick={handleShow}>
          DOWNLOAD FORMS
        </Link>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Download Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg="6">
              <Link className="modalLable" to="#">
                1) CKYCKRA FORM
              </Link>
              {/* <button onClick={downloadTxtFile}>Download</button>+ */}
            </Col>
            <Col lg="6">
              {" "}
              <Link className="modalLable" to="#">
                {" "}
                2) DEMAT CLOSURE FORM
              </Link>
            </Col>
            <Col lg="6">
              <Link className="modalLable" to="#">
                3) DEMAT MODIFICATION FORM
              </Link>
            </Col>
            <Col lg="6">
              {" "}
              <Link className="modalLable" to="#">
                {" "}
                4) SELF DECLARATION-1 FORM
              </Link>
            </Col>
            <Col lg="6">
              <Link className="modalLable" to="#">
                5) TRADING ACCOUNT ACTIVATION FORM
              </Link>
            </Col>
            <Col lg="6">
              {" "}
              <Link className="modalLable" to="#">
                {" "}
                6) TRADING ACCOUNT CLOSURE FORM
              </Link>
            </Col>
            <Col lg="6">
              {" "}
              <Link className="modalLable" to="#">
                {" "}
                7) SLBM RIGHT & OBLIGATION
              </Link>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DownloadForm;
