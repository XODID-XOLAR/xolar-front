import React from "react";
import ReactDOM from "react-dom/client";
/*import { Login } from "./test/Login/Login";*/
/*import { Add } from "./panelinfo/Add/Add";*/
/*import { Home } from "./panelhome/Home/Home";*/
/*import { Mypage } from "./Mypage/mypage";*/
/*import { Detail } from "./Product/Product";*/
/*import { Detail } from "./Earnmoney/earnmoney";*/
/*import { Detail } from "./Detail/Detail";*/
/*import { Detail } from "./Panelmain/panelmain";*/
import { Detail } from "./Panelmain/emergency/detail";
import "./index.css"; // 전체 스타일을 불러올 수 있습니다.

// 루트 노드를 가져와서 렌더링
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Detail />
  </React.StrictMode>
);
