import React from "react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-row justify-around items-center pt-6">
        {/*  Logo Image */}
        <div className="ml-24">
          <Link to="/">
            <span className="sr-only">Workflow</span>
            <img className="h-16 w-auto" src="/img/LogoGreen.svg" alt="Logo" />
          </Link>
        </div>

        {/* Sign In & Sign Up Button */}
        <div className="flex items-center justify-center mt-6">
          {/* Navigation */}
          <nav className="text-xl tracking-widest font-sebang-gothic text-green-600">
            <Link to="/Introduction" className="m-5">
              소 &nbsp; 개
            </Link>
            <Link to="/Notification" className="m-5">
              알 &nbsp; 림
            </Link>
            <Link to="/Home_Education" className="m-5">
              교 &nbsp; 육
            </Link>
          </nav>
          <div>
            <Link
              to="/user/signin"
              className="ml-6 w-32 h-10 whitespace-nowrap inline-flex items-center justify-center border border-transparent rounded-full shadow-sm text-sm font-sebang-gothic font-small text-gray-500 bg-white hover:bg-gray-100"
            >
              로 그 인
            </Link>
            <Link
              to="/user/signup"
              className="ml-6 w-32 h-10 whitespace-nowrap inline-flex items-center justify-center border border-transparent rounded-full shadow-sm text-sm font-sebang-gothic font-small text-white bg-green-600 hover:bg-green-700"
            >
              회 원 가 입
            </Link>
            <Link
              to="/Disabled"
              className="ml-6 w-32 h-10 whitespace-nowrap inline-flex items-center justify-center border border-transparent rounded-full shadow-sm text-sm font-sebang-gothic font-small text-white bg-green-600 hover:bg-green-700"
            >
              시 각 보 조 페 이 지
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
