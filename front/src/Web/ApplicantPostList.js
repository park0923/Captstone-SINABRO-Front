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

const ApplicantPostList = () => {
    const cookies = cookie.load("login_token");
    const [data, setData] = useState(
        {
            "contents_responses": {
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
        }
    )

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://34.64.94.158:8080/api/approval/work',     
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
            url: 'http://34.64.94.158:8080/api/approval/work?page=' + pages,     
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
    
    return(
        <div style={{backgroundColor: '#F0F8FF', height: 'auto'}}>            
            <TopBar />            
            <div style={{paddingTop: '9vh'}}>
            <Container maxWidth='xl' sx={{maxWidth: 'sm',}}>
                <Box sx={{ bgcolor: '#F0F8FF',width: 'auto', height: '100vh', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', }}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            봉사 신청글 목록
                        </Typography>
                        <Link to={'/WritePost'}>
                            <Button variant="contained">글쓰기</Button>
                        </Link>
                    </div>                   
                    <TableContainer component={Paper} sx={{width: 'auto', marginTop: '20px'}}>
                        <Table sx={{ minWidth: '100%' }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>번호</TableCell>
                                <TableCell align="left">제목</TableCell>
                                <TableCell align="center">작성자</TableCell>
                                <TableCell align="center">작성일</TableCell>                                
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {data.contents_responses.content.map(({idx, title, created_date, ended_date}, index) => (
                                
                                <TableRow
                                key={idx}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >                                    
                                
                                <TableCell component="th" scope="row">
                                    {index + 1 }
                                </TableCell>                                
                                <TableCell align="left">
                                <Link to={{pathname: `/ApplicantDetails/${idx}`, }} color= 'black'>{title}</Link>
                                </TableCell>
                                
                                <TableCell align="center">{created_date}</TableCell>
                                <TableCell align="center">{ended_date}</TableCell>                                
                                
                                </TableRow>                                
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Stack spacing={3} sx={{justifyContent:'center', alignItems:'center', paddingTop: '20px', width: '100%'}}>                        
                        <Pagination count={data.contents_responses.page.totalPages} variant="outlined" shape="rounded" onChange={(e, value) => handlePage(value)}/>
                    </Stack>
                </Box>
                </Container>  
            </div>
        </div>
    )
}

export default ApplicantPostList;