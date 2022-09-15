import { Box } from "@mui/system";
import React, {useState, useEffect} from "react";
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import axios from "axios";
import cookie from 'react-cookies';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import bp from '../image/book2.jpg'
import TopBar from "./TopBar";
const MyInfoPatch = ({history}) => {
    const cookies = cookie.load("login_token");
    const [data, setData] = useState(
        {
            "work": {
                "links": [
                  {
                    "rel": "",
                    "href": ""
                  }
                ],
                "content": [
                    {
                        "date": "",
                        "id": "",
                        "type": "",
                        "work_title": ""
                    }                    
                ],
                "page": {
                  "size": "",
                  "totalElements": "",
                  "totalPages": "",
                  "number": "",
                }
              },
              "username": "",
              "introduction": "",
              "email": "",
              "phone_number": "",
              "address": "",
              "volunteer_time": "",
              "work_number": "",
              "warn_number": "",
        }
    )
    const [name, setName] = useState('');
    const [introduction, setIntroduction] = useState('');    
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {        
        axios({
            method: 'get',
            url: 'http://54.219.63.255:8080/api/members',   
            headers: {                
                "Authorization": 'Bearer ' + cookies
            }                                
          })
          .then(function (response) {
              // handle success
              setData(response.data);
              setName(response.data.username);
              setIntroduction(response.data.introduction);
              setPhone(response.data.phone_number);      
              setAddress(response.data.address);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });  
    },[])

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleIntroduction = (e) => {
        setIntroduction(e.target.value);
    }    
    const handlePhone = (e) => {
        setPhone(e.target.value);
    }
    const handleAddress = (e) => {
        setAddress(e.target.value);
    }

    const handlePatch = () => {
        axios({
            method: 'patch',
            url: 'http://54.219.63.255:8080/api/members/update',
            data: {
                address: address,
                introduction: introduction,
                phone_number: phone,
                team_group: "",
                username: name,
            },
            headers: {                
                'Authorization': 'Bearer ' + cookies,                           
            }                                 
          })
          .then(function (response) {
              // handle success
              console.log(response);  
              if(response.status === 200){
                alert('회원정보를 수정하였습니다.')
                window.location.href = '/MyPage'
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
    return(
        <div style={{backgroundColor: '#F0F8FF', height: 'auto'}}>        
            <TopBar />            
            <div>
            <div  style={{position: 'relative'}}>
            <img src={bp} style={{width: '100%', height: '45vh'}} />
            <div style={{position: 'absolute', top: '50%', left: '50%', fontSize: '60px', color: 'white', transform: `translateX(${-50}%) translateY(${-45}%)`}}>                
              마이페이지
            </div>                                      
            </div>
            <Divider />
            <div style={{display: 'flex',marginTop: '20px', marginBottom: '20px', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant="h4" sx={{ width: '20vw' }}>
                  <div style={{textAlign: 'center'}}>
                    내 정보수정
                  </div>
                </Typography>                
            </div>
            <Divider />               
            <Container maxWidth='xl' sx={{maxWidth: 'sm', marginTop: '20px'}}>                 
                <Box sx={{ bgcolor: '#FFFFFF', height: 'auto', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', }}>
                <div>
                    <Divider />
                    <div style={{marginLeft: '20px'}}>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            사용자 이름
                        </Typography>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            <input 
                            id="username" 
                            name="username" 
                            type="text" 
                            required 
                            style={{width: '50%', paddingLeft: '0.75rem', paddingRight: '0.75rem', paddingBottom: '0.5rem', paddingTop: '0.5rem', borderWidth: '1px', outline: '1px solid treansparent', outlineOffset: '1px'}} 
                            value={name} 
                            onChange={(e) => handleName(e)}/>
                        </Typography>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            E-Mail
                        </Typography>
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                            {data.email}
                        </Typography>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            주소
                        </Typography>
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                        <input 
                            id="address" 
                            name="address" 
                            type="text" 
                            required 
                            style={{width: '50%', paddingLeft: '0.75rem', paddingRight: '0.75rem', paddingBottom: '0.5rem', paddingTop: '0.5rem', borderWidth: '1px', outline: '1px solid treansparent', outlineOffset: '1px'}} 
                            value={address} 
                            onChange={(e) => handleAddress(e)}/>
                        </Typography>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            전화번호
                        </Typography>
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                        <input 
                            id="phone_number" 
                            name="phone_number" 
                            type="text" 
                            required 
                            style={{width: '50%', paddingLeft: '0.75rem', paddingRight: '0.75rem', paddingBottom: '0.5rem', paddingTop: '0.5rem', borderWidth: '1px', outline: '1px solid treansparent', outlineOffset: '1px'}} 
                            value={phone} 
                            onChange={(e) => handlePhone(e)}/>
                        </Typography>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            소개글
                        </Typography>
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                        <textarea 
                            id="introduction" 
                            name="introduction" 
                            type="text" 
                            required 
                            style={{width: '50%', paddingLeft: '0.75rem', paddingRight: '0.75rem', paddingBottom: '0.5rem', paddingTop: '0.5rem', borderWidth: '1px', outline: '1px solid treansparent', outlineOffset: '1px'}} 
                            value={introduction} 
                            onChange={(e) => handleIntroduction(e)}/>
                        </Typography>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            봉사 시간
                        </Typography>
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                            {data.volunteer_time}
                        </Typography>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            봉사 횟수
                        </Typography>
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                            {data.work_number}
                        </Typography>
                    </div>                                       
                    
                    <Divider />
                    <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px', justifyContent: 'center', alignItems: 'center', }}>
                        <div style={{ justifyContent: 'space-between', alignItems: 'center',marginBottom: '20px'}}>                            
                            <Button variant="outlined" onClick={handlePatch} sx={{marginLeft: '20px'}}>수정하기</Button>                            
                            <Button variant="outlined" onClick={() => history.goBack()} sx={{marginLeft: '20px'}}>돌아가기</Button>
                        </div>
                    </div>
                </div>                                     
                        
                </Box>
            </Container>              
        </div>
        </div>
    );
}

export default MyInfoPatch;