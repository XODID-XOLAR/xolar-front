import React from "react";
import { IconSirenMono } from "./icons/IconSirenMono";
import { IconSnowMono } from "./icons/IconSnowMono";
import { IconWindMono } from "./icons/iconWindMono";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const Detail = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 가져오기

  const handleStrongWindEmergency = async () => {
    try {
      const response = await fetch(
        "https://api.xolar.co.kr/solar-panels/1/strong-wind",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const textData = await response.text();
        console.log("응답 텍스트:", textData);
        alert(textData);
      } else {
        console.error("HTTP 오류:", response.status);
        alert("오류가 발생했습니다: " + response.status);
      }
    } catch (error) {
      console.error("오류 발생:", error);
      alert("오류 발생: " + error.message);
    }
  };

  const handleHeavySnowEmergency = async () => {
    try {
      const response = await fetch(
        "https://api.xolar.co.kr/solar-panels/1/heavy-snow",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const textData = await response.text();
        console.log("응답 텍스트:", textData);
        alert(textData);
      } else {
        console.error("HTTP 오류:", response.status);
        alert("오류가 발생했습니다: " + response.status);
      }
    } catch (error) {
      console.error("오류 발생:", error);
      alert("오류 발생: " + error.message);
    }
  };

  const handleResetEmergency = async () => {
    try {
      const response = await fetch(
        "https://api.xolar.co.kr/solar-panels/1/normal",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const textData = await response.text();
        console.log("응답 텍스트:", textData);
        alert(textData);
      } else {
        console.error("HTTP 오류:", response.status);
        alert("오류가 발생했습니다: " + response.status);
      }
    } catch (error) {
      console.error("오류 발생:", error);
      alert("오류 발생: " + error.message);
    }
  };

  // 취소 버튼 클릭 시 PanelMain으로 이동하는 함수
  const handleCancelClick = () => {
    navigate("../panelmain/1"); // PanelMain 페이지 경로로 이동
  };

  return (
    <div className="emergency-detail">
      <div className="emergency-div-2">
        <div className="emergency-overlap-2">
          <div className="emergency-group">
            <div className="emergency-frame">
              <div className="emergency-frame-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="emergency-group-10">
        <div className="emergency-frame-20">
          <div className="emergency-frame-5">
            <div className="emergency-frame-21">
              <div className="emergency-frame-22">
                <div className="emergency-text">비상 정지</div>
                <p className="emergency-text-2">
                  날씨에 따라 비상 정지를 실행해 주세요.
                </p>
                <div className="emergency-frame-23">
                  <p className="emergency-div-5">
                    <span className="emergency-text-wrapper-5">
                      강풍 버튼 선택시 태양광 패널이{" "}
                    </span>
                    <span className="emergency-text-wrapper-6">
                      최대로 눕혀집니다.
                    </span>
                  </p>
                  <p className="emergency-div-6">
                    <span className="emergency-text-wrapper-5">
                      폭설 버튼 선택시 태양광 패널이{" "}
                    </span>
                    <span className="emergency-text-wrapper-6">
                      최대로 세워집니다.
                    </span>
                  </p>
                </div>
              </div>
              <div className="emergency-frame-24">
                <div
                  className="emergency-frame-25"
                  onClick={handleStrongWindEmergency}
                >
                  <div className="emergency-frame-26">
                    <div className="emergency-frame-27">
                      <div className="emergency-frame-28">
                        <div className="emergency-frame-28">
                          <IconWindMono className="emergency-icon-instance-node" />
                          <div className="emergency-text-wrapper-20">
                            강풍 - 비상 정지
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="emergency-frame-25"
                  onClick={handleHeavySnowEmergency}
                >
                  <div className="emergency-frame-26">
                    <div className="emergency-frame-27">
                      <div className="emergency-frame-28">
                        <div className="emergency-frame-28">
                          <IconSnowMono className="emergency-icon-instance-node" />
                          <div className="emergency-text-wrapper-20">
                            폭설 - 비상 정지
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="emergency-frame-29"
                  onClick={handleResetEmergency}
                >
                  <div className="emergency-frame-26">
                    <div className="emergency-frame-27">
                      <div className="emergency-frame-28">
                        <div className="emergency-frame-28">
                          <IconSirenMono union="https://c.animaapp.com/mh5TR1Fl/img/union-1.svg" />
                          <div className="emergency-text-wrapper-20">
                            비상 작동해제
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="emergency-group-11">
                  <div className="emergency-frame-30">
                    <div className="emergency-frame-18">
                      <div className="emergency-group-7">
                        <div className="emergency-group-8">
                          <div
                            className="emergency-frame-31"
                            onClick={handleCancelClick}
                          >
                            <div className="emergency-text-wrapper-19">
                              취 소
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="emergency-group-12">
              <div className="emergency-group-13">
                <div className="emergency-home-indicator-wrapper">
                  <div className="emergency-div-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
