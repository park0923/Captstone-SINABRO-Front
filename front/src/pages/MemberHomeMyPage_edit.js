import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import UserTask from "./UserTask";
import cookie  from "react-cookies";
import axios from "axios";

function MemberHomeMyPage_edit() {

  const cookies = cookie.load("login_token");
  const [introduction, setIntroduction] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [address, setAddress] = useState()
  const [name, setName] = useState()

    const [user, setUser] = useState({        
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
    window.location.href = "/Member_Home_WorkHistory";
  };

  const hadleInputIntroduction = (e) => {
    setIntroduction(e.target.value);
  }

  const hadleInputEmail = (e) => {
    setEmail(e.target.value);
  }

  const hadleInputPhone = (e) => {
    setPhone(e.target.value);
  }

  const hadleInputAddress = (e) => {
    setAddress(e.target.value);
  }

  const hadleInputName = (e) => {
    setName(e.target.value);
  }
  const handleClick = () => {
    console.log(introduction)
    console.log(email)
    console.log(phone)
    console.log(address)
    axios({
      method: 'patch',
      url: 'http://54.151.102.33:8080/api/members/update',
      data : {
        "address": address,
        "introduction": introduction,
        "phone_number": phone,
        "username": name
      },            
      headers: {                
          "Authorization": 'Bearer ' + cookies
      }            
    })
    .then(function (response) {
        // handle success   
        console.log(response.data)           
        if(response.status === 200){
          alert("회원 정보가 수정되었습니다.")
          setUser(response.data)
          setName(response.data.username)
          setIntroduction(response.data.introduction)
          setEmail(response.data.email)
          setPhone(response.data.phone_number)
          setAddress(response.data.address)
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  useEffect(() => {
    axios({
        method: 'get',
        url: 'http://54.151.102.33:8080/api/members',            
        headers: {                
            "Authorization": 'Bearer ' + cookies
        }            
      })
      .then(function (response) {
          // handle success   
          console.log(response.data)           
          setUser(response.data)
          setName(response.data.username)
          setIntroduction(response.data.introduction)
          setEmail(response.data.email)
          setPhone(response.data.phone_number)
          setAddress(response.data.address)

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    
     },[])

  return (
    <div className="min-h-screen flex item-center justify-between bg-gray-yellow py-12 px-4 sm:px-6 lg:px-8">
      <div className="min-h-screen p-12 boder border-2 shadow-md rounded-none item-center justify-center bg-gray-50 space-y-20">
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

      <div className="flex flex-grow p-12 border border-2 item-center justify-center bg-transparent  mx-4 h-auto space-y-4">
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-2xl font-sebang-gothic front-bold text-black">
              마이페이지 {'>'} 내 정보 수정
            </h1>
          </div>
          <div className="p-12  boder border-2 shadow-md rounded-xl item-center justify-center w-full h-50 bg-gray-50 space-y-1">
            <div className="flex flex-col space-x-2">
              <div className="my-8 flex flex-col space-y-2">
                <dvi className="flex flex-row space-x-4">
                  <img
                    className="ml-14 w-20 h-20"
                    src="/img/Asset 17.png"
                    alt="user"
                  />
                  <div className="flex flex-col space-y-2">
                    <label className="text-gray-900 font-sans text-lg font-sebang-gothic font-bold">
                        이름
                      </label>
                    <input
                          type="text"
                          required
                          name=""
                          value={name}
                          onChange={hadleInputName}
                          placeholder="이름"
                          className="my-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                    />
                  </div>                  
                </dvi>                
              </div>
              <div className="flex flex-col space-y-6 mt-2">
                <div className="m-6 flex flex-row py-9 space-x-10">
                  <div className="flex flex-col space-y-4">
                      <label className="text-gray-900 font-sans text-lg font-sebang-gothic font-bold">
                        자기소개글
                      </label>
                      <input
                        type="text"
                        required
                        name=""
                        value={introduction}
                        onChange={hadleInputIntroduction}
                        placeholder="간단한 자기소개글"
                        className="my-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                      />
                  </div>
                  <div className="flex flex-col space-y-4">
                    <label className="text-gray-900 font-sans text-lg font-sebang-gothic font-bold">
                      이메일
                    </label>
                    <div>
                      <label
                        htmlFor=""
                        className="text-gray-900 font-sans text-sm font-semibold"
                      ></label>
                      <input
                        type="text"
                        required
                        name=""
                        value={email}                        
                        placeholder="이메일"
                        className="my-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <label className="text-gray-900 font-sans text-lg font-sebang-gothic font-bold">
                      휴대폰 번호
                    </label>
                    <div>
                      <label
                        htmlFor=""
                        className="text-gray-900 font-sans text-sm font-semibold"
                      ></label>
                      <input
                        type="text"
                        required
                        name=""
                        value={phone}
                        onChange={hadleInputPhone}
                        placeholder="휴대폰 번호"
                        className="my-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <label className="text-gray-900 font-sans text-lg font-sebang-gothic font-bold">
                      주소
                    </label>
                    <div>
                      <label
                        htmlFor=""
                        className="text-gray-900 font-sans text-sm font-semibold"
                      ></label>
                      <input
                        type="text"
                        required
                        name=""
                        value={address}
                        onChange={hadleInputAddress}
                        placeholder="주소"
                        className="my-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-64 flex flex-row space-x-3">
              
              <button onClick={handleClick} className=" w-40 h-10 whitespace-nowrap inline-flex items-center justify-center border border-transparent rounded-3xl shadow-sm text-2xl font-sebang-gothic font-bold text-white bg-green-600 hover:bg-green-700">
                <div className="font-color">정보 수정</div>
              </button>            
              <Link to="/MemberHomeMyPage">
                <button className=" w-40 h-10 whitespace-nowrap inline-flex items-center justify-center border border-transparent rounded-3xl shadow-sm text-2xl font-sebang-gothic font-bold text-white bg-green-600 hover:bg-green-700">
                  <div className="font-color">취 소</div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="p-12 boder border-2 shadow-md rounded-none item-center justify-center bg-gray-50 max-w-max max-h-max space-y-4">
        <UserTask></UserTask>
      </div>
    </div>
  );
}

export default MemberHomeMyPage_edit;
