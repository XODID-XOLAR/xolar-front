import React from "react";

export const BatteryEnd = ({ className }) => {
  return (
    <svg
      className={`battery-end ${className}`}
      fill="none"
      height="5"
      viewBox="0 0 2 5"
      width="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M0 0V5.00005C1.00592 4.57657 1.66006 3.59145 1.66006 2.50002C1.66006 1.4086 1.00592 0.423475 0 0Z"
        fill="#B2B2B2"
      />
    </svg>
  );
};
