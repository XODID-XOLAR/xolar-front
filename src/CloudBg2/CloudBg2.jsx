import React from "react";

export const CloudBg2 = ({ className }) => {
  return (
    <svg
      className={`cloud-bg-2 ${className}`}
      fill="none"
      height="15"
      viewBox="0 0 21 15"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_bi_13_5253)">
        <path
          className="path"
          clipRule="evenodd"
          d="M4.76073 14.9999C4.75128 14.9999 4.74183 15 4.73237 15C2.11875 15 0 12.8812 0 10.2676C0 8.2302 1.28749 6.49352 3.09326 5.82678C3.50095 2.54218 6.30216 0 9.69713 0C12.5199 0 14.9322 1.75746 15.8995 4.23787C18.5204 4.61286 20.5351 6.8669 20.5351 9.5915C20.5351 12.5785 18.1137 14.9999 15.1267 14.9999C15.1195 14.9999 15.1124 14.9999 15.1052 14.9999H4.76073Z"
          fill="url(#paint0_radial_13_5253)"
          fillOpacity="0.8"
          fillRule="evenodd"
        />
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="19.5634"
          id="filter0_bi_13_5253"
          width="25.0985"
          x="-2.28168"
          y="-2.28168"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur className="fe-gaussian-blur" in="BackgroundImageFix" stdDeviation="1.125" />
          <feComposite
            className="fe-composite"
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_13_5253"
          />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_13_5253"
            mode="normal"
            result="shape"
          />
          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset className="fe-offset" dx="0.333333" dy="1.12667" />
          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="1.125" />
          <feComposite className="fe-composite" in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix
            className="fe-color-matrix"
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.95 0"
          />
          <feBlend className="fe-blend" in2="shape" mode="normal" result="effect2_innerShadow_13_5253" />
        </filter>
        <radialGradient
          className="radial-gradient"
          cx="0"
          cy="0"
          gradientTransform="translate(8.07038 2.95773) rotate(90) scale(11.8309 13.5033)"
          gradientUnits="userSpaceOnUse"
          id="paint0_radial_13_5253"
          r="1"
        >
          <stop className="stop" stopColor="#EFF6FF" />
          <stop className="stop" offset="1" stopColor="#89C8F5" />
        </radialGradient>
      </defs>
    </svg>
  );
};
