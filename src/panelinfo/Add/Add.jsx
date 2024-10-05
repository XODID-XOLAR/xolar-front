import React from "react";
import backgorund from "./backgorund.png";
import iconArrowLeftSmallMono from "./icon-arrow-left-small-mono.svg";
import iconArrowRightSmallMono from "./icon-arrow-right-small-mono.svg";
import "./style.css";

export const Add = () => {
  return (
    <div className="add">
      <div className="div">
        <div className="group">
          <div className="frame">
            <div className="frame-2">
              <div className="text">패널 정보를 입력하세요</div>
              <p className="text-wrapper">
                태양광 패널 추가를 위해 정보를 입력해 주세요
              </p>
            </div>
            <div className="frame-3">
              <div className="frame-4">
                <div className="text-wrapper-2">설치 지역</div>
                <div className="frame-wrapper">
                  <div className="frame-5">
                    <div className="text-wrapper-3"> 양산시</div>
                    <img
                      className="icon-arrow-right"
                      alt="Icon arrow right"
                      src={iconArrowRightSmallMono}
                    />
                  </div>
                </div>
                <div className="frame-wrapper">
                  <div className="frame-6">
                    <p className="p"> 군 / 읍 / 면</p>
                    <img
                      className="icon-arrow-right"
                      alt="Icon arrow right"
                      src={iconArrowRightSmallMono}
                    />
                  </div>
                </div>
              </div>
              <div className="frame-4">
                <div className="text-wrapper-2">태양광 패널 고유번호</div>
                <div className="frame-wrapper">
                  <div className="frame-7">
                    <div className="text-wrapper-4"> 태양광 패널 고유번호</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-wrapper">
          <div className="icon-arrow-left-wrapper">
            <img
              className="icon-arrow-left"
              alt="Icon arrow left"
              src={iconArrowLeftSmallMono}
            />
          </div>
        </div>
        <div className="group-2"></div>
        <div className="group-4">
          <div className="frame-8">
            <div className="frame-9">
              <div className="group-5">
                <div className="group-6">
                  <div className="frame-10">
                    <div className="text-wrapper-5">추가하기</div>
                  </div>
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
