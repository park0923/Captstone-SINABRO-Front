import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";


const MyPieChart = ({data}) => { 
  const datas = [
    {
      "name": "교육진행도",
      "value": data
    },
    {
      "name": "남은진행도",
      "value": 100 - data
    }
  ]
  const COLORS = ["#00C49F", "#808080"];
    return(      
    <div className="justify-center">
       <PieChart width={250} height={250}>            
            <Pie 
            data={datas}        
            cx="50%" cy="50%"    
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"            
            label>
              {datas.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}              
          </Pie>
        </PieChart>
    </div>
    );
}

export default MyPieChart;