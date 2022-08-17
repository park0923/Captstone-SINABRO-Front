import { Box } from "@mui/system";
import React, {useState, useEffect} from "react";
import TopBar from "./TopBar";
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";
import cookie from 'react-cookies';


const ApplicantList = () => {
    const cookies = cookie.load("login_token");
    const [data, setData] = useState(
        {
            "volunteers": {
                "content": [
                  {
                    "ended_date": "",
                    "idx": "",
                    "title": "",
                  }
                ],
                "links": {
                  "empty": "",
                },
                "page": {
                  "number": "",
                  "size": "",
                  "totalElements": "",
                  "totalPages": ""
                }
              }
        }
    )

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://34.64.94.158:8080/api/approval/volunteerWorks',     
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
    })
    
    const handlePage = (value) => {
        const pages = value - 1;
        axios({
            method: 'get',
            url: 'http://34.64.94.158:8080/api/approval/volunteerWorks?page=' + pages,     
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
    }
    
    const handlePermit = () => {
        axios({
            method: 'patch',
            url: 'http://34.64.94.158:8080/api/approval/volunteerWorks/permit/' + data.volunteers.content.idx,     
            headers: {                
                "Authorization": 'Bearer ' + cookies
            }                           
          })
          .then(function (response) {
              // handle success
              if(response.data.code === 200){
                alert(response.data.message);                
            }                        
            console.log(response.data);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });  
    }

    const handleRefuse = () => {
        axios({
            method: 'patch',
            url: 'http://34.64.94.158:8080/api/approval/volunteerWorks/refuse/' + data.volunteers.content.idx,     
            headers: {                
                "Authorization": 'Bearer ' + cookies
            }                           
          })
          .then(function (response) {
              // handle success
                if(response.data.code === 200){
                    alert(response.data.message);
                }
            console.log(response.data);
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
            <div style={{paddingTop: '9vh'}}>
            <Container maxWidth='xl' sx={{maxWidth: 'sm',}}>
                <Box sx={{ bgcolor: '#F0F8FF',width: 'auto', height: '100vh', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', }}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            봉사 신청자 목록
                        </Typography>                        
                    </div>                   
                    <TableContainer component={Paper} sx={{width: 'auto', marginTop: '20px'}}>
                        <Table sx={{width: '100%' }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>번호</TableCell>
                                <TableCell align="left">봉사제목</TableCell>
                                <TableCell align="center">신청자</TableCell>
                                <TableCell align="center"></TableCell>                                
                                <TableCell align="center"></TableCell>                                
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {data.volunteers.content.map(({idx, title, ended_date}, index) => (
                                
                                <TableRow
                                key={idx}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >                                    
                                
                                <TableCell component="th" scope="row">
                                    {index + 1 }
                                </TableCell>                                
                                <TableCell align="left">
                                    {title}
                                </TableCell>
                                
                                <TableCell align="center">{ended_date}</TableCell>
                                <TableCell align="right" sx={{width: '10vw'}}>
                                    <Button variant="outlined" onClick={handlePermit}>수락하기</Button>                                    
                                </TableCell>                                
                                <TableCell align="right" sx={{width: '10vw'}}>
                                    <Button variant="outlined" color="error" onClick={handleRefuse}>거절하기</Button>    
                                </TableCell>                                
                                
                                </TableRow>                                
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Stack spacing={3} sx={{justifyContent:'center', alignItems:'center', paddingTop: '20px', width: '100%'}}>                        
                        <Pagination count={data.volunteers.page.totalPages} variant="outlined" shape="rounded" onChange={(e, value) => handlePage(value)}/>
                    </Stack>
                </Box>
                </Container>  
            </div>
        </div>
    )
}

export default ApplicantList;