import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ posts }) => {
  
  return (
    <div className="">
      
      <thead className=" bg-white">
        <th className="p-1 text-xl text-gray-500 font-sebang-gothic tracking-wide text-left">
          NO
        </th>
        <th className="p-2 text-xl text-gray-500 font-sebang-gothic tracking-wide text-left">
          제목
        </th>
        <th className="p-2 text-xl text-gray-500 font-sebang-gothic tracking-wide text-left">
          등 록 일
        </th>
        <th className="p-2 text-xl text-gray-500 font-sebang-gothic tracking-wide text-left">
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
        <th>
          <hr
            width="100%"
            style={{ color: "#A1A0A0", backgroundColor: "#A1A0A0", height: 3 }}
          />
        </th>
      </thead>
      <tbody>
        {posts.map(({ id, title }, index) => (
            <tr className="bg-white">
              <td
                style={{ borderBottom: "1px solid #A1A0A0" }}
                className=" p-2 text-sm font-sebang-gothic"
              >
                {index + 1}
              </td>
              
              <td
                style={{ borderBottom: "1px solid #A1A0A0" }}
                className="w-8/12 p-2 text-sm font-sebang-gothic"
              >
                <Link to={{pathname: `/PostView/${id}`, state: {title: title}}} >
                  {title}
                </Link> 
              </td>  
              <td
                style={{ borderBottom: "1px solid #A1A0A0" }}
                className="w-2/12 p-2 text-sm font-sebang-gothic"
              >
                <Link to={{pathname: `/PostView/${id}`, state: {title: title}}} >
                  {index}
                </Link> 
              </td>  
              <td
                style={{ borderBottom: "1px solid #A1A0A0" }}
                className="w-2/12 p-2 text-sm font-sebang-gothic"
              >
                <Link to={{pathname: `/PostView/${id}`, state: {title: title}}} >
                  {index}
                </Link> 
              </td>                      
            </tr>
          ))}
        {/* {posts.map(({ id, title, created_date, updated_date}, index) => (
          <tr className="bg-white">
            <td
              style={{ borderBottom: "1px solid #A1A0A0" }}
              className=" p-2 text-sm font-sebang-gothic"
            >
              {index + 1}
            </td>
            
            <td
              style={{ borderBottom: "1px solid #A1A0A0" }}
              className="w-8/12 p-2 text-sm font-sebang-gothic"
            >
              <Link to={`/postView/${id}`} id={id}>
                {title}
              </Link> 
            </td>
            <td
              style={{ borderBottom: "1px solid #A1A0A0" }}
              className="w-2/12 p-2 text-sm font-sebang-gothic"
            >
              {created_date}
            </td>    
            <td
              style={{ borderBottom: "1px solid #A1A0A0" }}
              className="w-2/12 p-2 text-sm font-sebang-gothic"
            >
              {updated_date}
            </td>          
          </tr>
        ))} */}
      </tbody>
    </div>
  );
};
export default Posts;