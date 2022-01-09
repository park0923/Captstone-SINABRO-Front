import React from 'react';
import { Link } from 'react-router-dom';

function Member_Home_WorkHistory () {
    return(
        <div className="min-h-screen flex item-center justify-self-auto  py-12 px-4 sm:px-6 lg:px-20">            
            <div className="min-h-screen p-12 boder border-2 shadow-md rounded-none item-center justify-center bg-gray-50 max-w-max space-y-20">
                <div>
                    <img className="mx-auto h-20 w-auto" src="/img/Logo.svg" alt="Logo"/>
                    <div className="mt-14 shadow-md rounded-full bg-green-600">
                        <p className="text-center text-xl font-sebang-gothic text-white">
                            마이페이지
                        </p>    
                    </div>                    
                </div>                
                <div className="flex flex-col space-y-4">
                    <Link to="">
                        <div className="flex flex-row space-x-8">
                            <img className="w-10 h-10" src="/img/Asset 11.png" alt="dashboard" />
                            <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-gray-400 hover:text-gray-600">
                                대시보드
                            </p>
                        </div>                  
                    </Link>
                    <Link to="Member_Home_Introduction">
                        <div className="flex flex-row space-x-8">
                            <img className="w-10 h-10" src="/img/Asset 17.png" alt="introduce" />
                            <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-gray-400 hover:text-gray-600">
                                소&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;개
                            </p>
                        </div>  
                    </Link>
                    <Link to="/Home_Class_List">
                        <div className="flex flex-row space-x-8">
                            <img className="w-10 h-10" src="/img/Asset 15.png" alt="education" />
                            <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-gray-400 hover:text-gray-600">
                                교&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;육
                            </p>
                        </div>     
                    </Link>
                    <Link to="/MemberVolunteer">
                        <div className="flex flex-row space-x-8">
                            <img className="w-10 h-10" src="/img/Asset 20.png" alt="volunteer" />
                            <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-gray-400 hover:text-gray-600">
                                봉사활동
                            </p>
                        </div>        
                    </Link>
                    <Link to="/Member_Home_Inspection">
                        <div className="flex flex-row space-x-8">
                            <img className="w-10 h-10" src="/img/Asset 12.png" alt="inspection" />
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
          
            <div className="flex flex-grow p-12 border  shadow-md rounded-none item-center justify-start bg-gray-50 max-w-screen-lg space-y-2">
                    
                <div className="min-w-full flex flex-col space-y-8">
                        <div className="flex">
                        <div className="text-sm font-sebang-gothic  text-gray-600">
                        <a href='/'>SINABRO > &nbsp;</a>
                        </div>
                        <div className="text-sm font-sebang-gothic  text-gray-600">
                        <a href='/'>마이페이지 > &nbsp;</a>
                        </div>
                        <div className="text-sm font-sebang-gothic text-green-700">
                        <a href='/Member_Home_workhistory'> 진행 작업</a>     
                        </div>
                        </div>    
                    <h1 className="text text-left text-2xl font font-sebang-gothic front-bold text-black">
                        진행 중인 작업 목록을 확인할 수 있습니다.
                    </h1>
                    <div>
                    <form className="my-2 flex justify-between appearance-none  relative block w-full font-sebang-gothic px-2 py-2 border-2 border-black">
                        <div className="text-xl px-1 py-2 font-sebang-gothic my-2 pt-1 text-justify font font-sebang-gothic front-bold text-black">검색 구분</div>
                        <div className="select-text py-3 px-5 border-gray-500">
                            <select>
                                <option>전체</option>
                                <option>1. 첫번째 옵션</option>
                                <option>2. 두번째 옵션</option>
                                <option>3. 세번째 옵션</option>
                            </select>
                        </div>
                        <input type="text" placeholder="검색어를 입력해주세요" className="mx-5 w-80 border-gray-500 px-2 py-1 bg-gray-300 "/>
                        <button type="submit" className=" w-36 h-12 whitespace-nowrap inline-flex items-center justify-center rounded-lg shadow-sm text-sm font-sebang-gothic text-white bg-green-600 hover:bg-green-700">
                            조  회
                        </button>
                    </form>
                    </div>
                    <div className="table w-full px-3 p-2 ">
                                <thead className="bg-gray-100 border-b-2  ">
                                   <th className="p-2 text-xl text-gray-500 font-sebang-gothic tracking-wide text-left">NO</th>
                                   <th className="p-2 text-xl text-gray-500 font-sebang-gothic tracking-wide text-left">제 목</th>
                                   <th className="p-2 text-xl text-gray-500 font-sebang-gothic tracking-wide text-left">완 료 일</th>
                                </thead>
                                <tr className="bg-white">
                                    <tb className="p-2 text-sm font-sebang-gothic ">7</tb>
                                    <td className="p-2 text-sm font-sebang-gothic">봉사 활동시 유의 사항 안내</td>
                                    <td className="p-2 text-sm font-sebang-gothic">2022.01.05</td>
                                </tr>
                                <tr className="bg-gray-100" >
                                    <tb className="p-2 text-sm font-sebang-gothic ">6</tb>
                                    <td className="p-2 text-sm font-sebang-gothic">봉사 활동시 유의 사항 안내</td>
                                    <td className="p-2 text-sm font-sebang-gothic">2022.01.04</td>
                                </tr>
                                <tr>
                                    <tb className="p-2 text-sm font-sebang-gothic">5</tb>
                                    <td className="p-2 text-sm font-sebang-gothic">봉사 작업 확인 서비스 시스템 개선 작업</td>
                                    <td className="p-2 text-sm font-sebang-gothic">2022.01.03</td>
                                </tr>
                                <tr  className="bg-gray-100">
                                    <tb className="p-2 text-sm font-sebang-gothic">4</tb>
                                    <td className="p-2 text-sm font-sebang-gothic">필수 시청 자료 안내</td>
                                    <td className="p-2 text-sm font-sebang-gothic">2022.01.02</td>
                                </tr>
                                <tr>
                                    <tb className="p-2 text-sm font-sebang-gothic">3</tb>
                                    <td className="p-2 text-sm font-sebang-gothic">시나브로 회원약관 개정 안내</td>
                                    <td className="p-2 text-sm font-sebang-gothic">2022.01.01</td>
                                </tr>
                                <tr  className="bg-gray-100">
                                    <tb className="p-2 text-sm font-sebang-gothic">2</tb>
                                    <td className="p-2 text-sm font-sebang-gothic">시나브로 시스템 긴급 점검 안내</td>
                                    <td className="p-2 text-sm font-sebang-gothic">2022.01.01</td>
                                </tr>  
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
            
            </div>  
           
        </div>
        
    )
}

export default Member_Home_WorkHistory;