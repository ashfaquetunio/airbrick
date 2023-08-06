import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Sidebar = ({show, setShow}) => {

  return (
    <>
      <nav className={`${!show && 'close'} sidebar`}>
        <ul className="sidebar_inner">
          <li className="nav_item">
            <div className="nav_header">
              <img
                src="/assets/images/bricks_icon.svg"
                alt=""
                className=" small_icon"
              />
              <p className="sub-title">MyBricks</p>
            </div>
          </li>
          <li className="nav_item">
            <div className="sidebar_control">
              {show ? (
                <>
                  <button onClick={() => {setShow(false)}}>
                    <AiOutlineArrowLeft />
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => {setShow(true)}}>
                    <RxHamburgerMenu />
                  </button>
                </>
              )}
            </div>
          </li>
          <li className="nav_item">
            <NavLink to="/">
              <img
                src="/assets/images/dashboard_icon.svg"
                alt=""
                className=" small_icon"
              />
              <p className="sub-title">Dashboard</p>
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/farm">
              <img
                src="/assets/images/farm_icon.svg"
                alt=""
                className=" small_icon"
              />
              <p className="sub-title">Farm</p>
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/boardroom">
              <img
                src="/assets/images/boardroom_icon.svg"
                alt=""
                className=" small_icon"
              />
              <p className="sub-title">Boardroom</p>
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/nftmint">
              <img
                src="/assets/images/mint_icon.svg"
                alt=""
                className=" small_icon"
              />
              <p className="sub-title">NFT Mint</p>
            </NavLink>
          </li>

          <li className="nav_item">
            <NavLink to="/bond">
              <img
                src="/assets/images/bond_icon.svg"
                alt=""
                className=" small_icon"
              />
              <p className="sub-title">Bond</p>
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/referrals">
              <img
                src="/assets/images/referral_icon.svg"
                alt=""
                className=" small_icon"
              />
              <p className="sub-title">Referral</p>
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/portfolio">
              <img
                src="/assets/images/academy_icon.svg"
                alt=""
                className=" small_icon"
              />
              <p className="sub-title">My Portfolio</p>
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/">
              <img
                src="/assets/images/academy_icon.svg"
                alt=""
                className=" small_icon"
              />
              <p className="sub-title">My Academy</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
