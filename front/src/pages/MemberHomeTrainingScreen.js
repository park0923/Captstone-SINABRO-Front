import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import cookie from 'react-cookies';
import UserTask from "./UserTask"
import qs from 'qs';

function MemberHomeTrainingScreen({history, location, match}){
    axios.default.paramsSerializer = params => {
        return qs.stringify(params);
    }

    const [data, setData] = useState({
    "id": null,
    "title": null,
    "status": null,
    "description": null,
    "file": null
   })
   const cookies = cookie.load("login_token");
   const [id, setId] = useState(match.params.id)

   useEffect(() => {
    axios({
        method: 'get',
        url: 'http://34.64.94.158:8080/api/educations/' + id,            
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
   },[])
    return(
        <div className="min-h-screen flex item-center justify-between bg-gray-yellow py-12 px-4 sm:px-6 lg:px-8">            
            <div className="min-h-screen p-12 boder border-2 shadow-md rounded-none item-center justify-center bg-gray-50 w-1/6 space-y-20">
                <div>
                    <img className="mx-auto h-20 w-auto" src="/img/Logo.svg" alt="Logo"/>
                    <Link to="/MemberHomeMyPage">
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
          
            <div className="p-10 item-center w-4/6 space-y-4">    
                <div className="flex flex-row ">
                    <div className="p-6 boder border-2 shadow-md rounded-xl item-center justify-center w-full h-35 bg-gray-50 float-left ">
                        <span>
                            <h3 className="text-left text-lg font-sebang-gothic front-bold text-black">{data.title}</h3>
                            <hr/>
                            <p className="mt-2 text-left text-sm font-sebang-gothic front-normal text-black">{data.description}</p>  
                        </span>
                        
                        <span>
                            <div className="space-xy-2 mt-2 float-right float-top">
                                <h3 className="text-left text-lg font-sebang-gothic front-bold text-black">작업 참고 파일</h3>                                
                                <div className='font font-sebang-gothic front-bold text-xl'>
                                    <a href='{data.file}' download>
                                    <button class="px-4 py-2 border border-black ">Download</button>
                                    </a>
                                </div>
                            </div>  
                        </span>
                        
                    </div>
                </div>
                <div className="space-x-2 w-full" >
                    <div className="flex flex-col mt-10">
                        <div className="flex flex-row justify-between">
                            <h1 className="py-4 text-2xl font-sebang-gothic front-bold text-black">작업 진행 공간</h1>          
                        </div>
                        <div className="w-full y-40 h-96 border-2 shadow-md rounded-xl item-center justify-center bg-gray-50 ">
                            <p className="p-2 text-left text-sm font-sebang-gothic front-normal text-black"></p>
                            <textarea id="content" name="content" rows="15" cols="130">
                               
                            </textarea>
                        </div>        
                    </div>
                </div>
                <center>
                <button type="submit" className="save relative w-30 flex-row justify-center py-2 px-4 border border-transparent text-sm font-noto-snas font-bold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">저장</button>  
                </center>
                
                
            </div>  

            <div className="p-12 boder border-2 shadow-md rounded-none item-center justify-center bg-gray-50 w-1/6 space-y-4">
                <UserTask></UserTask>
            </div>
            
        </div>
    )
}

export default MemberHomeTrainingScreen;