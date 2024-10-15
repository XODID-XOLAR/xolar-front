import React from "react";

export const Outline = ({ className }) => {
  return (
    <svg
      className={`outline ${className}`}
      fill="none"
      height="13"
      viewBox="0 0 22 13"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M0 4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V9C22 11.2091 20.2091 13 18 13H4C1.79086 13 0 11.2091 0 9V4Z"
        fill="#B2B2B2"
        fillRule="evenodd"
      />
    </svg>
  );
};
