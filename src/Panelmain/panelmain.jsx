import React from "react";
import { BatteryEnd } from "../BatteryEnd/BatteryEnd";
import { CloudColor } from "../CloudColor/CloudColor";
import { CloudFill } from "../CloudFill/CloudFill";
import { CloudFill1 } from "../CloudFill1/CloudFill1";
import { Icon } from "../Icon/Icon";
import { Icon1 } from "../Icon1/Icon1";
import { IconArrowLeftSmallMono } from "../IconArrowLeftSmallMono/IconArrowLeftSmallMono";
import { IconComponentNode } from "../IconComponentNode/IconComponentNode";
import { IconWarningTriangleMono } from "../IconWarningTriangleMono/IconWarningTriangleMono";
import { MobileSignal } from "../MobileSignal/MobileSignal";
import { OneHundredAndTwelveThousandNineHundred } from "../OneHundredAndTwelveThousandNineHundred/OneHundredAndTwelveThousandNineHundred";
import { OneThousandOneHundredAndTwentyNineKwh } from "../OneThousandOneHundredAndTwentyNineKwh/OneThousandOneHundredAndTwentyNineKwh";
import { Percentage } from "../Percentage/Percentage";
import { SixHundredAndThreeKwh } from "../SixHundredAndThreeKwh/SixHundredAndThreeKwh";
import { SixtyThousandThreeHundred } from "../SixtyThousandThreeHundred/SixtyThousandThreeHundred";
import { SunColor } from "../SunColor/SunColor";
import { Time } from "../Time/Time";
import { Wifi } from "../Wifi/Wifi";
import backgorund from "./backgorund.png";
import group1171274906 from "./group-1171274906.png";
import highlight2 from "./highlight-2.png";
import highlight3 from "./highlight-3.png";
import highlight from "./highlight.png";
import image from "./image.png";
import "./style.css";

