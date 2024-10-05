import React from "react";
import { IconPlusMono } from "../IconPlusMono/IconPlusMono";
import { Box } from "../Bottom/bottom";
import { Logo } from "../Logo/logo";
import backgorund from "./backgorund.png";
import cloudFill2 from "./cloud-fill-2.svg";
import cloudFill3 from "./cloud-fill-3.svg";
import cloudFill from "./cloud-fill.svg";
import highlight from "./highlight.png";
import iconArrowRightSmallMono from "./icon-arrow-right-small-mono.svg";
import iconCoinMono from "./icon-coin-mono.svg";
import iconDotsFourHorizontalMono from "./icon-dots-four-horizontal-mono.svg";
import iconHomeMono from "./icon-home-mono.svg";
import iconStackUpSquareMono from "./icon-stack-up-square-mono.svg";
import iconUserMono from "./icon-user-mono.svg";
import image2 from "./image-2.svg";
import image3 from "./image-3.svg";
import image from "./image.svg";
import layer1 from "./layer-1.svg";
import sunColor from "./sun-color.svg";
import text from "./text.svg";
import "./style.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="div">
        <div className="logo">
          <Logo />
          <IconPlusMono />
        </div>
        <div className="frame">
          <div className="text-wrapper">
            <img className="img" alt="Text" src={text} />
          </div>
          <div className="frame-2">
            <div className="frame-3">
              <div className="frame-wrapper">
                <div className="frame-4">
                  <div className="text-wrapper-2">
                    전체 <strong>4개</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="crypto-wallet">
              <div className="rectangle-wrapper">
                <div className="rectangle" />
              </div>
              <div className="frame-5">
                <div className="frame-6">
                  <div className="head">
                    <div className="label">
                      <div className="div-wrapper">
                        <div className="text-wrapper-3">논산시</div>
                      </div>
                    </div>
                    <div className="icon-dots-four-wrapper">
                      <img
                        className="icon-dots-four"
                        alt="Icon dots four"
                        src={iconDotsFourHorizontalMono}
                      />
                    </div>
                  </div>
                  <div className="total">
                    <p className="element-kwh">
                      <span className="span">928</span>
                      <span className="text-wrapper-4">&nbsp;</span>
                      <span className="text-wrapper-5">kWh</span>
                    </p>
                    <div className="iconography">
                      <div className="element">
                        <div className="overlap-group">
                          <img className="image" alt="Image" src={image3} />
                          <img className="image-2" alt="Image" src={image2} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-7">
                  <div className="frame-8">
                    <div className="frame-9">
                      <div className="text-wrapper-6">작동 대기</div>
                      <div className="text-wrapper-7">・</div>
                      <div className="text-wrapper-8">논산시 성동면</div>
                    </div>
                  </div>
                  <div className="text-wrapper-9">24°C</div>
                </div>
              </div>
            </div>
            <div className="crypto-wallet">
              <div className="rectangle-wrapper">
                <div className="rectangle" />
              </div>
              <div className="frame-5">
                <div className="frame-6">
                  <div className="head">
                    <div className="label">
                      <div className="div-wrapper">
                        <div className="text-wrapper-3">아산시</div>
                      </div>
                    </div>
                    <div className="icon-dots-four-wrapper">
                      <img
                        className="icon-dots-four"
                        alt="Icon dots four"
                        src={iconDotsFourHorizontalMono}
                      />
                    </div>
                  </div>
                  <div className="total">
                    <p className="element-kwh">
                      <span className="span">1,240</span>
                      <span className="text-wrapper-4">&nbsp;</span>
                      <span className="text-wrapper-5">kWh</span>
                    </p>
                    <div className="iconography">
                      <div className="element">
                        <div className="overlap-group">
                          <img className="image" alt="Image" src={image3} />
                          <img className="image-2" alt="Image" src={image2} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-7">
                  <div className="frame-8">
                    <div className="frame-9">
                      <div className="text-wrapper-6">정상 작동 중</div>
                      <div className="text-wrapper-7">・</div>
                      <div className="text-wrapper-8">아산시 인주면</div>
                    </div>
                  </div>
                  <div className="text-wrapper-9">22°C</div>
                </div>
              </div>
            </div>
            <div className="crypto-wallet">
              <div className="rectangle-wrapper">
                <div className="rectangle" />
              </div>
              <div className="frame-5">
                <div className="frame-6">
                  <div className="head">
                    <div className="label">
                      <div className="div-wrapper">
                        <div className="text-wrapper-3">충주시</div>
                      </div>
                    </div>
                    <div className="icon-dots-four-wrapper">
                      <img
                        className="icon-dots-four"
                        alt="Icon dots four"
                        src={iconDotsFourHorizontalMono}
                      />
                    </div>
                  </div>
                  <div className="total">
                    <p className="element-kwh">
                      <span className="span">1,129</span>
                      <span className="text-wrapper-4">&nbsp;</span>
                      <span className="text-wrapper-5">kWh</span>
                    </p>
                    <div className="iconography">
                      <div className="element">
                        <div className="overlap-group">
                          <img className="image" alt="Image" src={image3} />
                          <img className="image-2" alt="Image" src={image2} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-7">
                  <div className="frame-8">
                    <div className="frame-9">
                      <div className="text-wrapper-6">정상 작동 중</div>
                      <div className="text-wrapper-7">・</div>
                      <div className="text-wrapper-8">충주시 주덕읍</div>
                    </div>
                  </div>
                  <div className="text-wrapper-9">24°C</div>
                </div>
              </div>
            </div>
            {/* 청주시 */}
            <div className="crypto-wallet">
              <div className="rectangle-wrapper">
                <div className="rectangle" />
              </div>
              <div className="frame-5">
                <div className="frame-6">
                  <div className="head">
                    <div className="label">
                      <div className="div-wrapper">
                        <div className="text-wrapper-3">청주시</div>
                      </div>
                    </div>
                    <div className="icon-dots-four-wrapper">
                      <img
                        className="icon-dots-four"
                        alt="Icon dots four"
                        src={iconDotsFourHorizontalMono}
                      />
                    </div>
                  </div>
                  <div className="total">
                    <p className="element-kwh">
                      <span className="span">831</span>
                      <span className="text-wrapper-4">&nbsp;</span>
                      <span className="text-wrapper-5">kWh</span>
                    </p>
                    <div className="iconography">
                      <div className="element">
                        <div className="overlap-group">
                          <img className="image" alt="Image" src={image3} />
                          <img className="image-2" alt="Image" src={image2} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-7">
                  <div className="frame-8">
                    <div className="frame-9">
                      <div className="text-wrapper-6">정상 작동 중</div>
                      <div className="text-wrapper-7">・</div>
                      <div className="text-wrapper-8">청주시 서원구</div>
                    </div>
                  </div>
                  <div className="text-wrapper-9">24°C</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="backgorund" alt="Backgorund" src={backgorund} />
    </div>
  );
};
