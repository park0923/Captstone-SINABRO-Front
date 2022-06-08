import React from "react";
import { Link } from "react-router-dom";
import UserTask from "./UserTask";
function Member_Home_Introduction() {
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
                src="/img/Asset 21.png"
                alt="introduce"
              />
              <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-black hover:text-gray-600">
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

      <div className="flex flex-grow p-12 border border-2 shadow-md rounded-none item-center justify-start bg-gray-50 w-40 mx-4 space-y-4">
        <div className="min-w-full flex flex-col space-y-8">
          <div className="py-2 px-12 ml-48">
            <span className="sr-only">Introduce Homepage</span>
            <div className="py-12">
              <img
                className="h-96 w-96"
                src="/img/People.png"
                alt="남녀이미지"
              />
            </div>
            <h1 className=" font font-sebang-gothic front-bold text-5xl  font-extrabold leading-normal text-black">
              온라인 봉사활동 플랫폼
              <br />
              시나브로(SINABRO)
            </h1>
            <div>
              <p class="text-sm font-sebang-gothic py-2 px-2 text-gray-600">
                온라인 봉사활동 플랫폼, 시나브로는 COVID-19으로 <br />
                인해 사회적 기여를 하지 못하는 학생들을 위해 제공되는
                <br /> 온라인 봉사활동 플랫폼입니다.{" "}
              </p>
              <p class="text-sm font-sebang-gothic py-2 px-2 text-gray-600">
                온라인을 통한 다양한 활동을 통해 자신의 재능을 <br /> 기부하며
                봉사할 수 있는 다양한 기회를 제공받을 수 있습니다.
              </p>
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

export default Member_Home_Introduction;
