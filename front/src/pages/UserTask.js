import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import cookie  from "react-cookies";

const UserTask = () => {    
    cookie.load("login_token");
    const handleLogout = () => {        
        cookie.remove("login_token");        
        window.location.href = '/'     
        
    }
    return(
            <div>
                <div className="flex flex-row space-x-4">
                    <img className="w-10 h-10 boder boder-2 runded-md" src="/img/Asset 17.png" alt="user" />
                    <div>
                        <p className="text-center text-xl font-sebang-gothic font-bold ">
                            봉사자 이름
                        </p>                        
                        <div className="text-center text-sm font-sebang-gothic text-gray-500 hover:text-gray-700">
                            <button onClick={handleLogout}>로그아웃</button>
                        </div>
                    </div>
                </div>
                <div className=' space-y-4'>
                    {/* <p className="mt-14 text-left text-base font-sebang-gothic font-bold">
                        진&nbsp;행&nbsp;작&nbsp;업
                    </p>
                    <div className="flex flex-row justify-center space-x-4 ">
                        <img className="w-10 h-10 boder boder-2 rounded-md " src="/img/Asset 17.png " alt="user" />
                        <Link to="/MemberHomeEducation">
                            <div>
                                <p className="left-0 text-center text-base font-sebang-gothic font-bold">
                                    진행 중인 작업 1
                                </p>
                                <div>                                                                              
                                    <progress className="w-28 h-3 rounded-lg" value={20} max={100}></progress>
                                    <p className="text-center text-sm font-sebang-gothic font-bold">{20}%</p>
                                    
                                </div>                                            
                            </div> 
                        </Link>
                    </div>
                    <div className="pt-4 flex flex-row justify-center space-x-4">
                        <img className="w-10 h-10 boder boder-2 rounded-md" src="/img/Asset 17.png" alt="user" />
                        <Link to="/MemberHomeEducation">
                            <div>
                                <p className="text-center text-base font-sebang-gothic font-bold">
                                    진행 중인 작업 2
                                </p>
                                
                                <div className="mx-auto h-3 w-auto ">      
                                    <progress className="w-28 h-3 rounded-lg" value={60} max={100}></progress>
                                    <p className="text-center text-sm font-sebang-gothic font-bold">{60}%</p>
                                    
                                </div>                                           
                            </div>                        
                        </Link>                        
                    </div> */}
                </div>
                <div className='space-y-4'>
                    <p className="mt-14 text-left text-base font-sebang-gothic font-bold">
                        대기중인 작업
                    </p>
                    <div className="flex flex-row justify-center space-x-4">
                        <img className="w-10 h-10 boder boder-2 rounded-md" src="/img/Asset 17.png" alt="user" />
                        <div>
                            <p className=" text-base font-sebang-gothic font-bold">
                                대기중인 작업 1
                            </p>
                            <p className="text-left text-sm font-sebang-gothic text-gray-400">2022년 2월 21일 까지</p>                                         
                        </div>                        
                    </div>
                    <div className="pt-4 flex flex-row justify-center space-x-4">
                        <img className="w-10 h-10 boder boder-2 rounded-md" src="/img/Asset 17.png" alt="user" />
                        <div>
                            <p className=" text-base font-sebang-gothic font-bold">
                                대기중인 작업 2
                            </p>
                            <p className="text-left text-sm font-sebang-gothic text-gray-400">2022년 2월 22일 까지</p>
                        </div>                        
                    </div>
                    <div className="pt-4 flex flex-row justify-start space-x-4">
                        <img className="w-10 h-10 boder boder-2 rounded-md" src="/img/Asset 17.png" alt="user" />
                        <div>
                            <p className=" text-base font-sebang-gothic font-bold">
                                대기중인 작업 3
                            </p>
                            <p className="text-left text-sm font-sebang-gothic text-gray-400 ">2022년 2월 23일 까지</p>                                        
                        </div>                        
                    </div>
                </div>
                </div>
    )
}

export default UserTask;