import React from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Footer from "../Commponent/Footer";
import Hader from "../Commponent/Hader";
import HaderContent2 from "../Commponent/HaderContent2";

const NewDownloads = () => {
  return (
    <React.Fragment>
      <HaderContent2 Title="New Downloads" SubTitle="New Downloads" />
      <Container>
        <Table striped responsive>
          <thead>
            <tr>
              <th>Sr.no</th>
              <th> File</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                {" "}
                <Link to="#">
                  <p>NSE EXCHANGE MARGIN FILE</p>
                </Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <Link to="#">
                  <p> MSBPL_RemoteSupport</p>
                </Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </React.Fragment>
  );
};

export default NewDownloads;
