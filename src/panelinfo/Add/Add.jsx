import React from "react";
import backgorund from "./backgorund.png";
import iconArrowLeftSmallMono from "./icon-arrow-left-small-mono.svg";
import iconArrowRightSmallMono from "./icon-arrow-right-small-mono.svg";
import "./style.css";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 import

export const Add = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 클릭 이벤트 핸들러 함수
  const handleNavigateToHome = () => {
    navigate("/Home"); // 경로를 "/panel-main"으로 변경
  };

  return (
    <div className="add-add">
      <div className="add-div">
        <div className="add-group">
          <div className="add-frame">
            <div className="add-frame-2">
              <div className="add-text">패널 정보를 입력하세요</div>
              <p className="add-text-wrapper">
                태양광 패널 추가를 위해 정보를 입력해 주세요
              </p>
            </div>
            <div className="add-frame-3">
              <div className="add-frame-4">
                <div className="add-text-wrapper-2">설치 지역</div>
                <div className="add-frame-wrapper">
                  <div className="add-frame-5">
                    <div className="add-text-wrapper-3"> 양산시</div>
                    <img
                      className="add-icon-arrow-right"
                      alt="Icon arrow right"
                      src={iconArrowRightSmallMono}
                    />
                  </div>
                </div>
                <div className="add-frame-wrapper">
                  <div className="add-frame-6">
                    <p className="add-p"> 군 / 읍 / 면</p>
                    <img
                      className="add-icon-arrow-right"
                      alt="Icon arrow right"
                      src={iconArrowRightSmallMono}
                    />
                  </div>
                </div>
              </div>
              <div className="add-frame-4">
                <div className="add-text-wrapper-2">태양광 패널 고유번호</div>
                <div className="add-frame-wrapper">
                  <div className="add-frame-7">
                    <div className="add-text-wrapper-4">
                      {" "}
                      태양광 패널 고유번호
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="add-group-wrapper">
          <div
            className="add-icon-arrow-left-wrapper"
            onClick={handleNavigateToHome}
          >
            <img
              className="add-icon-arrow-left"
              alt="Icon arrow left"
              src={iconArrowLeftSmallMono}
            />
          </div>
        </div>
        <div className="add-group-2"></div>
        <div className="add-group-4">
          <div className="add-frame-8">
            <div className="add-frame-9">
              <div className="add-group-5">
                <div className="add-group-6">
                  <div className="add-frame-10">
                    <div className="add-text-wrapper-5">추가하기</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="add-backgorund" alt="Backgorund" src={backgorund} />
    </div>
  );
};
