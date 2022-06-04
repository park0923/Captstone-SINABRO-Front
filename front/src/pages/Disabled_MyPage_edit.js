import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import cookie  from "react-cookies";
import axios from "axios";
function Disabled_MyPage_edit() {

  const cookies = cookie.load("login_token");
  const [introduction, setIntroduction] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [address, setAddress] = useState()

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

  const handleClick = () => {
    console.log(introduction)
    console.log(email)
    console.log(phone)
    console.log(address)
  }

  useEffect(() => {
    axios({
        method: 'get',
        url: 'http://18.116.2.111:8080/api/members',            
        headers: {                
            "Authorization": 'Bearer ' + cookies
        }            
      })
      .then(function (response) {
          // handle success   
          console.log(response.data)           
          setUser(response.data)
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
      <div className="flex flex-grow p-12 border border-2 item-center justify-center bg-transparent  mx-4 h-auto space-y-4">
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-2xl font-sebang-gothic front-bold text-black">
              마이페이지 {'>'} 내 정보 수정
            </h1>
          </div>
          <div className="p-12  boder border-2 shadow-md rounded-xl item-center justify-center w-full h-50 bg-gray-50 space-y-1">
            <div className="flex flex-row space-x-6">
              <div className="my-8 flex flex-col space-y-2">
                <img
                  className="ml-14 w-20 h-20"
                  src="/img/Asset 17.png"
                  alt="user"
                />
                <p className="pt-1 text-center text-lg font-sebang-gothic font-bold text-black">
                  봉사자 이름
                </p>
                <p className="pt-1 text-center text-base font-sebang-gothic font- text-gray-500">
                  <div>
                    <label
                      htmlFor=""
                      className="text-gray-900 font-sans text-sm font-semibold"
                    ></label>
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
                </p>
              </div>
              <div className="flex flex-col space-y-6 py-16">
                <div className="m-6 flex flex-row py-9 space-x-10">
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
                        onChange={hadleInputEmail}
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
              
              <button onClick={handleClick} className=" w-40 h-10 whitespace-nowrap inline-flex items-center justify-center border border-transparent rounded-3xl shadow-sm text-2xl font-sebang-gothic font-bold text-black bg-green-400 hover:bg-gray-100">
                <div className="font-color">정보 수정</div>
              </button>            
              <Link to="/Disabled">
                <button className=" w-40 h-10 whitespace-nowrap inline-flex items-center justify-center border border-transparent rounded-3xl shadow-sm text-2xl font-sebang-gothic font-bold text-black bg-green-400 hover:bg-gray-100">
                  <div className="font-color">취 소</div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Disabled_MyPage_edit;
