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
import { useNavigate } from "react-router-dom";

export const Detail = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 아이콘 클릭 시 이동할 경로 설정
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="product-detail">
      <div className="product-container">
        <div className="product-overlap">
          <div className="product-group">
            <div className="product-frame">
              <div className="product-frame-2" />
            </div>
          </div>
          <div className="product-frame-3">
            <div className="product-frame-wrapper">
              <div className="product-div-wrapper">
                <div className="product-frame-4">
                  <div className="product-frame-5">
                    <div className="product-text-wrapper">
                      일자별 전력 생산량
                    </div>
                    <div className="product-icon-arrow-right-wrapper">
                      <img
                        className="product-icon-arrow-right"
                        alt="Icon arrow right"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-frame-6">
              <div className="product-frame-7">
                <div className="product-frame-8">
                  <div className="product-text-wrapper-2">8월 31일 토요일</div>
                </div>
                <div className="product-text-wrapper-3">1,000 W</div>
              </div>
              <div className="product-rectangle" />
              <div className="product-frame-9">
                <div className="product-frame-10">
                  <div className="product-link-wrapper">
                    <div className="product-link">금 주</div>
                  </div>
                  <div className="product-frame-11">
                    <div className="product-link-2">월 별</div>
                  </div>
                  <div className="product-frame-11">
                    <div className="product-link-2">분 기</div>
                  </div>
                </div>
                <div className="product-frame-12">
                  <img
                    className="product-icon-search-mono"
                    alt="Icon search mono"
                    src={iconSearchMono}
                  />
                  <div className="product-link-3">조회</div>
                </div>
              </div>
              <div className="product-bento-card">
                <div className="product-frame-13">
                  <div className="product-frame-14">
                    <div className="product-text-wrapper-4">4,500 W</div>
                    <div className="product-text-wrapper-5">4,000</div>
                    <div className="product-text-wrapper-5">3,500</div>
                    <div className="product-text-wrapper-5">3,000</div>
                    <div className="product-text-wrapper-5">2,500</div>
                    <div className="product-text-wrapper-5">2,000</div>
                    <div className="product-text-wrapper-5">1,500</div>
                    <div className="product-text-wrapper-5">500</div>
                    <div className="product-text-wrapper-5">0</div>
                  </div>
                  <div className="product-frame-15">
                    <div className="product-frame-16">
                      <div className="product-group-2">
                        <div className="product-overlap-group">
                          <img className="product-line" alt="Line" />
                        </div>
                        <img className="product-img" alt="Line" src={line11} />
                        <img
                          className="product-line-2"
                          alt="Line"
                          src={line11}
                        />
                        <img
                          className="product-line-3"
                          alt="Line"
                          src={line11}
                        />
                        <img
                          className="product-line-4"
                          alt="Line"
                          src={line11}
                        />
                        <img
                          className="product-line-5"
                          alt="Line"
                          src={line11}
                        />
                        <img
                          className="product-line-6"
                          alt="Line"
                          src={line11}
                        />
                        <img
                          className="product-line-7"
                          alt="Line"
                          src={line11}
                        />
                      </div>
                      <div className="product-frame-17">
                        <div className="product-rectangle-2" />
                        <div className="product-rectangle-3" />
                        <div className="product-rectangle-4" />
                        <div className="product-rectangle-5" />
                        <div className="product-rectangle-6" />
                        <div className="product-rectangle-3" />
                        <div className="product-rectangle-7" />
                      </div>
                    </div>
                    <div className="product-frame-18">
                      <div className="product-text-wrapper-6">월</div>
                      <div className="product-text-wrapper-6">화</div>
                      <div className="product-text-wrapper-6">수</div>
                      <div className="product-text-wrapper-6">목</div>
                      <div className="product-text-wrapper-6">금</div>
                      <div className="product-text-wrapper-6">토</div>
                      <div className="product-text-wrapper-6">일</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-rectangle" />
              <div className="product-text-wrapper-7">전류-전압 그래프</div>
              <div className="product-bento-card">
                <div className="product-frame-13">
                  <div className="product-frame-19">
                    <div className="product-text-wrapper-4">10.0 (A)</div>
                    <div className="product-text-wrapper-5">9.5</div>
                    <div className="product-text-wrapper-5">9.0</div>
                    <div className="product-text-wrapper-5">8.5</div>
                    <div className="product-text-wrapper-5">8.0</div>
                    <div className="product-text-wrapper-5">7.5</div>
                    <div className="product-text-wrapper-5">7.0</div>
                    <div className="product-text-wrapper-5">6.5</div>
                    <div className="product-text-wrapper-8">0</div>
                  </div>
                  <div className="product-frame-15">
                    <div className="product-frame-20">
                      <img
                        className="product-group-2"
                        alt="Group"
                        src={image}
                      />
                      <img
                        className="product-group-3"
                        alt="Group"
                        src={group1}
                      />
                      <img className="product-line-8" alt="Line" src={line12} />
                    </div>
                    <div className="product-frame-21">
                      <div className="product-text-wrapper-6">0</div>
                      <div className="product-text-wrapper-6">2</div>
                      <div className="product-text-wrapper-6">4</div>
                      <div className="product-text-wrapper-6">6</div>
                      <div className="product-text-wrapper-6">8</div>
                      <div className="product-text-wrapper-6">10</div>
                      <div className="product-text-wrapper-6">12</div>
                      <div className="product-text-wrapper-6">14</div>
                      <div className="product-text-wrapper-9">16</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="product-backgorund" alt="Backgorund" src={backgorund} />
        <div className="product-frame-22">
          <div className="product-frame-23">
            <div className="product-text-wrapper-10">생산량</div>
          </div>
          <div className="product-frame-24">
            <div className="product-text-wrapper-11">소비량</div>
          </div>
        </div>
        <div className="product-img-wrapper">
          <img className="product-frame-25" alt="Frame" src={frame33617} />
        </div>
        <div className="product-group-wrapper">
          <div className="product-group-4">
            <div className="product-group-5"></div>
            <div className="product-frame-26">
              <div className="product-frame-27">
                <div className="product-frame-28">
                  <div className="product-frame-29">
                    <div
                      className="product-group-7"
                      onClick={() => handleNavigate("/Home")}
                    >
                      <div className="product-frame-30">
                        <img
                          className="product-img-2"
                          alt="Icon home mono"
                          src={iconHomeMono}
                        />
                      </div>
                    </div>
                    <div
                      className="product-group-8"
                      onClick={() => handleNavigate("/Product")}
                    >
                      <div className="product-frame-31">
                        <img
                          className="product-img-2"
                          alt="Icon stack up"
                          src={iconStackUpSquare}
                        />
                      </div>
                    </div>
                    <div
                      className="product-group-9"
                      onClick={() => handleNavigate("/earnmoney")}
                    >
                      <div className="product-frame-31">
                        <img
                          className="product-img-2"
                          alt="Icon coin mono"
                          src={iconCoinMono}
                        />
                      </div>
                    </div>
                    <div
                      className="product-group-7"
                      onClick={() => handleNavigate("/mypage")}
                    >
                      <div className="product-frame-30">
                        <img
                          className="product-img-2"
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
