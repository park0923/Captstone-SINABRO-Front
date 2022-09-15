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
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import axios from "axios";
import cookie from 'react-cookies';

const MyWork = () => {
    const cookies = cookie.load("login_token");
    const [data, setData] = useState(
        {
            "work": {
                "content": [
                  {
                    "date": "",
                    "id": "",
                    "type": "",
                    "work_title": ""
                  }
                ],
                "links": {
                  "empty": ""
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
    const [type, setType] = useState('boards');
    const [authority, setAuthority] = useState('');

    useEffect(() => {
        setAuthority(JSON.parse(localStorage.getItem('authority')));
        axios({
            method: 'get',
            url: 'http://54.151.102.33:8080/api/members/list',
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

    const handlePage = (value) => {
        const pages = value - 1;
        axios({
            method: 'get',
            url: 'http://54.151.102.33:8080/api/members/list?page=' + pages,                                   
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
      
    return(
        <div style={{backgroundColor: '#F0F8FF', height: 'auto'}}>                        
            <Container maxWidth='xl' sx={{maxWidth: 'sm',}}>
                <Box sx={{ bgcolor: '#F0F8FF', height: 'auto', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', }}>
                    <Typography variant="h4" component="div" sx={{ display: 'flex',  justifyContent: 'center', alignItems: 'center', marginBottom: '20px', marginTop: '10px'}}>
                        내 작업 목록
                    </Typography>                                        
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
                            {data.work.content.map(({id, work_title, date}, index) => (
                                
                                <TableRow
                                key={id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >                                    
                                
                                <TableCell component="th" scope="row">
                                    {index + 1 }
                                </TableCell>                                
                                <TableCell align="left">
                                <Link to={{pathname: `/WorkSpace/${id}`, }} color= 'black'>{work_title}</Link>
                                </TableCell>                                
                                
                                <TableCell align="center">{date}</TableCell>                                
                                
                                </TableRow>                                
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Stack spacing={3} sx={{justifyContent:'center', alignItems:'center', paddingTop: '20px', }}>                        
                        <Pagination count={data.work.page.totalPages} variant="outlined" shape="rounded" onChange={(e, value) => handlePage(value)}/>
                    </Stack>
                </Box>
                </Container>              
        </div>
    )
}

export default MyWork;