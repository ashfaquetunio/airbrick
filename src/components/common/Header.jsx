import React, { useMemo, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { FiChevronDown } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({}) => {
  const { pathname } = useLocation();
  const [colorChange, setColorchange] = useState(false);
  const [selection, setSelection] = useState('Dashboard')

  const isHidden = useMemo(() => {
    return ["boardroom"].includes(pathname.split("/").at(-1));
  }, [pathname]);

  const navigate = useNavigate();

  const handleSelection = (entry, link) =>{
    setSelection(entry)
    navigate(link)
  }


  const changeNavbarColor = () => {
    if (window.scrollY >= 72) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <nav>
        <ul className={`${colorChange && "color-change"} db-header`}>
          {/* {
            !isHidden && <>
            
          <li className="ms-auto">
            <button className="button hide-sm">Wallet</button>
          </li>
            </>
          } */}
          <li className='ms-auto'>
            <div className="profile-dropdown">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <div className="small-icon me-2">
                    <img src="assets/images/profile.svg" alt="profile photo" />
                  </div>
                  <p className="para fw-bodl">{selection}</p>
                  <FiChevronDown />
                </Dropdown.Toggle>
                <Dropdown.Menu className="primary-dropdown-menu">
                  <Dropdown.Item onClick={() => {handleSelection('My Portfolio', 'portfolio')}}>My Portfolio</Dropdown.Item>
                  <Dropdown.Item onClick={() => {handleSelection('My NFTs', '/nft')}}>
                    My NFTs
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => {handleSelection('Referral', 'referrals')}}>
                    Referral
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => {handleSelection('Settings' ,'settings')}}>
                    Settings
                  </Dropdown.Item>
                  <Dropdown.Item >
                    Logout
                  </Dropdown.Item>
      
                  
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
