import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DashboardItem, FarmItem, FarmCard } from "../components";
import { farmItems, farmCards } from "../dummyData";

const Farm = () => {
  return (
    <>
      <div className="page-styles farm-page">
        <Container>
          <p className="section-title pb-1">Farm</p>
          <p className="large-para pb-3">Earn MyUSD by providing liquidity</p>
          <div className=" py-3">
            <Row className="g-lg-5 g-3">
              {farmItems.map((item) => {
                return (
                  <>
                    <Col md={6} lg={3}>
                      <FarmItem {...item} />
                    </Col>
                  </>
                );
              })}
            </Row>
          </div>
          <Row className="py-5">
            <Col md={5} className="muted-dark">
              <p className="large-para pb-3 fw-bold ">Liquidity Pool</p>
              <p className="normal-para pb-3 ">
                There are several advantages to providing liquidity to the
                MyUSD/BUSD liquidity pool. Some of the main benefits include:
              </p>
              <p className="normal-para pb-3">
                <span className="fw-bold">1 Passive income:</span> MyBricks
                incentivise market makers to provide liquidity through yield
                farming.
              </p>
              <p className="normal-para pb-3">
                <span className="fw-bold">2 Reduced volatility:</span> By
                providing liquidity to our pool, market makers help reduce the
                volatility of the assets being traded, in this case, MyUSD and
                BUSD.
              </p>
              <p className="normal-para pb-3">
                <span className="fw-bold">3 Reduced Risk:</span>Impermanent loss
                is always a risk when providing liquidity to a pool.
                Fortunately, that is greatly diminished when providing liquidity
                to a stablecoin pair.
              </p>
              <p className="normal-para pb-3">
                <span className="fw-bold">
                  <a href="#">Click here</a>
                </span>{" "}
                to learn how a Liquidity Pool works
              </p>
            </Col>
            <Col md={7}>
              <Row className="g-4">
                {farmCards.map((card, index) => {
                  return(
                    <Col lg={6}>
                    <FarmCard data={card} />
                  </Col>
                  )
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Farm;
