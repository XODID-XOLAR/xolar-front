import React from "react";
import { CloudColor } from "../CloudColor/CloudColor";
import { CloudFill } from "../CloudFill/CloudFill";
import { CloudFill1 } from "../CloudFill1/CloudFill1";
import { Icon } from "../Icon/Icon";
import { Icon1 } from "../Icon1/Icon1";
import { IconArrowLeftSmallMono } from "../IconArrowLeftSmallMono/IconArrowLeftSmallMono";
import { IconComponentNode } from "../IconComponentNode/IconComponentNode";
import { IconWarningTriangleMono } from "../IconWarningTriangleMono/IconWarningTriangleMono";
import { OneHundredAndTwelveThousandNineHundred } from "../OneHundredAndTwelveThousandNineHundred/OneHundredAndTwelveThousandNineHundred";
import { OneThousandOneHundredAndTwentyNineKwh } from "../OneThousandOneHundredAndTwentyNineKwh/OneThousandOneHundredAndTwentyNineKwh";
import { Percentage } from "../Percentage/Percentage";
import { SixHundredAndThreeKwh } from "../SixHundredAndThreeKwh/SixHundredAndThreeKwh";
import { SixtyThousandThreeHundred } from "../SixtyThousandThreeHundred/SixtyThousandThreeHundred";
import { SunColor } from "../SunColor/SunColor";
import backgorund from "./backgorund.png";
import group1171274906 from "./group-1171274906.png";
import highlight2 from "./highlight-2.png";
import highlight3 from "./highlight-3.png";
import highlight from "./highlight.png";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Detail = () => {
  const navigate = useNavigate();
  const { panelId } = useParams(); // panelId 파라미터 가져오기
  const [panelData, setPanelData] = useState(null);

  const handleEmergencyClick = () => {
    navigate("/detail");
  };

  const handleBackToHomeClick = () => {
    navigate("/Home"); // Navigate to Home page
  };

  // Fetch panel data based on the panelId
  useEffect(() => {
    const fetchPanelData = async () => {
      try {
        const response = await fetch(
          `https://api.xolar.co.kr/solar-panels/${panelId}`
        );
        const data = await response.json();
        setPanelData(data);
      } catch (error) {
        console.error("Failed to fetch panel data:", error);
      }
    };
    fetchPanelData();
  }, [panelId]);

  useEffect(() => {
    const fetchPanelData = async () => {
      try {
        const response = await fetch(
          `https://api.xolar.co.kr/solar-panels/${panelId}`
        );
        const data = await response.json();
        console.log("Fetched Panel Data:", data); // Log the entire response
        setPanelData(data);
      } catch (error) {
        console.error("Failed to fetch panel data:", error);
      }
    };
    fetchPanelData();
  }, [panelId]);

  if (!panelData) {
    return <div>Loading...</div>; // Show loading message while data is being fetched
  }

  return (
    <div className="panelmain">
      <div className="panelmain-div">
        <div className="panelmain-overlap">
          <div className="panelmain-frame-3">
            <div className="panelmain-frame-4">
              <div className="panelmain-frame-wrapper">
                <div className="panelmain-div-wrapper">
                  <div className="panelmain-frame-5">
                    <div className="panelmain-frame-6">
                      <div className="panelmain-text-wrapper">오늘 날씨</div>
                      <div className="panelmain-icon-arrow-right-wrapper">
                        <img
                          className="panelmain-icon-arrow-right"
                          alt="Icon arrow right"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panelmain-crypto-wallet">
                <div className="panelmain-frame-7" />
                <div className="panelmain-frame-8">
                  <div className="panelmain-frame-9">
                    <div className="panelmain-total">
                      <div className="panelmain-iconography">
                        <div className="panelmain-element">
                          <div className="panelmain-overlap-group">
                            <SunColor className="panelmain-sun-color" />
                            <div className="panelmain-cloud-color">
                              <div className="panelmain-highlight-wrapper">
                                <img
                                  className="panelmain-highlight"
                                  alt="Highlight"
                                  src={highlight}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panelmain-head">
                      <div className="panelmain-label">
                        <div className="panelmain-frame-10">
                          <div className="panelmain-text-wrapper-2">05:00</div>
                        </div>
                      </div>
                    </div>
                    <div className="panelmain-frame-11">
                      <div className="panelmain-text-wrapper-3">23°C</div>
                    </div>
                  </div>
                  <div className="panelmain-frame-9">
                    <div className="panelmain-total">
                      <div className="panelmain-iconography">
                        <div className="panelmain-element">
                          <div className="panelmain-overlap-group-2">
                            <Icon className="panelmain-image" />
                            <IconComponentNode className="panelmain-icon-instance" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panelmain-head">
                      <div className="panelmain-label">
                        <div className="panelmain-frame-10">
                          <div className="panelmain-text-wrapper-2">06:00</div>
                        </div>
                      </div>
                    </div>
                    <div className="panelmain-frame-11">
                      <div className="panelmain-text-wrapper-3">20°C</div>
                    </div>
                  </div>
                  <div className="panelmain-frame-9">
                    <div className="panelmain-total">
                      <div className="panelmain-iconography">
                        <div className="panelmain-overlap-wrapper">
                          <div className="panelmain-overlap-2">
                            <CloudColor className="panelmain-cloud-color-instance" />
                            <div className="panelmain-overlap-group-wrapper">
                              <div className="panelmain-img-wrapper">
                                <img
                                  className="panelmain-highlight"
                                  alt="Highlight"
                                  src={highlight2}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panelmain-head">
                      <div className="panelmain-label">
                        <div className="panelmain-frame-10">
                          <div className="panelmain-text-wrapper-2">07:00</div>
                        </div>
                      </div>
                    </div>
                    <div className="panelmain-frame-11">
                      <div className="panelmain-text-wrapper-3">17°C</div>
                    </div>
                  </div>
                  <div className="panelmain-frame-9">
                    <div className="panelmain-total">
                      <div className="panelmain-iconography">
                        <div className="panelmain-element">
                          <div className="panelmain-overlap-group-3">
                            <Icon className="panelmain-image" />
                            <IconComponentNode className="panelmain-icon-instance" />
                            <CloudFill className="panelmain-cloud-fill" />
                            <CloudFill1 className="panelmain-cloud-fill-instance" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panelmain-head">
                      <div className="panelmain-label">
                        <div className="panelmain-frame-10">
                          <div className="panelmain-text-wrapper-2">08:00</div>
                        </div>
                      </div>
                    </div>
                    <div className="panelmain-frame-11">
                      <div className="panelmain-text-wrapper-3">16°C</div>
                    </div>
                  </div>
                  <div className="panelmain-frame-9">
                    <div className="panelmain-total">
                      <div className="panelmain-iconography">
                        <div className="panelmain-element">
                          <div className="panelmain-overlap-group">
                            <SunColor className="panelmain-sun-color" />
                            <div className="panelmain-cloud-color">
                              <div className="panelmain-overlap-group-4">
                                <img
                                  className="panelmain-highlight"
                                  alt="Highlight"
                                  src={highlight3}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panelmain-head">
                      <div className="panelmain-label">
                        <div className="panelmain-frame-10">
                          <div className="panelmain-text-wrapper-2">09:00</div>
                        </div>
                      </div>
                    </div>
                    <div className="panelmain-frame-11">
                      <div className="panelmain-text-wrapper-3">14°C</div>
                    </div>
                  </div>
                </div>
                <div className="panelmain-rectangle" />
                <div className="panelmain-frame-4">
                  <p className="panelmain-p">
                    <span className="panelmain-span">
                      어제 보다 1.2° 낮아요&nbsp;&nbsp;
                    </span>
                    <span className="panelmain-text-wrapper-4">/</span>
                    <span className="panelmain-span">
                      &nbsp;&nbsp;구름 많음
                    </span>
                  </p>
                  <div className="panelmain-frame-12">
                    <p className="panelmain-element-2">
                      <span className="panelmain-text-wrapper-5">체감 </span>
                      <span className="panelmain-text-wrapper-6">21.8°</span>
                    </p>
                    <div className="panelmain-text-wrapper-7">・</div>
                    <p className="panelmain-div-2">
                      <span className="panelmain-text-wrapper-8">습도 </span>
                      <span className="panelmain-text-wrapper-6">91%</span>
                    </p>
                    <div className="panelmain-text-wrapper-7">・</div>
                    <p className="panelmain-div-2">
                      <span className="panelmain-text-wrapper-8">동풍 </span>
                      <span className="panelmain-text-wrapper-6">1.4m/s</span>
                    </p>
                    <div className="panelmain-text-wrapper-7">・</div>
                    <p className="panelmain-div-2">
                      <span className="panelmain-text-wrapper-8">강수 </span>
                      <span className="panelmain-text-wrapper-6">0%</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="panelmain-frame-4">
              <div className="panelmain-frame-wrapper">
                <div className="panelmain-div-wrapper">
                  <div className="panelmain-frame-5">
                    <div className="panelmain-frame-6">
                      <div className="panelmain-text-wrapper">오늘 날씨</div>
                      <div className="panelmain-icon-arrow-right-wrapper">
                        <img className="panelmain-img" alt="Icon arrow right" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panelmain-crypto-wallet">
                <div className="panelmain-text-wrapper-9">태양 위치</div>
                <div className="panelmain-hue-slider">
                  <div className="panelmain-group-2">
                    <div className="panelmain-frame-13">
                      <img
                        className="panelmain-group-3"
                        alt="Group"
                        src={group1171274906}
                      />
                      <div className="panelmain-frame-14">
                        <div className="panelmain-text-wrapper-10">09:00</div>
                        <div className="panelmain-text-wrapper-10">12:00</div>
                        <div className="panelmain-text-wrapper-10">21:00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panelmain-rectangle" />
                <div className="panelmain-text-wrapper-11">현재 패널</div>
                <Icon1 className="panelmain-icon-instance-node" />
              </div>
            </div>
            <div className="panelmain-frame-4">
              <div className="panelmain-frame-wrapper">
                <div className="panelmain-div-wrapper">
                  <div className="panelmain-frame-5">
                    <div className="panelmain-frame-6">
                      <div className="panelmain-text-wrapper">전력 / 요금</div>
                      <div className="panelmain-icon-arrow-right-wrapper">
                        <img
                          className="panelmain-icon-arrow-right-2"
                          alt="Icon arrow right"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="panelmain-crypto-wallet">
                <div className="panelmain-frame-7" />
                <div className="panelmain-frame-15">
                  <div className="panelmain-frame-16">
                    <div className="panelmain-frame-12">
                      <div className="panelmain-text-wrapper-12">
                        9월 전력 생산량
                      </div>
                    </div>
                    <div className="panelmain-icon-instance-node-2">
                      <span className="number-bold">
                        {panelData.elecGeneration}
                      </span>{" "}
                      <span className="unit">kWh</span>
                    </div>
                  </div>
                  <div className="panelmain-frame-16">
                    <div className="panelmain-frame-12">
                      <div className="panelmain-text-wrapper-12">
                        9월 전력 소비량
                      </div>
                    </div>
                    <div className="panelmain-icon-instance-node-2">
                      <span className="number-bold">
                        {panelData.elecConsumption}
                      </span>{" "}
                      <span className="unit">kWh</span>
                    </div>
                  </div>
                </div>
                <div className="panelmain-rectangle" />
                <div className="panelmain-frame-15">
                  <div className="panelmain-frame-16">
                    <div className="panelmain-frame-12">
                      <div className="panelmain-text-wrapper-12">
                        9월 예상 수입
                      </div>
                    </div>
                    <div className="panelmain-icon-instance-node-2">
                      <span className="number-bold">
                        {panelData.billGeneration}
                      </span>{" "}
                      <span className="unit">kWh</span>
                    </div>
                  </div>
                  <div className="panelmain-frame-16">
                    <div className="panelmain-frame-12">
                      <div className="panelmain-text-wrapper-12">
                        9월 예상 전기 요금
                      </div>
                    </div>
                    <div className="panelmain-icon-instance-node-2">
                      <span className="number-bold">
                        {panelData.billConsumption}
                      </span>{" "}
                      <span className="unit">kWh</span>
                    </div>
                  </div>
                </div>
                <div className="panelmain-group-5"></div>
              </div>
            </div>
            <div className="panelmain-frame-4">
              <div className="panelmain-group-6">
                <div className="panelmain-frame-17">
                  <div className="panelmain-frame-18">
                    <div className="panelmain-group-7">
                      <div className="panelmain-group-8">
                        <div
                          className="panelmain-frame-19"
                          onClick={handleEmergencyClick}
                        >
                          <IconWarningTriangleMono className="panelmain-icon-warning" />
                          <div className="panelmain-text-wrapper-14">
                            비상 정지
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="panelmain-group-wrapper">
          <div className="panelmain-group-4">
            <div
              className="panelmain-overlap-group-5"
              onClick={handleBackToHomeClick}
            >
              <IconArrowLeftSmallMono className="panelmain-icon-arrow-left" />
              <div className="panelmain-text-wrapper-13">논산시</div>
            </div>
          </div>
        </div>

        <img
          className="panelmain-backgorund"
          alt="Backgorund"
          src={backgorund}
        />
        <div className="panelmain-group">
          <div className="panelmain-frame">
            <div className="panelmain-frame-2" />
          </div>
        </div>
      </div>
    </div>
  );
};
