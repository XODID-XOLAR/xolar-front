import React from "react";
import iconStackUpSquare from "../panelhome/Home/icon-stack-up-square-mono.svg";
import iconCoinMono from "../panelhome/Home/icon-coin-mono.svg";
import backgorund from "./backgorund.png";
import frame33617 from "./frame-33617.svg";
import group1 from "./group-1.png";
import iconHomeMono from "./icon-home-mono.svg";
import iconSearchMono from "./icon-search-mono.svg";
import iconUserMono from "./icon-user-mono.svg";
import image from "./image.png";
import line11 from "./line-11.svg";
import line12 from "./line-12.svg";
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
            <div className="frame-wrapper">
              <div className="div-wrapper">
                <div className="frame-4">
                  <div className="frame-5">
                    <div className="text-wrapper">일자별 전력 생산량</div>
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
            <div className="frame-6">
              <div className="frame-7">
                <div className="frame-8">
                  <div className="text-wrapper-2">8월 31일 토요일</div>
                </div>
                <div className="text-wrapper-3">1,000 W</div>
              </div>
              <div className="rectangle" />
              <div className="frame-9">
                <div className="frame-10">
                  <div className="link-wrapper">
                    <div className="link">금 주</div>
                  </div>
                  <div className="frame-11">
                    <div className="link-2">월 별</div>
                  </div>
                  <div className="frame-11">
                    <div className="link-2">분 기</div>
                  </div>
                </div>
                <div className="frame-12">
                  <img
                    className="icon-search-mono"
                    alt="Icon search mono"
                    src={iconSearchMono}
                  />
                  <div className="link-3">조회</div>
                </div>
              </div>
              <div className="bento-card">
                <div className="frame-13">
                  <div className="frame-14">
                    <div className="text-wrapper-4">4,500 W</div>
                    <div className="text-wrapper-5">4,000</div>
                    <div className="text-wrapper-5">3,500</div>
                    <div className="text-wrapper-5">3,000</div>
                    <div className="text-wrapper-5">2,500</div>
                    <div className="text-wrapper-5">2,000</div>
                    <div className="text-wrapper-5">1,500</div>
                    <div className="text-wrapper-5">500</div>
                    <div className="text-wrapper-5">0</div>
                  </div>
                  <div className="frame-15">
                    <div className="frame-16">
                      <div className="group-2">
                        <div className="overlap-group">
                          <img className="line" alt="Line" />
                        </div>
                        <img className="img" alt="Line" src={line11} />
                        <img className="line-2" alt="Line" src={line11} />
                        <img className="line-3" alt="Line" src={line11} />
                        <img className="line-4" alt="Line" src={line11} />
                        <img className="line-5" alt="Line" src={line11} />
                        <img className="line-6" alt="Line" src={line11} />
                        <img className="line-7" alt="Line" src={line11} />
                      </div>
                      <div className="frame-17">
                        <div className="rectangle-2" />
                        <div className="rectangle-3" />
                        <div className="rectangle-4" />
                        <div className="rectangle-5" />
                        <div className="rectangle-6" />
                        <div className="rectangle-3" />
                        <div className="rectangle-7" />
                      </div>
                    </div>
                    <div className="frame-18">
                      <div className="text-wrapper-6">월</div>
                      <div className="text-wrapper-6">화</div>
                      <div className="text-wrapper-6">수</div>
                      <div className="text-wrapper-6">목</div>
                      <div className="text-wrapper-6">금</div>
                      <div className="text-wrapper-6">토</div>
                      <div className="text-wrapper-6">일</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rectangle" />
              <div className="text-wrapper-7">전류-전압 그래프</div>
              <div className="bento-card">
                <div className="frame-13">
                  <div className="frame-19">
                    <div className="text-wrapper-4">10.0 (A)</div>
                    <div className="text-wrapper-5">9.5</div>
                    <div className="text-wrapper-5">9.0</div>
                    <div className="text-wrapper-5">8.5</div>
                    <div className="text-wrapper-5">8.0</div>
                    <div className="text-wrapper-5">7.5</div>
                    <div className="text-wrapper-5">7.0</div>
                    <div className="text-wrapper-5">6.5</div>
                    <div className="text-wrapper-8">0</div>
                  </div>
                  <div className="frame-15">
                    <div className="frame-20">
                      <img className="group-2" alt="Group" src={image} />
                      <img className="group-3" alt="Group" src={group1} />
                      <img className="line-8" alt="Line" src={line12} />
                    </div>
                    <div className="frame-21">
                      <div className="text-wrapper-6">0</div>
                      <div className="text-wrapper-6">2</div>
                      <div className="text-wrapper-6">4</div>
                      <div className="text-wrapper-6">6</div>
                      <div className="text-wrapper-6">8</div>
                      <div className="text-wrapper-6">10</div>
                      <div className="text-wrapper-6">12</div>
                      <div className="text-wrapper-6">14</div>
                      <div className="text-wrapper-9">16</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="backgorund" alt="Backgorund" src={backgorund} />
        <div className="frame-22">
          <div className="frame-23">
            <div className="text-wrapper-10">생산량</div>
          </div>
          <div className="frame-24">
            <div className="text-wrapper-11">소비량</div>
          </div>
        </div>
        <div className="img-wrapper">
          <img className="frame-25" alt="Frame" src={frame33617} />
        </div>
        <div className="group-wrapper">
          <div className="group-4">
            <div className="group-5"></div>
            <div className="frame-26">
              <div className="frame-27">
                <div className="frame-28">
                  <div className="frame-29">
                    <div className="group-7">
                      <div className="frame-30">
                        <img
                          className="img-2"
                          alt="Icon home mono"
                          src={iconHomeMono}
                        />
                      </div>
                    </div>
                    <div className="group-8">
                      <div className="frame-31">
                        <img
                          className="img-2"
                          alt="Icon home mono"
                          src={iconStackUpSquare}
                        />
                      </div>
                    </div>
                    <div className="group-9">
                      <div className="frame-31">
                        <img
                          className="img-2"
                          alt="Icon coin mono"
                          src={iconCoinMono}
                        />
                      </div>
                    </div>
                    <div className="group-7">
                      <div className="frame-30">
                        <img
                          className="img-2"
                          alt="Icon user mono"
                          src={iconUserMono}
                        />
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
  );
};