export const Detail = () => {
  return (
    <div className="detail">
      <div className="div">
        <div className="overlap">
          <div className="group">
            <div className="frame">
              <div className="frame-2" />
            </div>
          </div>
          <div className="frame-3">
            <div className="frame-4">
              <div className="frame-wrapper">
                <div className="div-wrapper">
                  <div className="frame-5">
                    <div className="frame-6">
                      <div className="text-wrapper">오늘 날씨</div>
                      <div className="icon-arrow-right-wrapper">
                        <img
                          className="icon-arrow-right"
                          alt="Icon arrow right"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="crypto-wallet">
                <div className="frame-7" />
                <div className="frame-8">
                  <div className="frame-9">
                    <div className="total">
                      <div className="iconography">
                        <div className="element">
                          <div className="overlap-group">
                            <SunColor className="sun-color" />
                            <div className="cloud-color">
                              <div className="highlight-wrapper">
                                <img
                                  className="highlight"
                                  alt="Highlight"
                                  src={highlight}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="head">
                      <div className="label">
                        <div className="frame-10">
                          <div className="text-wrapper-2">05:00</div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-11">
                      <div className="text-wrapper-3">23°C</div>
                    </div>
                  </div>
                  <div className="frame-9">
                    <div className="total">
                      <div className="iconography">
                        <div className="element">
                          <div className="overlap-group-2">
                            <Icon className="image" />
                            <IconComponentNode className="icon-instance" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="head">
                      <div className="label">
                        <div className="frame-10">
                          <div className="text-wrapper-2">06:00</div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-11">
                      <div className="text-wrapper-3">20°C</div>
                    </div>
                  </div>
                  <div className="frame-9">
                    <div className="total">
                      <div className="iconography">
                        <div className="overlap-wrapper">
                          <div className="overlap-2">
                            <CloudColor className="cloud-color-instance" />
                            <div className="overlap-group-wrapper">
                              <div className="img-wrapper">
                                <img
                                  className="highlight"
                                  alt="Highlight"
                                  src={highlight2}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="head">
                      <div className="label">
                        <div className="frame-10">
                          <div className="text-wrapper-2">07:00</div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-11">
                      <div className="text-wrapper-3">17°C</div>
                    </div>
                  </div>
                  <div className="frame-9">
                    <div className="total">
                      <div className="iconography">
                        <div className="element">
                          <div className="overlap-group-3">
                            <Icon className="image" />
                            <IconComponentNode className="icon-instance" />
                            <CloudFill className="cloud-fill" />
                            <CloudFill1 className="cloud-fill-instance" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="head">
                      <div className="label">
                        <div className="frame-10">
                          <div className="text-wrapper-2">08:00</div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-11">
                      <div className="text-wrapper-3">16°C</div>
                    </div>
                  </div>
                  <div className="frame-9">
                    <div className="total">
                      <div className="iconography">
                        <div className="element">
                          <div className="overlap-group">
                            <SunColor className="sun-color" />
                            <div className="cloud-color">
                              <div className="overlap-group-4">
                                <img
                                  className="highlight"
                                  alt="Highlight"
                                  src={highlight3}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="head">
                      <div className="label">
                        <div className="frame-10">
                          <div className="text-wrapper-2">09:00</div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-11">
                      <div className="text-wrapper-3">14°C</div>
                    </div>
                  </div>
                </div>
                <div className="rectangle" />
                <div className="frame-4">
                  <p className="p">
                    <span className="span">
                      어제 보다 1.2° 낮아요&nbsp;&nbsp;
                    </span>
                    <span className="text-wrapper-4">/</span>
                    <span className="span">&nbsp;&nbsp;구름 많음</span>
                  </p>
                  <div className="frame-12">
                    <p className="element-2">
                      <span className="text-wrapper-5">체감 </span>
                      <span className="text-wrapper-6">21.8°</span>
                    </p>
                    <div className="text-wrapper-7">・</div>
                    <p className="div-2">
                      <span className="text-wrapper-8">습도 </span>
                      <span className="text-wrapper-6">91%</span>
                    </p>
                    <div className="text-wrapper-7">・</div>
                    <p className="div-2">
                      <span className="text-wrapper-8">동풍 </span>
                      <span className="text-wrapper-6">1.4m/s</span>
                    </p>
                    <div className="text-wrapper-7">・</div>
                    <p className="div-2">
                      <span className="text-wrapper-8">강수 </span>
                      <span className="text-wrapper-6">0%</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-4">
              <div className="frame-wrapper">
                <div className="div-wrapper">
                  <div className="frame-5">
                    <div className="frame-6">
                      <div className="text-wrapper">오늘 날씨</div>
                      <div className="icon-arrow-right-wrapper">
                        <img className="img" alt="Icon arrow right" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="crypto-wallet">
                <div className="text-wrapper-9">태양 위치</div>
                <div className="hue-slider">
                  <div className="group-2">
                    <div className="frame-13">
                      <img
                        className="group-3"
                        alt="Group"
                        src={group1171274906}
                      />
                      <div className="frame-14">
                        <div className="text-wrapper-10">09:00</div>
                        <div className="text-wrapper-10">12:00</div>
                        <div className="text-wrapper-10">21:00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rectangle" />
                <div className="text-wrapper-11">현재 패널</div>
                <Icon1 className="icon-instance-node" />
              </div>
            </div>
            <div className="frame-4">
              <div className="frame-wrapper">
                <div className="div-wrapper">
                  <div className="frame-5">
                    <div className="frame-6">
                      <div className="text-wrapper">전력 / 요금</div>
                      <div className="icon-arrow-right-wrapper">
                        <img
                          className="icon-arrow-right-2"
                          alt="Icon arrow right"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="crypto-wallet">
                <div className="frame-7" />
                <div className="frame-15">
                  <div className="frame-16">
                    <div className="frame-12">
                      <div className="text-wrapper-12">9월 전력 생산량</div>
                    </div>
                    <OneThousandOneHundredAndTwentyNineKwh className="icon-instance-node-2" />
                  </div>
                  <div className="frame-16">
                    <div className="frame-12">
                      <div className="text-wrapper-12">9월 전력 생산량</div>
                    </div>
                    <SixHundredAndThreeKwh className="icon-instance-node-2" />
                  </div>
                </div>
                <div className="rectangle" />
                <div className="frame-15">
                  <div className="frame-16">
                    <div className="frame-12">
                      <div className="text-wrapper-12">9월 예상 수입</div>
                    </div>
                    <OneHundredAndTwelveThousandNineHundred className="icon-instance-node-2" />
                  </div>
                  <div className="frame-16">
                    <div className="frame-12">
                      <div className="text-wrapper-12">9월 예상 전기 요금</div>
                    </div>
                    <SixtyThousandThreeHundred className="icon-instance-node-2" />
                  </div>
                </div>
                <div className="group-5"></div>
              </div>
            </div>
            <div className="frame-4">
              <div className="group-6">
                <div className="frame-17">
                  <div className="frame-18">
                    <div className="group-7">
                      <div className="group-8">
                        <div className="frame-19">
                          <IconWarningTriangleMono className="icon-warning" />
                          <div className="text-wrapper-14">비상 정지</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-wrapper">
          <div className="group-4">
            <div className="overlap-group-5">
              <IconArrowLeftSmallMono className="icon-arrow-left" />
              <div className="text-wrapper-13">논산시</div>
            </div>
          </div>
        </div>

        <img className="backgorund" alt="Backgorund" src={backgorund} />
      </div>
    </div>
  );
};
