import React from "react";
import backgorund from "./backgorund.png";
import frame33617 from "./frame-33617.svg";
import iconHomeMono from "./icon-home-mono.svg";
import iconSearchMono from "./icon-search-mono.svg";
import iconStackUpSquare from "../panelhome/Home/icon-stack-up-square-mono.svg";
import iconCoinMono from "../panelhome/Home/icon-coin-mono.svg";
import iconUserMono from "./icon-user-mono.svg";
import image from "./image.png";
import line11 from "./line-11.svg";
import "./style.css";

export const Detail = () => {
  return (
    <div className="detail">
      <div className="div">
        <div className="frame">
          <div className="frame-wrapper">
            <div className="div-wrapper">
              <div className="frame-2">
                <div className="frame-3">
                  <div className="text-wrapper">누적 수입</div>
                  <div className="icon-arrow-right-wrapper">
                    <img className="icon-arrow-right" alt="Icon arrow right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-4">
            <div className="group">
              <div className="text-wrapper-2">8월 누적 수입량</div>
              <div className="text-wrapper-3">70,000 원</div>
            </div>
            <div className="group">
              <div className="text-wrapper-2">패널 평균 수입량</div>
              <div className="text-wrapper-4">650 원</div>
            </div>
            <div className="group">
              <div className="text-wrapper-2">금일 수입량</div>
              <div className="text-wrapper-4">2,250 원</div>
            </div>
          </div>
          <div className="frame-5">
            <div className="frame-6">
              <div className="text-wrapper-5">전력 수입</div>
            </div>
            <div className="rectangle" />
            <div className="frame-7">
              <div className="frame-8">
                <div className="link-wrapper">
                  <div className="link">금 주</div>
                </div>
                <div className="frame-9">
                  <div className="link-2">월 별</div>
                </div>
                <div className="frame-9">
                  <div className="link-2">분 기</div>
                </div>
              </div>
              <div className="frame-10">
                <img
                  className="icon-search-mono"
                  alt="Icon search mono"
                  src={iconSearchMono}
                />
                <div className="link-3">조회</div>
              </div>
            </div>
            <div className="bento-card">
              <div className="frame-11">
                <div className="frame-12">
                  <div className="text-wrapper-6">3,000</div>
                  <div className="text-wrapper-7">2,625</div>
                  <div className="text-wrapper-7">2,250</div>
                  <div className="text-wrapper-7">1,875</div>
                  <div className="text-wrapper-7">1,500</div>
                  <div className="text-wrapper-7">1,125</div>
                  <div className="text-wrapper-7">750</div>
                  <div className="text-wrapper-7">375</div>
                  <div className="text-wrapper-7">0</div>
                </div>
                <div className="frame-13">
                  <div className="frame-14">
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
                    <div className="frame-15">
                      <div className="rectangle-2" />
                      <div className="rectangle-3" />
                      <div className="rectangle-4" />
                      <div className="rectangle-5" />
                      <div className="rectangle-6" />
                      <div className="rectangle-7" />
                      <div className="rectangle-3" />
                    </div>
                  </div>
                  <div className="frame-16">
                    <div className="text-wrapper-8">월</div>
                    <div className="text-wrapper-8">화</div>
                    <div className="text-wrapper-8">수</div>
                    <div className="text-wrapper-8">목</div>
                    <div className="text-wrapper-8">금</div>
                    <div className="text-wrapper-8">토</div>
                    <div className="text-wrapper-8">일</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-17">
          <div className="frame-18">
            <div className="text-wrapper-9">수 입</div>
          </div>
          <div className="frame-19">
            <div className="text-wrapper-10">요 금</div>
          </div>
        </div>
        <div className="img-wrapper">
          <img className="frame-20" alt="Frame" src={frame33617} />
        </div>
        <div className="group-wrapper">
          <div className="group-3">
            <div className="group-4">
              <div className="group-5" />
            </div>
            <div className="frame-21">
              <div className="frame-22">
                <div className="frame-23">
                  <div className="frame-24">
                    <div className="group-6">
                      <div className="frame-25">
                        <img
                          className="img-2"
                          alt="Icon home mono"
                          src={iconHomeMono}
                        />
                      </div>
                    </div>
                    <div className="group-6">
                      <div className="frame-26">
                        <img
                          className="img-2"
                          alt="Icon home mono"
                          src={iconStackUpSquare}
                        />
                      </div>
                    </div>
                    <div className="group-7">
                      <div className="frame-26">
                        <img
                          className="img-2"
                          alt="Icon coin mono"
                          src={iconCoinMono}
                        />
                      </div>
                    </div>
                    <div className="group-6">
                      <div className="frame-25">
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
