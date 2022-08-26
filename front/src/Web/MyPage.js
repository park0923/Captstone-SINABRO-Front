import { Box } from "@mui/system";
import React, {useState, useEffect} from "react";
import TopBar from "./TopBar";
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from "react-router-dom";
import axios from "axios";

const MyPage = () => {
    const [data, setData] = useState(
        {
            "work": {
                "links": [
                  {
                    "rel": "",
                    "href": ""
                  }
                ],
                "content": [
                    {
                        "date": "",
                        "id": "",
                        "type": "",
                        "work_title": ""
                    }                    
                ],
                "page": {
                  "size": "",
                  "totalElements": "",
                  "totalPages": "",
                  "number": "",
                }
              },
              "username": "",
              "introduction": "",
              "email": "",
              "phone_number": "",
              "address": "",
              "volunteer_time": "",
              "work_number": "",
              "warn_number": "",
        }
    )
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://34.64.94.158:8080/api/members',                                   
          })
          .then(function (response) {
              // handle success
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

    
    
      const [value, setValue] = React.useState(0);

      const handleChange = (event, newValue) => {
          setValue(newValue);
      };
      
    return(
        <div style={{backgroundColor: '#F0F8FF', height: 'auto'}}>            
            <TopBar />            
            <div style={{paddingTop: '9vh'}}>
            <Container maxWidth='xl' sx={{maxWidth: 'sm',}}>
                <Box sx={{ bgcolor: '#F0F8FF', height: '100vh', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', }}>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        공지사항
                    </Typography>                    
                    
                </Box>
                </Container>  
            </div>
        </div>
    )
}

export default MyPage;