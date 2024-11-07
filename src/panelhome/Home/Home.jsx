import React, { useEffect, useState } from "react";
import { IconPlusMono } from "../IconPlusMono/IconPlusMono";
import { Box } from "../Bottom/bottom";
import { Logo } from "../Logo/logo";
import backgorund from "./backgorund.png";
import cloudFill2 from "./cloud-fill-2.svg";
import cloudFill3 from "./cloud-fill-3.svg";
import cloudFill from "./cloud-fill.svg";
import highlight from "./highlight.png";
import iconArrowRightSmallMono from "./icon-arrow-right-small-mono.svg";
import iconCoinMono from "./icon-coin-mono.svg";
import iconDotsFourHorizontalMono from "./icon-dots-four-horizontal-mono.svg";
import iconHomeMono from "./icon-home-mono.svg";
import iconStackUpSquareMono from "./icon-stack-up-square-mono.svg";
import iconUserMono from "./icon-user-mono.svg";
import image2 from "./image-2.svg";
import image3 from "./image-3.svg";
import image from "./image.svg";
import layer1 from "./layer-1.svg";
import sunColor from "./sun-color.svg";
import text from "./text.svg";
import "./style.css";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 import
import { useParams } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 아이콘 클릭 시 이동할 경로 설정
  const handleNavigate = (path) => {
    navigate(path);
  };

  // 클릭 이벤트 핸들러 함수
  const handleNavigateToDetail = (panelId) => {
    navigate(`/panelmain/${panelId}`);
  };

  const [panels, setPanels] = useState([]); // State to store the fetched panels data

  // Fetch solar panel data on component mount
  useEffect(() => {
    const fetchPanels = async () => {
      try {
        const response = await fetch("https://api.xolar.co.kr/solar-panels");
        const data = await response.json();
        setPanels(data); // Store data in state
      } catch (error) {
        console.error("Failed to fetch solar panel data:", error);
      }
    };
    fetchPanels();
  }, []);

  return (
    <div className="home-home">
      <div className="home-div">
        <div className="home-logo">
          <Logo />
          <IconPlusMono />
        </div>
        <div className="home-frame">
          <div className="home-text-wrapper">
            <img className="home-img" alt="Text" src={text} />
          </div>
          <div className="home-frame-2">
            <div className="home-frame-3">
              <div className="home-frame-wrapper">
                <div className="home-frame-4">
                  <div className="home-text-wrapper-2">
                    전체 <strong>4개</strong>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="home-crypto-wallet"
              onClick={() => handleNavigateToDetail(1)}
            >
              <div className="home-rectangle-wrapper">
                <div className="home-rectangle" />
              </div>
              <div className="home-frame-5">
                <div className="home-frame-6">
                  <div className="home-head">
                    <div className="home-label">
                      <div className="home-div-wrapper">
                        <div className="home-text-wrapper-3">논산시</div>
                      </div>
                    </div>
                    <div className="home-icon-dots-four-wrapper">
                      <img
                        className="home-icon-dots-four"
                        alt="Icon dots four"
                        src={iconDotsFourHorizontalMono}
                      />
                    </div>
                  </div>
                  <div className="home-total">
                    <p className="home-element-kwh">
                      <span className="home-span">928</span>
                      <span className="home-text-wrapper-4">&nbsp;</span>
                      <span className="home-text-wrapper-5">kWh</span>
                    </p>
                    <div className="home-iconography">
                      <div className="home-element">
                        <div className="home-overlap-group">
                          <img
                            className="home-image"
                            alt="Image"
                            src={image3}
                          />
                          <img
                            className="home-image-2"
                            alt="Image"
                            src={image2}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-frame-7">
                  <div className="home-frame-8">
                    <div className="home-frame-9">
                      <div className="home-text-wrapper-6">작동 대기</div>
                      <div className="home-text-wrapper-7">・</div>
                      <div className="home-text-wrapper-8">논산시 성동면</div>
                    </div>
                  </div>
                  <div className="home-text-wrapper-9">24°C</div>
                </div>
              </div>
            </div>
            <div
              className="home-crypto-wallet"
              onClick={() => handleNavigateToDetail(1)}
            >
              <div className="home-rectangle-wrapper">
                <div className="home-rectangle" />
              </div>
              <div className="home-frame-5">
                <div className="home-frame-6">
                  <div className="home-head">
                    <div className="home-label">
                      <div className="home-div-wrapper">
                        <div className="home-text-wrapper-3">아산시</div>
                      </div>
                    </div>
                    <div className="home-icon-dots-four-wrapper">
                      <img
                        className="home-icon-dots-four"
                        alt="Icon dots four"
                        src={iconDotsFourHorizontalMono}
                      />
                    </div>
                  </div>
                  <div className="home-total">
                    <p className="home-element-kwh">
                      <span className="home-span">1,240</span>
                      <span className="home-text-wrapper-4">&nbsp;</span>
                      <span className="home-text-wrapper-5">kWh</span>
                    </p>
                    <div className="home-iconography">
                      <div className="home-element">
                        <div className="home-overlap-group">
                          <img
                            className="home-image"
                            alt="Image"
                            src={image3}
                          />
                          <img
                            className="home-image-2"
                            alt="Image"
                            src={image2}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-frame-7">
                  <div className="home-frame-8">
                    <div className="home-frame-9">
                      <div className="home-text-wrapper-6">정상 작동 중</div>
                      <div className="home-text-wrapper-7">・</div>
                      <div className="home-text-wrapper-8">아산시 인주면</div>
                    </div>
                  </div>
                  <div className="home-text-wrapper-9">22°C</div>
                </div>
              </div>
            </div>
            <div
              className="home-crypto-wallet"
              onClick={() => handleNavigateToDetail(1)}
            >
              <div className="home-rectangle-wrapper">
                <div className="home-rectangle" />
              </div>
              <div className="home-frame-5">
                <div className="home-frame-6">
                  <div className="home-head">
                    <div className="home-label">
                      <div className="home-div-wrapper">
                        <div className="home-text-wrapper-3">충주시</div>
                      </div>
                    </div>
                    <div className="home-icon-dots-four-wrapper">
                      <img
                        className="home-icon-dots-four"
                        alt="Icon dots four"
                        src={iconDotsFourHorizontalMono}
                      />
                    </div>
                  </div>
                  <div className="home-total">
                    <p className="home-element-kwh">
                      <span className="home-span">1,129</span>
                      <span className="home-text-wrapper-4">&nbsp;</span>
                      <span className="home-text-wrapper-5">kWh</span>
                    </p>
                    <div className="home-iconography">
                      <div className="home-element">
                        <div className="home-overlap-group">
                          <img
                            className="home-image"
                            alt="Image"
                            src={image3}
                          />
                          <img
                            className="home-image-2"
                            alt="Image"
                            src={image2}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-frame-7">
                  <div className="home-frame-8">
                    <div className="home-frame-9">
                      <div className="home-text-wrapper-6">정상 작동 중</div>
                      <div className="home-text-wrapper-7">・</div>
                      <div className="home-text-wrapper-8">충주시 주덕읍</div>
                    </div>
                  </div>
                  <div className="home-text-wrapper-9">24°C</div>
                </div>
              </div>
            </div>
            <div
              className="home-crypto-wallet"
              onClick={() => handleNavigateToDetail(1)}
            >
              <div className="home-rectangle-wrapper">
                <div className="home-rectangle" />
              </div>
              <div className="home-frame-5">
                <div className="home-frame-6">
                  <div className="home-head">
                    <div className="home-label">
                      <div className="home-div-wrapper">
                        <div className="home-text-wrapper-3">청주시</div>
                      </div>
                    </div>
                    <div className="home-icon-dots-four-wrapper">
                      <img
                        className="home-icon-dots-four"
                        alt="Icon dots four"
                        src={iconDotsFourHorizontalMono}
                      />
                    </div>
                  </div>
                  <div className="home-total">
                    <p className="home-element-kwh">
                      <span className="home-span">831</span>
                      <span className="home-text-wrapper-4">&nbsp;</span>
                      <span className="home-text-wrapper-5">kWh</span>
                    </p>
                    <div className="home-iconography">
                      <div className="home-element">
                        <div className="home-overlap-group">
                          <img
                            className="home-image"
                            alt="Image"
                            src={image3}
                          />
                          <img
                            className="home-image-2"
                            alt="Image"
                            src={image2}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-frame-7">
                  <div className="home-frame-8">
                    <div className="home-frame-9">
                      <div className="home-text-wrapper-6">정상 작동 중</div>
                      <div className="home-text-wrapper-7">・</div>
                      <div className="home-text-wrapper-8">청주시 서원구</div>
                    </div>
                  </div>
                  <div className="home-text-wrapper-9">24°C</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-group-wrapper">
        <div className="product-group-4">
          <div className="product-group-5"></div>
          <div className="product-frame-26">
            <div className="product-frame-27">
              <div className="product-frame-28">
                <div className="product-frame-29">
                  <div className="home-group-11">
                    <div
                      className="product-frame-30"
                      onClick={() => handleNavigate("/Home")}
                    >
                      <img
                        className="product-img-2"
                        alt="Icon home mono"
                        src={iconHomeMono}
                      />
                    </div>
                  </div>
                  <div
                    className="home-group-8"
                    onClick={() => handleNavigate("/Product")}
                  >
                    <div className="product-frame-31">
                      <img
                        className="product-img-2"
                        alt="Icon stack up"
                        src={iconStackUpSquareMono}
                      />
                    </div>
                  </div>
                  <div
                    className="home-group-9"
                    onClick={() => handleNavigate("/Earnmoney")}
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
                    className="home-group-9"
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
  );
};
