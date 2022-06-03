import React from 'react';
import { Link } from 'react-router-dom';

const WorkHistoryPost = ({posts}) => {  
    return(
        <table class="table-fixed w-full">
          <thead className=" bg-white">
            <th className="w-1/12 text-xl text-gray-500 font-sebang-gothic tracking-wide text-left">
              NO
            </th>
            <th className="w-8/12 text-xl text-gray-500 font-sebang-gothic tracking-wide text-left">
              제목
            </th>                
            <th className="w-2/12   text-xl text-gray-500 font-sebang-gothic tracking-wide text-center">
              마 감 일
            </th>    
          </thead>
          <thead>
        <th>
          <hr
            width="100%"
            style={{ color: "#A1A0A0", backgroundColor: "#A1A0A0", height: 3 }}
          />
        </th>
        <th>
          <hr
            width="100%"
            style={{ color: "#A1A0A0", backgroundColor: "#A1A0A0", height: 3 }}
          />
        </th>
        <th>
          <hr
            width="100%"
            style={{ color: "#A1A0A0", backgroundColor: "#A1A0A0", height: 3 }}
          />
        </th>               
      </thead>
      <tbody>
        {posts.slice(0).map(({ idx, title, ended_date }, index) => (
            <tr className="bg-white">
              <td
                style={{ borderBottom: "1px solid #A1A0A0" }}
                className="p-2 text-sm font-sebang-gothic"
              >
                {index + 1}
              </td>
              
              <td
                style={{ borderBottom: "1px solid #A1A0A0" }}
                className="p-2 text-sm font-sebang-gothic"
              >
                <Link to={{pathname: `/MemberHomeVolunteerWorkPage/${idx}`, state: {type: "work"}}} >
                  {title}
                </Link> 
              </td>                    
              <td
                style={{ borderBottom: "1px solid #A1A0A0" }}
                className="p-2 text-sm font-sebang-gothic text-center"
              >
                {ended_date}
              </td>                                
            </tr>
          ))}        
      </tbody>
    </table>
    )
}

export default WorkHistoryPost;