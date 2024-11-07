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
import { useNavigate } from "react-router-dom";

export const Detail = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 아이콘 클릭 시 이동할 경로 설정
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="earnMoney-detail">
      <div className="earnMoney-div">
        <div className="earnMoney-frame">
          <div className="earnMoney-frame-wrapper">
            <div className="earnMoney-div-wrapper">
              <div className="earnMoney-frame-2">
                <div className="earnMoney-frame-3">
                  <div className="earnMoney-text-wrapper">누적 수입</div>
                  <div className="earnMoney-icon-arrow-right-wrapper">
                    <img
                      className="earnMoney-icon-arrow-right"
                      alt="Icon arrow right"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="earnMoney-frame-4">
            <div className="earnMoney-group">
              <div className="earnMoney-text-wrapper-2">8월 누적 수입량</div>
              <div className="earnMoney-text-wrapper-3">70,000 원</div>
            </div>
            <div className="earnMoney-group">
              <div className="earnMoney-text-wrapper-2">패널 평균 수입량</div>
              <div className="earnMoney-text-wrapper-4">650 원</div>
            </div>
            <div className="earnMoney-group">
              <div className="earnMoney-text-wrapper-2">금일 수입량</div>
              <div className="earnMoney-text-wrapper-4">2,250 원</div>
            </div>
          </div>
          <div className="earnMoney-frame-5">
            <div className="earnMoney-frame-6">
              <div className="earnMoney-text-wrapper-5">전력 수입</div>
            </div>
            <div className="earnMoney-rectangle" />
            <div className="earnMoney-frame-7">
              <div className="earnMoney-frame-8">
                <div className="earnMoney-link-wrapper">
                  <div className="earnMoney-link">금 주</div>
                </div>
                <div className="earnMoney-frame-9">
                  <div className="earnMoney-link-2">월 별</div>
                </div>
                <div className="earnMoney-frame-9">
                  <div className="earnMoney-link-2">분 기</div>
                </div>
              </div>
              <div className="earnMoney-frame-10">
                <img
                  className="earnMoney-icon-search-mono"
                  alt="Icon search mono"
                  src={iconSearchMono}
                />
                <div className="earnMoney-link-3">조회</div>
              </div>
            </div>
            <div className="earnMoney-bento-card">
              <div className="earnMoney-frame-11">
                <div className="earnMoney-frame-12">
                  <div className="earnMoney-text-wrapper-6">3,000</div>
                  <div className="earnMoney-text-wrapper-7">2,625</div>
                  <div className="earnMoney-text-wrapper-7">2,250</div>
                  <div className="earnMoney-text-wrapper-7">1,875</div>
                  <div className="earnMoney-text-wrapper-7">1,500</div>
                  <div className="earnMoney-text-wrapper-7">1,125</div>
                  <div className="earnMoney-text-wrapper-7">750</div>
                  <div className="earnMoney-text-wrapper-7">375</div>
                  <div className="earnMoney-text-wrapper-7">0</div>
                </div>
                <div className="earnMoney-frame-13">
                  <div className="earnMoney-frame-14">
                    <div className="earnMoney-group-2">
                      <div className="earnMoney-overlap-group">
                        <img className="earnMoney-line" alt="Line" />
                      </div>
                      <img className="earnMoney-img" alt="Line" src={line11} />
                      <img
                        className="earnMoney-line-2"
                        alt="Line"
                        src={line11}
                      />
                      <img
                        className="earnMoney-line-3"
                        alt="Line"
                        src={line11}
                      />
                      <img
                        className="earnMoney-line-4"
                        alt="Line"
                        src={line11}
                      />
                      <img
                        className="earnMoney-line-5"
                        alt="Line"
                        src={line11}
                      />
                      <img
                        className="earnMoney-line-6"
                        alt="Line"
                        src={line11}
                      />
                      <img
                        className="earnMoney-line-7"
                        alt="Line"
                        src={line11}
                      />
                    </div>
                    <div className="earnMoney-frame-15">
                      <div className="earnMoney-rectangle-2" />
                      <div className="earnMoney-rectangle-3" />
                      <div className="earnMoney-rectangle-4" />
                      <div className="earnMoney-rectangle-5" />
                      <div className="earnMoney-rectangle-6" />
                      <div className="earnMoney-rectangle-7" />
                      <div className="earnMoney-rectangle-3" />
                    </div>
                  </div>
                  <div className="earnMoney-frame-16">
                    <div className="earnMoney-text-wrapper-8">월</div>
                    <div className="earnMoney-text-wrapper-8">화</div>
                    <div className="earnMoney-text-wrapper-8">수</div>
                    <div className="earnMoney-text-wrapper-8">목</div>
                    <div className="earnMoney-text-wrapper-8">금</div>
                    <div className="earnMoney-text-wrapper-8">토</div>
                    <div className="earnMoney-text-wrapper-8">일</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="earnMoney-frame-17">
          <div className="earnMoney-frame-18">
            <div className="earnMoney-text-wrapper-9">수 입</div>
          </div>
          <div className="earnMoney-frame-19">
            <div className="earnMoney-text-wrapper-10">요 금</div>
          </div>
        </div>
        <div className="earnMoney-img-wrapper">
          <img className="earnMoney-frame-20" alt="Frame" src={frame33617} />
        </div>
        <div className="earnMoney-group-wrapper">
          <div className="earnMoney-group-3">
            <div className="earnMoney-frame-21">
              <div className="earnMoney-frame-22">
                <div className="earnMoney-frame-23">
                  <div className="earnMoney-frame-24">
                    <div className="earnMoney-group-6">
                      <div
                        className="earnMoney-frame-25"
                        onClick={() => handleNavigate("/Home")}
                      >
                        <img
                          className="earnMoney-img-2"
                          alt="Icon home mono"
                          src={iconHomeMono}
                        />
                      </div>
                    </div>
                    <div className="earnMoney-group-6">
                      <div
                        className="earnMoney-frame-26"
                        onClick={() => handleNavigate("/Product")}
                      >
                        <img
                          className="earnMoney-img-2"
                          alt="Icon home mono"
                          src={iconStackUpSquare}
                        />
                      </div>
                    </div>
                    <div className="earnMoney-group-7">
                      <div
                        className="earnMoney-frame-26"
                        onClick={() => handleNavigate("/earnmoney")}
                      >
                        <img
                          className="earnMoney-img-2"
                          alt="Icon coin mono"
                          src={iconCoinMono}
                        />
                      </div>
                    </div>
                    <div className="earnMoney-group-6">
                      <div
                        className="earnMoney-frame-25"
                        onClick={() => handleNavigate("/mypage")}
                      >
                        <img
                          className="earnMoney-img-2"
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
