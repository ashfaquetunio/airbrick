import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BuyCard } from "../components";

const NFTMint = () => {
  return (
    <>
      <div className="page-styles nft-mint-page">
        <Container>
          <p className="section-title center-xs">NFT MINT</p>
          <Row className="reverse-column-sm">
            <Col md={6} className="d-flex align-items-center justify-content-center">
              <Row className="w-100">
                <Col lg={9}>
                  <BuyCard />
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <img src="assets/images/rock_img.svg" className="w-100" alt="rock" />
            </Col>
          </Row>
          <p className="large-para pt-5 pt-md-3">Become a MyRocks NFT holder</p>
          <p className="normal-para">
            Once you become and MyRock Share (ROCKS) holder, You are now part of
            a very select group of investors with some pretty amazing perks.
            Let's dive in:
          </p>
          <p className="normal-para">
            1. Free Stay in UK (for now) with our NFT-based timeshare ownership.
          </p>
          <p className="normal-para">
            2. Returns of up to 60% APR from our protocol.
          </p>
          <p className="normal-para">
            3. No locking period. Exit your investment by selling your ROCKS in
            the open market.
          </p>
          <p className="normal-para">
            <span>
              <a href="#" className="fw-bold">
                Click here
              </a>
            </span>{" "}
            to learn how a Liquidity Pool works
          </p>
        </Container>
      </div>
    </>
  );
};

export default NFTMint;
