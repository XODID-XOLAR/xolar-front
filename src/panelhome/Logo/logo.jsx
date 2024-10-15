import React from "react";
import iconPlusMono from "./icon-plus-mono.svg";
import layer1 from "./layer-1.svg";
import "./style.css";

export const Logo = () => {
  return (
    <div className="box">
      <div className="framee">
        <img className="layer" alt="Layer" src={layer1} />
        <img
          className="icon-plus-mono"
          alt="Icon plus mono"
          src={iconPlusMono}
        />
      </div>
    </div>
  );
};
