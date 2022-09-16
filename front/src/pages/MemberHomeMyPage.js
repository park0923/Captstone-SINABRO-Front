import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import cookie  from "react-cookies";
import axios from "axios";
import UserTask from "./UserTask";

function MemberHomeMyPage() {
  const cookies = cookie.load("login_token");
    const [user, setUser] = useState({  
        work: {
          links: [
            {
              "rel": null,
              "href": null
            }
          ],
          content: [
            {
              "type": null,
              "id": null,
              "work_title": null,
              "date": null
            }
          ],
          page: {
            "size": null,
            "totalElements": null,
            "totalPages": null,
            "number": null
          }
        },       
          "username": null,
          "introduction": null,
          "email": null,
          "phone_number": null,
          "address": null,
          "volunteer_time": null,
          "work_number": null,
          "warn_number": null
    })
  const hadleClick = () => {
      window.location.href = '/Member_Home_WorkHistory';
  }

  const [myhistory, setMyhistory] = useState({  
    work: {
      links: [
        {
          "rel": null,
          "href": null
        }
      ],
      content: [
        {
          "type": null,
          "id": null,
          "work_title": null,
          "date": null
        }
      ],
      page: {
        "size": null,
        "totalElements": null,
        "totalPages": null,
        "number": null
      }
    },       
      "username": null,
      "introduction": null,
      "email": null,
      "phone_number": null,
      "address": null,
      "volunteer_time": null,
      "work_number": null,
      "warn_number": null
})
  useEffect(() => {
    axios({
        method: 'get',
        url: 'http://34.64.61.63:8080/api/members',            
        headers: {                
            "Authorization": 'Bearer ' + cookies
        }            
      })
      .then(function (response) {
          // handle success              
          setUser(response.data)   
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })    

        axios({
          method: 'get',
          url: 'http://34.64.61.63:8080/api/members?size=5',            
          headers: {                
              "Authorization": 'Bearer ' + cookies
          }            
        })
        .then(function (response) {
            // handle success              
            setMyhistory(response.data)
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })    
},[]);  
React.useEffect(()=>{
  console.log(myhistory);
},[myhistory]);

  return (
    <div className="min-h-screen flex item-center justify-between bg-gray-yellow py-12 px-4 sm:px-6 lg:px-8">
      <div className="min-h-screen p-12 boder border-2 shadow-md rounded-none item-center justify-center bg-gray-50 w-1/6 space-y-20">
        <div>
          <img className="mx-auto h-20 w-auto" src="/img/Logo.svg" alt="Logo" />
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
              <img className="w-10 h-10" src="/img/Asset 16.png" alt="notice" />
              <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-gray-400 hover:text-gray-600">
                공지사항
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-grow p-12 border border-2 item-center justify-center bg-transparent w-4/6 mx-4 h-auto space-y-4">
        <div className="flex flex-col space-y-6 w-full">
          <div>
            <h1 className="text-2xl font-sebang-gothic front-bold text-black">
              마이페이지
            </h1>
          </div>
          <div className="p-12  boder border-2 shadow-md rounded-xl item-center justify-center h-50 bg-gray-50 space-y-1">
            <div className="flex flex-row space-x-6">
              <div className="my-8 flex flex-col space-y-2">
                <img
                  className="ml-12 w-20 h-20"
                  src="/img/Asset 17.png"
                  alt="user"
                />
                <p className="pt-1 text-center text-lg font-sebang-gothic font-bold text-black">
                  {user.username}
                </p>
                <p className="pt-1 text-center text-base font-sebang-gothic font- text-gray-500">
                  {user.introduction}
                </p>
                <div className="ml-12 w-24 shadow-md rounded-full justify-center bg-green-600">
                  <Link
                    to="/MemberHomeMyPage_edit"
                    className="ml-6 text-center text-sm font-sebang-gothic text-white"
                  >
                    정보 수정
                  </Link>
                </div>
              </div>
              <div className="flex flex-col space-y-6 ">
                <div className="m-6 flex flex-row space-x-20 text-center">
                  <div className="flex flex-col space-y-4 ml-4">
                    <label className="text-gray-900 font-sans text-lg font-sebang-gothic font-bold">
                      이메일
                    </label>
                    <p className="text-sm font-sebang-gothic font- text-gray-500">
                      {user.email}
                    </p>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <label className="text-gray-900 font-sans text-lg font-sebang-gothic font-bold">
                      휴대폰 번호
                    </label>
                    <p className="text-sm font-sebang-gothic font- text-gray-500">
                      {user.phone_number}
                    </p>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <label className="text-gray-900 font-sans text-lg font-sebang-gothic font-bold">
                      주소
                    </label>
                    <p className="text-sm font-sebang-gothic font- text-gray-500">
                      {user.address}
                    </p>
                  </div>
                </div>
                <hr className="border border-gray-500 bg-gray-500"></hr>
                <div className="m-6 flex flex-row space-x-6 justify-around">
                  <div className="flex flex-col space-y-4">
                    <label className="text-gray-900 font-sans text-lg font-sebang-gothic font-bold">
                      누적봉사 시간
                    </label>
                    <p className="text-center text-2xl font-sebang-gothic font-bold text-black">
                      {user.volunteer_time}
                    </p>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <label className="text-gray-900 font-sans text-lg font-sebang-gothic font-bold">
                      누적 작업 개수
                    </label>
                    <p className="text-center text-2xl font-sebang-gothic font-bold text-black">
                      {user.work_number}
                    </p>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <label className="text-gray-900 font-sans text-lg font-sebang-gothic font-bold">
                      누적 경고 횟수
                    </label>
                    <p className="text-center text-2xl font-sebang-gothic font-bold text-black">
                      {user.warn_number}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 boder border-2 shadow-md rounded-xl item-center justify-center min-w-max h-50 bg-gray-50 space-y-1">
            <div className="flex flex-row space-x-6">
              <div className="mx-8 flex flex-col space-y-2 w-full">
                <div className="flex flex-row justify-between">
                  <h3 className="text-lg font-sebang-gothic front-bold text-black">
                    작업 히스토리
                  </h3>
                  <button className="border border-2 w-2/12 self-center text-center text-base font-sebang-gothic rounded-md text-white bg-green-600 hover:bg-green-700"
                    onClick={hadleClick}>
                    View all
                  </button>
                </div>
                <div className="table w-full px-2 p-2 ">
                  <thead className="bg-gray-100 border-b-2 text-center ">
                    <th className="p-1 text-xl text-gray-500 font-sebang-gothic tracking-wide text-center">
                      NO
                    </th>
                    <th className="p-2 text-xl text-gray-500 font-sebang-gothic tracking-wide text-left">
                      제목
                    </th>
                    <th className="p-2 text-xl text-gray-500 font-sebang-gothic tracking-wide text-center">
                      분류
                    </th>
                    <th className="p-2 text-xl text-gray-500 font-sebang-gothic tracking-wide text-center">
                      마 감 일
                    </th>
                  </thead>
                  <tbody>
                  {myhistory.work.content.slice(0).map(({ id, work_title, type, date }, index) => (
                      <tr className="bg-white">
                        <td
                          style={{ borderBottom: "1px solid #A1A0A0" }}
                          className="p-2 text-sm font-sebang-gothic text-center"
                        >
                          {index + 1}
                        </td>
                        
                        <td
                          style={{ borderBottom: "1px solid #A1A0A0" }}
                          className="p-2 text-sm font-sebang-gothic"
                        >
                          <Link to={{pathname: `/MemberHomeWorkInformation/${id}`, state: {type: type}}} >
                            {work_title}
                          </Link> 
                        </td>  
                        <td
                          style={{ borderBottom: "1px solid #A1A0A0" }}
                          className="p-2 text-sm font-sebang-gothic text-center"
                        >
                          {type}
                        </td>                    
                        <td
                          style={{ borderBottom: "1px solid #A1A0A0" }}
                          className="p-2 text-sm font-sebang-gothic text-center"
                        >
                          {date}
                        </td>                                
                      </tr>
                    ))}
                  </tbody>                  
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-12 boder border-2 shadow-md rounded-none item-center justify-center bg-gray-50 max-w-max max-h-max w-1/6 space-y-4">
        <UserTask></UserTask>
      </div>
    </div>
  );
}

export default MemberHomeMyPage;
