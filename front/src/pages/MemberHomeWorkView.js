import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import qs from "qs";
import cookie from 'react-cookies';
import UserTask from "./UserTask";
import FileSaver from "file-saver";

const MemberHomeWorkView = ({history, location, match}) => {
    //console.log(history);
    // console.log(location.state.type);
    // console.log(match.params);
    axios.default.paramsSerializer = params => {
        return qs.stringify(params);
      }
  
      const [id, setId] = useState(match.params.id);    
      const [file, setFile] = useState();
      const cookies = cookie.load("login_token");
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
        const [headers, setHeaders] = useState()
        React.useEffect(() => {
            console.log(headers);
        },[headers])

      useEffect(() => {
        axios({
            method: 'get',
            url: 'http://13.57.232.44:8080/api/works/' +id,                                    
            headers: {                
                "Authorization": 'Bearer ' + cookies                
            }            
          })
          .then(function (response) {
              // handle success
              setData(response.data);
              console.log(response);
            //   console.log(data);            
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })  
        
            axios({
                method: 'get',
                url: 'http://13.57.232.44:8080/api/works/download/' + id,  
                responseType: "blob",                                       
                headers: {                
                    "Authorization": 'Bearer ' + cookies,
                    'Content-Type': "text/plain",                    
                    // 'Content-Disposition' : 'Access-Control-Expose-Headers',
                    'Access-Control-Expose-Headers' : 'Content-Disposition',
                    'Access-Control-Allow-Origin': '*'
                }            
              })
              .then(function (response) {                    
                  // handle success                  
                    // console.log(response);      
                    // console.log(response);
                    // console.log(response.headers);
                    //setHeaders(response.headers)
                    //setHeaders(response.headers['Content-Disposition'])                    
                    setFile(response.config.url);                                        
                    
                    // console.log(filename);
                    // const name = response.headers["Content-Disposition"]
                    // console.log(name)               
                    
                    // const url = window.URL.createObjectURL(new Blob([response.data]));
                    // const url = response.config.url;
                    // const link = document.createElement("a");
                    // link.href = url;
                    // link.setAttribute("download", "file");
                    //link.style.cssText = "display:none";
                    // document.body.appendChild(link);
                    // link.click();
                    // link.remove();
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                })  
      },[]);

    const handleVolunteerSubmit = () => {        
        axios({
            method: 'post',
            url: 'http://13.57.232.44:8080/api/volunteerWorks/' + id,
            headers: {                
                "Authorization": 'Bearer ' + cookies
            }
        })
        .then(function (response) {
            // handle success
            if(response.status === 200){
                setData(response.data);
                console.log(response.data);
                console.log(data);
                alert("접수 되었습니다.");
                window.location.href = '../Member_Home_WorkHistory'
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })             
    }

    return(
        <div className="min-h-screen flex item-center justify-between bg-gray-yellow py-12 px-4 sm:px-6 lg:px-8">            
            <div className="min-h-screen p-12 boder border-2 shadow-md rounded-none item-center justify-center bg-gray-50 w-1/6 max-w-max space-y-20">
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
          
            <div className="flex flex-grow p-12 border border-2 item-center justify-start bg-gray-50 w-4/6 mx-4 h-auto space-y-4">
                    
                <div className="p-4 min-w-full flex flex-col space-y-8 rounded-lg">
                    <div className="flex">
                        <div className="text-sm font-sebang-gothic  text-gray-600">
                            <a href='/'>SINABRO {'>'} &nbsp;</a>
                        </div>
                        <div className="text-sm font-sebang-gothic text-green-700">
                            <p> 상세보기</p>     
                        </div>
                    </div>
                    <h1 className="text text-left text-2xl font font-sebang-gothic front-bold text-black">{data.title}</h1>
                    <hr className="border border-gray-500 bg-gray-500"></hr>
                    <a href={file} download className="text-left text-sm font-sebang-gothic front-normal text-black">
                        <button class="px-4 py-2 border border-black ">File Download</button>
                    </a>
                    <p className="text-left text-sm font-sebang-gothic front-normal text-black">{data.contents}</p>

                    <hr className="border border-gray-500 bg-gray-500"></hr>
                    
                    <div className="flex flex-row justify-center">
                        <div className="mr-20 border border-2 w-1/3 self-center text-center text-lg font-sebang-gothic font-bold rounded-lg text-white bg-green-600 hover:bg-green-700">
                            <button onClick={() => history.goBack()}>돌아가기</button>
                        </div>
                        <div className="border border-2 w-1/3 self-center text-center text-lg font-sebang-gothic font-bold rounded-lg text-white bg-green-600 hover:bg-green-700">
                            <button onClick={handleVolunteerSubmit}>수행하기</button>
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

export default MemberHomeWorkView