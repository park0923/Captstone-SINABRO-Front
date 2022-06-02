import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';


function MemberHomeTrainingScreen(){
    axios.post('http://18.117.173.151:8080/api/boards', {
        board_type: "education",
        contents: "content",
        title: "title"
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
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
                            <img className="w-10 h-10" src="/img/Asset 18.png" alt="dashboard" />
                            <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-black hover:text-gray-600">
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
                    <Link to="/MemberHomeEducation">
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
          
            <div className="p-10 item-center max-w-screen-lg space-y-4">    
                <div className="flex flex-row ">
                    <div className="p-6 boder border-2 shadow-md rounded-xl item-center justify-center w-full h-35 bg-gray-50 float-left ">
                        <span>
                            <h3 className="text-left text-lg font-sebang-gothic front-bold text-black">제목글, 바닥글 적기</h3>
                            <textarea id="title" name="title" rows="3" cols="50">
                                
                            </textarea>  
                        </span>
                        
                        <span>
                            <div className="space-xy-2 mt-2 float-right float-top">
                                <h3 className="text-left text-lg font-sebang-gothic front-bold text-black">작업 참고 파일</h3>
                                <div className='font font-sebang-gothic front-bold text-xl'>
                                    <a href='filepath'download>
                                    <button class="px-4 py-2 border border-black ">시간과 공간의 개념.srt</button>
                                    </a>
                                </div>
                            </div>  
                        </span>
                        
                    </div>
                </div>
                <div className="flex flex-row space-x-2 justify-between" >
                    <div className="flex flex-col mt-10">
                        <div className="flex flex-row justify-between">
                            <h1 className="py-4 text-2xl font-sebang-gothic front-bold text-black">작업 진행 공간</h1>          
                        </div>
                        <div className="w-full y-40 h-96 border-2 shadow-md rounded-xl item-center justify-center bg-gray-50 ">
                            <p className="p-2 text-left text-sm font-sebang-gothic front-normal text-black"></p>
                            <textarea id="content" name="content" rows="15" cols="90">
                               
                            </textarea>
                        </div>        
                    </div>
                </div>
                <center>
                <button type="submit" className="save relative w-30 flex-row justify-center py-2 px-4 border border-transparent text-sm font-noto-snas font-bold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">정답률 확인</button>  
                </center>
                
                
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

export default MemberHomeTrainingScreen;