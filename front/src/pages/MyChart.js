import React, {useEffect, useState} from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import axios from "axios";
import cookie from 'react-cookies';
import qs from 'qs';
  
function MyChart({datas}) {    
    const [data, setData] = useState([
      {
        date: null,
        count: null        
      }])     
    const [dates, setDates] = useState([    
      {
        date: null              
      }  
    ])
    const cookies = cookie.load("login_token"); 
    React.useEffect(() => {
      setData(datas);      
      //console.log(data)
    },[data, dates])
    // datas.map(({date, count}, index) =>{      
    //   dates[index].date = date.slice(5)
    // })
    // for(var i = 0; i <data.length; i++){
    //   // dates.push(data[i].date.slice(5));      
    //   console.log(data[i].date.slice(5))
    // }
    
    return(
        <BarChart width={1000} height={300} data={datas}>
            <CartesianGrid strokeDasharray="1" />
            <XAxis dataKey={"date"} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={"count"} fill="#059669" />            
        </BarChart>
    )
    
}

export default MyChart;