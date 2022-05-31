import React from "react";
import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <div className="min-h-screen flex item-center justify-center bg-yellow-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="my-20 p-10 border-2 shadow-md rounded bg-gray-50 max-w-md w-full min-h-full space-y-8">
        <div>
          <img className="mx-auto h-28 w-auto" src="/img/Logo.svg" alt="Logo" />
          <h2 className="mt-2 text-center text-3xl font-noto-sans font-bold text-gray-900">
            비밀번호 찾기
          </h2>
          <p className="mt-3 text-center text-base font-noto-sans font-medium text-gray-900">
            e-mail 주소를 입력해주세요. 입력한 주소로 암호를 재설정 할 수 있는
            링크를 받을 수 있습니다.
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="email"
              className="text-gray-900 font-sans text-sm font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              required
              name="userEmail"
              placeholder="이메일"
              value={""}
              onChange={""}
              className="my-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-noto-snas font-bold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Continue
            </button>
          </div>
        </form>
        <div className="flex items-center justify-around">
          <div>
            <p className="mt-2 text-center text-sm font-noto-sans font-bold text-gray-900">
              회원이 아니신가요?
            </p>
          </div>
          <div className="text-sm">
            <Link
              to="/user/signup"
              className="font-medium font-noto-sans text-green-600 hover:text-green-400"
            >
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
