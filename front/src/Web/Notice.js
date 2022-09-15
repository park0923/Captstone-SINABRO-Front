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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import axios from "axios";
import Divider from '@mui/material/Divider';
import bp from '../image/board2.jpg'
import Button from '@mui/material/Button';

const Notice = () => {
    const [data, setData] = useState(
        {
            "boards": {
                "links": [
                  {
                    "rel": null,
                    "href": null
                  }
                ],
                "content": [
                    {
                        "idx": null,
                        "title": null,
                        "created_date": null
                    }
                ],
                "page": {
                  "size": null,
                  "totalElements": null,
                  "totalPages": null,
                  "number":null
                }
              }
        }
    )
    const [type, setType] = useState('boards');
    const [authority, setAuthority] = useState('');

    useEffect(() => {
        setAuthority(JSON.parse(localStorage.getItem('authority')));
        axios({
            method: 'get',
            url: 'http://54.153.86.50:8080/api/boards/notice',                                   
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

    const handlePage = (value) => {
        const pages = value - 1;
        axios({
            method: 'get',
            url: 'http://54.153.86.50:8080/api/boards/'+type +'?page=' + pages,                                   
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
      }
    
    const handleType = (type) => {
      axios({
        method: 'get',
        url: 'http://54.153.86.50:8080/api/boards/' + type,                                   
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
    }
    
      const [value, setValue] = React.useState(0);

      const handleChange = (event, newValue) => {
          setValue(newValue);
          
          switch(newValue){
            case 0:
              setType('notice');
              handleType('notice');              
              console.log('notice');
              break;
            case 1:
              setType('education');
              handleType('education');              
              console.log('education');
              break;
            case 2:
              setType('offVolunteer');
              handleType('offVolunteer');
              console.log('offVolunteer');
              break;
            default:
              break;
          }
      };   
      function TabPanel(props) {
        const { children, value, index, ...other } = props;
        
        return (
          <>
          {/* {console.log(value)}
          {setType(children)} */}
          
          </>
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
      const handleButton = () => {
        if(authority === 'ROLE_ADMIN'){
          return(
            <div>
              <Link to={'/WritePost'}>
                <Button variant="contained">글쓰기</Button>
              </Link>
            </div>
          )
        }
        else{
          return(
            <div />
          )
        }
      }
    return(
        <div style={{backgroundColor: '#F0F8FF', height: 'auto'}}>            
            <TopBar />            
            <div>
            <div  style={{position: 'relative'}}>
            <img src={bp} style={{width: '100%', height: '45vh'}} />
            <div style={{position: 'absolute', top: '50%', left: '50%', fontSize: '60px', color: 'white', transform: `translateX(${-50}%) translateY(${-45}%)`}}>                
              공지사항
            </div>                                      
            </div>
            <Divider />
            <div style={{display: 'flex',marginTop: '20px', marginBottom: '20px', justifyContent: 'center', alignItems: 'center'}}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="일반" {...a11yProps(0)} />
                <Tab label="교육" {...a11yProps(1)} />
                <Tab label="오프라인" {...a11yProps(2)} />
              </Tabs>        
              {/* <TabPanel value={value} index={0}>
                notice
              </TabPanel>
              <TabPanel value={value} index={1}>
                education
              </TabPanel>
              <TabPanel value={value} index={2}>
                offVolunteer
              </TabPanel> */}
            </div>
            <Divider />
            <Container maxWidth='xl' sx={{maxWidth: 'sm',}}>
                <Box sx={{ bgcolor: '#F0F8FF', height: '100vh', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', }}>
                    <Typography variant="h4" component="div" sx={{ display: 'flex',  justifyContent: 'center', alignItems: 'center', marginBottom: '20px', marginTop: '10px'}}>
                        공지사항
                    </Typography>                    
                    {handleButton()}
                    <TableContainer component={Paper} sx={{width: 'auto', marginTop: '20px'}}>
                        <Table sx={{ width: '100%' }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>번호</TableCell>
                                <TableCell align="left">제목</TableCell>                                
                                <TableCell align="center">작성일</TableCell>                                
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {data.boards.content.map(({idx, title, created_date}, index) => (
                                
                                <TableRow
                                key={idx}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >                                    
                                
                                <TableCell component="th" scope="row">
                                    {index + 1 }
                                </TableCell>                                
                                <TableCell align="left">
                                <Link to={{pathname: `/NoticePostDetails/${idx}`, }} color= 'black'>{title}</Link>
                                </TableCell>                                
                                
                                <TableCell align="center">{created_date}</TableCell>                                
                                
                                </TableRow>                                
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Stack spacing={3} sx={{justifyContent:'center', alignItems:'center', paddingTop: '20px', }}>                        
                        <Pagination count={data.boards.page.totalPages} variant="outlined" shape="rounded" onChange={(e, value) => handlePage(value)}/>
                    </Stack>
                </Box>
                </Container>  
            </div>
        </div>
    )
}

export default Notice;