import React from "react";
import { Link } from "react-router-dom";

function MemberHomeMyPage(){
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
                    <Link to="MemberHomeDashboard">
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
                            <img className="w-10 h-10" src="/img/Asset 16.png" alt="notice" />
                            <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-gray-400 hover:text-gray-600">
                                공지사항
                            </p>
                        </div>       
                    </Link>                                    
                </div>
            </div>          
          
            <div className="p-12 item-center justify-center max-w-screen-lg space-y-4">
                <div className="flex flex-col space-y-6">
                    <div>
                        <h1 className="text-2xl font-sebang-gothic front-bold text-black">마이페이지</h1>                                 
                    </div>     
                    <div className="p-12  boder border-2 shadow-md rounded-xl item-center justify-center min-w-max h-50 bg-gray-50 space-y-1">
                        <div className="flex flex-row space-x-6">
                            <div className="my-8 flex flex-col space-y-2">
                                <img className="ml-4 w-20 h-20" src="/img/Asset 17.png" alt="user" />
                                <p className="pt-1 text-center text-lg font-sebang-gothic font-bold text-black">
                                    봉사자 이름
                                </p>
                                <p className="pt-1 text-center text-base font-sebang-gothic font- text-gray-500">
                                    간단한 자기소개글
                                </p>                        
                                <div className="mt-14 shadow-md rounded-full justify-center bg-green-600">
                                    <Link to="" className="ml-8 text-center text-sm font-sebang-gothic text-white">
                                        정보 수정                   
                                    </Link>    
                                </div>   
                            </div>
                            <div className="flex flex-col space-y-6">
                                <div className="m-6 flex flex-row space-x-6">
                                    <div className="flex flex-col space-y-4">
                                        <label className="text-gray-900 font-sans text-lg font-sebang-gothic font-bold">이메일</label>
                                        <p className="text-sm font-sebang-gothic font- text-gray-500">volunteer@synabro.com</p>
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <label className="text-gray-900 font-sans text-lg font-sebang-gothic font-bold">휴대폰 번호</label>
                                            <p className="text-sm font-sebang-gothic font- text-gray-500">010-1234-5678</p>
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <label className="text-gray-900 font-sans text-lg font-sebang-gothic font-bold">주소</label>
                                        <p className="text-sm font-sebang-gothic font- text-gray-500">부산광역시 부산진구 시나브로 12 봉사아파트 802호</p>
                                    </div>                            
                                </div>    
                                <hr className="border border-gray-500 bg-gray-500"></hr>
                                <div className="m-6 flex flex-row space-x-6 justify-around">
                                    <div className="flex flex-col space-y-4">
                                        <label className="text-gray-900 font-sans text-lg font-sebang-gothic font-bold">누적봉사 시간</label>
                                        <p className="text-center text-2xl font-sebang-gothic font-bold text-black">124</p>
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <label className="text-gray-900 font-sans text-lg font-sebang-gothic font-bold">누적 작업 개수</label>
                                        <p className="text-center text-2xl font-sebang-gothic font-bold text-black">18</p>
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <label className="text-gray-900 font-sans text-lg font-sebang-gothic font-bold">누적 경고 횟수</label>
                                        <p className="text-center text-2xl font-sebang-gothic font-bold text-black">0</p>
                                    </div>                            
                                </div>    
                            </div>                    
                        </div>                   
                    </div>                         
                    <div className="p-8 boder border-2 shadow-md rounded-xl item-center justify-center min-w-max h-50 bg-gray-50 space-y-1">
                        <div className="flex flex-row space-x-6">
                            <div className="mx-8 flex flex-col space-y-2">
                                <h3 className="text-lg font-sebang-gothic front-bold text-black">작업 히스토리</h3>
                                <div className="table w-full px-2 p-2 ">
                                    <thead className="bg-gray-100 border-b-2  ">
                                        <th className="p-1 text-xl text-gray-500 font-sebang-gothic tracking-wide text-left">NO</th>
                                        <th className="p-2 text-xl text-gray-500 font-sebang-gothic tracking-wide text-left">제목</th>
                                        <th className="p-2 text-xl text-gray-500 font-sebang-gothic tracking-wide text-left">등 록 일</th>
                                        <th className="p-2 text-xl text-gray-500 font-sebang-gothic tracking-wide text-left">마 감 일</th>
                                    </thead>
                                    <tr className="bg-white">
                                        <tb className="p-2 text-sm font-sebang-gothic ">7</tb>
                                        <td className="p-2 text-sm font-sebang-gothic">[도서] 달러구트 꿈 백화점 전자화 요청</td>
                                        <td className="p-2 text-sm font-sebang-gothic">2022.01.05</td>
                                        <td className="p-2 text-sm font-sebang-gothic">2022.01.15</td>
                                    </tr>
                                    <tr className="bg-gray-100" >
                                        <tb className="p-2 text-sm font-sebang-gothic ">6</tb>
                                        <td className="p-2 text-sm font-sebang-gothic">동영상 자막 작업 부탁드립니다.</td>
                                        <td className="p-2 text-sm font-sebang-gothic">2022.01.03</td>
                                        <td className="p-2 text-sm font-sebang-gothic">2022.01.04</td>
                                    </tr>
                                    <tr>
                                        <tb className="p-2 text-sm font-sebang-gothic">5</tb>
                                        <td className="p-2 text-sm font-sebang-gothic">사진에 찍힌 문서를 PDF 파일로 제작해주세요.</td>
                                        <td className="p-2 text-sm font-sebang-gothic">2021.11.11</td>
                                        <td className="p-2 text-sm font-sebang-gothic">2022.01.03</td>
                                    </tr>
                                    <tr  className="bg-gray-100">
                                        <tb className="p-2 text-sm font-sebang-gothic">4</tb>
                                        <td className="p-2 text-sm font-sebang-gothic">사진에 찍힌 문서를 PDF 파일로 제작해주세요.</td>
                                        <td className="p-2 text-sm font-sebang-gothic">2022.01.01</td>
                                        <td className="p-2 text-sm font-sebang-gothic">2022.01.02</td>
                                    </tr>                                    
                                </div>
                                <div className="flex px-80">
                                    <button className="h-8 w-8 p-1 hover:bg-gray-300 rounded ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <div className="flex">
                                        <button className="h-8 w-8 p-1 hover:bg-gray-300 rounded font-sebang-gothic">1</button>
                                        <button className="h-8 w-8 p-1 hover:bg-gray-300 rounded font-sebang-gothic">2</button>
                                    </div>
                                    <button className="h-8 w-8 p-1 hover:bg-gray-300 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>   
                            </div>                    
                        </div>                   
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
                        <div className="">
                            <p className="left-0 text-center text-base font-sebang-gothic font-bold">
                                진행 중인 작업 1
                            </p>
                            <div className="mx-auto h-3 w-auto rounded-full border border-2 border-black bg-white-200">      
                                <div className="justify-start min-h-full w-12 rounded-full bg-green-600" />
                                <p className="text-center text-sm font-sebang-gothic font-bold">20%</p>
                            </div>                                            
                        </div> 
                    </div>
                    <div className="pt-4 flex flex-row justify-center space-x-4">
                        <img className="w-10 h-10 boder boder-2 rounded-md" src="/img/Asset 17.png" alt="user" />
                        <div>
                            <p className="text-center text-base font-sebang-gothic font-bold">
                                진행 중인 작업 2
                            </p>
                            
                            <div className="mx-auto h-3 w-auto rounded-full border border-2 border-black bg-white-200">      
                                <div className="justify-start min-h-full w-20 rounded-full bg-red-600" />
                                <p className="text-center text-sm font-sebang-gothic font-bold">60%</p>
                            </div>                                           
                        </div>                        
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

export default MemberHomeMyPage;