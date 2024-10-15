import React from "react";

export const Icon1 = ({ className }) => {
  return (
    <svg
      className={`icon-1 ${className}`}
      fill="none"
      height="180"
      viewBox="0 0 302 180"
      width="302"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect className="rect" fill="#F7F7F7" height="180" rx="8" width="302" />
      <rect className="rect" fill="url(#pattern0_13_5312)" height="180" rx="8" width="302" />
      <rect className="rect" fill="url(#paint0_radial_13_5312)" height="180" rx="8" width="302" />
      <defs className="defs">
        <pattern className="pattern" height="1" id="pattern0_13_5312" patternContentUnits="objectBoundingBox" width="1">
          <use
            className="use"
            transform="matrix(0.000366569 0 0 0.000615021 0 -0.129782)"
            xlinkHref="#image0_13_5312"
          />
        </pattern>
        <radialGradient
          className="radial-gradient"
          cx="0"
          cy="0"
          gradientTransform="translate(151 90) rotate(90) scale(90 151)"
          gradientUnits="userSpaceOnUse"
          id="paint0_radial_13_5312"
          r="1"
        >
          <stop className="stop" offset="0.8" stopColor="white" stopOpacity="0" />
          <stop className="stop" offset="1" stopColor="white" />
        </radialGradient>
        <image
          className="image-2"
          height="2048"
          id="image0_13_5312"
          width="2728"
        />
      </defs>
    </svg>
  );
};