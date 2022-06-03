import axios from "axios";
import React, { useEffect, useState } from 'react';
import NoticePost from './NoticePost';

const Home_Class_Paginations = () => {
    const [data, setData] = useState({
        boards:{
          "content": [
            {
              "board_type": null,
              "contents": null,
              "created_date": null,
              "idx": null,
              "title": null,
              "updated_date": null
            }
          ],
          "links": {
            "ref": null,
            "href": null
          },
          "page": {
            "number": null,
            "size": null,
            "totalElements": null,
            "totalPages": null
          }
        }
      }
      );
  
      const [states, setstates] = useState("");
      const [searchdata, setsearchdata] = useState("");
      const [selectvalue, setselectvalue] = useState("");
      // React.useEffect(() => {
      //   console.log("updated", data)
      // }, [data])
      
      useEffect(() => {      
          axios.get('http://52.14.229.32:8080/api/boards')
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
          axios.get('http://52.14.229.32:8080/api/boards?page='+ number + '&size=10')
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
          axios.get('http://52.14.229.32:8080/api/boards?page='+ number +'&searchOption=title&keyword=' + searchdata)
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
          axios.get('http://52.14.229.32:8080/api/boards?page='+ number +'searchOption=title_contents&keyword='+ searchdata)
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
      for (let i = 0; i < Math.ceil(data.boards.page.totalElements / data.boards.page.size); i++) {
        pageNumbers.push(i);      
      }
      
      const handleChangeSearch = (e) => {
        setsearchdata(e.target.value);      
      }
  
      const handleChangeSelect = (e) => {
        setselectvalue(e.target.value);      
      }
  
      const handleSubmit = (e) => {      
        if(selectvalue === "title"){
          axios.get('http://52.14.229.32:8080/api/boards?searchOption=title&keyword=' + searchdata)
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
          axios.get('http://52.14.229.32:8080/api/boards?searchOption=title_contents&keyword='+ searchdata)
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
            <NoticePost posts={data.boards.content}></NoticePost>
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

export default Home_Class_Paginations