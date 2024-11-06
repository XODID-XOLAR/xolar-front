import React from "react";

export const Icon = ({ className }) => {
  return (
    <svg
      className={`icon ${className}`}
      fill="none"
      height="14"
      viewBox="0 0 14 14"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M7 0C10.866 0 14 3.134 14 7C14 10.866 10.866 14 7 14C3.134 14 0 10.866 0 7C0 3.134 3.134 0 7 0Z"
        fill="url(#paint0_radial_17_9207)"
      />

      <defs className="defs">
        <radialGradient
          className="radial-gradient"
          cx="0"
          cy="0"
          gradientTransform="translate(2.13889 1.75) rotate(43.0203) scale(16.2223)"
          gradientUnits="userSpaceOnUse"
          id="paint0_radial_17_9207"
          r="1"
        >
          <stop className="stop" offset="0.193671" stopColor="#FFE475" />

          <stop className="stop" offset="0.529275" stopColor="#FFB029" />

          <stop className="stop" offset="0.780467" stopColor="#FF9100" />
        </radialGradient>
      </defs>
    </svg>
  );
};
