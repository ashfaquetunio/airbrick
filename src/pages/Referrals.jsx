import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DashboardItem } from "../components";
import { referralItems } from "../dummyData";
import { RiSendPlane2Fill } from "react-icons/ri";
import { FiCopy } from "react-icons/fi";

const Referrals = () => {
  return (
    <>
      <div className="page-styles referrals-page">
        <Container>
          <div className="main-items pb-3">
            <Row>
              {referralItems.map((item) => {
                return (
                  <>
                    <Col sm={6} md={4} lg={3}>
                      <DashboardItem bgIcon data={item} />
                    </Col>
                  </>
                );
              })}
            </Row>
          </div>
          <Row className="reverse-column-sm">
            <Col md={6}>
              <p className="section-title">Referrals</p>
              <p className="large-para muted-dark w-75">
                Invite your friends to MyBricks 2.0 and earn $50 per NFT they
                purchase. <a href="#" className="underline">Click here</a> to know more!
              </p>
              <form action="" className="pt-5">
                <label htmlFor="label" className="normal-para muted-dark pb-2">
                  Spread the word and send your friends invitations to join
                  MyBricks 2.0
                </label>
                <div className="custom-input-group">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="custom-input"
                  />
                  <button className="custom-input-button middle-img">
                    <RiSendPlane2Fill />
                  </button>
                </div>
                <p className="large-para pt-5">Share the referral link</p>
                <p className="normal-para muted-dark">
                  You can also share your referral link by copying and sending
                  it or sharing it on your social media.
                </p>
              </form>
              <div className="flex-wrap-items shrink mt-2">
                <button className="custom-input input-radius d-flex justify-content-end align-items-center large-para">
                  <FiCopy />
                </button>
                <img
                  src="assets/images/facebook_icon.svg"
                  alt=""
                  className="small-icon"
                />
                <img
                  src="assets/images/twitter_icon.svg"
                  alt=""
                  className="small-icon"
                />
                <img
                  src="assets/images/linkedin_icon.svg"
                  alt=""
                  className="small-icon"
                />
              </div>
              <p className="large-para pt-5">Referral Users</p>
            </Col>
            <Col md={6}>
              <div className="middle-img">
                <img
                  src="assets/images/meeting_img.svg"
                  className="w-75"
                  alt=""
                />
              </div>
            </Col>
          </Row>
          <div className="scroll-x">
            <div className="custom-table">
              <table>
                <thead>
                  <tr>
                    <th className="normal-para">User</th>
                    <th className="normal-para">Referral Link</th>
                    <th className="normal-para">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <tr>
                    <td className="normal-para muted-dark"></td>
                    <td className="normal-para muted-dark"></td>
                    <td className="normal-para muted-dark"></td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Referrals;
