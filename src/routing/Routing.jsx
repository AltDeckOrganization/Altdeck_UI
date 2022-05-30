import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import AddNewToken from "../pages/addNewToken/AddNewToken";
import Home from "../pages/home/Home";
import PromotionPage from "../pages/promotionPage/PromotionPage";
import Tos from "../pages/tos/Tos";
import PrivacyPolicy from "../pages/privacyPolicy/PrivacyPolicy";
import TokenDetailPage from "../pages/home/coins/TokenDetailPage";
import Coin from "../pages/coin/Coin";

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/tokens/:id" element={<Coin />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/promotionPage" element={<PromotionPage />} />
        <Route path="/addNewToken" element={<AddNewToken />} />
        <Route path="/tos" element={<Tos />} />
        <Route exact path="/privacyPolicy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}
