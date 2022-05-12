import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import VolunteerPaginations from './VolunteerPaginations';
import UserTask from './UserTask';

function MemberVolunteer() {     

    return (
      <div className="min-h-screen flex item-center justify-between bg-gray-yellow py-12 px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen p-12 boder border-2 shadow-md rounded-none item-center justify-center bg-gray-50 max-w-max space-y-20">
          <div>
            <img
              className="mx-auto h-20 w-auto"
              src="/img/Logo.svg"
              alt="Logo"
            />
            <Link to="MemberHomeMyPage">
              <div className="mt-14 shadow-md rounded-full bg-green-600">
                <p className="text-center text-xl font-sebang-gothic text-white">
                  마이페이지
                </p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <Link to="/MemberHomeDashboard">
              <div className="flex flex-row space-x-8">
                <img
                  className="w-10 h-10"
                  src="/img/Asset 11.png"
                  alt="dashboard"
                />
                <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-gray-400 hover:text-gray-600">
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
            <Link to="/Home_Class_List">
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
                  src="/img/Asset 20.png"
                  alt="volunteer"
                />
                <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-black hover:text-gray-600">
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
                <img
                  className="w-10 h-10"
                  src="/img/Asset 16.png"
                  alt="notice"
                />
                <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-gray-400 hover:text-gray-600">
                  공지사항
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-grow p-12 border border-2 shadow-md rounded-none item-center justify-start bg-gray-50 w-40 mx-4 space-y-4">
          <div className="min-w-full flex flex-col space-y-8">
            <div className="flex">
              <div className="text-sm font-sebang-gothic  text-gray-600">
                <a href="/">SINABRO {">"} &nbsp;</a>
              </div>
              <div className="text-sm font-sebang-gothic text-green-700">
                <a href="/MemberVolunteer"> 봉사 활동</a>
              </div>
            </div>
            <h1 className="text text-left text-2xl font font-sebang-gothic front-bold text-black">
              봉사 활동 관련 공지사항을 안내해드립니다.
            </h1>            
            <div>             
            {/* <Posts posts={data.boards.content}></Posts>                */}
              <VolunteerPaginations                
              ></VolunteerPaginations>              
            </div>
          </div>
        </div>

        <div className="p-12 boder border-2 shadow-md rounded-none item-center justify-center bg-gray-50 max-w-max max-h-max space-y-4">
          <UserTask></UserTask>
        </div>
      </div>
    );
}

export default MemberVolunteer;