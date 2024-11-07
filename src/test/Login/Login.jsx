import React from "react";
import { useNavigate } from "react-router-dom";
import { Frame1171274902 } from "../Frame1171274902/Frame1171274902";
import { Frame1171274951 } from "../Frame1171274951/Frame1171274951";
import { Layer1 } from "../Layer1/Layer1";
import { Svg6 } from "../Svg6/Svg6";
import frame1171274902 from "./frame-1171274902.png";
import frame1171274950 from "./frame-1171274950.png";
import "./style.css";

export const Login = () => {
  const navigate = useNavigate();

  // 클릭 이벤트 핸들러
  const handleNavigateToHome = () => {
    navigate("/Home"); // "/Home" 경로로 이동
  };

  return (
    <div className="login-custom">
      <div className="custom-div">
        <div className="custom-frame">
          <Svg6 className="custom-svg" />
          <div className="custom-text-wrapper">Connect</div>
        </div>
        <div className="custom-frame-2">
          <p className="custom-p">Sign up with Social Networks</p>
          <div className="custom-frame-wrapper">
            <div className="custom-frame-3" onClick={handleNavigateToHome}>
              <img
                className="custom-frame-4"
                alt="Frame"
                src={frame1171274902}
              />
              <Frame1171274951 className="custom-frame-4" />
              <Frame1171274902 className="custom-frame-4" />
              <img
                className="custom-frame-4"
                alt="Frame"
                src={frame1171274950}
              />
            </div>
          </div>
        </div>
        <div className="custom-frame-5">
          <Layer1 className="custom-layer" />
          <div className="custom-text-wrapper-2">Xodid Solar</div>
        </div>
      </div>
    </div>
  );
};
