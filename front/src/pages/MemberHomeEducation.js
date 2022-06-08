import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MyPieChart from "./MyPieChart";
import UserTask from "./UserTask"
import axios from "axios";
import cookie from 'react-cookies';

const  MemberHomeEducation = () => {    
    const [data, setData] = useState({
        "board": [
            {
              "id": null,
              "title": null
            }
          ],
          "education": [
            {
              "id": null,
              "status": null,
              "title": null
            }
          ],
          "progress": null
    });
    const cookies = cookie.load("login_token");
    useEffect(() => {      
          axios({
            method: 'get',
            url: 'http://localhost:8080/api/educations/home',            
            headers: {                
                "Authorization": 'Bearer ' + cookies
            }            
          })
          .then(function (response) {
              // handle success            
              setData(response.data);
              console.log(response.data);              
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });             
    },[]);
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
                            <img className="w-10 h-10" src="/img/Asset 23.png" alt="education" />
                            <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-black hover:text-gray-600">
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
          
            <div className="flex flex-grow p-12 border border-2 item-center justify-start bg-transparent  mx-4 h-auto space-y-4">
                <div className="flex flex-col w-full">
                    <div className="flex flex-col justify-start">
                        <h1 className="ml-8 text-2xl font-sebang-gothic front-bold text-black">공지사항</h1>                                  
                    </div>     
                    <div className="ml-8 flex flex-col space-x-4">
                        <div className="p-4 boder border-2 shadow-md rounded-xl item-center justify-center w-full h-auto bg-gray-50 space-y-1">
                            <div>                                
                                {data.board.map(({id, title}) => (
                                    <ul className="space-y-2">
                                        <li className="text-xl font-sebang-gothic front-bold text-black">    
                                            <Link to={{pathname: `/MemberHomeNoticePage/${id}`, state: {type: "notice"} }}>
                                                {title}
                                            </Link>                                            
                                            <hr className="h-1 bg-gray-300" />                                                                                                                  
                                        </li>
                                    </ul>   
                                ))}                                                                   
                            </div>
                        </div>
                    </div>                
                <div className="flex flex-row space-x-12 justify-around" >
                    <div className="flex flex-col mt-16 ml-8 w-1/2 h-auto justify-center">
                        <h1 className="text-2xl font-sebang-gothic front-bold text-black">교육 진행 현황</h1>
                        <div className="border-2 shadow-md rounded-xl justify-center bg-gray-50 space-y-1">
                            <div className="self-center ml-48">
                                <MyPieChart data={data.progress} />                                
                            </div>                           
                            <p className="mr-2 text-center text-lg font-sebang-gothic front-bold text-black text-green-500">
                                달성도 : {data.progress}
                            </p>
                            <p className="mr-2 text-center text-sm font-sebang-gothic front-bold text-black">
                                단위 : 백분율 (%)
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col mt-16 w-1/2 h-auto">
                        <h1 className="text-2xl font-sebang-gothic front-bold text-black">교육 진행 예정 목록</h1>
                        <div className="p-4 border-2 shadow-md rounded-xl item-center justify-center bg-gray-50 h-80">
                            <div className="space-y-4">
                                {data.education.map(({id, status, title}) => (
                                    <ul className="space-y-2">
                                    <li className="flex flex-col text-xl font-sebang-gothic front-bold text-black">    
                                        <div className="flex flex-row justify-between">
                                            <Link to={{pathname: `/MemberHomeTrainingScreen/${id}`, state: {type: "notice"} }}>
                                                {title}
                                            </Link>                                           
                                            <div className="board boarder-2 rounded-xl item-center w-20 text-center font-medium bg-green-500">{status}</div>          
                                        </div>                 
                                        <hr className="h-1 bg-gray-300" />
                                    </li>                                    
                                </ul>        
                                ))}                                                      
                            </div>
                        </div>                        
                    </div>
                </div> 
                </div>
            </div>  

            <div className="p-12 boder border-2 shadow-md rounded-none item-center justify-center bg-gray-50 max-w-max max-h-max space-y-4">
                <UserTask></UserTask>
            </div>
             
        </div>
    )
}

export default MemberHomeEducation;