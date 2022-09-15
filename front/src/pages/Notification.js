import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import HomeHeader from "./HomeHeader";
import axios from "axios";
import None_NotificationPaginations from "./None_NotificationPaginations";
function Notification() {
    
    // const [loading, setLoading] = useState(null);
    // const [error, setError] = useState(null);
    // const ChangeDate = (date) => {
    //     return moment(date).format('YYYY-MM-DD');
    // }

    // const [data, setData] = useState({
    //     boards:{
    //       "content": [
    //         {
    //           "board_type": null,
    //           "contents": null,
    //           "created_date": null,
    //           "idx": null,
    //           "title": null,
    //           "updated_date": null
    //         }
    //       ],
    //       "links": {
    //         "ref": null,
    //         "href": null
    //       },
    //       "page": {
    //         "number": null,
    //         "size": null,
    //         "totalElements": null,
    //         "totalPages": null
    //       }
    //     }
    //   }
    //   );
      
    //   // React.useEffect(() => {
    //   //   console.log("updated", data)
    //   // }, [data])
      
    //   useEffect(() => {      
    //       axios.get('http://54.153.86.50:8080/api/boards')
    //       .then(function (response) {
    //           // handle success
    //           console.log(response);
    //           setData(response.data);
    //         })
    //         .catch(function (error) {
    //           // handle error
    //           console.log(error);
    //         })
    //         .then(function () {
    //           // always executed
    //         });        
    //   },[])

  // React.useEffect(() => {
  //   console.log("updated", data)
  // }, [data])

//   useEffect(() => {
//     axios
//       .get("http://54.153.86.50:8080/api/boards")
//       .then(function (response) {
//         // handle success
//         console.log(response);
//         setData(response.data);
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//       })
//       .then(function () {
//         // always executed
//       });
//   }, []);

  return (
    <div className="relative bg-no-repeat bg-cover relative min-h-screen bg-home-spotted-pattern">
      <HomeHeader />
      <div className="flex justify-center content-center my-14">
        <div className="m-8 px-2">
          <div className="flex">
            <div className="text-sm font-sebang-gothic  text-gray-600">
              <a href="/">SINABRO {">"} &nbsp;</a>
            </div>

            <div className="text-sm font-sebang-gothic text-green-700">
              <a href="/Notification"> 알 림</a>
            </div>
          </div>

          <h1 class="my-4 text-xl font-sebang-gothic leading-normal tracking-wide">
            봉사 활동 관련 공지사항을 안내해드립니다.
          </h1>
          <None_NotificationPaginations></None_NotificationPaginations>
        </div>

        <div className="py-2 px-6 m-1">
          <span className="sr-only">Introduce Homepage</span>
        </div>
      </div>
    </div>
  );
}

export default Notification;
