import React, {useState, useEffect} from "react";
import axios from "axios";
import qs from "qs";
const NonmemberPostView = ({history, location, match}) => {
    // console.log(history);
    // console.log(location);
    // console.log(match.params);
    axios.default.paramsSerializer = params => {
        return qs.stringify(params);
      }
  
      const [id, setId] = useState(match.params.id);    
      
      const [data, setData] = useState([{
          "board_type": null,
          "contents": null,
          "created_date": null,
          "id": null,
          "title": null,
          "updated_date": null
        }]      
      );
      React.useEffect(() => {
        // console.log(id);
        // console.log(data[0].title);
      }, [data])
      useEffect(() => {
        axios.get('http://13.57.232.44:8080/api/boards/' + id,)
          .then(function (response) {
              // handle success                                  
              // console.log(response.data);
              setData(response.data);
              
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });        
      },[]);
  
      
  
      return(
          <div className="min-h-screen flex item-center justify-between bg-gray-yellow py-12 px-4 sm:px-6 lg:px-8">
          
  
          <div className="flex flex-grow p-12 border border-2 shadow-md rounded-none item-center justify-start bg-gray-50 w-40 mx-4 space-y-4">
            <div className="min-w-full flex flex-col space-y-8">
              <div className="flex">
                <div className="text-sm font-sebang-gothic  text-gray-600">
                  <a href="/">SINABRO {">"} &nbsp;</a>
                </div>
                <div className="text-sm font-sebang-gothic text-green-700">
                  <button onClick={() => history.goBack()}>돌아가기</button>
                </div>
              </div>
              <div>
                  <h1 className="text-sm font-sebang-gothic  text-black">{data[0].title}</h1>
              </div>
              <div>
                  <h1 className="text-sm font-sebang-gothic  text-black">{data[0].contents}</h1>
              </div>
            </div>
          </div>
  
          
          
        </div>
      )
}

export default NonmemberPostView;