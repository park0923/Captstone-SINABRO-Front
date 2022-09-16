import React, {useState, useEffect} from "react";
import { Link, useLocation  } from "react-router-dom";
import cookie  from "react-cookies";
import axios from "axios";

const UserTask = () => {    
    const cookies = cookie.load("login_token");
    const [user, setUser] = useState({        
          "username": null,
          "introduction": null,
          "email": null,
          "phone_number": null,
          "address": null,
          "volunteer_time": null,
          "work_number": null,
          "warn_number": null
    })
    const [data, setData] = useState({        
        volunteers: {
            "links": [
              {
                "rel": null,
                "href": null,
              }
            ],
            "content": [
              {
                "idx": null,
                "title": null,
                "ended_date": null,
              }
            ],
            "page": {
              "size": null,
              "totalElements": null,
              "totalPages": null,
              "number": null
            }
          }
    })
    
    const handleLogout = () => {        
        cookie.remove("login_token");        
        window.location.href = '/'     
        
    }   

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://34.64.61.63:8080/api/members',            
            headers: {                
                "Authorization": 'Bearer ' + cookies
            }            
          })
          .then(function (response) {
              // handle success              
              setUser(response.data)
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            
        axios({
            method: 'get',
            url: 'http://34.64.61.63:8080/api/volunteerWorks',            
            headers: {                
                "Authorization": 'Bearer ' + cookies
            }            
          })
          .then(function (response) {
              // handle success                  
              setData(response.data)              
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })        
    },[]);  
    
    return(
            <div>
                <div className="flex flex-row space-x-4">
                    <img className="w-10 h-10 boder boder-2 runded-md" src="/img/Asset 17.png" alt="user" />
                    <div>
                        <p className="text-center text-xl font-sebang-gothic font-bold ">
                            {user.username}
                        </p>                        
                        <div className="text-center text-sm font-sebang-gothic text-gray-500 hover:text-gray-700">
                            <button onClick={handleLogout}>로그아웃</button>
                        </div>
                    </div>
                </div>
                
                <div className='space-y-4'>
                    <p className="mt-14 text-left text-base font-sebang-gothic font-bold">
                        대기중인 작업
                    </p>
                    {data.volunteers.content.slice(0).map(({ idx, title, ended_date }) => (                                                                        
                        <div className='space-y-4'>                            
                            <Link to={{pathname: `/MemberHomeVolunteerWorkPage/${idx}`}} >
                                <div className="flex flex-row justify-center space-x-4">
                                    <img className="w-10 h-10 boder boder-2 rounded-md" src="/img/Asset 15.png" alt="user" />
                                    <div>
                                        <p className=" text-base font-sebang-gothic font-bold">
                                            {title}
                                        </p>
                                        <p className="text-left text-sm font-sebang-gothic text-gray-400">마감기간 : {ended_date}</p>                                         
                                    </div>    
                                </div>                    
                            </Link>
                         </div>
                    ))}                 
                </div>
            </div>
    )
}

export default UserTask;