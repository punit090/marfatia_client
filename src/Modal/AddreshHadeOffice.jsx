import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import "./../Modal/modal.css";

const AddreshHadeOffice = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      {" "}
      <div>
        <Link to="#" onClick={handleShow}>
          Registered Address of Head Office and Branches
        </Link>
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            Registered Address of Head Office and Branches
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Stock Brocker Name</th>
                <th>Registration Number</th>
                <th>Registered Address</th>
                <th>Branch Address</th>
                <th> Contact Number</th>
                <th>Email ID</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Marfatia Stock Broking Pvt. Ltd</td>
                <td> INZ000215330</td>
                <td> 216, Glacier complex, Jetalpur Road, Vadodara - 390005</td>
                <td> Head/Registered Office</td>
                <td>9925002650</td>

                <td>
                  <Link to="#"> customercare@marfatia.net</Link>
                </td>
              </tr>
              <tr>
                <td>Marfatia Stock Broking Pvt. Ltd.</td>
                <td> INZ000215330</td>
                <td>
                  {" "}
                  3-4, First Floor, Shraddha Avenue, New Sama road,
                  Vadodara-390002
                </td>
                <td> Branch</td>
                <td> 9825244678</td>
                <td>
                  <Link to="#"> branch_chhani@marfatia.net</Link>
                </td>
              </tr>

              <tr>
                <td>Marfatia Stock Broking Pvt. Ltd</td>
                <td> INZ000215330</td>
                <td>108- Lakulesh Avenue, Nizampura, Vadodara-390007</td>
                <td> Branch</td>
                <td>9825244678</td>

                <td>
                  <Link to="#"> branch_chhani@marfatia.net</Link>
                </td>
              </tr>
              <tr>
                <td>Marfatia Stock Broking Pvt. Ltd</td>
                <td> INZ000215330</td>
                <td>S 6-7 , Shyam super Mall, Modhera Road, Mehsana-384001</td>
                <td> Branch</td>
                <td>99250026476</td>

                <td>
                  <Link to="#"> branch_mehsana@marfatia.net</Link>
                </td>
              </tr>
              <tr>
                <td>Marfatia Stock Broking Pvt. Ltd</td>
                <td> INZ000215330</td>
                <td>
                  {" "}
                  208-SNS Business park, old university road, Udna Magdala,
                  Surat- 395007
                </td>
                <td> Branch</td>
                <td>90990304803</td>

                <td>
                  <Link to="#"> branch_surat@marfatia.net</Link>
                </td>
              </tr>
              <tr>
                <td>Marfatia Stock Broking Pvt. Ltd</td>
                <td> INZ000215330</td>
                <td>
                  13-Priyadarshni, Aryabhatt society, Makapura, Vadodara -390010
                </td>
                <td> Branch</td>
                <td>9925003381</td>

                <td>
                  <Link to="#"> branch_makarpura@marfatia.net</Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddreshHadeOffice;
