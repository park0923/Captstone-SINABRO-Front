import axios from "axios";
import React, { useEffect, useState } from 'react';
import NoticePost from './NoticePost';
import cookie from 'react-cookies';
import InspectionPost from "./InspectionPost";

const InspectionPaginations = () =>{
    const [data, setData] = useState({
      inspection_responses: {
        "links": [
          {
            "rel": null,
            "href": null
          }
        ],
        "content": [
          {
            "idx": null,
            "title": null,
            "ended_date": null
          }
        ],
        "page": {
          "size": null,
          "totalElements": null,
          "totalPages": null,
          "number": null
        }
      }
      }
      );
  
      const [states, setstates] = useState("");
      const [searchdata, setsearchdata] = useState("");
      const [selectvalue, setselectvalue] = useState("");
      const cookies = cookie.load("login_token");
      // React.useEffect(() => {
      //   console.log("updated", data)
      // }, [data])
      
      useEffect(() => {      
        axios({
          method: 'get',
          url: 'http://34.64.61.63:8080/api/inspections',            
          headers: {                
              "Authorization": 'Bearer ' + cookies
          }            
        })
          .then(function (response) {
              // handle success
              setData(response.data);            
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });        
      },[])
    
      const handlePaging = (number) =>{     
        if(states === ""){
          axios.get('http://34.64.61.63:8080/api/inspections?page='+ number + '&size=10')
          .then(function (response) {
              // handle success            
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
        else if(states === "title"){
          axios.get('http://34.64.61.63:8080/api/inspections?page='+ number +'&searchOption=title&keyword=' + searchdata)
          .then(function (response) {
              // handle success
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
        else if(states === "title_body"){
          axios.get('http://34.64.61.63:8080/api/inspections?page='+ number +'searchOption=title_contents&keyword='+ searchdata)
          .then(function (response) {
              // handle success
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
      }
  
      const pageNumbers = [];
      for (let i = 0; i < Math.ceil(data.inspection_responses.page.totalElements / data.inspection_responses.page.size); i++) {
        pageNumbers.push(i);      
      }
      
      const handleChangeSearch = (e) => {
        setsearchdata(e.target.value);     
        console.log(searchdata);
      }
  
      const handleChangeSelect = (e) => {
        setselectvalue(e.target.value);      
      }
  
      const handleSubmit = (e) => {      
        if(selectvalue === "title"){          
          axios({
            method: 'get',
            url: 'http://34.64.61.63:8080/api/inspections?searchOption=title&keyword=' + searchdata,            
            headers: {                
                "Authorization": 'Bearer ' + cookies
            }            
          })
          .then(function (response) {
              // handle success            
              if(response.data === undefined){
                alert("일치하는 항목이 없습니다.")
              }
              else{
                setData(response.data);
                setstates("title");
              }            
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });       
        }      
        else if(selectvalue === "title_body"){        
          
          axios({
            method: 'get',
            url: 'http://34.64.61.63:8080/api/inspections?searchOption=title_contents&keyword='+ searchdata,            
            headers: {                
                "Authorization": 'Bearer ' + cookies
            }            
          })
          .then(function (response) {
              // handle success            
              if(response.data === undefined){
                alert("일치하는 항목이 없습니다.")
              }
              else{
                setData(response.data);
                setstates("title_body");
              }           
              
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });               
        }
        else if(selectvalue === "select"){
          alert("검색 구분을 선택하세요");
        }
      }
      return (      
        <div>
          <div>
          <div>
                <form method="get" onSubmit={handleSubmit} className="my-2 flex justify-between appearance-none  relative block w-full font-sebang-gothic px-2 py-2 border-2 border-black">
                  <div className="text-xl px-1 py-2 font-sebang-gothic my-2 pt-1 text-justify font font-sebang-gothic front-bold text-black">
                    검색 구분
                  </div>
                  <div className="select-text py-3 px-5 border-gray-500">
                    <select value={selectvalue} onChange={handleChangeSelect}>  
                      <option value="select">선택</option>                  
                      <option value="title">제목</option>                    
                      <option value="title_body">제목+내용</option>
                    </select>
                  </div>
                  <input
                    onChange={handleChangeSearch}
                    value={searchdata}
                    type="text"
                    placeholder="검색어를 입력해주세요"
                    className="mx-5 w-80 border-gray-500 px-2 py-1 bg-gray-300 "
                  />
                  <button
                    type='button'
                    onClick={handleSubmit}
                    className=" w-36 h-12 whitespace-nowrap inline-flex items-center justify-center rounded-lg shadow-sm text-sm font-sebang-gothic text-white bg-green-600 hover:bg-green-700"
                  >
                    조 회
                  </button>
                </form>
              </div>
          </div>
          <div>
            <InspectionPost posts={data.inspection_responses.content}></InspectionPost>
          </div>
          <div>         
            <nav>
              <div className="justify-center flex flex-row space-x-2">
                {pageNumbers.map((number) => (
                  <div key={number}>
                    <button onClick={() => handlePaging(number)} className="h-8 w-8 p-1 hover:bg-gray-300 rounded font-sebang-gothic">
                      {number+1}
                    </button>
                  </div>
                ))}
              </div>
            </nav>
          </div>        
        </div>
      );
}
export default InspectionPaginations