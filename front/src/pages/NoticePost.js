import React from 'react';
import { Link } from 'react-router-dom';

const NoticePost = ({ posts }) => {
  
  return (
    <table class="table-fixed w-full">
      <thead className=" bg-white">
        <th className="w-1/12 text-xl text-gray-500 font-sebang-gothic tracking-wide text-left">
          NO
        </th>
        <th className="w-5/6 text-xl text-gray-500 font-sebang-gothic tracking-wide text-left">
          제목
        </th>
        <th className="w-2/12   text-xl text-gray-500 font-sebang-gothic tracking-wide text-center">
          등 록 일
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
        {posts.slice(0).map(({ idx, title, created_date }, index) => (
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
                <Link to={{pathname: `/MemberHomeNoticePage/${idx}`, state: {type: "notice"}}} >
                  {title}
                </Link> 
              </td>  
              <td
                style={{ borderBottom: "1px solid #A1A0A0" }}
                className="p-2 text-sm font-sebang-gothic text-center"
              >
                {created_date}
              </td>                                    
            </tr>
          ))}
        
      </tbody>
    </table>
  );
};
export default NoticePost;