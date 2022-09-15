import React, { useState, useEffect } from "react";
import TopBar from "./TopBar";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import axios from "axios";
import cookie from 'react-cookies';
import bp from '../image/computer.jpg'
const WorkSpace = ({history, location, match}) => {       
    const id = match.params.id;
    const cookies = cookie.load("login_token");
    const [data, setData] = useState({
        "id": "",
        "user_id": "",
        "work_id": "",
        "work_title": "",
        "work_contents": "",
        "volunteer_work_contents": "",
        "created_date": "",
        "updated_date": "",
        "ended_date": ""
    })
    const [workdata, setWorkdata] = useState(
        {
            "id": "",
            "user_id": "",
            "docs_id": [],
            "title": "",
            "contents": "",
            "volunteer_time": "",
            "created_date": "",
            "updated_date": "",
            "ended_date": ""
        }
    )
    const [file, setFile] = useState('');
    const [contents, setContents] = useState('');
    
    const handleContents = (e) => {
        setContents(e.target.value);
    }

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://54.151.102.33:8080/api/volunteerWorks/' + id,     
            headers: {                
                "Authorization": 'Bearer ' + cookies
            }                           
          })
          .then(function (response) {
              // handle success
              console.log(response);
              setData(response.data);  
              setContents(response.data.volunteer_work_contents);                        
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });  
        // axios({
        //     method: 'get',
        //     url: 'http://54.151.102.33:8080/api/works/' + data.work_id,     
        //     headers: {                
        //         "Authorization": 'Bearer ' + cookies
        //     }                           
        //   })
        //   .then(function (response) {
        //       // handle success
        //       setWorkdata(response.data);                   
        //       setFile(response.data.docs_id);
        //     //   handleFile(response.data.docs_id);              
        //     })
        //    .catch(function (error) {
        //      // handle error
        //       console.log(error);
        //     })
        //     .then(function () {
        //       // always executed
        //     });
    }, [])
    
    const apply = () =>{
        axios({
            method: 'post',
            url: 'http://54.151.102.33:8080/api/inspections/'+ id,            
            headers: {                
                "Authorization": 'Bearer ' + cookies
            }                                   
          })
          .then(function (response) {
                // handle success
                console.log(response);
                if(response.status === 200){
                    alert(response.data.message);
                    window.location.href = '/Inspection'
                }
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });          
    }

    const handleSubmit = () => {
        axios({
            method: 'patch',
            url: 'http://54.151.102.33:8080/api/volunteerWorks/'+ id,
            data: {
                contents: contents
            },
            headers: {                
                "Authorization": 'Bearer ' + cookies
            }                                   
          })
          .then(function (response) {
                // handle success
                console.log(response);
                if(response.status === 200){
                    alert(response.data.message);
                }
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });  
    }
    return(
        <div style={{backgroundColor: '#F0F8FF', height: 'auto'}}>
            <TopBar />
            <div>
            <div  style={{position: 'relative'}}>
            <img src={bp} style={{width: '100%', height: '45vh'}} />
            <div style={{position: 'absolute', top: '50%', left: '50%', fontSize: '60px', color: 'white', transform: `translateX(${-50}%) translateY(${-45}%)`}}>                
              온라인 봉사
            </div>                                      
            </div>
            <Divider />
            <div style={{display: 'flex',marginTop: '20px', marginBottom: '20px', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant="h4" sx={{ width: '20vw' }}>
                  <div style={{textAlign: 'center'}}>
                    작업 진행 공간
                  </div>
                </Typography>                
            </div>
            <Divider />
            <Container maxWidth='xl' sx={{maxWidth: 'sm', marginTop: '20px'}}>
                <Box sx={{ bgcolor: '#FFFFFF', height: 'auto', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', }}>
                    <div style={{display: 'flex', flexDirection: 'row', marginBottom: '20px', marginLeft: '20px'}}>
                        <Typography variant="h8" component="div" sx={{color: '#708090'}}>
                            Sinabro {'>'}
                        </Typography>
                        <Typography variant="h8" component="div" sx={{color: '#1E90FF'}}>
                            작업 진행 공간
                        </Typography>
                    </div>
                    <div style={{marginLeft: '20px'}}>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            {data.work_title}
                        </Typography>
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                            {data.created_date.substring(0,10)}
                        </Typography>
                    </div>                    
                    <Divider />
                    <div style={{marginTop: '10px', marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: '80vh', }}>                        
                        <textarea type='text' className="autoTextarea" placeholder="여기에 내용을 입력하세요." value={contents} onChange={handleContents} style={{displat: 'block', width: '45%', height: '80%', border: '1px solid', }}></textarea>
                    </div> 
                    <Divider />
                    <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px', justifyContent: 'center', alignItems: 'center', }}>
                        <div style={{ justifyContent: 'space-between', alignItems: 'center',marginBottom: '20px'}}>
                            <Button variant="outlined" onClick={apply}>검수요청</Button>
                            <Button variant="outlined" onClick={handleSubmit} sx={{marginLeft: '20px'}}>저장</Button>
                            <Button variant="outlined" onClick={() => history.goBack()} sx={{marginLeft: '20px'}}>돌아가기</Button>
                        </div>
                    </div>
                </Box>
            </Container>
            </div>
        </div>
    )
}

export default WorkSpace;