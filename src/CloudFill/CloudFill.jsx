import React from "react";

export const CloudFill = ({ className }) => {
  return (
    <svg
      className={`cloud-fill ${className}`}
      fill="none"
      height="14"
      viewBox="0 0 14 14"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask className="mask" height="10" id="mask0_13_5202" maskUnits="userSpaceOnUse" width="12" x="1" y="2">
        <path
          className="path"
          clipRule="evenodd"
          d="M9.79514 11.3993H3.81606C3.81603 11.3993 3.816 11.3993 3.81597 11.3993C2.31253 11.3993 1.09375 10.1805 1.09375 8.67708C1.09375 7.5051 1.83436 6.50611 2.8731 6.12257C3.10763 4.23317 4.71898 2.77083 6.67188 2.77083C8.29563 2.77083 9.68326 3.78179 10.2397 5.20861C11.7473 5.42431 12.9062 6.72091 12.9062 8.28819C12.9062 10.0062 11.5137 11.399 9.79576 11.3993C9.79555 11.3993 9.79534 11.3993 9.79514 11.3993Z"
          fill="#C8E0FF"
          fillRule="evenodd"
        />
      </mask>
      <g className="g" mask="url(#mask0_13_5202)">
        <g className="g" filter="url(#filter0_bi_13_5202)">
          <path
            className="path"
            clipRule="evenodd"
            d="M9.79514 11.3993H3.81606C3.81603 11.3993 3.816 11.3993 3.81597 11.3993C2.31253 11.3993 1.09375 10.1805 1.09375 8.67708C1.09375 7.5051 1.83436 6.50611 2.8731 6.12257C3.10763 4.23317 4.71898 2.77083 6.67188 2.77083C8.29563 2.77083 9.68326 3.78179 10.2397 5.20861C11.7473 5.42431 12.9062 6.72091 12.9062 8.28819C12.9062 10.0062 11.5137 11.399 9.79576 11.3993C9.79555 11.3993 9.79534 11.3993 9.79514 11.3993Z"
            fill="url(#paint0_radial_13_5202)"
            fillOpacity="0.85"
            fillRule="evenodd"
          />
        </g>
        <mask className="mask" height="9" id="mask1_13_5202" maskUnits="userSpaceOnUse" width="9" x="2" y="2">
          <g className="g">
            <path
              className="path"
              clipRule="evenodd"
              d="M6.67189 10.4271C8.78611 10.4271 10.5 8.71317 10.5 6.59896C10.5 4.48474 8.78611 2.77083 6.67189 2.77083C4.719 2.77083 3.10765 4.23317 2.87312 6.12257C3.1669 6.0141 3.48453 5.95486 3.81599 5.95486C5.31943 5.95486 6.53821 7.17364 6.53821 8.67708C6.53821 9.31247 6.32053 9.89701 5.95567 10.3602C6.18769 10.4041 6.42711 10.4271 6.67189 10.4271Z"
              fill="#09244B"
              fillRule="evenodd"
            />
          </g>
        </mask>
        <g className="g" mask="url(#mask1_13_5202)">
          <g className="g" filter="url(#filter1_i_13_5202)">
            <circle className="circle" cx="6.67188" cy="6.59896" fill="url(#paint1_linear_13_5202)" r="3.82812" />
          </g>
        </g>
        <g className="g" filter="url(#filter2_i_13_5202)">
          <circle className="circle" cx="3.81597" cy="8.67708" fill="url(#paint2_linear_13_5202)" r="2.72222" />
        </g>
        <g className="g" opacity="0.7">
          <circle className="circle" cx="9.79514" cy="8.28819" fill="url(#paint3_linear_13_5202)" r="3.11111" />
        </g>
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="10.5729"
          id="filter0_bi_13_5202"
          width="13.7569"
          x="0.121528"
          y="1.79861"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur className="fe-gaussian-blur" in="BackgroundImageFix" stdDeviation="0.46875" />
          <feComposite
            className="fe-composite"
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_13_5202"
          />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_13_5202"
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
          <feOffset className="fe-offset" dy="0.632812" />
          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="0.632812" />
          <feComposite className="fe-composite" in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix
            className="fe-color-matrix"
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.95 0"
          />
          <feBlend className="fe-blend" in2="shape" mode="normal" result="effect2_innerShadow_13_5202" />
        </filter>
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="8.3125"
          id="filter1_i_13_5202"
          width="8.3125"
          x="2.84375"
          y="2.77083"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feBlend className="fe-blend" in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset className="fe-offset" dx="0.632812" dy="0.632812" />
          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="0.632812" />
          <feComposite className="fe-composite" in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix className="fe-color-matrix" type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
          <feBlend className="fe-blend" in2="shape" mode="normal" result="effect1_innerShadow_13_5202" />
        </filter>
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="6.04938"
          id="filter2_i_13_5202"
          width="6.04938"
          x="1.09375"
          y="5.95486"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feBlend className="fe-blend" in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset className="fe-offset" dx="0.583333" dy="0.583333" />
          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="0.583333" />
          <feComposite className="fe-composite" in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix className="fe-color-matrix" type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
          <feBlend className="fe-blend" in2="shape" mode="normal" result="effect1_innerShadow_13_5202" />
        </filter>
        <radialGradient
          className="radial-gradient"
          cx="0"
          cy="0"
          gradientTransform="translate(7.54688 5.60243) rotate(90) scale(4.92188 5.46875)"
          gradientUnits="userSpaceOnUse"
          id="paint0_radial_13_5202"
          r="1"
        >
          <stop className="stop" offset="0.239583" stopColor="#C8E0FF" />
          <stop className="stop" offset="1" stopColor="#89C8F5" />
        </radialGradient>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_13_5202"
          x1="6.7772"
          x2="6.7772"
          y1="2.87346"
          y2="10.5297"
        >
          <stop className="stop" stopColor="#7DAAE6" />
          <stop className="stop" offset="1" stopColor="#7DAAE5" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint2_linear_13_5202"
          x1="3.85648"
          x2="3.85648"
          y1="6.17541"
          y2="11.6199"
        >
          <stop className="stop" stopColor="#7DAAE6" />
          <stop className="stop" offset="1" stopColor="#7DAAE5" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint3_linear_13_5202"
          x1="13.1538"
          x2="9.55658"
          y1="8.67438"
          y2="8.47994"
        >
          <stop className="stop" stopColor="#96CDF6" />
          <stop className="stop" offset="1" stopColor="#96CDF6" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
