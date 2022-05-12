import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import qs from "qs";
import cookie from 'react-cookies';

const PostView = ({history, location, match}) =>{
    //console.log(history);
    // console.log(location.state.type);
    // console.log(match.params);
    axios.default.paramsSerializer = params => {
      return qs.stringify(params);
    }

    const [id, setId] = useState(match.params.id);    
    const [type, setType] = useState(location.state.type);
    const cookies = cookie.load("login_token");
    const [data, setData] = useState([{
        // "board_type": null,
        // "contents": null,
        // "created_date": null,
        // "id": null,
        // "title": null,
        // "updated_date": null
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
    const [Vdata, setVdata] = useState([{
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
      console.log(data);
      console.log(data.title);
    }, [data])
    useEffect(() => {
      console.log(type);      
      if(type === "notice"){
        axios({
          method: 'get',
          url: 'http://18.117.247.55:8080/api/boards/' +id      
        })
        .then(function (response) {
            // handle success                                  
            // console.log(response.data);
            setData(response.data);            
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });   
      }
      else if(type === "work"){
        axios({
          method: 'get',
          url: 'http://18.117.247.55:8080/api/works/' +id,            
          headers: {                
              "Authorization": 'Bearer ' + cookies
          }            
        })
        .then(function (response) {
            // handle success
            setData(response.data);
            console.log(response.data);
            console.log(data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          }); 
      }
           
    },[]);

    

    return(
        <div className="min-h-screen flex item-center justify-between bg-gray-yellow py-12 px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen p-12 boder border-2 shadow-md rounded-none item-center justify-center bg-gray-50 max-w-max space-y-20">
          <div>
            <img
              className="mx-auto h-20 w-auto"
              src="/img/Logo.svg"
              alt="Logo"
            />
            <Link to="MemberHomeMyPage">
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
                <img
                  className="w-10 h-10"
                  src="/img/Asset 11.png"
                  alt="dashboard"
                />
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
            <Link to="/Home_Class_List">
              <div className="flex flex-row space-x-8">
                <img
                  className="w-10 h-10"
                  src="/img/Asset 15.png"
                  alt="education"
                />
                <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-gray-400 hover:text-gray-600">
                  교&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;육
                </p>
              </div>
            </Link>
            <Link to="/MemberVolunteer">
              <div className="flex flex-row space-x-8">
                <img
                  className="w-10 h-10"
                  src="/img/Asset 13.png"
                  alt="volunteer"
                />
                <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-gray-400 hover:text-gray-600">
                  봉사활동
                </p>
              </div>
            </Link>
            <Link to="/Member_Home_Inspection">
              <div className="flex flex-row space-x-8">
                <img
                  className="w-10 h-10"
                  src="/img/Asset 12.png"
                  alt="inspection"
                />
                <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-gray-400 hover:text-gray-600">
                  검&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;수
                </p>
              </div>
            </Link>
            <Link to="/Member_Home_Notice">
              <div className="flex flex-row space-x-8">
                <img
                  className="w-10 h-10"
                  src="/img/Asset 16.png"
                  alt="notice"
                />
                <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-gray-400 hover:text-gray-600">
                  공지사항
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-grow p-12 border border-2 shadow-md rounded-none item-center justify-start bg-gray-50 w-40 mx-4 space-y-4">
          <div className="min-w-full flex flex-col space-y-8">
            <div className="flex">
              <div className="text-sm font-sebang-gothic  text-gray-600">
                <a href="/">SINABRO {">"} &nbsp;</a>
              </div>
              <div className="text-sm font-sebang-gothic text-green-700">
                <button onClick={() => history.goBack()}>돌아가기</button>
              </div>
            </div>
            <div>
                <h1 className="text-sm font-sebang-gothic  text-black">{data.title}</h1>
            </div>
            <div>
                <h1 className="text-sm font-sebang-gothic  text-black">{data.contents}</h1>
            </div>
          </div>
        </div>

        <div className="p-12 boder border-2 shadow-md rounded-none item-center justify-center bg-gray-50 max-w-max max-h-max space-y-4">
          <div className="flex flex-row space-x-4">
            <img
              className="w-10 h-10 boder boder-2 runded-md"
              src="/img/Asset 17.png"
              alt="user"
            />
            <div>
              <p className="text-center text-xl font-sebang-gothic font-bold ">
                봉사자 이름
              </p>
              <Link
                to=""
                className="text-center text-sm font-sebang-gothic text-gray-500 hover:text-gray-700"
              >
                로그아웃
              </Link>
            </div>
          </div>
          <div className=" space-y-4">
            <p className="mt-14 text-left text-base font-sebang-gothic font-bold">
              진&nbsp;행&nbsp;작&nbsp;업
            </p>
            <div className="flex flex-row justify-center space-x-4 ">
              <img
                className="w-10 h-10 boder boder-2 rounded-md "
                src="/img/Asset 17.png "
                alt="user"
              />
              <Link to="/MemberHomeEducation">
                <div className="space-y-0">
                  <p className="left-0 text-center text-base font-sebang-gothic font-bold">
                    진행 중인 작업 1
                  </p>
                  <progress
                    style={{
                        height: 12,
                        width: 110,
                        backgroundColor: "#f3f4f6",
                        borderRadius: 4
                    }}                    
                    value={20}
                    max={100}
                  ></progress>
                  <p className="text-center text-sm font-sebang-gothic font-bold">
                    {20}%
                  </p>
                </div>
              </Link>
            </div>
            <div className="pt-4 flex flex-row justify-center space-x-4">
              <img
                className="w-10 h-10 boder boder-2 rounded-md"
                src="/img/Asset 17.png"
                alt="user"
              />
              <Link to="/MemberHomeEducation">
                <div>
                  <p className="text-center text-base font-sebang-gothic font-bold">
                    진행 중인 작업 2
                  </p>

                  <div className="mx-auto h-3 w-auto ">
                    <progress
                      className="w-28 h-3 rounded-lg"
                      value={20}
                      max={100}
                    ></progress>
                    <p className="text-center text-sm font-sebang-gothic font-bold">
                      {20}%
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <p className="mt-14 text-left text-base font-sebang-gothic font-bold">
              대기중인 작업
            </p>
            <div className="flex flex-row justify-center space-x-4">
              <img
                className="w-10 h-10 boder boder-2 rounded-md"
                src="/img/Asset 17.png"
                alt="user"
              />
              <div>
                <p className=" text-base font-sebang-gothic font-bold">
                  대기중인 작업 1
                </p>
                <p className="text-left text-sm font-sebang-gothic text-gray-400">
                  2022년 2월 21일 까지
                </p>
              </div>
            </div>
            <div className="pt-4 flex flex-row justify-center space-x-4">
              <img
                className="w-10 h-10 boder boder-2 rounded-md"
                src="/img/Asset 17.png"
                alt="user"
              />
              <div>
                <p className=" text-base font-sebang-gothic font-bold">
                  대기중인 작업 2
                </p>
                <p className="text-left text-sm font-sebang-gothic text-gray-400">
                  2022년 2월 22일 까지
                </p>
              </div>
            </div>
            <div className="pt-4 flex flex-row justify-start space-x-4">
              <img
                className="w-10 h-10 boder boder-2 rounded-md"
                src="/img/Asset 17.png"
                alt="user"
              />
              <div>
                <p className=" text-base font-sebang-gothic font-bold">
                  대기중인 작업 3
                </p>
                <p className="text-left text-sm font-sebang-gothic text-gray-400 ">
                  2022년 2월 23일 까지
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PostView;