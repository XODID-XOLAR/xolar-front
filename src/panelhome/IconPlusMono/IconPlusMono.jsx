import React from "react";
import iconPlusMono from "./icon-plus-mono.svg";
import { useNavigate } from "react-router-dom";
import "./icon-plus-mono.css";

export const IconPlusMono = ({ className }) => {
  const navigate = useNavigate();

  const handleNavigateToAdd = () => {
    navigate("/Add");
  };

  return (
    <div onClick={handleNavigateToAdd} className={`icon-plus-mono-wrapper`}>
      <img
        className={`icon-plus-mono ${className}`}
        alt="Icon plus mono"
        src={iconPlusMono}
      />
    </div>
  );
};
