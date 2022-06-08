import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import qs from "qs";
import cookie from 'react-cookies';
import UserTask from "./UserTask";

function MemberHomeWorkInformation({history, location, match}) {    
    // console.log(history.location.pathname);
    // console.log(location.state.type);
    // console.log(match.params.id);
    // const test = history.location.pathname;
    // console.log(test.slice(27))
    const cookies = cookie.load("login_token");
    const [id, setId] = useState(match.params.id);
    const [data, setData] = useState({
        "type": null,
        "id": null,
        "title": null,
        "date": null,
        "content": null,
        "file": null,
        "before_work": {
            "type": null,
            "id": null,
            "title": null,
            "date": null
        },
        "after_work": {
            "type": null,
            "id": null,
            "title": null,
            "date": null
        }
    })
    const [text, setText] = useState([]) ;
    const [list, setList] = useState([]);

    const ChangeFileUrl = () => {

    }

    const hadleClick = () => {
        window.location.href = '/MemberHomeWorkInformation';
    }

    React.useEffect(() => {
        console.log(text);
    },[text])
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:8080/api/members/list/' + id,            
            headers: {                
                "Authorization": 'Bearer ' + cookies
            }            
          })
          .then(function (response) {
              // handle success
              console.log(response.data);
              setData(response.data)
              setText(response.data.content.split('\n'));          
              
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
            <div className="min-h-screen p-12 boder border-2 shadow-md rounded-none item-center justify-center bg-gray-50 max-w-max space-y-20">
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
                            <img
                            className="w-10 h-10"
                            src="/img/Asset 17.png"
                            alt="introduce"
                            />
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
          
            <div className="flex flex-grow p-12 border border-2 item-center justify-start bg-gray-50  mx-4 h-auto space-y-4">
                    
                <div className="p-4 min-w-full flex flex-col space-y-8 rounded-lg">
                    <div className="flex">
                        <div className="text-sm font-sebang-gothic  text-gray-600">
                            <a href='/'>SINABRO {'>'} &nbsp;</a>
                        </div>
                        <div className="text-sm font-sebang-gothic text-gray-600">
                            <a href='/Home_Class_List'> 공 지 사 항 {'>'}</a>     
                        </div>
                        <div className="text-sm font-sebang-gothic text-green-700">
                            <a href='/Home_Class_List'> 진 행 작 업</a>     
                        </div>
                    </div>
                    <h1 className="text text-left text-2xl font font-sebang-gothic front-bold text-black">{data.title}</h1>
                    <hr className="border border-gray-500 bg-gray-500"></hr>
                    <h1 className="py-4 text-2xl font-sebang-gothic front-bold text-black">작업 내용</h1>                                        
                    <p className="text-left text-sm font-sebang-gothic front-normal text-black">
                        {text}
                    </p>
                    
                    
                   
                    
                    <hr className="border border-gray-500 bg-gray-500"></hr>
                    <h1 className="py-4 text-2xl font-sebang-gothic front-bold text-black">작업 결과</h1>
                    <div>
                        <a href={data.file} download>
                            <button class="px-4 py-2 border border-black ">Download</button>
                        </a>
                    </div>                        
                    <hr className="border border-gray-500 bg-gray-500"></hr>
                    <button onClick={() => history.goBack()} className="border border-2 w-2/12 self-center text-center text-base font-sebang-gothic rounded-md text-white bg-green-600 hover:bg-green-700">돌아가기</button>
                </div> 
                
            </div>  

            <div className="p-12 boder border-2 shadow-md rounded-none item-center justify-center bg-gray-50 max-w-max max-h-max space-y-4">
                <UserTask></UserTask>
            </div>
        </div>
    )
}

export default MemberHomeWorkInformation;