import React from "react";
import { IconSirenMono } from "./icons/IconSirenMono";
import { IconSnowMono } from "./icons/IconSnowMono";
import { IconWindMono } from "./icons/iconWindMono";
import "./style.css";


export const Detail = () => {
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

  // JSX 반환
  return (
    <div className="detail">
      <div className="div-2">
        <div className="overlap-2">
          <div className="group">
            <div className="frame">
              <div className="frame-2" />
            </div>
          </div>
        </div>
      </div>
      <img
        className="backgorund"
        alt="Backgorund"
        src="https://c.animaapp.com/mh5TR1Fl/img/backgorund-1.png"
      />
      <div className="rectangle-4" />
      --
      <div className="group-10">
        <div className="frame-20">
          <div className="drawer-handle" />
          <div className="frame-5">
            <div className="frame-21">
              <div className="frame-22">
                <div className="text">비상 정지</div>
                <p className="text-2">날씨에 따라 비상 정지를 실행해 주세요.</p>
                <div className="frame-23">
                  <p className="div-5">
                    <span className="text-wrapper-5">
                      강풍 버튼 선택시 태양광 패널이{" "}
                    </span>
                    <span className="text-wrapper-6">최대로 눕혀집니다.</span>
                  </p>
                  <p className="div-6">
                    <span className="text-wrapper-5">
                      폭설 버튼 선택시 태양광 패널이{" "}
                    </span>
                    <span className="text-wrapper-6">최대로 세워집니다.</span>
                  </p>
                </div>
              </div>
              <div className="frame-24">
                <div className="frame-25" onClick={handleStrongWindEmergency}>
                  <div className="frame-26">
                    <div className="frame-27">
                      <div className="frame-28">
                        <div className="frame-28">
                          <IconWindMono className="icon-instance-node" />
                          <div className="text-wrapper-20">
                            강풍 - 비상 정지
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-25" onClick={handleHeavySnowEmergency}>
                  <div className="frame-26">
                    <div className="frame-27">
                      <div className="frame-28">
                        <div className="frame-28">
                          <IconSnowMono className="icon-instance-node" />
                          <div className="text-wrapper-20">
                            폭설 - 비상 정지
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-29" onClick={handleResetEmergency}>
                  <div className="frame-26">
                    <div className="frame-27">
                      <div className="frame-28">
                        <div className="frame-28">
                          <IconSirenMono union="https://c.animaapp.com/mh5TR1Fl/img/union-1.svg" />
                          <div className="text-wrapper-20">비상 작동해제</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-11">
                  <div className="frame-30">
                    <div className="frame-18">
                      <div className="group-7">
                        <div className="group-8">
                          <div className="frame-31">
                            <div className="text-wrapper-19">취 소</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-12">
              <div className="group-13">
                <div className="home-indicator-wrapper">
                  <div className="div-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
