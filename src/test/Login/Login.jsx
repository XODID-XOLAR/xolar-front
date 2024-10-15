import React from "react";
import { Frame1171274902 } from "../Frame1171274902/Frame1171274902";
import { Frame1171274951 } from "../Frame1171274951/Frame1171274951";
import { Layer1 } from "../Layer1/Layer1";
import { Svg6 } from "../Svg6/Svg6";
import frame1171274902 from "./frame-1171274902.png";
import frame1171274950 from "./frame-1171274950.png";
import "./style.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="div">
        <div className="group">
          <div className="group-2" />
        </div>
        <div className="frame">
          <Svg6 className="svg" />
          <div className="text-wrapper">Connect</div>
        </div>
        <div className="frame-2">
          <p className="p">Sign up with Social Networks</p>
          <div className="frame-wrapper">
            <div className="frame-3">
              <img className="frame-4" alt="Frame" src={frame1171274902} />
              <Frame1171274951 className="frame-4" />
              <Frame1171274902 className="frame-4" />
              <img className="frame-4" alt="Frame" src={frame1171274950} />
            </div>
          </div>
        </div>
        <div className="frame-5">
          <Layer1 className="layer" />
          <div className="text-wrapper-2">Xodid Solar</div>
        </div>
      </div>
    </div>
  );
};
