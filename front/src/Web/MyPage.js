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
import Divider from '@mui/material/Divider';
import bp from '../image/book2.jpg'
import Button from '@mui/material/Button';
import MyWork from "./MyWork";
import MyLineChart from "./MyLineChart";
import MyInfo from "./MyInfo";
import cookie from 'react-cookies';

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
    const [authority, setAuthority] = useState('');
    const cookies = cookie.load("login_token");
    useEffect(() => {
        setAuthority(JSON.parse(localStorage.getItem('authority')));
        axios({
            method: 'get',
            url: 'http://54.219.63.255:8080/api/members', 
            headers: {                
              "Authorization": 'Bearer ' + cookies
            }                                  
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

      function TabPanel(props) {
        const { children, value, index, ...other } = props;
        
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      
      TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      };
      
      function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
      
    return(
      <div style={{backgroundColor: '#F0F8FF', height: 'auto'}}>            
      <TopBar />            
      <div>
      <div  style={{position: 'relative'}}>
      <img src={bp} style={{width: '100%', height: '45vh'}} />
      <div style={{position: 'absolute', top: '50%', left: '50%', fontSize: '60px', color: 'white', transform: `translateX(${-50}%) translateY(${-45}%)`}}>                
        마이페이지
      </div>                                      
      </div>
      <Divider />
      <div style={{display: 'flex',marginTop: '20px', marginBottom: '20px', justifyContent: 'center', alignItems: 'center'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="진행 중인 봉사활동" {...a11yProps(0)} />
          <Tab label="봉사횟수 확인" {...a11yProps(1)} />
          <Tab label="회원정보 수정" {...a11yProps(2)} />
        </Tabs>        
        
      </div>
      <Divider />
      <Container maxWidth='xl' sx={{maxWidth: 'sm',}}>
          <Box sx={{ bgcolor: '#F0F8FF', height: '100vh', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', }}>                             
              
              <TabPanel value={value} index={0}>
                <MyWork />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <MyLineChart/>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <MyInfo/>
              </TabPanel>              
          </Box>
          </Container>  
      </div>
  </div>
    )
}

export default MyPage;