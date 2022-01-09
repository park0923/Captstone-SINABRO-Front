import React from 'react';
import { Link } from 'react-router-dom';

function Member_Home_Introduction() {
    return(
        <div className="min-h-screen flex item-center justify-between bg-gray-yellow py-8 px-4 sm:px-6 lg:px-8"> 
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
                    <Link to="/Member_Home_Introduction">
                        <div className="flex flex-row space-x-8">
                            <img className="w-10 h-10" src="/img/Asset 17.png" alt="introduce" />
                            <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-black hover:text-gray-600">
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
          
            <div className="flex flex-grow p-12 border border-2 shadow-md rounded-none item-center justify-start bg-gray-50 max-w-screen-lg space-y-4">
                    
                <div className="min-w-full flex flex-col space-y-8">
                <div className="py-2 px-12 m-1">
                    <span className="sr-only">Introduce Homepage</span>
                    <div className="py-12">
                    <img className="rounded h-80 w-96" src="https://source.unsplash.com/random" alt="남녀이미지" />
                    </div>  
                    <h1 className=" font font-sebang-gothic front-bold text-5xl  font-extrabold leading-normal text-black">
                        온라인 봉사활동 플랫폼<br/>
                        시나브로(SINABRO)
                    </h1>
                    <div>
                    <p class="text-sm font-sebang-gothic py-2 px-2 text-gray-600">
                    온라인 봉사활동 플랫폼, 시나브로는 COVID-19으로 <br/>인해 사회적 기여를 하지 못하는 학생들을 위해 제공되는<br/> 온라인 봉사활동 플랫폼입니다. </p>
                    <p class="text-sm font-sebang-gothic py-2 px-2 text-gray-600">
                    온라인을 통한 다양한 활동을 통해 자신의 재능을 <br/> 기부하며 봉사할 수 있는 다양한 기회를 제공받을 수 있습니다.
                    </p>
                    </div>
                </div>     
                    
                    
                   
                        
                </div> 
                
            </div>  

            <div className="p-12 boder border-2 shadow-md rounded-none item-center justify-center bg-gray-50 max-w-max max-h-max space-y-4">
                <div className="flex flex-row space-x-4">
                    <img className="w-10 h-10 boder boder-2 runded-md" src="/img/Asset 17.png" alt="user" />
                    <div>
                        <p className="text-center text-xl font-sebang-gothic font-bold ">
                            봉사자 이름
                        </p>                        
                        <Link to="" className="text-center text-sm font-sebang-gothic text-gray-500 hover:text-gray-700">
                            로그아웃
                        </Link>
                    </div>
                </div>
                <div className=' space-y-4'>
                    <p className="mt-14 text-left text-base font-sebang-gothic font-bold">
                        진&nbsp;행&nbsp;작&nbsp;업
                    </p>
                    <div className="flex flex-row justify-center space-x-4 ">
                        <img className="w-10 h-10 boder boder-2 rounded-md " src="/img/Asset 17.png " alt="user" />
                        <div className="">
                            <p className="left-0 text-center text-base font-sebang-gothic font-bold">
                                진행 중인 작업 1
                            </p>
                            <div className="mx-auto h-3 w-auto rounded-full border border-2 border-black bg-white-200">      
                                <div className="justify-start min-h-full w-12 rounded-full bg-green-600" />
                                <p className="text-center text-sm font-sebang-gothic font-bold">20%</p>
                            </div>                                            
                        </div> 
                    </div>
                    <div className="pt-4 flex flex-row justify-center space-x-4">
                        <img className="w-10 h-10 boder boder-2 rounded-md" src="/img/Asset 17.png" alt="user" />
                        <div>
                            <p className="text-center text-base font-sebang-gothic font-bold">
                                진행 중인 작업 2
                            </p>
                            
                            <div className="mx-auto h-3 w-auto rounded-full border border-2 border-black bg-white-200">      
                                <div className="justify-start min-h-full w-20 rounded-full bg-red-600" />
                                <p className="text-center text-sm font-sebang-gothic font-bold">60%</p>
                            </div>                                           
                        </div>                        
                    </div>
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
            
       
        </div>
    )
}

export default Member_Home_Introduction;