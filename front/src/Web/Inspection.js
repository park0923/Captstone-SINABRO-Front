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

const Inspection = () => {
    const cookies = cookie.load("login_token");
    const [data, setData] = useState(
        {
            "inspection_responses": {
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
        }
    )
    
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://34.64.94.158:8080/api/inspections',     
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
    }, [])

    const handlePage = (value) => {
        const pages = value - 1;
        axios({
            method: 'get',
            url: 'http://34.64.94.158:8080/api/inspections?page=' + pages,     
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
                <Box sx={{ bgcolor: '#F0F8FF', height: '100vh', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', }}>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        ?????? ?????? ??????
                    </Typography>
                    <TableContainer component={Paper} sx={{width: 'auto'}}>
                        <Table sx={{ width: '100%' }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>??????</TableCell>
                                <TableCell align="left">??????</TableCell>
                                <TableCell align="center">?????????</TableCell>
                                <TableCell align="center">?????????</TableCell>                                
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {data.inspection_responses.content.map(({idx,title, ended_date}, index) => (
                                
                                <TableRow
                                key={idx}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >                                    
                                
                                <TableCell component="th" scope="row">
                                    {index + 1 }
                                </TableCell>                                
                                <TableCell align="left">
                                <Link to={{pathname: `/InspectionPostDetails/${idx}`, }} color= 'black'>{title}</Link>
                                </TableCell>
                                                                
                                <TableCell align="center">{ended_date}</TableCell>                                
                                
                                </TableRow>                                
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Stack spacing={3} sx={{justifyContent:'center', alignItems:'center', paddingTop: '20px', }}>                        
                        <Pagination count={data.inspection_responses.page.totalPages} variant="outlined" shape="rounded" onChange={(e, value) => handlePage(value)}/>
                    </Stack>
                </Box>
                </Container>  
            </div>
        </div>
    )
}

export default Inspection;