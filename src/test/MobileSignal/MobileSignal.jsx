import React from "react";

export const MobileSignal = ({ className }) => {
  return (
    <svg
      className={`mobile-signal ${className}`}
      fill="none"
      height="12"
      viewBox="0 0 18 12"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z"
        fill="white"
      />
      <path
        className="path"
        d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447716 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z"
        fill="white"
      />
      <path
        className="path"
        d="M5 6.50001C5 5.94772 5.44772 5.5 6 5.5H7.00001C7.55229 5.5 8.00001 5.94772 8.00001 6.50001V11C8.00001 11.5523 7.55229 12 7.00001 12H6C5.44772 12 5 11.5523 5 11V6.50001Z"
        fill="white"
      />
      <path
        className="path"
        d="M0 9.00001C0 8.44772 0.447716 8.00001 1 8.00001H2C2.55229 8.00001 3 8.44772 3 9.00001V11C3 11.5523 2.55229 12 2 12H1C0.447716 12 0 11.5523 0 11V9.00001Z"
        fill="white"
      />
    </svg>
  );
};
