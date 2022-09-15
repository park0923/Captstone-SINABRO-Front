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
import { Link } from "react-router-dom";
const MyInfo = () => {
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
    useEffect(() => {        
        axios({
            method: 'get',
            url: 'http://54.153.86.50:8080/api/members',   
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

    return(
        <div style={{backgroundColor: '#F0F8FF', height: 'auto'}}>                        
            <Container maxWidth='xl' sx={{maxWidth: 'sm',}}>
                <Typography variant="h4" component="div" sx={{ display: 'flex',  justifyContent: 'center', alignItems: 'center', marginBottom: '20px', marginTop: '10px'}}>
                    내 정보
                </Typography> 
                <Box sx={{ bgcolor: '#FFFFFF', height: 'auto', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', }}>
                <div>
                    <Divider />
                    <div style={{marginLeft: '20px'}}>                        
                        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '20px', marginBottom: '20px'}}>
                            <div style={{display: 'flex', flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    사용자 이름 : 
                                </Typography>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '20px' }}>
                                    {data.username}
                                </Typography>
                            </div>                            
                            <div style={{display: 'flex', flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    E-Mail :
                                </Typography>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '20px' }}>
                                    {data.email}
                                </Typography>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    전화번호 :
                                </Typography>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '20px' }}>
                                    {data.phone_number}
                                </Typography>
                            </div>
                        </div>
                        <Divider />
                        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '20px', marginBottom: '20px'}}>
                            <div style={{display: 'flex', flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    주소 :
                                </Typography>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '20px' }}>
                                    {data.address}
                                </Typography> 
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                봉사 시간 :
                            </Typography>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '20px' }}>
                                {data.volunteer_time}
                            </Typography>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                봉사 횟수 :
                            </Typography>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '20px' }}>
                                {data.work_number}
                            </Typography>
                            </div>                       
                        </div>                        
                        <Divider />                        
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', marginBottom: '20px'}}>
                            <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                                <div>
                                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                        소개글  
                                    </Typography> 
                                </div>            
                                <div>
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '20px' }}>
                                        {data.introduction}
                                    </Typography>
                                </div>                                                   
                            </div>
                        </div>                       
                    </div>                                      
                    <Divider />
                    <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px', justifyContent: 'center', alignItems: 'center', }}>
                        <div style={{ justifyContent: 'space-between', alignItems: 'center',marginBottom: '20px'}}>                            
                            <Link to='/MyInfoPatch'>
                                <Button variant="outlined" onClick={'#'} sx={{marginLeft: '20px'}}>수정하기</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                </Box>
            </Container>              
        </div>
    );
}

export default MyInfo;