import React from "react";
/*import iconPlusMono from "../appuser/icon-plus-mono.svg";*/
import iconPlusMono from "./icon-plus-mono.svg";

import "./icon-plus-mono.css";

export const IconPlusMono = ({ className }) => {
  return (
    <img
      className={`icon-plus-mono ${className}`}
      alt="Icon plus mono"
      src={iconPlusMono}
    />
  );
};
