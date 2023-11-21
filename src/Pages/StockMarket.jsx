import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineRight,
} from "react-icons/ai";
import { BsArrowDownUp } from "react-icons/bs";
import { Link } from "react-router-dom";
import Categori from "./../Commponent/Categori";
import LatestNews from "./../Commponent/LatestNews";
import StockBackground from "./../assets/img/page-title.jpg";
import "./../css/elements-css/page-title.css";
import "./../css/elements-css/stock.css";

const StockMarket = () => {
  return (
    <React.Fragment>
      {/* hader section-----> */}

      {/* page-title */}
      <section className="page-title centred">
        <div
          className="bg-layer"
          style={{ backgroundImage: `url(${StockBackground})` }}
        />
        <div className="auto-container">
          <div className="content-box">
            <h1>Stock Market</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="/">Home</Link> <AiOutlineRight />{" "}
              </li>
              <li>Stock Market</li>
            </ul>
          </div>
        </div>
      </section>
      <iframe
        width="100%"
        height="70"
        allowtransparency="true"
        frameborder="0"
        title="market"
        scrolling="no"
        src=" http://jksec.acemf.co.in/HOME/Home_Ticker.aspx"
        // style="top: 5px; right: 0px;"
      ></iframe>
      {/* page-title end */}

      {/* content section ----> */}

      <Container>
        <h1>All Stocks</h1>
        <Row>
          <Col lg="3">
            <div className="mainDivStock">
              <h3 className="stockFilterTitle">Fillter By</h3>
              <h5>STOCK UNIVERSE</h5>
              <div>
                <Link className="stockLink" to="#">
                  NSE
                </Link>
              </div>
              <div>
                <Link className="stockLink" to="#">
                  BSE
                </Link>
              </div>
              <div>
                <Link className="stockLink" to="#">
                  Nifty 50
                </Link>
              </div>

              <div>
                <Link className="stockLink" to="#">
                  Sensex
                </Link>
              </div>

              <div>
                <Link className="stockLink" to="#">
                  Nifty Bank
                </Link>
              </div>
              <div>
                <Link className="stockLink" to="#">
                  Nifty Next 50
                </Link>
              </div>
              <div>
                <Link className="stockLink" to="#">
                  Nifty 100
                </Link>
              </div>
              <div>
                <Link className="stockLink" to="#">
                  BSE 100
                </Link>
              </div>
              <div>
                <Link className="stockLink" to="#">
                  Nifty Midcap 100
                </Link>
              </div>
            </div>
          </Col>
          <Col lg="9">
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>
                    <BsArrowDownUp />
                    Sr.No
                  </th>
                  <th>
                    <BsArrowDownUp />S Company Name
                  </th>
                  <th>
                    <BsArrowDownUp />
                    SLTP
                  </th>
                  <th>
                    <BsArrowDownUp />
                    SChg(%)
                  </th>
                  <th>
                    <BsArrowDownUp />
                    SHigh
                  </th>
                  <th>
                    <BsArrowDownUp />
                    SLow
                  </th>
                  <th>
                    <BsArrowDownUp />
                    SAll T/H
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <Link className="tbaleLink" to="#">
                      UltraTech Cem.
                    </Link>
                  </td>
                  <td>8470</td>
                  <td style={{ color: "red" }}>
                    -1.31
                    <AiOutlineArrowDown style={{ color: "red" }} />
                  </td>
                  <td> 8600</td>
                  <td> 8465.3</td>
                  <td>8600</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <Link className="tbaleLink" to="#">
                      Jio Financial
                    </Link>
                  </td>
                  <td>256.15 </td>
                  <td style={{ color: "green" }}>
                    1.07 <AiOutlineArrowUp style={{ color: "green" }} />{" "}
                  </td>
                  <td>260</td>
                  <td>253</td>
                  <td>266.95</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <Link className="tbaleLink" to="#">
                      M & M
                    </Link>
                  </td>
                  <td>1568.15</td>
                  <td style={{ color: "red" }}>
                    -0.52 <AiOutlineArrowDown style={{ color: "red" }} />
                  </td>
                  <td> 1584.1</td>
                  <td> 1565.25</td>
                  <td>1605.9</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    <Link className="tbaleLink" to="#">
                      Maruti Suzuki
                    </Link>
                  </td>
                  <td>10294.7</td>
                  <td style={{ color: "red" }}>
                    -0.65 <AiOutlineArrowDown style={{ color: "red" }} />
                  </td>
                  <td>10412.7</td>
                  <td>10282.05</td>
                  <td>10467.95</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    <Link className="tbaleLink" to="#">
                      Axis Bank
                    </Link>
                  </td>
                  <td>981.5</td>
                  <td style={{ color: "red" }}>
                    -0.08 <AiOutlineArrowDown style={{ color: "red" }} />
                  </td>
                  <td> 986.2 </td>
                  <td>10282.05</td>
                  <td>10467.95</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    <Link className="tbaleLink" to="#">
                      Dr Reddys Labs
                    </Link>
                  </td>
                  <td>5585.15</td>
                  <td style={{ color: "red" }}>
                    -1.31 <AiOutlineArrowDown style={{ color: "red" }} />
                  </td>
                  <td>5640 </td>
                  <td> 5560.55</td>
                  <td>5989.7</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>
                    <Link className="tbaleLink" to="#">
                      Larsen & Toubro
                    </Link>
                  </td>
                  <td>2731.9 </td>
                  <td style={{ color: "green" }}>
                    1.07 <AiOutlineArrowUp style={{ color: "green" }} />{" "}
                  </td>
                  <td> 2739</td>
                  <td>266.95</td>
                  <td>2766.8 </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>
                    <Link className="tbaleLink" to="#">
                      HDFC Bank
                    </Link>
                  </td>
                  <td>1571.95</td>
                  <td style={{ color: "red" }}>
                    -0.8 <AiOutlineArrowDown style={{ color: "red" }} />
                  </td>
                  <td> 1588.4 </td>
                  <td> 1570.6</td>
                  <td>1757.5</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>
                    <Link className="tbaleLink" to="#">
                      Adani Enterp.
                    </Link>
                  </td>
                  <td>2495 </td>
                  <td style={{ color: "green" }}>
                    1.07 <AiOutlineArrowUp style={{ color: "green" }} />{" "}
                  </td>
                  <td> 2501.4</td>
                  <td>2464</td>
                  <td>4190 </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>
                    <Link className="tbaleLink" to="#">
                      Kotak Mah. Bank
                    </Link>
                  </td>
                  <td>1770.75 </td>
                  <td style={{ color: "green" }}>
                    0.49 <AiOutlineArrowUp style={{ color: "green" }} />{" "}
                  </td>
                  <td> 1783</td>
                  <td>1763.1</td>
                  <td> 2253 </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Categori />
      <LatestNews />
    </React.Fragment>
  );
};

export default StockMarket;
