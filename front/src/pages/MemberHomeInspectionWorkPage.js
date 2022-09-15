import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import cookie from 'react-cookies';
import qs from 'qs';
import UserTask from "./UserTask";

function MemberHomeInspectionWorkPage({history, location, match}){
    console.log(history.location.pathname.lengh)
    console.log(history.location.pathname.substring(30,history.location.pathname.lengh - 1));
    console.log(location.state.type);
    console.log(match.params.id);
    
    const [id, setId] = useState(match.params.id)
    const [data, setData] = useState({
        "created_date": null,
        "ended_date": null,
        "idx": null,
        "inspection_contents": null,
        "updated_date": null,
        "user_id": null,
        "volunteer_time": null,
        "volunteer_work_contents": null,
        "volunteer_work_id": null,
        "work_contents": null,
        "work_id": null,
        "work_title": null
    })
    const [inspection_contents, setInspection_contents] = useState("");    
    const cookies = cookie.load("login_token");
    const handleInspection = (e) => {
        setInspection_contents(e.target.value);
    }
    const handleClick = () => {
        axios.patch(
            'http://54.219.63.255:8080/api/inspections/' + id, 
            {
                contents: inspection_contents,
                ended_date : data.ended_date,
                volunteer_time: data.volunteer_time
            }, 
            {
                headers: {                
                    "Authorization": 'Bearer ' + cookies
                }
            }
            ).then(function (response) {
                // handle success
                console.log(response);
                if(response.status === 200){
                    alert("작업을 저장하였습니다.")
                    window.location.href = '/Member_Home_Inspection'
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
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://54.219.63.255:8080/api/inspections/'+ id,
            headers: {                
                "Authorization": 'Bearer ' + cookies
            }            
          })
          .then(function (response) {
              // handle success
              console.log(response.data); 
              setData(response.data); 
              setInspection_contents(response.data.inspection_contents);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })    
    },[]);
    
    return(
        <div className="min-h-screen flex item-center justify-between bg-gray-yellow py-8 px-4 sm:px-6 lg:px-8">            
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
          
            <div className="flex flex-grow flex-col p-12 item-center justify-start bg-transparent w-40 mx-4 space-y-4">     
                <div className="flex flex-col">
                    <h1 className="py-2 text-2xl font-sebang-gothic front-bold text-black">봉사 요청 내용</h1>
                    <div className="p-6 boder border-2 shadow-md rounded-xl item-center justify-center w-full space-y-4 bg-gray-50 ">
                        <h3 className="text-left text-lg font-sebang-gothic front-bold text-black">{data.work_title}</h3>
                        <hr/>
                        <p className="text-left text-sm font-sebang-gothic front-normal text-black">{data.work_contents}</p>    
                    </div>
                </div>

                <div className="flex flex-col space-x-4 justify-between" >
                    
                    <div className="flex flex-col mt-10">
                        <h1 className="py-2 text-2xl font-sebang-gothic front-bold text-black">작업 진행 내용</h1>
                        <div className="w-full y-40 h-96 border-2 shadow-md rounded-xl item-center justify-center bg-gray-50 ">
                            <h3 className="m-4 text-left text-lg font-sebang-gothic front-bold text-black">{data.volunteer_work_contents}</h3>                           
                        </div>            
                        <h1 className="py-2 text-2xl font-sebang-gothic front-bold text-black">검수 내용</h1> 
                        <div className="w-full h-36 border-2 shadow-md rounded-xl item-center justify-center bg-gray-50 ">                            
                            <textarea className="w-full h-full" id="content" name="content" value={inspection_contents} onChange={handleInspection} placeholder="">                                
                            </textarea>
                        </div>
                        
                        <div className="space-y-2 p-2 flex-row item-center justify-center">
                            <button type="button" onClick={handleClick} className="save relative w-30 flex-row justify-center py-2 px-4 border border-transparent text-sm font-noto-snas font-bold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">저장</button>  
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

export default MemberHomeInspectionWorkPage;