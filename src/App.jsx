import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Header, MainHeader, Sidebar } from "./components";
import ScrollToTop from "./helpers/scrollToTop";
import {
  BoardRoom,
  Dashboard,
  Farm,
  NFTMint,
  NFTPage,
  Referrals,
  WalletPage,
} from "./pages";
import BuyRedeem from "./pages/BuyRedeem";

function App() {
  const [show, setShow] = useState(false);


  return (
    <div className={`App ${show && 'sidebar-open'}`}>
      <ScrollToTop />
      <Header />
      {/* <MainHeader /> */}
      <Sidebar show={show} setShow={setShow}/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/portfolio" element={<WalletPage />} />
        <Route path="/nft" element={<NFTPage />} />
        <Route path="/farm" element={<Farm />} />
        <Route path="/boardroom" element={<BoardRoom />} />
        <Route path="/nftmint" element={<NFTMint />} />
        <Route path="/bond" element={<BuyRedeem />} />
        <Route path="/referrals" element={<Referrals />} />
      </Routes>
    </div>
  );
}

export default App;
