import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import "./../Modal/modal.css";

const KeyManagerialPersonnels = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      {" "}
      <div>
        <Link to="#" onClick={handleShow}>
          Key Managerial Personnels
        </Link>
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Key Managerial Personnels</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Name of the Individual</th>
                <th>Designation</th>
                <th> Contact Number</th>
                <th> Email ID</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td> Shreya Marfatia</td>
                <td> Chief Executive Officer / Managing Director</td>
                <td> 9925002650</td>
                <td>
                  {" "}
                  <Link to="#">marfatia_n@yahoo.co.in</Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td> Surendra Marfatia</td>
                <td> Chairman</td>
                <td> 9925002626</td>
                <td>
                  {" "}
                  <Link to="#">Surendram@marfatia.net</Link>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td> Chintan Majmundar</td>
                <td> Compliance Officer</td>
                <td> 9925002610</td>
                <td>
                  {" "}
                  <Link to="#">compliance@marfatia.net</Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default KeyManagerialPersonnels;
