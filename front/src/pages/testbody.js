/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const testbody = ({ history, location, match}) => {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState({});   
    const [id] = match.params;
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts',{
            params: {
                id: id
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
          .then(function () {
            // always executed
          });        
    },[])

    return(
      <div>
          <div className="post-view-row">
                <label>게시글 번호</label>
                <label>{ data.id }</label>
              </div>
              <div className="post-view-row">
                <label>제목</label>
                <label>{ data.title }</label>
              </div>
              <div className="post-view-row">
                <label>내용</label>
                <label>{ data.body }</label>
              </div>              
      </div>
    )
}

export default testbody;