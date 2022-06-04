import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import cookie from "react-cookies";
import HomeHeader from "./HomeHeader";

function Notification_page({ history, location, match }) {
  //console.log(history);
  // console.log(location.state.type);
  // console.log(match.params);
  axios.default.paramsSerializer = (params) => {
    return qs.stringify(params);
  };

  const [id, setId] = useState(match.params.id);
  const [type, setType] = useState(location.state.type);
  const cookies = cookie.load("login_token");
  const [data, setData] = useState([
    {
      contents: null,
      created_date: null,
      ended_date: null,
      id: null,
      title: null,
      updated_date: null,
      user_id: null,
      volunteer_time: null,
    },
  ]);

  React.useEffect(() => {}, [data]);
  useEffect(() => {
    console.log(type);
    if (type === "notice") {
      axios({
        method: "get",
        url: "http://18.116.2.111:8080/api/boards/" + id,
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
    } else if (type === "work") {
      axios({
        method: "get",
        url: "http://18.116.2.111:8080/api/boards/" + id,
        headers: {
          Authorization: "Bearer " + cookies,
        },
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
  }, []);

  return (
    <div className="relative bg-no-repeat bg-cover relative min-h-screen bg-home-spotted-pattern">
      <HomeHeader />
      <div className="flex justify-center content-center my-14">
        <div className="flex flex-grow p-10 border border-2 item-center justify-start bg-gray-50  mx-4 h-auto space-y-4">
          <div className="p-4 min-w-full flex flex-col space-y-8 rounded-lg">
            <div className="flex">
              <div className="text-sm font-sebang-gothic  text-gray-600">
                <a href="/">SINABRO {">"} &nbsp;</a>
              </div>
              <div className="text-sm font-sebang-gothic text-green-700">
                <p> 알림</p>
              </div>
            </div>

            <h1 className="text text-left text-2xl font font-sebang-gothic front-bold text-black">
              {data.title}
            </h1>
            <hr className="border border-gray-500 bg-gray-500"></hr>
            <p className="text-left text-sm font-sebang-gothic front-normal text-black">
              {data.contents}
            </p>

            <hr className="border border-gray-500 bg-gray-500"></hr>
            <div className="table w-full px-2 p-2 ">
              <tr className="bg-white">
                <td className="p-2 text-sm tracking-wider font-sebang-gothic ">
                  다음글
                </td>
                <td className="p-2 text-sm tracking-wider font-sebang-gothic">
                  시나브로 정기 점검 안내
                </td>
                <td className="p-2 text-sm tracking-wider font-sebang-gothic">
                  2021.08.30
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 text-sm tracking-wider font-sebang-gothic ">
                  이전글
                </td>
                <td className="p-2 text-sm tracking-wider font-sebang-gothic">
                  봉사 작업 확인 서비스시 템 개선 작업
                </td>
                <td className="p-2 text-sm tracking-wider font-sebang-gothic">
                  2021.08.02
                </td>
              </tr>
            </div>
            <div className="border border-2 w-1/3 self-center text-center text-lg font-sebang-gothic font-bold rounded-lg text-white bg-green-600 hover:bg-green-700">
              <button onClick={() => history.goBack()}>돌아가기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification_page;
