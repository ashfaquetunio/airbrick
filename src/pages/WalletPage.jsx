import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { WalletCard, WalletChart } from "../components";
import "./walletpage.css";
import { PureComponent } from "react";
import { PieChart, Pie, Legend, ResponsiveContainer } from "recharts";
import { BsFillTriangleFill } from "react-icons/bs";

const data = [
  { name: "Group A", value: 400, fill: "#0088FE" },
  { name: "Group B", value: 300, fill: "#00C49F" },
  { name: "Group C", value: 300, fill: "#FFBB28" },
  { name: "Group D", value: 200, fill: "#FF8042" },
];

const Wallet = () => {
  return (
    <>
      <div className="page-styles wallet-page">
        <Container>
          <Row className="reverse-column-xs">
            <Col sm={6}>
              <p className="normal-para">Portfolio Value</p>
              <p className="larger-para fw-bold">$12,216.72</p>
              <p className="normal-para muted-dark pt-4  pb-2">Hour change</p>
              <div className="flex-wrap-items shrink pb-sm-0 pb-5">
                <BsFillTriangleFill className="primary" />
                <p className="larger-para fw-bold">
                  $388.15<span className="small-para">(3.29%)</span>
                </p>
              </div>
            </Col>
            <Col sm={6}>
              <div className="wallet-donut-chart d-flex py-4 py-sm-0 pe-sm-5">
                <PieChart width={180} height={180} className="me-auto ms-auto me-sm-0">
                  <text
                    x={"50%"}
                    y={80}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="large-para fw-bold blue"
                  >
                    5
                  </text>
                  <text
                    x={"50%"}
                    y={100}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="normal-para blue"
                  >
                    Assets
                  </text>
                  {/* <Legend
                    height={36}
                    iconType="circle"
                    layout="vertical"
                    verticalAlign="middle"
                    iconSize={10}
                    padding={5}
                  /> */}
                  <Pie
                    data={data}
                    cx={"50%"}
                    cy={"50%"}
                    innerRadius="85%"
                    outerRadius="100%"
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                  ></Pie>
                </PieChart>
              </div>
            </Col>
          </Row>

          <WalletChart />

          <div className="flex-wrap-items shrink py-3">
            <button className="normal-para fw-semibold">Overview</button>
            <button className="normal-para muted fw-semibold">
              Recent Transactions
            </button>
          </div>
          <div className="scroll-x">
            <div className="custom-table alternate-theme">
              <table>
                <thead>
                  <tr>
                    <th className="normal-para muted">Asset</th>
                    <th className="normal-para muted">Amount</th>
                    <th className="normal-para muted">Current USD</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="normal-para">
                      <div className="flex-wrap-items shrink">
                        <img
                          src="assets/images/bitcoin_icon.svg"
                          alt=""
                          className="small-icon"
                        />
                        <span>Bitcoin (BTC)</span>
                      </div>
                    </td>
                    <td className="normal-para">0.979472</td>
                    <td className="normal-para">$10,00,000</td>
                  </tr>
                  <tr>
                    <td className="normal-para">
                      <div className="flex-wrap-items shrink">
                        <img
                          src="assets/images/etherium_icon.svg"
                          alt=""
                          className="small-icon"
                        />
                        <span>Ehtereum (ETH)</span>
                      </div>
                    </td>
                    <td className="normal-para">0.979472</td>
                    <td className="normal-para">$10,00,000</td>
                  </tr>
                  <tr>
                    <td className="normal-para">
                      <div className="flex-wrap-items shrink">
                        <img
                          src="assets/images/solana_icon.svg"
                          alt=""
                          className="small-icon"
                        />
                        <span>Solana (SOL)</span>
                      </div>
                    </td>
                    <td className="normal-para">0.979472</td>
                    <td className="normal-para">$10,00,000</td>
                  </tr>
                  <tr>
                    <td className="normal-para">
                      <div className="flex-wrap-items shrink">
                        <img
                          src="assets/images/tether_icon.svg"
                          alt=""
                          className="small-icon"
                        />
                        <span>Tether (USDT)</span>
                      </div>
                    </td>
                    <td className="normal-para">0.979472</td>
                    <td className="normal-para">$10,00,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </div>
      {/* <div className="wallet-page">
        <Container>
          <div className="flex-wrap-items">
            <button className="sub-title">Your Wallet</button>
            <button className="text-item">GBP</button>
            <button className="text-item blue">Transaction History</button>
          </div>
          <p className="norma-para grey pb-3">xafasfasfaskahsdojsahdasohfa</p>
            <Row>
              <Col md={6}>
                <WalletCard />
              </Col>
              <Col md={6}>
                {" "}
                <WalletCard />
              </Col>
              <Col md={6}>
                {" "}
                <WalletCard />
              </Col>
            </Row>
        </Container>
      </div> */}
    </>
  );
};

export default Wallet;
