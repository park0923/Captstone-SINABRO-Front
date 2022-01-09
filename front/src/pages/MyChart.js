import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
    {
        "name": "01/01",
        "work status": 45,      
    },
    {
        "name": "01/02",
        "work status": 90,      
    },
    {
        "name": "01/03",
        "work status": 15,      
    },
    {
        "name": "01/04",
        "work status": 60,      
    },
    {
        "name": "01/05",
        "work status": 32,      
    },
    {
        "name": "01/06",
        "work status": 72,      
    },
    {
        "name": "01/07",
        "work status": 40,      
    }
  ]

function MyChart() {
    return(
        <BarChart width={400} height={300} data={data}>
            <CartesianGrid strokeDasharray="1" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="work status" fill="#059669" />            
        </BarChart>
    )
    
}

export default MyChart;