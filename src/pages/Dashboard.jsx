import React, { useEffect } from "react";
import {
  DashboardItem,
  DashboardCard,
  Sidebar,
  DashboardChart,
  Announcement,
  Header,
} from "../components";
import { Col, Container, Row } from "react-bootstrap";
import { dashboardCards, dashboardItems } from "../dummyData";
import "./dashboard.css";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="page-styles dashboard">
        <div className="db-body">
          <Container>
            <p className="section-title">Dashboard</p>
            <div className="pt-3 pb-5 main-items">
              <Row>
                {dashboardItems.map((dashboardItem) => {
                  return (
                    <>
                      <Col sm={6} md={4} lg={3}>
                        <DashboardItem bgIcon data={dashboardItem} />
                      </Col>
                    </>
                  );
                })}
              </Row>
            </div>
            <p className="large-para pt-3 pb-5">
              Stake ROCKS and earn rewards in our seignorage stablecoin
              ecosystem.
            </p>
            <Row></Row>
            <Row className="g-3 pb-5">
              {dashboardCards.map((dashboardCard, index) => {
                return (
                  <>
                    <Col md={6} xl={4}>
                      <DashboardCard data={dashboardCard}/>
                    </Col>
                  </>
                );
              })}
            </Row>
            <DashboardChart />
            <p className="sub-title fw-bold resources">Resources</p>
            <ul className="pb-4">
              <li>
                <a href="#" className="normal-para blue">
                  AMA Videos
                </a>
              </li>
              <li>
                <a href="#" className="normal-para blue">
                  Knowledge Base
                </a>
              </li>
              <li>
                <a href="#" className="normal-para blue">
                  Learning Materials
                </a>
              </li>
            </ul>
            <Announcement />
          </Container>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
