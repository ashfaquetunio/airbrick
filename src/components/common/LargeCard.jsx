import React from "react";
import { Col, Row } from "react-bootstrap";

const LargeCard = () => {
  return (
    <>
      <article className="large-card h-100">
        <Row className="h-100">
          <Col sm={6} className="middle-img">
            <div className="largest-icon">
                    <img src="assets/images/my_rocks_icon.svg" alt="" />
                </div>
            {/* <video width="320" height="240" mute autoPlay loop>
              <source src="assets/myRock.mp4" type="video/mp4"></source>
            </video> */}
          </Col>
          <Col sm={6}>
            <div className="large-card-body">
              <p className="large-para">ROCKS STAKED</p>
              <p className="main-title py-2">$0.000</p>
              <p className="normal-para">= $0.00</p>
              <button className="button my-2 mt-5">Approve ROCKS</button>
              <p className="normal-para muted-dark">Claim & Unstake</p>
            </div>
          </Col>
        </Row>
      </article>
    </>
  );
};

export default LargeCard;
