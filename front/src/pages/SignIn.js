import React, { useState } from 'react';
import { Link } from 'react-router-dom';

async function signInUser(credentials) {
    return fetch('http://localhost:8080/members/signin',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => {
        if(response.status !== 200) {
            if(response.status === 401) {
                alert("Wrong ID or Password");
            } else {
                alert(response.status)
            }
        }
        return response.status;
    });
}

function Signin() {
    
    const [userId, setInputUserId] = useState('')
    const [password, setInputPwd] = useState('')
 
	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputUserId = (e) => {
        setInputUserId(e.target.value)
    }
 
    const handleInputPwd = (e) => {
        setInputPwd(e.target.value)
    }

	// login 버튼 클릭 이벤트
    const handleSubmit = async e => {
        e.preventDefault();

        const response = await signInUser({
            userId,
            password
        });

        if (response === 200) {
            window.location.href = '/MemberHomeDashboard'
        } else {
            setInputUserId('');
            setInputPwd('');
        }
    }
 
    return(
        <div className="min-h-screen flex items-center justify-center bg-yellow-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="p-10 border-2 shadow-md rounded bg-gray-50 max-w-md w-full space-y-8">
                <div>
                    <img className="mx-auto h-28 w-auto" src="/img/Logo.svg" alt="Logo"/>
                    <h2 className="mt-2 text-center text-3xl font-noto-sans font-bold text-gray-900">
                        로 그 인
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-800 font-noto-sans font-medium text-green-500">
                        슬기롭고 안전한 봉사활동을 시작하세요
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true"/>
                    {/* User ID & Password Input Box*/}
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="username" className="text-gray-900 font-sans text-sm font-semibold">ID</label>
                            <input id="username" name="username" type="text" required className="my-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="아이디" value={userId} onChange={handleInputUserId}/>
                        </div>
                        <div>
                            <label htmlfo="password" className="text-gray-900 font-sans text-sm font-semibold">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="my-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="비밀번호" value={password} onChange={handleInputPwd}/>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        {/* Username & Password Information Remember CheckBox*/}
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded"/>
                            <label htmlfo="remember-me" className="ml-2 font-noto-sans block text-sm text-gray-900">
                                로그인 상태 유지
                            </label>
                        </div>
                        {/* Find Password Link */}
                        <div className="text-sm">
                            <Link to="/resetPassword" className="font-medium font-noto-sans text-green-600 hover:text-green-400">
                                비밀번호 찾기
                            </Link>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-noto-snas font-bold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-green-50 group-hover:text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                            로그인
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
 
export default Signin;