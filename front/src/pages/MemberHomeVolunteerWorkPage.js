import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";
import cookie from 'react-cookies';
import qs from 'qs';
import UserTask from "./UserTask";

function MemberHomeVolunteerWorkPage({history, location, match}){
    //console.log(history.location.pathname.lengh)
    console.log(history.location.pathname);    
    //console.log(location.state.type);
    //console.log(match.params.id);
    
    axios.default.paramsSerializer = params => {
        return qs.stringify(params);
    }
    const test = history.location.pathname;
    console.log(test.slice(29))    
    const [id, setId] = useState(test.slice(29));    
    const [data, setData] = useState({
        "created_date": null,
        "ended_date": null,
        "id": null,
        "updated_date": null,
        "user_id": null,
        "volunteer_work_contents": null,
        "work_contents": null,
        "work_id": null,
        "work_title": null
    })
    const [works_contents, setWorks_contents] = useState("");    
    const cookies = cookie.load("login_token");    
    
    const handleWorks = (e) => {
        setWorks_contents(e.target.value)
        console.log(works_contents)
    }

    const handleUpdate = () => {        
        axios.patch(
            'http://18.116.2.111:8080/api/volunteerWorks/' + id, 
            {
                contents: works_contents,
                title: data.work_id
            }, 
            {
                headers: {                
                    "Authorization": 'Bearer ' + cookies
                }
            }
            ).then(function (response) {
                // handle success

                if(response.status === 200){
                    alert("작업을 저장하였습니다.")
                }
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
              .then(function () {
                // always executed
              }); 
    }

    const handleInspection = () => {
        axios({
            method: 'post',
            url: 'http://18.116.2.111:8080/api/inspections/'+ id,
            headers: {                
                "Authorization": 'Bearer ' + cookies
            }            
          })
          .then(function (response) {
              // handle success
              console.log(response);
                if(response.status === 200){
                    alert("검수 요청을 보냈습니다.")
                    window.location.href = '/Member_Home_Inspection'
                }             
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })    
    }
    React.useEffect(() => {
        console.log(id);
    },[id])

    useEffect(() => {            
        console.log(id)
        
        axios({
            method: 'get',
            url: 'http://18.116.2.111:8080/api/volunteerWorks/'+ id,
            headers: {                
                "Authorization": 'Bearer ' + cookies
                
            }            
          })
          .then(function (response) {
              // handle success
              //console.log(response.data);
              setData(response.data);     
              setWorks_contents(response.data.volunteer_work_contents);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })             
    },[]);
    
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
          
            <div className="p-10 item-center w-full space-y-4">     
                <div className="flex flex-row ">
                    <div className="p-6 boder border-2 shadow-md rounded-xl item-center justify-center w-full h-35 space-y-2 bg-gray-50 ">
                        <h3 className="text-left text-lg font-sebang-gothic front-bold text-black">{data.work_title}</h3>
                        <hr></hr>
                        <p className="text-left text-sm font-sebang-gothic front-normal text-black">{data.work_contents}</p>    
                    </div>
                </div>
                <div className="flex flex-row space-x-4 justify-between" >
                    
                    <div className="flex flex-col mt-10 w-full">
                        <div className="flex flex-row justify-between">
                            <h1 className="py-4 text-2xl font-sebang-gothic front-bold text-black">작업 진행 공간</h1>           
                        </div>
                        <div className="w-full y-40 h-96 border-2 shadow-md rounded-xl item-center justify-center bg-gray-50 ">                            
                            <textarea className="mt-5" id="content" name="content" rows="15" cols="175" value={works_contents} onChange={handleWorks} placeholder="내용을 입력하세요">                                                               
                            </textarea>
                        </div>
                        <div className="space-y-2 p-2 flex-row item-center justify-center">
                        <button type="button" onClick={handleUpdate} className="save relative w-30 flex-row justify-center py-2 px-4 border border-transparent text-sm font-noto-snas font-bold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">저장</button>  
                        <button type="button" onClick={handleInspection} className="inspection relative w-30 flex-row justify-center py-2 px-4 ml-4 border border-transparent text-sm font-noto-snas font-bold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">검수 요청</button>  
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

export default MemberHomeVolunteerWorkPage;