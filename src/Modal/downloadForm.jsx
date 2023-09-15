import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import "./../Modal/modal.css";
import { useDispatch, useSelector } from "react-redux";
import { storeDownloads, storeGalleryCategory } from "../state/action";
import axios from "axios";
import { BASE_API_URL } from "../helpers/apiHelper";

const DownloadForm = () => {

  const mainFilePath = BASE_API_URL+"/api/downloads/"
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const arrayOfContents = useSelector((state) => state.downloads);

  const dispatch = useDispatch();

  const fetchDownloads = () => {
    axios
      .get(BASE_API_URL+"/api/downloads/")
      .then((res) => {
       
        dispatch(storeDownloads(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect(() => {
    fetchDownloads();
    console.log(arrayOfContents)
  }, [dispatch]);


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
          {arrayOfContents && arrayOfContents.length > 0 ? (
              arrayOfContents.map((item,key) => (

            <Col lg="6">
              <a className="modalLable" href={mainFilePath+item.filePath}>
                { (key+1)+". "+item.fileName}
              </a>
              {/* <button onClick={downloadTxtFile}>Download</button>+ */}
            </Col>



                ))
            ) : (
              <div>loading plese wait ...</div>
            )}
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DownloadForm;
