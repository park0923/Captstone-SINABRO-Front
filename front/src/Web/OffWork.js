import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
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
import axios from "axios";
import cookie from 'react-cookies';
import Divider from '@mui/material/Divider';
import bp from '../image/passion.jpg'
import Button from '@mui/material/Button';

const OffWork = () => {
    const cookies = cookie.load("login_token");
    const [data, setData] = useState(
        {
            "off_volunteer_list_responses": {
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
                    "created_date": null,                    
                  }
                ],
                "page": {
                  "size": null,
                  "totalElements": null,
                  "totalPages": null,
                  "number": null
                }
              }
        }
    )
    const [authority, setAuthority] = useState('');

    useEffect(() => {
        setAuthority(JSON.parse(localStorage.getItem('authority')));
        axios({
            method: 'get',
            url: 'http://54.153.86.50:8080/api/offVolunteer',     
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
            url: 'http://54.153.86.50:8080/api/offVolunteer?page=' + pages,     
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

    const handleButton = () => {
      if(authority === 'ROLE_ADMIN'){
        return(
          <div>
            <Link to={'/WriteOff'}>
              <Button variant="contained">글쓰기</Button>
            </Link>
          </div>
        )
      }
      else{
        return(
          <div />
        )
      }
    }

    return(
        <div style={{backgroundColor: '#F0F8FF', height: 'auto'}}>            
            <TopBar />            
            <div>
            <div  style={{position: 'relative'}}>
            <img src={bp} style={{width: '100%', height: '45vh'}} />
            <div style={{position: 'absolute', top: '50%', left: '50%', fontSize: '60px', color: 'white', transform: `translateX(${-50}%) translateY(${-45}%)`}}>                
              오프라인 봉사
            </div>                                      
            </div>
            <Divider />
            <div style={{display: 'flex',marginTop: '20px', marginBottom: '20px', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant="h4" sx={{ width: '20vw' }}>
                  <div style={{textAlign: 'center'}}>
                    봉사 목록
                  </div>
                </Typography>                
            </div>
            <Divider />
            <Container maxWidth='xl' sx={{maxWidth: 'sm',}}>
                <Box sx={{ bgcolor: '#F0F8FF',width: 'auto', height: '100vh', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', }}>                    
                  {handleButton()}
                    <TableContainer component={Paper} sx={{width: 'auto', marginTop: '20px'}}>
                        <Table sx={{ width: '100%' }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>번호</TableCell>
                                <TableCell align="left">제목</TableCell>                                
                                <TableCell align="center">작성일</TableCell>                                                                
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {data.off_volunteer_list_responses.content.map(({idx, title, created_date}, index) => (
                                
                                <TableRow
                                key={idx}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >                                    
                                
                                <TableCell component="th" scope="row">
                                    {index + 1 }
                                </TableCell>                                
                                <TableCell align="left">
                                <Link to={{pathname: `/OffWorkPostDetails/${idx}`, }} color= 'black'>{title}</Link>
                                </TableCell>
                                
                                <TableCell align="center">{created_date}</TableCell>                                                              
                                
                                </TableRow>                                
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Stack spacing={3} sx={{justifyContent:'center', alignItems:'center', paddingTop: '20px', width: '100%'}}>                        
                        <Pagination count={data.off_volunteer_list_responses.page.totalPages} variant="outlined" shape="rounded" onChange={(e, value) => handlePage(value)}/>
                    </Stack>
                </Box>
                </Container>  
            </div>
        </div>
    )
}

export default OffWork;