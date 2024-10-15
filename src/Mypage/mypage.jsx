import React from "react";
/*import { StatusBar } from "../test/StatusBar/StatusBar";*/
import backgorund from "./backgorund.png";
import frame33617 from "./frame-33617.svg";
import iconArrowLeftSmallMono from "./icon-arrow-left-small-mono.svg";
import iconHomeMono from "./icon-home-mono.svg";
import iconUserMono from "./icon-user-mono.svg";
import iconStackUpSquare from "../panelhome/Home/icon-stack-up-square-mono.svg";
import iconCoinMono from "../panelhome/Home/icon-coin-mono.svg";
import "./style.css";

export const Mypage = () => {
  return (
    <div className="mypage">
      <div className="div">
        <div className="frame">
          <div className="group">
            <div className="frame-2">
              <div className="group-2">
                <div className="div-wrapper">
                  <div className="text-wrapper">알람 설정</div>
                </div>
                <div className="frame-3">
                  <div className="frame-4">
                    <div className="frame-4">
                      <div className="frame-5">
                        <div className="frame-6">
                          <div className="text-wrapper-2">소식 알림</div>
                        </div>
                        <div className="frame-7">
                          <div className="ellipse" />
                          <div className="ellipse-2" />
                        </div>
                      </div>
                      <div className="rectangle" />
                    </div>
                  </div>
                  <div className="frame-4">
                    <div className="frame-5">
                      <div className="frame-6">
                        <div className="text-wrapper-2">마케팅 정보 알림</div>
                      </div>
                      <div className="frame-8">
                        <div className="ellipse-2" />
                        <div className="ellipse-3" />
                      </div>
                    </div>
                    <div className="rectangle" />
                  </div>
                </div>
              </div>
              <div className="group-2">
                <div className="div-wrapper">
                  <div className="text-wrapper">고객센터</div>
                </div>
                <div className="frame-3">
                  <div className="frame-4">
                    <div className="frame-9">
                      <div className="frame-6">
                        <div className="text-wrapper-2">문의하기</div>
                      </div>
                      <img
                        className="icon-arrow-left"
                        alt="Icon arrow left"
                        src={iconArrowLeftSmallMono}
                      />
                    </div>
                    <div className="rectangle" />
                  </div>
                  <div className="frame-4">
                    <div className="frame-10">
                      <div className="frame-6">
                        <div className="text-wrapper-3">버전 정보</div>
                      </div>
                      <div className="text-wrapper-4">0.0.1</div>
                    </div>
                    <div className="rectangle" />
                  </div>
                </div>
              </div>
              <div className="group-3">
                <div className="div-wrapper">
                  <div className="text-wrapper">약관 및 정책</div>
                </div>
                <div className="frame-3">
                  <div className="frame-4">
                    <div className="frame-4">
                      <div className="frame-9">
                        <div className="frame-6">
                          <div className="text-wrapper-2">이용약관</div>
                        </div>
                        <img
                          className="icon-arrow-left"
                          alt="Icon arrow left"
                          src={iconArrowLeftSmallMono}
                        />
                      </div>
                      <div className="rectangle" />
                    </div>
                  </div>
                  <div className="frame-4">
                    <div className="frame-9">
                      <div className="frame-6">
                        <div className="text-wrapper-2">개인정보처리방침</div>
                      </div>
                      <img
                        className="icon-arrow-left"
                        alt="Icon arrow left"
                        src={iconArrowLeftSmallMono}
                      />
                    </div>
                    <div className="rectangle" />
                  </div>
                  <div className="frame-4">
                    <div className="frame-9">
                      <div className="frame-6">
                        <div className="text-wrapper-2">위치정보이용약관</div>
                      </div>
                      <img
                        className="icon-arrow-left"
                        alt="Icon arrow left"
                        src={iconArrowLeftSmallMono}
                      />
                    </div>
                    <div className="rectangle" />
                  </div>
                  <div className="frame-4">
                    <div className="frame-9">
                      <div className="frame-6">
                        <div className="text-wrapper-2">로그아웃</div>
                      </div>
                      <img
                        className="icon-arrow-left"
                        alt="Icon arrow left"
                        src={iconArrowLeftSmallMono}
                      />
                    </div>
                    <div className="rectangle" />
                  </div>
                </div>
              </div>
              <div className="frame-wrapper">
                <div className="frame-11">
                  <div className="text-wrapper-5">탈퇴하기</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="img-wrapper">
          <img className="img" alt="Frame" src={frame33617} />
        </div>
        <div className="group-wrapper">
          <div className="group-4">
            <div className="group-5">
              <div className="group-6" />
            </div>
            <div className="frame-12">
              <div className="frame-13">
                <div className="frame-14">
                  <div className="frame-15">
                    <div className="group-7">
                      <div className="icon-home-mono-wrapper">
                        <img
                          className="img-2"
                          alt="Icon home mono"
                          src={iconHomeMono}
                        />
                      </div>
                    </div>
                    <div className="group-7">
                      <div className="frame-16">
                        <img
                          className="img-2"
                          alt="Icon home mono"
                          src={iconStackUpSquare}
                        />
                      </div>
                    </div>
                    <div className="group-8">
                      <div className="frame-16">
                        <img
                          className="img-2"
                          alt="Icon coin mono"
                          src={iconCoinMono}
                        />
                      </div>
                    </div>
                    <div className="group-9">
                      <div className="icon-user-mono-wrapper">
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
        <img className="backgorund" alt="Backgorund" src={backgorund} />
      </div>
    </div>
  );
};
