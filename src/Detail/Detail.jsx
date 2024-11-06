import React from "react";

import Kwh from "./1-129-kwh.svg";
import Kwh1 from "./603-kwh.svg";
import backgorund from "./backgorund.png";
import image3 from "./image-3.svg";
import "./style.css";

export const Detail = () => {
  return (
    <div className="detail">
      <div className="weather-info">
        <h2>오늘 날씨</h2>
        <div className="weather-forecast">
          <div className="forecast-item">
            <span>05:00</span>
            <span>23°C</span>
          </div>
          <div className="forecast-item">
            <span>06:00</span>
            <span>20°C</span>
          </div>
          <div className="forecast-item">
            <span>07:00</span>
            <span>17°C</span>
          </div>
          <div className="forecast-item">
            <span>08:00</span>
            <span>16°C</span>
          </div>
          <div className="forecast-item">
            <span>09:00</span>
            <span>14°C</span>
          </div>
        </div>
        <p>어제 보다 1.2° 낮아요 / 구름 많음</p>
      </div>
      <div className="solar-panel">
        <img src={image3} alt="Solar Panel" />
      </div>
      <div className="energy-cost">
        <h3>전력 / 요금</h3>
        <div className="cost-details">
          <div>
            <span>생산량: </span>
            <span>{Kwh} kWh</span>
          </div>
          <div>
            <span>예상 요금: </span>
            <span>60,300</span>
          </div>
        </div>
      </div>
      <img className="backgorund" alt="Background" src={backgorund} />
    </div>
  );
};
