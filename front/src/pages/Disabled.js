import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Disabled_Header from "./Disabled_Header";

const Disabled = () => {
  let [scale, setScale] = useState(1);
  let [textColor, setTextColor] = useState("black");

  const zoom = () => {
    document.body.style.zoom = scale;
  };

  useEffect(() => {
    zoom();
  }, [scale]);

  const onSelect = (e) => {
    const color = e.target.value;
    setTextColor(color);
  };

  useEffect(() => {
    let colorCode = "#000000";
    switch (textColor) {
      case "black":
        colorCode = "#000000";
        break;
      case "green":
        colorCode = "#00ff00";
        break;
      case "white":
        colorCode = "#ffffff";
        break;
    }

    document.body.style.color = colorCode;

    const fontColorTargets = document.getElementsByClassName("font-color");
    for (let i = 0; i < fontColorTargets.length; i++) {
      fontColorTargets.item(i).style.color = colorCode;
    }
  }, [textColor]);

  const zoomIn = () => {
    setScale(scale * 1.1);
  };
  const zoomOut = () => {
    setScale(scale * 0.9);
  };

  return (
    <div className="relative bg-no-repeat bg-cover relative min-h-screen bg-home-spotted-pattern">
      <Disabled_Header />

      <div className="flex justify-center content-center my-14">
        <h1 class="my-4 text-4xl font-sebang-gothic font-bold">
          시나브로(SINABRO)
          <br />
          <div className="my-3 font-sebang-gothic font-thin text-base">
            <p>통합봉사포털 시나브로를 이용해주셔서 감사합니다.</p>
            <p>
              본 사이트는 시각장애인 및 노인 모두 키보드만으로도 쉽게 이용할 수
              있습니다.
            </p>
            <p>자세한 사항은 도움말을 참고하세요</p>
          </div>
          <div class="border-solid border-2 border-green-600 bg-white">
            <div className="font-sebang-gothic text-base">
              <div className="flex justify-center">
                원하시는 환경으로 설정할 수 있습니다.
              </div>
              <div class="border-solid border-2 border-black full bg-black">
                <form>
                  <div className="text-sm text-white font-thin ">
                    <div className=" font font-sebang-gothic front-bold text-lg ">
                      <div className="ml-48">
                        글씨크기조절 &nbsp;
                        <button
                          type="button"
                          class="px-2 py-1 border border-black bg-white text-yellow-400"
                          onClick={() => zoomIn()}
                        >
                          +
                        </button>
                        &nbsp;
                        <button
                          type="button"
                          class="px-2 py-1 border border-black  bg-white text-yellow-400"
                          onClick={() => zoomOut()}
                        >
                          -
                        </button>
                        &nbsp; &nbsp; &nbsp; 글씨색선택 &nbsp;
                        <select
                          className='text-black "text-color"'
                          id="textColorBox"
                          onChange={(e) => {
                            onSelect(e);
                          }}
                        >
                          <option value="black" selected>
                            검정색
                          </option>
                          <option value="white">흰색</option>
                          <option value="green">녹색</option>
                        </select>
                        {/* &nbsp; 다크모드 &nbsp;
                      <button className="bg-blend-darken">배경색 변경</button>
                      
                      <select className='text-black "bg-color"'>
                        <option value="black" selected>
                          검정색
                        </option>
                        <option value="white">흰색</option>
                        <option value="green">녹색</option>
                      </select>{" "}
                      */}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="font-thin">
                다음 항목으로 이동하려면 Tab키를, 이전 항목으로 이동하려면
                Shift+Tab키를 눌러주세요.
                <br></br>원하는 화면으로 이동하려면 Enter키를 누르세요.
              </div>
            </div>
          </div>
          <span class="inline-grid grid-cols-2 gap-4 place-content-center">
            <div className="py-3">
              <Link to="/Notification">
                <button
                  className={`ml-10 w-80 h-10 whitespace-nowrap inline-flex items-center justify-center border border-transparent rounded-full shadow-sm text-2xl font-sebang-gothic font-bold bg-green-400 hover:bg-gray-100`}
                >
                  <div className="font-color">공지 사항</div>
                </button>
              </Link>
            </div>
            <div className="py-3">
              <Link to="/Disabled_write">
                <button className=" w-80 h-10 whitespace-nowrap inline-flex items-center justify-center border border-transparent rounded-full shadow-sm text-2xl font-sebang-gothic font-bold text-black bg-green-400 hover:bg-gray-100">
                  <div className="font-color">봉사 요청서 작성</div>
                </button>
              </Link>
            </div>
            <div className="py-3">
              <Link to="/Disabled_MyPage">
                <button className=" ml-10 w-80 h-10 whitespace-nowrap inline-flex items-center justify-center border border-transparent rounded-full shadow-sm text-2xl font-sebang-gothic font-bold text-black bg-green-400 hover:bg-gray-100">
                  <div className="font-color">나의 신청 목록</div>
                </button>
              </Link>
            </div>
            <div className="py-3">
              <Link to="/Disabled_main">
                <button className=" mr-20 w-80 h-10 whitespace-nowrap inline-flex items-center justify-center border border-transparent rounded-full shadow-sm text-2xl font-sebang-gothic font-bold text-black bg-green-400 hover:bg-gray-100">
                  <div className="font-color"> 로그아웃</div>
                </button>
              </Link>
            </div>
            <div className="py-3 justify-center">
              <Link to="/wordtesseract">
                <button className="ml-10 w-80 h-10 whitespace-nowrap inline-flex items-center justify-center border border-transparent rounded-full shadow-sm text-2xl font-sebang-gothic font-bold text-black bg-green-400 hover:bg-gray-100">
                  <div className="font-color"> 글자 추출하기</div>
                </button>
              </Link>
            </div>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Disabled;
