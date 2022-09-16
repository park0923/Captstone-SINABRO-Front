import React, { PureComponent, useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box } from "@mui/system";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import axios from "axios";
import cookie from 'react-cookies';

const MyLineChart = () => {
    const cookies = cookie.load("login_token");
    const [data, setData] = useState(
      {
        "week": [
          {
            "date": "",
            "count": 0
          }
        ],
        "work": [
          {
            "volunteer_name": ""
          }
        ],
        "ended_date": [
          {
            "date": "",
            "title": ""
          }
        ]
      }
    )

    useEffect(() => {
      axios({
        method: 'get',
        url: 'http://52.79.155.65:8080/api/home',
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

    return (
        <div style={{backgroundColor: '#F0F8FF', height: 'auto'}}>                        
            <Container maxWidth='xl' sx={{maxWidth: 'sm',}}>
                <Box sx={{ bgcolor: '#F0F8FF', height: 'auto', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', }}>
                    <Typography variant="h4" component="div" sx={{ display: 'flex',  justifyContent: 'center', alignItems: 'center', marginBottom: '20px', marginTop: '10px'}}>
                        내 봉사 횟수
                    </Typography>   
                    <div  style={{position: 'relative', marginTop: '170px'}}>      
                        <div style={{position: 'absolute', top: '50%', left: '50%', transform: `translateX(${-50}%) translateY(${-40}%)`}}>                
                            <LineChart
                            width={800}
                            height={350}
                            data={data.week}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis dataKey="count" />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="pv"
                                stroke="#8884d8"
                                activeDot={{ r: 8 }}
                            />                            
                            </LineChart>        
                        </div>                                      
                    </div>                                     
                    
                </Box>
                </Container>              
        </div>        
      );
}
export default MyLineChart;