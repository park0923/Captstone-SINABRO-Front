import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import HomeHeader from './HomeHeader';

function Notification() {
    const [data, setData] = useState([{
        "userid": null,
        "title": null,
        "contents": null,
        "boardType": "notice",
        "created_date": null,
        "updated_date": null,
        "_links": {
            "self": {
                "href": null
            },
            "boardEntity": {
                "href": null
            }
        }
    }]);
    
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const ChangeDate = (date) => {
        return moment(date).format('YYYY-MM-DD');
    }

    useEffect(() => {
        fetch('http://localhost:8080/boardEntities/search/findByBoardType?boardType=notice')
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            throw response;
        })
        .then(data => {setData(data._embedded.boardEntities);})
        .catch(error => {
            console.error("Error fetching data: ", error);
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [])

    if (loading) return "Loading...";
    if (error) return "Error!";

    console.log(data[0])

    return (
        <div className="relative bg-no-repeat bg-cover relative min-h-screen bg-home-spotted-pattern">
            <HomeHeader />
            <div className="flex justify-center content-center my-14">
                
                <div className="m-8 px-2">
                        <div className="flex">
                        <div className="text-sm font-sebang-gothic  text-gray-600">
                        <a href='/'>SINABRO {'>'} &nbsp;</a>
                        </div>
                    
                        <div className="text-sm font-sebang-gothic text-green-700">
                        <a href='/Notification'> 알 림</a>
                        </div>
                        </div>

                        <h1 class="my-4 text-xl font-sebang-gothic leading-normal tracking-wide">
                        봉사 활동 관련 공지사항을 안내해드립니다.
                    </h1>
                    <form className="my-4 flex justify-between appearance-none  relative block w-full font-sebang-gothic px-2 py-2 border-2 border-black">
                        <div className="text-xl py-2 font-sebang-gothic">검색 구분</div>
                        <div className="select-text py-3 px-5 border-gray-500">
                            <select>
                                <option>전체</option>
                                <option>1. 첫번째 옵션</option>
                                <option>2. 두번째 옵션</option>
                                <option>3. 세번째 옵션</option>
                            </select>
                        </div>
                        <input type="text" placeholder="검색어를 입력해주세요" className="mx-5 w-80 border-gray-500 px-2 py-1 bg-gray-300 "/>
                        <button type="submit" className="w-32 h-10 whitespace-nowrap inline-flex items-center justify-center rounded-lg shadow-sm text-sm font-sebang-gothic text-white bg-green-600 hover:bg-green-700">
                            조  회
                        </button>
                    </form>
                        <div className="table w-full px-3 p-2 ">
                                <thead className="bg-white border-b-2  ">
                                   <th className="p-2 text-xl text-gray-500 font-sebang-gothic tracking-wide text-left">NO</th>
                                   <th className="p-2 text-xl text-gray-500 font-sebang-gothic tracking-wide text-left">제목</th>
                                   <th className="p-2 text-xl text-gray-500 font-sebang-gothic tracking-wide text-left">작성일</th>
                                </thead>
                                <thead>
                                    <th>
                                        <hr width="100%" style={{ color: "#A1A0A0", backgroundColor: "#A1A0A0", height: 3 }} />
                                    </th>
                                    <th>
                                        <hr width="100%" style={{ color: "#A1A0A0", backgroundColor: "#A1A0A0", height: 3 }} />
                                    </th>
                                    <th>
                                        <hr width="100%" style={{ color: "#A1A0A0", backgroundColor: "#A1A0A0", height: 3 }} />
                                    </th>
                                </thead>
                                <tbody>
                                    {   
                                        data.slice(0).reverse().map( ({title, created_date}, index) => (
                                        <tr className="bg-white shadow-md" >
                                            <td style={{borderBottom: "1px solid #A1A0A0"}} className="p-2 text-sm font-sebang-gothic">{data.length-index}</td>  
                                            <td style={{borderBottom: "1px solid #A1A0A0"}} className="p-2 text-sm font-sebang-gothic">{title}</td>   
                                            <td style={{borderBottom: "1px solid #A1A0A0"}} className="p-2 text-sm font-sebang-gothic">{ChangeDate(created_date)}</td>
                                        </tr>
                                        ))
                                    }
                                </tbody> 
                            </div>
                        <div className="flex px-80">
                            <button className="h-8 w-8 p-1 hover:bg-gray-300 rounded ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                        </svg></button>
                            <div className="flex">
                            <button className="h-8 w-8 p-1 hover:bg-gray-300 rounded font-sebang-gothic">1</button>
                            <button className="h-8 w-8 p-1 hover:bg-gray-300 rounded font-sebang-gothic">2</button>
                            </div>
                            <button className="h-8 w-8 p-1 hover:bg-gray-300 rounded"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                            </svg></button>
                        </div>
                    </div>
                    
                    <div className="py-2 px-6 m-1">
                    <span className="sr-only">Introduce Homepage</span>
                    </div>
                </div>
            </div>
    )
};

export default Notification;