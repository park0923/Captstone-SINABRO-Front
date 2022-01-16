import React, { useState, useEffect } from 'react';
import { usePassWordValidation, makeErrMsg } from "pages/usePasswordValidation";

async function signUpUser(credentials) {
    console.log(JSON.stringify(credentials))
    return fetch('http://localhost:8080/members',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => response.json());
}

function SignUp() {
    const [inputs, setInputs] = useState({
        userId: "",
        password: "",
        passwordAgain: "", 
        email: "",
        username: ""
    })

    const {
        userId, password, passwordAgain, email, username
    } = inputs;

    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault();

        const response = await signUpUser({
            userId,
            email,
            password,
            username
        });

        console.log(response.email)
        if (response.email === email) {
            document.location.href = '/user/signin'
        } 
    }

    useEffect(() => {
    }, [password, passwordAgain]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-yellow-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="p-10 border-2 shadow-md rounded bg-gray-50 max-w-md w-full space-y-8">
                <div>
                    <img className="mx-auto h-28 w-auto" src="/img/Logo.svg" alt="Logo"/>
                    <h2 className="mt-2 text-center text-3xl font-noto-sans font-bold text-gray-900">
                        회  원  가  입
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-800 font-noto-sans font-medium text-green-500">
                        회원가입 후 온라인 봉사 활동을 시작하세요!
                    </p>
                    <form className="mt-8 space-y-6" novalidation="true" onSubmit={handleSubmit} >
                        <div className="rounded-md shadow-sm -space-y-px">
                            {/* User name Input Box*/}
                            <div>
                                <label htmlFor="username" className="text-gray-900 font-sans text-sm font-semibold">Username</label>
                                <input type="text" required name="username" placeholder="닉네임" value={username} onChange={onChange} className="my-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"/>
                            </div>
                            {/* User ID Input Box*/}
                            <div>
                                <label htmlFor="userID" className="text-gray-900 font-sans text-sm font-semibold">ID</label>
                                <input type="text" required name="userId" placeholder="아이디" value={userId.value} onChange={onChange} className="my-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"/>
                            </div>
                            <div>
                                {/* Password Input Box*/}
                                <label htmlFor="password" className="text-gray-900 font-sans text-sm font-semibold">Password</label>
                                <input type="password" required name="password" placeholder="비밀번호" value={password} onChange={onChange} className="my-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"/>
                                {/* Re-entering Password Input Box*/}
                                <label htmlFor="re-entering password" className="text-gray-900 font-sans text-sm font-semibold">Reconfirm Password</label>
                                <input type="password" required name="passwordAgain" placeholder="비밀번호 재확인" value={passwordAgain} onChange={onChange} className="my-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"/>
                            </div>
                            {/* Re-entering Password Input Box*/}
                            <div>
                                <label htmlFor="email" className="text-gray-900 font-sans text-sm font-semibold">Email</label>
                                <input type="email" required name="email" placeholder="이메일" value={email} onChange={onChange} className="my-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"/>
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
                                회원가입
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;