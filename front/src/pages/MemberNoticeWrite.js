import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import UserTask from "./UserTask"
import cookie from 'react-cookies';

const MemberNoticeWrite = () => {
    const[title, setTitle] = useState("");
    const[contents, setContents] = useState("");

    const handleInputTitle = (e) =>{
        setTitle(e.target.value);
    }

    const handleInputContents = (e) => {
        setContents(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(title);
        console.log(contents);        
        axios.post('http://54.219.63.255:8080/api/boards', {
            board_type : "notice",
            contents: contents,
            title: title            
        })
        .then(function (response) {
            console.log(response);
            if(response.status === 200){                
                console.log(response.data);      
                alert("성공적으로 글을 작성하였습니다.")      
                window.location.href = '/Member_Home_Notice'
            }                  
            return response.status;
          })
          .catch(function (error) {            
            alert("글 작성 중 오류가 발생했습니다.");                        
          });
    }

    return(
        <div className="min-h-screen flex item-center justify-between bg-gray-yellow py-12 px-4 sm:px-6 lg:px-8">            
             <div className="min-h-screen p-12 boder border-2 shadow-md rounded-none item-center justify-center bg-gray-50 max-w-max space-y-20">
                <div>
                    <img className="mx-auto h-20 w-auto" src="/img/Logo.svg" alt="Logo"/>
                    <Link to="/MemberHomeMyPage">
                        <div className="mt-14 shadow-md rounded-full bg-green-600">
                            <p className="text-center text-xl font-sebang-gothic text-white">
                                마이페이지
                            </p>    
                        </div>    
                    </Link>            
                </div>                
                <div className="flex flex-col space-y-4">
                    <Link to="/MemberHomeDashboard">
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
                            <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-gray-400 hover:text-gray-600">
                                소&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;개
                            </p>
                        </div>  
                    </Link>
                    <Link to="/MemberHomeEducation">
                    <div className="flex flex-row space-x-8">
                        <img
                        className="w-10 h-10"
                        src="/img/Asset 15.png"
                        alt="education"
                        />
                        <p className="pt-1 text-justify text-2xl font-sebang-gothic front-bold text-gray-400 hover:text-gray-600">
                            교&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;육
                        </p>
                    </div>  
                    </Link>
                    <Link to="/MemberVolunteer">
                        <div className="flex flex-row space-x-8">
                            <img className="w-10 h-10" src="/img/Asset 13.png" alt="volunteer" />
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
          
            <div className="flex flex-grow p-12 border border-2 item-center justify-center mx-4 h-auto space-y-4 bg-gray-50">
                <form onSubmit={handleSubmit} className="w-full space-y-2">
                    <div>
                        <label htmlFor="email" className="text-gray-900 font-sans text-sm font-semibold">제목</label>
                        <input id="title" name="title" type="text" required className="my-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="제목" value={title} onChange={handleInputTitle}/>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-gray-900 font-sans text-sm font-semibold">내용</label>
                        <textarea id="contents" name="contents" type="text" required className="my-1 appearance-none rounded-none relative block w-full h-96 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="제목" value={contents} onChange={handleInputContents}/>
                    </div>
                    <div>
                        <button type="submit" className="w-1/5 flex justify-center py-2 px-4 border border-transparent text-sm font-noto-snas font-bold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                            저장하기
                        </button>
                    </div>
                </form>
                    
            </div>  

            <div className="p-12 boder border-2 shadow-md rounded-none item-center justify-center bg-gray-50 max-w-max max-h-max space-y-4">
                <UserTask></UserTask>
            </div>
             
        </div>
    );
}

export default MemberNoticeWrite;