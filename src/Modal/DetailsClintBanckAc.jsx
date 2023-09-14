import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import "./../Modal/modal.css";

const DetailsClintBanckAc = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <React.Fragment>
      <div>
        <Link to="#" onClick={handleShow}>
          DETAILS OF CLIENT BANK ACCOUNT
        </Link>
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Details of Client Bank Accounts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Bank Account No.</th>
                <th> IFSC</th>
                <th> Bank Account Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>"624505036431"</td>
                <td> ICIC0006245</td>
                <td> CLIENT BANK ACCOUNT</td>
              </tr>
              <tr>
                <td>"30615208817"</td>
                <td>SBIN0003321</td>
                <td>CLIENT BANK ACCOUNT</td>
              </tr>
              <tr>
                <td>"00330340000747"</td>
                <td>HDFC0000033</td>
                <td> CLIENT BANK ACCOUNT</td>
              </tr>
              <tr>
                <td>"04290340000127"</td>
                <td>HDFC0000429</td>
                <td> CLIENT BANK ACCOUNT</td>
              </tr>
              <tr>
                <td>"00330340000823"</td>
                <td>HDFC0000033</td>
                <td> CLIENT BANK ACCOUNT</td>
              </tr>
              <tr>
                <td>"00330340001402"</td>
                <td>HDFC0000033</td>
                <td> CLIENT BANK ACCOUNT</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default DetailsClintBanckAc;
