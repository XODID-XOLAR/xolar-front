import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconSirenMono = ({
  union = "https://c.animaapp.com/mh5TR1Fl/img/union.svg",
}) => {
  return (
    <div className="icon-siren-mono">
      <img className="union" alt="Union" src={union} />
    </div>
  );
};

IconSirenMono.propTypes = {
  union: PropTypes.string,
};
