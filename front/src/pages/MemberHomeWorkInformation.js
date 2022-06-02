import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import qs from "qs";
import cookie from 'react-cookies';
import UserTask from "./UserTask";

function MemberHomeWorkInformation({history, location, match}) {
    //console.log(history);
    // console.log(location.state.type);
    // console.log(match.params);
    axios.default.paramsSerializer = params => {
        return qs.stringify(params);
      }
  
    //   const [id, setId] = useState(match.params.id);    
    //   const [type, setType] = useState(location.state.type);
    //   const cookies = cookie.load("login_token");
      const [data, setData] = useState([{
        "contents": null,
        "created_date": null,
        "ended_date": null,
        "id": null,
        "title": null,
        "updated_date": null,
        "user_id": null,
        "volunteer_time": null
        }]      
      );          
    
      React.useEffect(() => {     
        
      }, [data])
    //   useEffect(() => {
    //     console.log(type);      
    //     if(type === "notice"){
    //       axios({
    //         method: 'get',
    //         url: 'http://18.117.173.151:8080/api/works/' +id      
    //       })
    //       .then(function (response) {
    //           // handle success                                  
    //           // console.log(response.data);
    //           setData(response.data);            
    //         })
    //         .catch(function (error) {
    //           // handle error
    //           console.log(error);
    //         })
    //         .then(function () {
    //           // always executed
    //         });   
    //     }
    //     else if(type === "work"){
    //       axios({
    //         method: 'get',
    //         url: 'http://18.117.173.151:8080/api/works/' +id,            
    //         headers: {                
    //             "Authorization": 'Bearer ' + cookies
    //         }            
    //       })
    //       .then(function (response) {
    //           // handle success
    //           setData(response.data);
    //           console.log(response.data);
    //           console.log(data);
    //         })
    //         .catch(function (error) {
    //           // handle error
    //           console.log(error);
    //         })
    //         .then(function () {
    //           // always executed
    //         });           
    //     }
             
    //   },[]);

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
                    <h1 className="text text-left text-2xl font font-sebang-gothic front-bold text-black">동영상 자막 작업 부탁드립니다.</h1>
                    <hr className="border border-gray-500 bg-gray-500"></hr>
                    <h1 className="py-4 text-2xl font-sebang-gothic front-bold text-black">작업 내용</h1>
                    <p className="text-left text-sm font-sebang-gothic front-normal text-black">유튜브 '시간과 공간의 개념' 동영상에 자막 작업을 부탁드립니다.<br></br>
                    약 10분가량의 영상이며 한달 이내로 작업이 진행되면<br></br>
                    좋을 것 같습니다.<br></br>
                    <br></br>
                    영상은 아래의 링크를 확인해주세요.<br></br>
                    https:www.youtube.com</p>
                    <hr className="border border-gray-500 bg-gray-500"></hr>
                    <h1 className="py-4 text-2xl font-sebang-gothic front-bold text-black">작업 결과</h1>

                    <hr className="border border-gray-500 bg-gray-500"></hr>
                    <div className="table w-full px-2 p-2 ">
                        <tr className="bg-white">
                        <td className="p-2 text-sm tracking-wider font-sebang-gothic ">다음글</td>
                        <td className="p-2 text-sm tracking-wider font-sebang-gothic">[도서]달러구트 꿈 백화점 전자화 요청</td>
                        <td className="p-2 text-sm tracking-wider font-sebang-gothic">2021.09.29</td>
                        </tr>
                        <tr className="bg-white">
                        <td className="p-2 text-sm tracking-wider font-sebang-gothic ">이전글</td>
                        <td className="p-2 text-sm tracking-wider font-sebang-gothic">사진에 찍힌 문서를 PDF 파일로 제작해주세요.</td>
                        <td className="p-2 text-sm tracking-wider font-sebang-gothic">2021.09.10</td>
                        </tr>
                    </div>
                </div> 
                
            </div>  

            <div className="p-12 boder border-2 shadow-md rounded-none item-center justify-center bg-gray-50 max-w-max max-h-max space-y-4">
                <UserTask></UserTask>
            </div>
        </div>
    )
}

export default MemberHomeWorkInformation;