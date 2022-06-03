import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import cookie from 'react-cookies';
import qs from 'qs';
import HomeHeader from "./HomeHeader";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Disabled_write = () => {
  const cookies = cookie.load("login_token");
  function getToday(){
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day +"T12:34:56.000Z";
  }
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [volunteer_time, setVolunteer_time] = useState(0);
  const [end_date, setEnd_date] = useState(getToday());
  const [file, setFile] = useState("");

  const handleInputTitle = (e) =>{
    setTitle(e.target.value);
  }

  const handleInputContents = (e) => {
      setContents(e.target.value);
  }

  const handleInputVolunteer_time = (e) => {
    setVolunteer_time(e.target.value);
  }

  const handleInputEnd_date = (e) => {    
    setEnd_date(e.target.value);
  }

  const handleInputFile = (e) => {
    setFile(e.target.files);    
  }

  const handleSubmit = () =>{           
      const form = new FormData()

      form.append("file", new Blob([JSON.stringify(file)], { type: "application/json" }));      
      form.append("contentsRequest", new Blob([JSON.stringify({
        'title' : title,
        'contents' : contents,
        'volunteer_time' : volunteer_time,
        'ended_date' : end_date +"T12:34:56.000Z"
      })], {type: "application/json"}));

      for (const [key, value] of form) {
        console.log(key, value)
      }

      axios.post(
        'http://18.117.173.151:8080/api/works/', 
        form,
        {
          headers: {                
            'Authorization': 'Bearer ' + cookies,          
            'Content-Type': 'multipart/form-data' 
          }
        }                        
      )
      .then(function (response) {
        // handle success 
        console.log(response);            
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })      
      
  }
  
  return (
    <div className="relative bg-no-repeat bg-cover relative min-h-screen bg-home-spotted-pattern">
      <HomeHeader />
      <div className="font-sebang-gothic flex px-96 my-14">
        <div className="boder border-2 shadow-md rounded-xl item-center justify-center p-10 px-50  bg-gray-50 ">
          <div className="text-4xl">
            봉사 요청서 작성
            <div className="py-3 text-xl">
              봉사자에게 도움이 필요한 내용을 작성해 봉사를 요청합니다.
            </div>
            <form>
            <div class="border-solid border-t-2	border-green-600 "></div>
            <div class="board_write text-2xl">
              <div className=' "title"'>
                <dl>
                  <dt>
                    제목 &nbsp; &nbsp; &nbsp; &nbsp;
                    <input
                      className="px-32"
                      type="text"
                      value={title}
                      onChange={handleInputTitle}
                      placeholder="제목 입력"
                    />
                  </dt>
                  <div class="border-solid border-t-2	border-green-600 "></div>

                  <dt>
                    봉사 시간
                    <input
                      className="px-32"
                      type="text"
                      value={volunteer_time}
                      onChange={handleInputVolunteer_time}
                      placeholder="EX) 1시간"
                    />
                  </dt>
                  <div class="border-solid border-t-2	border-green-600 "></div>
                
                  <dt>
                    <div  className="flex flex-row w-max space-x-4">
                    마감 기간
                    <input
                      className="px-32"
                      type="date"
                      value={end_date}
                      onChange={handleInputEnd_date}                      
                    ></input>                                        
                    </div>
                  </dt>
                </dl>
              </div>
              <div class="border-solid border-t-2	border-green-600 "></div>

              <div className="cont py-2 ">
                <textarea
                  className="h-96 px-44 w-max bg-white col-span-12 "
                  cols={40}
                  placeholder="       내용 입력"
                  value={contents}
                  onChange={handleInputContents}
                ></textarea>
              </div>
            </div>
            <br></br>
          <div class="border-solid border-t-2	border-green-600 "></div>
          <br></br>
          <div>
            <label for="input-file"></label>
            <input type="file" id="input-file"  onChange={handleInputFile.bind(this)} className="text-base"/>
          </div>
          <center>
            <button
              type="button"
              class="px-2 py-1 border border-black text-base"                 
              onClick={handleSubmit}
            >
              등 록
            </button>
            <div className="float-right"></div>
          </center>
          </form>
          </div> 
        </div>        
      </div>

      
    </div>
  );
};

export default Disabled_write;
