import React, { useState, useEffect } from "react";
import TopBar from "./TopBar";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
import axios from "axios";
import cookie from 'react-cookies';
import { Link } from "react-router-dom";

const UserDashboard = () => {
    const cookies = cookie.load("login_token");
    const [data, setData] = useState({
        "week": [
            {
              "date": "",
              "count": null
            }
          ],
          "work": [
            {
              "volunteer_name": null
            }
          ],
          "ended_date": []
    })

    const [userdata, setUserdata] = useState({
        "work": {
            "links": [
              {
                "rel": null,
                "href": null
              }
            ],
            "content": [
              {
                "type": null,
                "id": null,
                "work_title": null,
                "date": ""
              }
            ],
            "page": {
              "size": null,
              "totalElements": null,
              "totalPages": null,
              "number": null
            }
          },
          "username": null,
          "introduction": null,
          "email": null,
          "phone_number": null,
          "address": null,
          "volunteer_time": null,
          "work_number": null,
          "warn_number": null
    })
    const chartdata = [
        {
          name: "Page A",
          uv: 4000,
          pv: 2400,
          amt: 2400
        },
        {
          name: "Page B",
          uv: 3000,
          pv: 1398,
          amt: 2210
        },
        {
          name: "Page C",
          uv: 2000,
          pv: 9800,
          amt: 2290
        },
        {
          name: "Page D",
          uv: 2780,
          pv: 3908,
          amt: 2000
        },
        {
          name: "Page E",
          uv: 1890,
          pv: 4800,
          amt: 2181
        },
        {
          name: "Page F",
          uv: 2390,
          pv: 3800,
          amt: 2500
        },
        {
          name: "Page G",
          uv: 3490,
          pv: 4300,
          amt: 2100
        }
      ];

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
              console.log(response);
              setUserdata(response.data);                          
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });  
        axios({
            method: 'get',
            url: 'http://54.153.86.50:8080/api/home',     
            headers: {                
                "Authorization": 'Bearer ' + cookies
            }                           
          })
          .then(function (response) {
              // handle success
              console.log(response);
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
    return(
        <div style={{backgroundColor: '#F0F8FF', height: 'auto'}}>
            <TopBar></TopBar>
            <div style={{paddingTop: '9vh'}}>               
                <Container maxWidth='xl' sx={{maxWidth: 'sm',}}>
                    <Box sx={{ bgcolor: '#F0F8FF', height: '200vh', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', }}>
                    <Card sx={{ width: '80%', height: 'auto',bgcolor: 'white', marginLeft: '10%', padding: '10px', mb: '5%', displat: "flex"}}>
                        <CardContent>
                            <div style={{justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row',  displat: "flex"}}>
                                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                    일반 봉사
                                </Typography>
                                <Button size="medium" sx={{mb: '15px'}}>더보기</Button>
                            </div>    
                            <Divider />                        
                            <List>
                                {userdata.work.content.map(({date, id, work_title, type}, index) => (
                                <Link to={{pathname: `/WorkSpace/${id}`, }}>
                                <ListItem key={index} disablePadding>                                    
                                    <ListItemButton>
                                        <ListItemIcon>                                                
                                            {index + 1}
                                        </ListItemIcon>                                        
                                        <ListItemText primary={work_title} />
                                        <ListItemIcon>                                                
                                            {date.substring(0, 10)}
                                        </ListItemIcon>                                        
                                    </ListItemButton>                                    
                                </ListItem>                                                                
                                </Link>
                                ))}
                            </List>                            
                        </CardContent>
                        <Divider /> 
                    </Card>
                    <Card sx={{ width: '80%', height: 'auto',bgcolor: 'white', marginLeft: '10%', padding: '10px', mb: '5%',}}>
                        <CardContent>
                            <div style={{justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
                                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                    검수 요청
                                </Typography>
                                <Button size="medium" sx={{mb: '15px'}}>더보기</Button>
                            </div>    
                            <Divider />                        
                            <List>
                                {['대시보드', '교육', '봉사'].map((text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>                                                
                                            {index + 1}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>                                                                  
                                </ListItem>                                                                
                                ))}
                            </List>                            
                        </CardContent>
                        <Divider /> 
                    </Card>
                    <Card sx={{ width: '80%', height: 'auto',bgcolor: 'white', marginLeft: '10%', padding: '10px', mb: '5%',}}>
                        <CardContent>
                            <div style={{justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
                                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                    교육 봉사
                                </Typography>
                                <Button size="medium" sx={{mb: '15px'}}>더보기</Button>
                            </div>    
                            <Divider />                        
                            <List>
                                {['대시보드', '교육', '봉사'].map((text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>                                                
                                            {index + 1}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>                                                                  
                                </ListItem>                                                                
                                ))}
                            </List>                            
                        </CardContent>
                        <Divider /> 
                    </Card>
                    <Card sx={{ width: '80%', height: 'auto',bgcolor: 'white', marginLeft: '10%', padding: '10px', mb: '5%',}}>
                        <CardContent>
                            <div style={{justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
                                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                    봉사 횟수
                                </Typography>
                                <Button size="medium" sx={{mb: '15px'}}>더보기</Button>
                            </div>    
                            <Divider />                        
                            <BarChart
                            style={{width: 'auto', height: 'auto', }}                                                        
                            data={chartdata}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" />
                            
                            </BarChart>                      
                        </CardContent>
                        <Divider /> 
                    </Card>
                    <Card sx={{ width: '80%', height: 'auto',bgcolor: 'white', marginLeft: '10%', padding: '10px', mb: '5%',}}>
                        <CardContent>
                            <div style={{justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
                                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                    일반 봉사
                                </Typography>
                                <Button size="medium" sx={{mb: '15px'}}>더보기</Button>
                            </div>    
                            <Divider />                        
                            <List>
                                {['대시보드', '교육', '봉사'].map((text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>                                                
                                            {index + 1}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>                                                                  
                                </ListItem>                                                                
                                ))}
                            </List>                            
                        </CardContent>
                        <Divider /> 
                    </Card>                    
                    </Box>
                </Container>                
            </div>
        </div>
    )
}

export default UserDashboard;