import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FarmItem, FarmCard, TextBox, LargeCard, NFTCard } from "../components";
import { boardroomCard, boardroomItems } from "../dummyData";

const BoardRoom = ({ setWalletBtn }) => {
  return (
    <>
      <div className="page-styles farm-page">
        <Container>
          <p className="section-title pb-1">BoardRoom</p>
          <p className="large-para pb-3">Earn MyUSD by providing liquidity</p>
          <div className="py-3">
            <Row className="g-3 pb-4">
              {boardroomItems.map((item) => {
                return (
                  <>
                    <Col md={6} className="col-lg">
                      <FarmItem {...item} />
                    </Col>
                  </>
                );
              })}
            </Row>
          </div>
          <TextBox />
          <Row className="pt-5 g-3">
            <Col lg={7}>
              <LargeCard />
            </Col>
            <Col lg={5}>
              <FarmCard xDirection data={boardroomCard} />
            </Col>
          </Row>
          <div className="card-grid">
            <NFTCard />
            <NFTCard />
            <NFTCard />
            <NFTCard />
            <NFTCard />
            <NFTCard />
            <NFTCard />
            <NFTCard />
            <NFTCard />
            <NFTCard />
            <NFTCard />
            <NFTCard />
          </div>
        </Container>
      </div>
    </>
  );
};

export default BoardRoom;
