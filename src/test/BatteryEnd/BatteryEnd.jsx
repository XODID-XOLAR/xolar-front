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
        d="M0 0V5.00001C1.00592 4.57654 1.66005 3.59143 1.66005 2.50001C1.66005 1.40859 1.00592 0.423472 0 0Z"
        fill="#808080"
      />
    </svg>
  );
};
