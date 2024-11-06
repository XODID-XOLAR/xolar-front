import React from "react";

export const Percentage = ({ className }) => {
  return (
    <svg
      className={`percentage ${className}`}
      fill="none"
      height="8"
      viewBox="0 0 12 8"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M0.564224 7.38984L3.635 1.51292V1.42304H0V0.179753H5.15291V1.43802L2.14205 7.38984H0.564224Z"
        fill="white"
      />

      <path
        className="path"
        d="M9.24373 7.57458C8.72111 7.57458 8.25509 7.46307 7.84565 7.24004C7.43954 7.01702 7.11333 6.69413 6.867 6.27138C6.46422 5.65223 6.26283 4.84168 6.26283 3.83972C6.26283 2.6447 6.52913 1.70599 7.06173 1.02359C7.59433 0.341198 8.32999 0 9.26869 0C9.95442 0 10.5386 0.184746 11.0213 0.554238C11.5073 0.92373 11.8019 1.40973 11.9051 2.01223H10.4121C10.3422 1.77589 10.2024 1.58782 9.9927 1.44801C9.78632 1.3082 9.54165 1.2383 9.25871 1.2383C8.76605 1.2383 8.37825 1.45966 8.09531 1.90238C7.81569 2.34178 7.68421 2.93596 7.70085 3.68493H7.79073C7.95384 3.3454 8.19517 3.08409 8.51473 2.90101C8.83762 2.7146 9.20878 2.6214 9.6282 2.6214C10.3106 2.6214 10.8765 2.84775 11.3259 3.30046C11.7752 3.75317 11.9999 4.32405 11.9999 5.01311C11.9999 5.76208 11.742 6.37623 11.226 6.85557C10.71 7.33491 10.0493 7.57458 9.24373 7.57458ZM8.30003 5.9668C8.54968 6.21312 8.85926 6.33629 9.22875 6.33629C9.59824 6.33629 9.90782 6.21479 10.1575 5.97179C10.4105 5.72546 10.537 5.42088 10.537 5.05805C10.537 4.69188 10.4138 4.38897 10.1675 4.14929C9.92113 3.9063 9.60989 3.7848 9.23374 3.7848C8.85759 3.7848 8.54469 3.90463 8.29503 4.1443C8.04871 4.38397 7.92554 4.68356 7.92554 5.04307C7.92554 5.40923 8.05037 5.71714 8.30003 5.9668Z"
        fill="white"
      />
    </svg>
  );
};
