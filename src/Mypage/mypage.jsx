import React from "react";
/*import { StatusBar } from "../test/StatusBar/StatusBar";*/
import backgorund from "./backgorund.png";
import frame33617 from "./frame-33617.svg";
import iconArrowLeftSmallMono from "./icon-arrow-left-small-mono.svg";
import iconHomeMono from "./icon-home-mono.svg";
import iconUserMono from "./icon-user-mono.svg";
import iconStackUpSquare from "../panelhome/Home/icon-stack-up-square-mono.svg";
import iconCoinMono from "../panelhome/Home/icon-coin-mono.svg";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 import
import "./style.css";

export const Mypage = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 아이콘 클릭 시 이동할 경로 설정
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="mypage-container">
      <div className="mypage-div">
        <div className="mypage-frame">
          <div className="mypage-group">
            <div className="mypage-frame-2">
              <div className="mypage-group-2">
                <div className="mypage-div-wrapper">
                  <div className="mypage-text-wrapper">알람 설정</div>
                </div>
                <div className="mypage-frame-3">
                  <div className="mypage-frame-4">
                    <div className="mypage-frame-4">
                      <div className="mypage-frame-5">
                        <div className="mypage-frame-6">
                          <div className="mypage-text-wrapper-2">소식 알림</div>
                        </div>
                        <div className="mypage-frame-7">
                          <div className="mypage-ellipse" />
                          <div className="mypage-ellipse-2" />
                        </div>
                      </div>
                      <div className="mypage-rectangle" />
                    </div>
                  </div>
                  <div className="mypage-frame-4">
                    <div className="mypage-frame-5">
                      <div className="mypage-frame-6">
                        <div className="mypage-text-wrapper-2">
                          마케팅 정보 알림
                        </div>
                      </div>
                      <div className="mypage-frame-8">
                        <div className="mypage-ellipse-2" />
                        <div className="mypage-ellipse-3" />
                      </div>
                    </div>
                    <div className="mypage-rectangle" />
                  </div>
                </div>
              </div>
              <div className="mypage-group-2">
                <div className="mypage-div-wrapper">
                  <div className="mypage-text-wrapper">고객센터</div>
                </div>
                <div className="mypage-frame-3">
                  <div className="mypage-frame-4">
                    <div className="mypage-frame-9">
                      <div className="mypage-frame-6">
                        <div className="mypage-text-wrapper-2">문의하기</div>
                      </div>
                      <img
                        className="mypage-icon-arrow-left"
                        alt="Icon arrow left"
                        src={iconArrowLeftSmallMono}
                      />
                    </div>
                    <div className="mypage-rectangle" />
                  </div>
                  <div className="mypage-frame-4">
                    <div className="mypage-frame-10">
                      <div className="mypage-frame-6">
                        <div className="mypage-text-wrapper-3">버전 정보</div>
                      </div>
                      <div className="mypage-text-wrapper-4">0.0.1</div>
                    </div>
                    <div className="mypage-rectangle" />
                  </div>
                </div>
              </div>
              <div className="mypage-group-3">
                <div className="mypage-div-wrapper">
                  <div className="mypage-text-wrapper">약관 및 정책</div>
                </div>
                <div className="mypage-frame-3">
                  <div className="mypage-frame-4">
                    <div className="mypage-frame-4">
                      <div className="mypage-frame-9">
                        <div className="mypage-frame-6">
                          <div className="mypage-text-wrapper-2">이용약관</div>
                        </div>
                        <img
                          className="mypage-icon-arrow-left"
                          alt="Icon arrow left"
                          src={iconArrowLeftSmallMono}
                        />
                      </div>
                      <div className="mypage-rectangle" />
                    </div>
                  </div>
                  <div className="mypage-frame-4">
                    <div className="mypage-frame-9">
                      <div className="mypage-frame-6">
                        <div className="mypage-text-wrapper-2">
                          개인정보처리방침
                        </div>
                      </div>
                      <img
                        className="mypage-icon-arrow-left"
                        alt="Icon arrow left"
                        src={iconArrowLeftSmallMono}
                      />
                    </div>
                    <div className="mypage-rectangle" />
                  </div>
                  <div className="mypage-frame-4">
                    <div className="mypage-frame-9">
                      <div className="mypage-frame-6">
                        <div className="mypage-text-wrapper-2">
                          위치정보이용약관
                        </div>
                      </div>
                      <img
                        className="mypage-icon-arrow-left"
                        alt="Icon arrow left"
                        src={iconArrowLeftSmallMono}
                      />
                    </div>
                    <div className="mypage-rectangle" />
                  </div>
                  <div className="mypage-frame-4">
                    <div className="mypage-frame-9">
                      <div className="mypage-frame-6">
                        <div className="mypage-text-wrapper-2">로그아웃</div>
                      </div>
                      <img
                        className="mypage-icon-arrow-left"
                        alt="Icon arrow left"
                        src={iconArrowLeftSmallMono}
                      />
                    </div>
                    <div className="mypage-rectangle" />
                  </div>
                </div>
              </div>
              <div className="mypage-frame-wrapper">
                <div className="mypage-frame-11">
                  <div className="mypage-text-wrapper-5">탈퇴하기</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mypage-img-wrapper">
          <img className="mypage-img" alt="Frame" src={frame33617} />
        </div>
        <div className="mypage-group-wrapper">
          <div className="mypage-group-4">
            <div className="mypage-frame-12">
              <div className="mypage-frame-13">
                <div className="mypage-frame-14">
                  <div className="mypage-frame-15">
                    <div className="mypage-group-7">
                      <div
                        className="mypage-icon-home-mono-wrapper"
                        onClick={() => handleNavigate("/Home")}
                      >
                        <img
                          className="mypage-img-2"
                          alt="Icon home mono"
                          src={iconHomeMono}
                        />
                      </div>
                    </div>
                    <div className="mypage-group-7">
                      <div
                        className="mypage-frame-16"
                        onClick={() => handleNavigate("/Product")}
                      >
                        <img
                          className="mypage-img-2"
                          alt="Icon stack up"
                          src={iconStackUpSquare}
                        />
                      </div>
                    </div>
                    <div className="mypage-group-8">
                      <div
                        className="mypage-frame-16"
                        onClick={() => handleNavigate("/earnmoney")}
                      >
                        <img
                          className="mypage-img-2"
                          alt="Icon coin mono"
                          src={iconCoinMono}
                        />
                      </div>
                    </div>
                    <div className="mypage-group-9">
                      <div
                        className="mypage-icon-user-mono-wrapper"
                        onClick={() => handleNavigate("/mypage")}
                      >
                        <img
                          className="mypage-img-2"
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
        <img className="mypage-backgorund" alt="Background" src={backgorund} />
      </div>
    </div>
  );
};
