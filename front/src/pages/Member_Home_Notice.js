import React from 'react';
import { Link } from 'react-router-dom';

function Member_Home_Notice() {
    return(
        <div className="min-h-screen flex item-center justify-between bg-gray-yellow py-12 px-4 sm:px-6 lg:px-8">            
            <div className="min-h-screen p-12 boder border-2 shadow-md rounded-none item-center justify-center bg-gray-50 max-w-max space-y-20">
                <div>
                    <img className="mx-auto h-20 w-auto" src="/img/Logo.svg" alt="Logo"/>
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
                            <img className="w-10 h-10" src="/img/Asset 11.png" alt="dashboard" />
                            <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-gray-400 hover:text-gray-600">
                                대시보드
                            </p>
                        </div>                  
                    </Link>
                    <Link to="/Member_Home_Introduction">
                        <div className="flex flex-row space-x-8">
                            <img className="w-10 h-10" src="/img/Asset 17.png" alt="introduce" />
                            <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-gray-400 hover:text-gray-600">
                                소&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;개
                            </p>
                        </div>  
                    </Link>
                    <Link to="/Home_Class_List">
                        <div className="flex flex-row space-x-8">
                            <img className="w-10 h-10" src="/img/Asset 15.png" alt="education" />
                            <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-gray-400 hover:text-gray-600">
                                교&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;육
                            </p>
                        </div>     
                    </Link>
                    <Link to="/MemberVolunteer">
                        <div className="flex flex-row space-x-8">
                            <img className="w-10 h-10" src="/img/Asset 13.png" alt="volunteer" />
                            <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-gray-400 hover:text-gray-600">
                                봉사활동
                            </p>
                        </div>        
                    </Link>
                    <Link to="/Member_Home_Inspection">
                        <div className="flex flex-row space-x-8">
                            <img className="w-10 h-10" src="/img/Asset 12.png" alt="inspection" />
                            <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-gray-400 hover:text-gray-600">
                                검&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;수
                            </p>
                        </div>       
                    </Link>
                    <Link to="/Member_Home_Notice">
                        <div className="flex flex-row space-x-8">
                            <img className="w-10 h-10" src="/img/Asset 22.png" alt="notice" />
                            <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-black hover:text-gray-600">
                                공지사항
                            </p>
                        </div>       
                    </Link>                                    
                </div>
            </div>          
          
            <div className="flex flex-grow p-12 border border-2 shadow-md rounded-none item-center justify-start bg-gray-50 max-w-screen-lg space-y-4">
                    
                <div className="min-w-full flex flex-col space-y-8">
                        <div className="flex">
                        <div className="text-sm font-sebang-gothic  text-gray-600">
                        <a href='/'>SINABRO {'>'} &nbsp;</a>
                        </div>
                        <div className="text-sm font-sebang-gothic text-green-700">
                        <a href='/Member_Home_Notice'> 공지 사항</a>     
                        </div>
                        </div>    
                    <h1 className="text text-left text-2xl font font-sebang-gothic front-bold text-black">
                        봉사 활동 관련 공지사항을 안내해드립니다.
                    </h1>
                    <div>
                    <form className="my-2 flex justify-between appearance-none  relative block w-full font-sebang-gothic px-2 py-2 border-2 border-black">
                        <div className="text-xl px-1 py-2 font-sebang-gothic my-2 pt-1 text-justify font font-sebang-gothic front-bold text-black">검색 구분</div>
                        <div className="select-text py-3 px-5 border-gray-500">
                            <select>
                                <option>전체</option>
                                <option>1. 첫번째 옵션</option>
                                <option>2. 두번째 옵션</option>
                                <option>3. 세번째 옵션</option>
                            </select>
                        </div>
                        <input type="text" placeholder="검색어를 입력해주세요" className="mx-5 w-80 border-gray-500 px-2 py-1 bg-gray-300 "/>
                        <button type="submit" className=" w-36 h-12 whitespace-nowrap inline-flex items-center justify-center rounded-lg shadow-sm text-sm font-sebang-gothic text-white bg-green-600 hover:bg-green-700">
                            조  회
                        </button>
                    </form>
                    </div>
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
                                <tr>
                                    <tb className="p-2 text-sm font-sebang-gothic">5</tb>
                                    <td className="p-2 text-sm font-sebang-gothic">봉사 작업 확인 서비스 시스템 개선 작업</td>
                                    <td className="p-2 text-sm font-sebang-gothic">2022.01.03</td>
                                </tr>
                                <tr  className="bg-gray-100">
                                    <tb className="p-2 text-sm font-sebang-gothic">4</tb>
                                    <td className="p-2 text-sm font-sebang-gothic">필수 시청 자료 안내</td>
                                    <td className="p-2 text-sm font-sebang-gothic">2022.01.02</td>
                                </tr>
                                <tr>
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
            </div>  

            <div className="p-12 boder border-2 shadow-md rounded-none item-center justify-center bg-gray-50 max-w-max max-h-max space-y-4">
                <div className="flex flex-row space-x-4">
                    <img className="w-10 h-10 boder boder-2 runded-md" src="/img/Asset 17.png" alt="user" />
                    <div>
                        <p className="text-center text-xl font-sebang-gothic font-bold ">
                            봉사자 이름
                        </p>                        
                        <Link to="" className="text-center text-sm font-sebang-gothic text-gray-500 hover:text-gray-700">
                            로그아웃
                        </Link>
                    </div>
                </div>
                <div className=' space-y-4'>
                    <p className="mt-14 text-left text-base font-sebang-gothic font-bold">
                        진&nbsp;행&nbsp;작&nbsp;업
                    </p>
                    <div className="flex flex-row justify-center space-x-4 ">
                        <img className="w-10 h-10 boder boder-2 rounded-md " src="/img/Asset 17.png " alt="user" />
                        <Link to="/MemberHomeEducation">
                            <div className="">
                                <p className="left-0 text-center text-base font-sebang-gothic font-bold">
                                    진행 중인 작업 1
                                </p>
                                <div className="mx-auto h-3 w-auto rounded-full border border-2 border-black bg-white-200">      
                                    <div className="justify-start min-h-full w-12 rounded-full bg-green-600" />
                                    <p className="text-center text-sm font-sebang-gothic font-bold">20%</p>
                                </div>                                            
                            </div> 
                        </Link>
                    </div>
                    <div className="pt-4 flex flex-row justify-center space-x-4">
                        <img className="w-10 h-10 boder boder-2 rounded-md" src="/img/Asset 17.png" alt="user" />
                        <Link to="/MemberHomeEducation">
                            <div>
                                <p className="text-center text-base font-sebang-gothic font-bold">
                                    진행 중인 작업 2
                                </p>
                                
                                <div className="mx-auto h-3 w-auto rounded-full border border-2 border-black bg-white-200">      
                                    <div className="justify-start min-h-full w-20 rounded-full bg-red-600" />
                                    <p className="text-center text-sm font-sebang-gothic font-bold">60%</p>
                                </div>                                           
                            </div>                        
                        </Link>                        
                    </div>
                </div>
                <div className='space-y-4'>
                    <p className="mt-14 text-left text-base font-sebang-gothic font-bold">
                        대기중인 작업
                    </p>
                    <div className="flex flex-row justify-center space-x-4">
                        <img className="w-10 h-10 boder boder-2 rounded-md" src="/img/Asset 17.png" alt="user" />
                        <div>
                            <p className=" text-base font-sebang-gothic font-bold">
                                대기중인 작업 1
                            </p>
                            <p className="text-left text-sm font-sebang-gothic text-gray-400">2022년 2월 21일 까지</p>                                         
                        </div>                        
                    </div>
                    <div className="pt-4 flex flex-row justify-center space-x-4">
                        <img className="w-10 h-10 boder boder-2 rounded-md" src="/img/Asset 17.png" alt="user" />
                        <div>
                            <p className=" text-base font-sebang-gothic font-bold">
                                대기중인 작업 2
                            </p>
                            <p className="text-left text-sm font-sebang-gothic text-gray-400">2022년 2월 22일 까지</p>
                        </div>                        
                    </div>
                    <div className="pt-4 flex flex-row justify-start space-x-4">
                        <img className="w-10 h-10 boder boder-2 rounded-md" src="/img/Asset 17.png" alt="user" />
                        <div>
                            <p className=" text-base font-sebang-gothic font-bold">
                                대기중인 작업 3
                            </p>
                            <p className="text-left text-sm font-sebang-gothic text-gray-400 ">2022년 2월 23일 까지</p>                                        
                        </div>                        
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default Member_Home_Notice;