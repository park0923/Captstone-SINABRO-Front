import React from 'react';
import HomeHeader from './HomeHeader';

async function getBoardList(credentials) {
    return fetch('http://localhost:8080/members/signin',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => response.json());
}


function Notification() {
    

    return (
        <div className="relative bg-no-repeat bg-cover relative min-h-screen bg-home-spotted-pattern">
            <HomeHeader />
            <div className="flex justify-center content-center my-14">
                
                <div className="m-8 px-2">
                        <div className="flex">
                        <div className="text-sm font-sebang-gothic  text-gray-600">
                        <a href='/'>SINABRO {'>'} &nbsp;</a>
                        </div>
                    
                        <div className="text-sm font-sebang-gothic text-green-700">
                        <a href='/Notification'> 알 림</a>
                        </div>
                        </div>

                        <h1 class="my-4 text-xl font-sebang-gothic leading-normal tracking-wide">
                        봉사 활동 관련 공지사항을 안내해드립니다.
                    </h1>
                    <form className="my-4 flex justify-between appearance-none  relative block w-full font-sebang-gothic px-2 py-2 border-2 border-black">
                        <div className="text-xl py-2 font-sebang-gothic">검색 구분</div>
                        <div className="select-text py-3 px-5 border-gray-500">
                            <select>
                                <option>전체</option>
                                <option>1. 첫번째 옵션</option>
                                <option>2. 두번째 옵션</option>
                                <option>3. 세번째 옵션</option>
                            </select>
                        </div>
                        <input type="text" placeholder="검색어를 입력해주세요" className="mx-5 w-80 border-gray-500 px-2 py-1 bg-gray-300 "/>
                        <button type="submit" className="w-32 h-10 whitespace-nowrap inline-flex items-center justify-center rounded-lg shadow-sm text-sm font-sebang-gothic text-white bg-green-600 hover:bg-green-700">
                            조  회
                        </button>
                    </form>
                        <div className="table w-full px-3 p-2 ">
                                <thead className="bg-gray-100 border-b-2  ">
                                   <th className="p-2 text-xl text-gray-500 font-sebang-gothic tracking-wide text-left">NO</th>
                                   <th className="p-2 text-xl text-gray-500 font-sebang-gothic tracking-wide text-left">제목</th>
                                   <th className="p-2 text-xl text-gray-500 font-sebang-gothic tracking-wide text-left">작성일</th>
                                </thead>
                                <tr className="bg-white">
                                    <tb className="p-2 text-sm font-sebang-gothic ">7</tb>
                                    <td className="p-2 text-sm font-sebang-gothic">봉사 활동시 유의 사항 안내</td>
                                    <td className="p-2 text-sm font-sebang-gothic">2022.01.05</td>
                                </tr>
                                <tr className="bg-gray-100" >
                                    <tb className="p-2 text-sm font-sebang-gothic ">6</tb>
                                    <td className="p-2 text-sm font-sebang-gothic">봉사 활동시 유의 사항 안내</td>
                                    <td className="p-2 text-sm font-sebang-gothic">2022.01.04</td>
                                </tr>
                                <tr className="bg-white">
                                    <tb className="p-2 text-sm font-sebang-gothic">5</tb>
                                    <td className="p-2 text-sm font-sebang-gothic">봉사 작업 확인 서비스 시스템 개선 작업</td>
                                    <td className="p-2 text-sm font-sebang-gothic">2022.01.03</td>
                                </tr>
                                <tr  className="bg-gray-100">
                                    <tb className="p-2 text-sm font-sebang-gothic">4</tb>
                                    <td className="p-2 text-sm font-sebang-gothic">필수 시청 자료 안내</td>
                                    <td className="p-2 text-sm font-sebang-gothic">2022.01.02</td>
                                </tr>
                                <tr className="bg-white">
                                    <tb className="p-2 text-sm font-sebang-gothic">3</tb>
                                    <td className="p-2 text-sm font-sebang-gothic">시나브로 회원약관 개정 안내</td>
                                    <td className="p-2 text-sm font-sebang-gothic">2022.01.01</td>
                                </tr>
                                <tr  className="bg-gray-100">
                                    <tb className="p-2 text-sm font-sebang-gothic">2</tb>
                                    <td className="p-2 text-sm font-sebang-gothic">시나브로 시스템 긴급 점검 안내</td>
                                    <td className="p-2 text-sm font-sebang-gothic">2022.01.01</td>
                                </tr>  
                            </div>
                        <div className="flex px-80">
                            <button className="h-8 w-8 p-1 hover:bg-gray-300 rounded ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                        </svg></button>
                            <div className="flex">
                            <button className="h-8 w-8 p-1 hover:bg-gray-300 rounded font-sebang-gothic">1</button>
                            <button className="h-8 w-8 p-1 hover:bg-gray-300 rounded font-sebang-gothic">2</button>
                            </div>
                            <button className="h-8 w-8 p-1 hover:bg-gray-300 rounded"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                            </svg></button>
                        </div>
                    </div>
                    
                    <div className="py-2 px-6 m-1">
                    <span className="sr-only">Introduce Homepage</span>
                    </div>
                </div>
            </div>
    )
};

export default Notification;