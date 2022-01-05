import React from 'react';
import { Link } from 'react-router-dom';

function MemberVolunteer() {
    return(
        <div className="min-h-screen flex item-center justify-between bg-gray-yellow py-12 px-4 sm:px-6 lg:px-8">            
            <div className="min-h-screen p-12 boder border-2 shadow-md rounded-none item-center justify-center bg-gray-50 max-w-max space-y-20">
                <div>
                    <img className="mx-auto h-20 w-auto" src="/img/Logo.svg" alt="Logo"/>
                    <div className="mt-14 shadow-md rounded-full bg-green-600">
                        <p className="text-center text-xl font-sans font-normal text-white">
                            마이페이지
                        </p>    
                    </div>                    
                </div>                
                <div className="flex flex-col space-y-4">
                    <Link to="">
                        <div className="flex flex-row space-x-8">
                            <img className="w-10 h-10" src="/img/Asset 11.png" alt="dashboard" />
                            <p className="pt-1 text-justify text-2xl font-sans front-bold text-gray-400 hover:text-gray-600">
                                대시보드
                            </p>
                        </div>                  
                    </Link>
                    <Link to="">
                        <div className="flex flex-row space-x-8">
                            <img className="w-10 h-10" src="/img/Asset 17.png" alt="introduce" />
                            <p className="pt-1 text-justify text-2xl font-sans front-bold text-gray-400 hover:text-gray-600">
                                소&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;개
                            </p>
                        </div>  
                    </Link>
                    <Link to="">
                        <div className="flex flex-row space-x-8">
                            <img className="w-10 h-10" src="/img/Asset 15.png" alt="education" />
                            <p className="pt-1 text-justify text-2xl font-sans front-bold text-gray-400 hover:text-gray-600">
                                교&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;육
                            </p>
                        </div>     
                    </Link>
                    <Link to="/MemberVolunteer">
                        <div className="flex flex-row space-x-8">
                            <img className="w-10 h-10" src="/img/Asset 20.png" alt="volunteer" />
                            <p className="pt-1 text-justify text-2xl font-sans front-bold text-black hover:text-gray-600">
                                봉사활동
                            </p>
                        </div>        
                    </Link>
                    <Link to="">
                        <div className="flex flex-row space-x-8">
                            <img className="w-10 h-10" src="/img/Asset 12.png" alt="inspection" />
                            <p className="pt-1 text-justify text-2xl font-sans front-bold text-gray-400 hover:text-gray-600">
                                검&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;수
                            </p>
                        </div>       
                    </Link>
                    <Link to="">
                        <div className="flex flex-row space-x-8">
                            <img className="w-10 h-10" src="/img/Asset 16.png" alt="notice" />
                            <p className="pt-1 text-justify text-2xl font-sans front-bold text-gray-400 hover:text-gray-600">
                                공지사항
                            </p>
                        </div>       
                    </Link>                                    
                </div>
            </div>          

            <div className="flex flex-grow p-12 border border-2 shadow-md rounded-none item-center justify-start bg-gray-50 max-w-screen-lg space-y-4">
                <div className="min-w-full flex flex-col space-y-8">
                    <div className="flex flex-row space-x-2">
                        <p className="text-justify text-base font-sans front-bold text-gray-400">
                            SINABRO {">"}
                        </p>
                        <p className="text-justify text-base font-sans front-bold text-green-600">
                            봉사활동
                        </p>
                    </div>
                    
                    <h1 className="text text-left text-2xl font font-sans front-bold text-black">
                        진행할 수 있는 봉사 작업을 확인할 수 있습니다.
                    </h1>
                    <div className="h-12 min-w-max max-h-screen border border-2 border-gray-400 rounded-none flex flex-row justify-around space-x-4 bg-gray-50">
                        <p className="my-2 pt-1 text-justify text-base font font-sans front-bold text-black">
                            검색 구분
                        </p>
                        <select className="h-8 my-2 border border-1 border-transparent bg-gray-300">
                            <option>전 체</option>
                            <option>구 분1</option>
                            <option>구 분2</option>
                        </select>
                        <input type="text" placeholder="검색어를 입력하세요." className="h-8 my-2 border border-transparent bg-gray-300"/>    
                        <button type="submit" className="h-8 my-2 group relative justify-center px-4 border border-transparent text-sm font-noto-snas font-bold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                            조 회
                        </button>
                    </div>
                    <div>
                        <table className="mt-8 table-fixed min-w-full justify-center">
                            <thead>
                                <tr>
                                    <th>Song</th>
                                    <th>Artist</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                    <td>Malcolm Lockyer</td>
                                    <td>1961</td>
                                </tr>
                                <tr>
                                    <td>Witchy Woman</td>
                                    <td>The Eagles</td>
                                    <td>1972</td>
                                </tr>
                                <tr>
                                    <td>Shining Star</td>
                                    <td>Earth, Wind, and Fire</td>
                                    <td>1975</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>              
            </div>  

            <div className="p-12 boder border-2 shadow-md rounded-none item-center justify-center bg-gray-50 max-w-max max-h-max space-y-4">
                <div className="flex flex-row space-x-4">
                    <img className="w-10 h-10 boder boder-2 runded-md" src="/img/Asset 17.png" alt="user" />
                    <div>
                        <p className="text-center text-base font-sans font-bold">
                            봉사자이름
                        </p>                        
                        <Link to="" className="text-center text-sm text-gray-500 hover:text-gray-700">
                            로그아웃
                        </Link>
                    </div>
                </div>
                <div className='space-y-4'>
                    <p className="mt-14 text-left text-base font-sans font-bold">
                        진행작업
                    </p>
                    <div className="flex flex-row justify-center space-x-4">
                        <img className="w-10 h-10 boder boder-2 rounded-md" src="/img/Asset 17.png" alt="user" />
                        <div>
                            <p className="left-0 text-center text-base font-sans font-bold">
                                진행 중인 작업 1
                            </p>
                            
                            <div className="mx-auto h-3 w-auto rounded-full border border-2 border-black bg-white-200">      
                                <div className="justify-start min-h-full w-12 rounded-full bg-orange-600" />
                                <p className="text-center text-sm font-sans font-bold">20%</p>
                            </div>                                            
                        </div>                        
                    </div>
                    <div className="pt-4 flex flex-row justify-center space-x-4">
                        <img className="w-10 h-10 boder boder-2 rounded-md" src="/img/Asset 17.png" alt="user" />
                        <div>
                            <p className="text-center text-base font-sans font-bold">
                                진행 중인 작업 2
                            </p>
                            
                            <div className="mx-auto h-3 w-auto rounded-full border border-2 border-black bg-white-200">      
                                <div className="justify-start min-h-full w-20 rounded-full bg-green-600" />
                                <p className="text-center text-sm font-sans font-bold">60%</p>
                            </div>                                           
                        </div>                        
                    </div>
                </div>
                <div className='space-y-4'>
                    <p className="mt-14 text-left text-base font-sans font-bold">
                        대기중인 작업
                    </p>
                    <div className="flex flex-row justify-center space-x-4">
                        <img className="w-10 h-10 boder boder-2 rounded-md" src="/img/Asset 17.png" alt="user" />
                        <div>
                            <p className="text-center text-base font-sans font-bold">
                                대기중인 작업 1
                            </p>
                            <p className="text-left text-sm font-sans font-bold">2022년 2월 21일 까지</p>                                         
                        </div>                        
                    </div>
                    <div className="pt-4 flex flex-row justify-center space-x-4">
                        <img className="w-10 h-10 boder boder-2 rounded-md" src="/img/Asset 17.png" alt="user" />
                        <div>
                            <p className="text-center text-base font-sans font-bold">
                                대기중인 작업 2
                            </p>
                            <p className="text-left text-sm font-sans font-bold">2022년 2월 22일 까지</p>
                        </div>                        
                    </div>
                    <div className="pt-4 flex flex-row justify-start space-x-4">
                        <img className="w-10 h-10 boder boder-2 rounded-md" src="/img/Asset 17.png" alt="user" />
                        <div>
                            <p className="text-center text-base font-sans font-bold">
                                대기중인 작업 3
                            </p>
                            <p className="text-left text-sm font-sans font-bold">2022년 2월 23일 까지</p>                                        
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberVolunteer;