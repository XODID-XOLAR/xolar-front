import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Detail } from "./Panelmain/emergency/detail";
import { Detail as PanelMain } from "./Panelmain/panelmain";
import { Home } from "./panelhome/Home/Home";
import { Add } from "./panelinfo/Add/Add";
import { Mypage } from "./Mypage/mypage";
import { Detail as Product } from "./Product/Product";
import { Detail as Earnmoney } from "./Earnmoney/earnmoney";
import { Login } from "./test/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />{" "}
        <Route path="/panelmain/:panelId" element={<PanelMain />} />{" "}
        <Route path="/detail" element={<Detail />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Earnmoney" element={<Earnmoney />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
