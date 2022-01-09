import React from "react";
import { PieChart, Pie} from 'recharts';


  const data02 = [
    {
      "name": "Group A",
      "value": 68/100*100
    },    
  ];

function MyPieChart() {
    return(
        <PieChart width={250} height={250}>            
            <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
        </PieChart>
    )
}

export default MyPieChart;