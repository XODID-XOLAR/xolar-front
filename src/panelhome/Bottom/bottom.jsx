import React from "react";
import { IconCoinMono } from "../IconCoinMono/IconCoinMono";
import { IconStackUpSquare } from "../IconStackUpSquare/IconStackUpSquare";
import iconHomeMono from "./icon-home-mono.svg";
import iconUserMono from "./icon-user-mono.svg";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="group">
        <div className="div">
          <div className="group-wrapper">
            <div className="group-2" />
          </div>
          <div className="frame">
            <div className="frame-wrapper">
              <div className="div-wrapper">
                <div className="frame-2">
                  <div className="group-3">
                    <div className="icon-home-mono-wrapper">
                      <img className="img" alt="Icon home mono" src={iconHomeMono} />
                    </div>
                  </div>
                  <div className="group-4">
                    <div className="frame-3">
                      <IconStackUpSquare className="design-component-instance-node" />
                    </div>
                  </div>
                  <div className="group-5">
                    <div className="frame-3">
                      <IconCoinMono className="design-component-instance-node" />
                    </div>
                  </div>
                  <div className="group-4">
                    <div className="icon-user-mono-wrapper">
                      <img className="img" alt="Icon user mono" src={iconUserMono} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
