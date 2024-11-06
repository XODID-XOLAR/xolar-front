import React from "react";

export const CloudBg1 = ({ className }) => {
  return (
    <svg
      className={`cloud-bg-1 ${className}`}
      fill="none"
      height="15"
      viewBox="0 0 21 15"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_bi_17_9245)">
        <path
          className="path"
          clipRule="evenodd"
          d="M15.1235 15H4.73547C4.73445 15 4.73343 15 4.73241 15C2.11877 15 0 12.8813 0 10.2676C0 8.23022 1.28751 6.49353 3.09329 5.82679C3.501 2.54218 6.30223 0 9.69721 0C12.52 0 14.9323 1.75748 15.8996 4.23791C18.5206 4.6129 20.5353 6.86696 20.5353 9.59158C20.5353 12.5786 18.1138 15 15.1268 15"
          fill="url(#paint0_radial_17_9245)"
          fillRule="evenodd"
        />
      </g>

      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="19.5634"
          id="filter0_bi_17_9245"
          width="25.0987"
          x="-2.2817"
          y="-2.2817"
        >
          <feFlood
            className="fe-flood"
            floodOpacity="0"
            result="BackgroundImageFix"
          />

          <feGaussianBlur
            className="fe-gaussian-blur"
            in="BackgroundImageFix"
            stdDeviation="1.125"
          />

          <feComposite
            className="fe-composite"
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_17_9245"
          />

          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_17_9245"
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

          <feComposite
            className="fe-composite"
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          />

          <feColorMatrix
            className="fe-color-matrix"
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.95 0"
          />

          <feBlend
            className="fe-blend"
            in2="shape"
            mode="normal"
            result="effect2_innerShadow_17_9245"
          />
        </filter>

        <radialGradient
          className="radial-gradient"
          cx="0"
          cy="0"
          gradientTransform="translate(8.07045 2.95775) rotate(90) scale(11.831 13.5034)"
          gradientUnits="userSpaceOnUse"
          id="paint0_radial_17_9245"
          r="1"
        >
          <stop className="stop" stopColor="#EFF6FF" stopOpacity="0.9" />

          <stop
            className="stop"
            offset="1"
            stopColor="#89C8F5"
            stopOpacity="0.8"
          />
        </radialGradient>
      </defs>
    </svg>
  );
};
