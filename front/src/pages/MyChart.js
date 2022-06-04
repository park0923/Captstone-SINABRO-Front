import React, {useEffect, useState} from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import axios from "axios";
import cookie from 'react-cookies';
import qs from 'qs';
  
function MyChart() {
    const [data, setData] = useState([
        {
            work: [
              {
                "volunteer_name": null
              }
            ]
          },
          {
            week: [
              {
                "date": null,
                "count": null
              }         
            ]
          },
          {
            ended_date: [
              {
                "date": null,
                "title": null
              }
            ]
          }
      ])
      const cookies = cookie.load("login_token"); 
      console.log(data[1]["일주일 작업 현황"][0].날짜)
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://18.116.2.111:8080/api/home',
            headers: {                
                "Authorization": 'Bearer ' + cookies
            }            
          })
          .then(function (response) {
              // handle success
              console.log(response.data);
              setData(response.data);                   
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })    
    },[])
    return(
        <BarChart width={400} height={300} data={data}>
            <CartesianGrid strokeDasharray="1" />
            <XAxis dataKey={data[1]["일주일 작업 현황"]["날짜"]} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="봉사 개수" fill="#059669" />            
        </BarChart>
    )
    
}

export default MyChart;