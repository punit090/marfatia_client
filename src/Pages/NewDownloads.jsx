import React ,{ useEffect, useState }from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import HaderContent2 from "../Commponent/HaderContent2";
import { storeDownloads, storeGalleryCategory } from "../state/action";
import axios from "axios";
import { BASE_API_URL } from "../helpers/apiHelper";
import { useDispatch, useSelector } from "react-redux";



const NewDownloads = () => {


  const mainFilePath = BASE_API_URL+"/api/downloads/"
  const [show, setShow] = useState(false);


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
          {arrayOfContents && arrayOfContents.length > 0 ? (
              arrayOfContents.map((item,key) => (
            
            <tr>
              <td>{key+1}</td>
              <td>
                {" "}
                  <p>{item.fileName}</p>
              </td>
              <td>
                {" "}
                  <a href={mainFilePath+item.filePath}>Download</a>
              </td>
            </tr>
            ))
            ) : (
              <div>loading plese wait ...</div>
            )}
          </tbody>
        </Table>
      </Container>
    </React.Fragment>
  );
};

export default NewDownloads;
