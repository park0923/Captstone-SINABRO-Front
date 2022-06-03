import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "./Calendar";
import MyChart from "./MyChart";
import UserTask from "./UserTask";

function MemberHomeDashboard() {
  const [value, setValue] = useState(60);
  const [max, setMax] = useState(100);

  return (
    <div className="min-h-screen flex item-center justify-between bg-gray-yellow py-12 px-4 sm:px-6 lg:px-8">
      <div className="min-h-screen p-12 boder border-2 shadow-md rounded-none item-center justify-center bg-gray-50 max-w-max space-y-20">
        <div>
          <img className="mx-auto h-20 w-auto" src="/img/Logo.svg" alt="Logo" />
          <Link to="MemberHomeMyPage">
            <div className="mt-14 shadow-md rounded-full bg-green-600">
              <p className="text-center text-xl font-sebang-gothic text-white">
                마이페이지
              </p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link to="MemberHomeDashboard">
            <div className="flex flex-row space-x-8">
              <img
                className="w-10 h-10"
                src="/img/Asset 18.png"
                alt="dashboard"
              />
              <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-black hover:text-gray-600">
                대시보드
              </p>
            </div>
          </Link>
          <Link to="/Member_Home_Introduction">
            <div className="flex flex-row space-x-8">
              <img
                className="w-10 h-10"
                src="/img/Asset 17.png"
                alt="introduce"
              />
              <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-gray-400 hover:text-gray-600">
                소&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;개
              </p>
            </div>
          </Link>
          <Link to="/MemberHomeEducation">
            <div className="flex flex-row space-x-8">
              <img
                className="w-10 h-10"
                src="/img/Asset 15.png"
                alt="education"
              />
              <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-gray-400 hover:text-gray-600">
                교&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;육
              </p>
            </div>
          </Link>
          <Link to="/MemberVolunteer">
            <div className="flex flex-row space-x-8">
              <img
                className="w-10 h-10"
                src="/img/Asset 13.png"
                alt="volunteer"
              />
              <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-gray-400 hover:text-gray-600">
                봉사활동
              </p>
            </div>
          </Link>
          <Link to="/Member_Home_Inspection">
            <div className="flex flex-row space-x-8">
              <img
                className="w-10 h-10"
                src="/img/Asset 12.png"
                alt="inspection"
              />
              <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-gray-400 hover:text-gray-600">
                검&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;수
              </p>
            </div>
          </Link>
          <Link to="/Member_Home_Notice">
            <div className="flex flex-row space-x-8">
              <img className="w-10 h-10" src="/img/Asset 16.png" alt="notice" />
              <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-gray-400 hover:text-gray-600">
                공지사항
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-grow flex-col p-12 border border-2 item-center justify-start bg-transparent mx-4 h-auto space-y-4">
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl font-sebang-gothic front-bold text-black">
            최근 진행 작업
          </h1>
          <Link
            to=""
            className="mt-2 text-center text-sm font-sebang-gothic text-gray-500 hover:text-gray-700"
          >
            {">"}더보기
          </Link>
        </div>
        <div className="ml-8 flex flex-row space-x-4">
          <div className="p-4 boder border-2 shadow-lg rounded-xl item-center justify-center w-40 h-36 bg-gray-50 space-y-1">
            <img
              className="mx-10 w-10 h-10"
              src="/img/Asset 17.png"
              alt="introduce"
            />
            <h3 className="text-center text-lg font-sebang-gothic front-bold text-black">
              작업 제목
            </h3>
            <p className="text-center text-sm font-sebang-gothic front-normal text-black">
              [ 영상 자막 ]
            </p>
            <p className="text-center text-sm font-sebang-gothic front-normal text-black">
              진행중
            </p>
          </div>
          <div className="p-4 boder border-2 shadow-lg rounded-xl item-center justify-center w-40 h-36 bg-gray-50 space-y-1">
            <img
              className="mx-10 w-10 h-10"
              src="/img/Asset 17.png"
              alt="introduce"
            />
            <h3 className="text-center text-lg font-sebang-gothic front-bold text-black">
              작업 제목
            </h3>
            <p className="text-center text-sm font-sebang-gothic front-normal text-black">
              [ 도서 전자화 ]
            </p>
            <p className="text-center text-sm font-sebang-gothic front-normal text-black">
              진행중
            </p>
          </div>
          <div className="p-4 boder border-2 shadow-lg rounded-xl item-center justify-center w-40 h-36 bg-gray-50 space-y-1">
            <img
              className="mx-10 w-10 h-10"
              src="/img/Asset 17.png"
              alt="introduce"
            />
            <h3 className="text-center text-lg font-sebang-gothic front-bold text-black">
              작업 제목
            </h3>
            <p className="text-center text-sm font-sebang-gothic front-normal text-black">
              [ 도서 전자화 ]
            </p>
            <p className="text-center text-sm font-sebang-gothic front-normal text-black">
              진행중
            </p>
          </div>
          <div className="p-4 boder border-2 shadow-lg rounded-xl item-center justify-center w-40 h-36 bg-gray-50 space-y-1">
            <img
              className="mx-10 w-10 h-10"
              src="/img/Asset 17.png"
              alt="introduce"
            />
            <h3 className="text-center text-lg font-sebang-gothic front-bold text-black">
              작업 제목
            </h3>
            <p className="text-center text-sm font-sebang-gothic front-normal text-black">
              [ 문서 전자화 ]
            </p>
            <p className="text-center text-sm font-sebang-gothic front-normal text-black">
              진행중
            </p>
          </div>
          <div className="p-4 boder border-2 shadow-lg rounded-xl item-center justify-center w-40 h-36 bg-gray-50 space-y-1">
            <img
              className="mx-10 w-10 h-10"
              src="/img/Asset 17.png"
              alt="introduce"
            />
            <h3 className="text-center text-lg font-sebang-gothic front-bold text-black">
              작업 제목
            </h3>
            <p className="text-center text-sm font-sebang-gothic front-normal text-black">
              [ 영상 자막 ]
            </p>
            <p className="text-center text-sm font-sebang-gothic front-normal text-black">
              진행중
            </p>
          </div>
          <div className="p-4 boder border-2 shadow-lg rounded-xl item-center justify-center w-40 h-36 bg-gray-50 space-y-1">
            <img
              className="mx-10 w-10 h-10"
              src="/img/Asset 17.png"
              alt="introduce"
            />
            <h3 className="text-center text-lg font-sebang-gothic front-bold text-black">
              작업 제목
            </h3>
            <p className="text-center text-sm font-sebang-gothic front-normal text-black">
              [ 영상 자막 ]
            </p>
            <p className="text-center text-sm font-sebang-gothic front-normal text-black">
              진행중
            </p>
          </div>
        </div>
        <div className="flex flex-row w-full space-x-12 justify-around">
          <div className="flex flex-col w-1/2 mt-16">
            <h1 className="text-2xl font-sebang-gothic front-bold text-black">
              일주일 진행 현황
            </h1>
            <div className="border-2 shadow-md rounded-xl min-w-full h-80 bg-gray-50 space-y-1">
              <div className="mt-4 mr-8 justify-start">
                <MyChart />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 mt-16">
            <h1 className="text-2xl font-sebang-gothic front-bold text-black">
              마감 일자
            </h1>
            <div className="p-4 border-2 shadow-md rounded-xl item-center justify-center w-65 h-80  bg-gray-50 space-y-1">
              <Calendar />
            </div>
          </div>
        </div>
      </div>

      <div className="p-12 boder border-2 shadow-md rounded-none item-center justify-center bg-gray-50 max-w-max max-h-max space-y-4">
        <UserTask></UserTask>
      </div>
    </div>
  );
}
export default MemberHomeDashboard;
