import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyPieChart from "./MyPieChart";
function MemberHomeEducation(){
    const [data, setData] = useState(60);
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
          
            <div className="p-12 item-center justify-start max-w-screen-lg space-y-4">
                <div className="flex flex-row justify-start">
                    <h1 className="ml-8 text-2xl font-sebang-gothic front-bold text-black">공지사항</h1>                                  
                </div>     
                <div className="ml-8 flex flex-row space-x-4">
                    <div className="p-4 boder border-2 shadow-md rounded-xl item-center justify-center w-screen h-50 bg-gray-50 space-y-1">
                        <div>
                            <ul className="space-y-2">
                                <li className="text-xl font-sebang-gothic front-bold text-black">    
                                    [필 독] 교육 첫 시작시 주의사항                                
                                    <hr className="h-1 bg-gray-300" />                                                                                                                  
                                </li>
                                <li className="text-xl font-sebang-gothic front-bold text-black">    
                                    봉사 활동을 하기 위한 교육 진행 방법                                
                                    <hr className="h-1 bg-gray-300" />                                                                                                            
                                </li>
                                <li className="text-xl font-sebang-gothic front-bold text-black">    
                                    글 작성 규칙 안내
                                    <hr className="h-1 bg-gray-300" />                                                                                                               
                                </li>
                                <li className="text-xl font-sebang-gothic front-bold text-black">    
                                    교육 완료 후 진행 방법 안내
                                    <hr className="h-1 bg-gray-300" />                                                                                                                
                                </li>
                            </ul>                           
                        </div>
                    </div>
                </div>
                <div className="flex flex-row space-x-12 justify-around" >
                    <div className="flex flex-col mt-16 ml-8">
                        <h1 className="text-2xl font-sebang-gothic front-bold text-black">교육 진행 현황</h1>
                        <div className="border-2 shadow-md rounded-xl min-w-full h-80 bg-gray-50 space-y-1">
                            <div className="mt-4 ml-6 justify-center">
                                <MyPieChart data={60} />
                                <p className="mr-2 text-center text-sm font-sebang-gothic front-bold text-black">
                                    단위 : 백분율 (%)
                                </p>
                            </div>                            
                        </div>
                    </div>
                    <div className="flex flex-col mt-16">
                        <h1 className="text-2xl font-sebang-gothic front-bold text-black">교육 진행 예정 목록</h1>
                        <div className="p-4 border-2 shadow-md rounded-xl item-center justify-center w-72 h-80  bg-gray-50 space-y-1">
                            <div>
                                <ul className="space-y-2">
                                    <li className="text-xl font-sebang-gothic front-bold text-black">    
                                        제목글, 바닥글 적기                               
                                        <hr className="h-1 bg-gray-300" />                                                                                                                  
                                    </li>
                                    <li className="text-xl font-sebang-gothic front-bold text-black">    
                                        인용문 작성하기
                                        <hr className="h-1 bg-gray-300" />                                                                                                            
                                    </li>
                                    <li className="text-xl font-sebang-gothic front-bold text-black">    
                                        지문 작성하기
                                        <hr className="h-1 bg-gray-300" />                                                                                                               
                                    </li>
                                    <li className="text-xl font-sebang-gothic front-bold text-black">    
                                        동영상 자막 작성하기
                                        <hr className="h-1 bg-gray-300" />                                                                                                                
                                    </li>
                                    <li className="text-xl font-sebang-gothic front-bold text-black">    
                                        도서 자료 전자화하기
                                        <hr className="h-1 bg-gray-300" />                                                                                                                
                                    </li>
                                    <li className="text-xl font-sebang-gothic front-bold text-black">    
                                        문서 자료 전자화하기
                                        <hr className="h-1 bg-gray-300" />                                                                                                                
                                    </li>
                                </ul>                           
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

export default MemberHomeEducation;