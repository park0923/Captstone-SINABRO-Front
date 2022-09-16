import React, { useState, useEffect } from "react";
import TopBar from "./TopBar";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import axios from "axios";
import cookie from 'react-cookies';
import { Link } from "react-router-dom";
import bp from '../image/computer.jpg'
const WorkPostDetails = ({history, location, match}) => {
    const id = match.params.id;
    const cookies = cookie.load("login_token");
    const [data, setData] = useState(
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
    const [uid, setUid] = useState('');
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [volunteertime, setVolunteertime] = useState('');
    const [endeddate, setEndeddate] = useState('');
    useEffect(() => {
        setUid(JSON.parse(localStorage.getItem('uid')));
        axios({
            method: 'get',
            url: 'http://52.79.155.65:8080/api/works/' + id,     
            headers: {                
                "Authorization": 'Bearer ' + cookies
            }                           
          })
          .then(function (response) {
              // handle success
              setData(response.data);     
              setTitle(response.data.title);
              setContents(response.data.contents);
              setVolunteertime(response.data.volunteer_time);
              setEndeddate(response.data.ended_date.substring(0, 10));
              setFile(response.data.docs_id);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });
        
    }, [])

    const hadleFile = () => {
        axios({
            method: 'get',
            url: 'http://52.79.155.65:8080/api/works/download/'+ file, 
            headers: {                
                "Authorization": 'Bearer ' + cookies
            }                                    
          })
          .then(function (response) {
                // handle success
                console.log(response);
                const blob = new Blob([response.data]) 
                const fileUrl = window.URL.createObjectURL(blob);
            
                const link = document.createElement('a');
                link.href = response.config.url;
                link.style.display = 'none';
            
                const injectFilename = () => { 
                const disposition = response.headers['content-disposition'];
            
                const fileName = decodeURI(
                    disposition
                    .match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/)[1]
                    .replace(/['"]/g, '')
                );
                    return fileName;
                };
                link.download = injectFilename(response);
            
                document.body.appendChild(link);
                link.click();
                link.remove();
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });  
    }

    const handleButton = (file) => {        
        if(file && file.length){
            return(
                <Button variant="outlined" onClick={hadleFile}>Download</Button>
            )
        }
        else{
            return(
                <div />
            )
        }
    }
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleContents = (e) => {
        setContents(e.target.value);
    }

    const handleEndeddate = (e) => {
        setEndeddate(e.target.value);
    }

    const handleVolunteertime = (e) => {
        setVolunteertime(e.target.value);
    }

    const handlePatch = () => {
        axios({
            method: 'patch',
            url: 'http://52.79.155.65:8080/api/works/'+ id,
            data: {
                "ended_date" : endeddate + 'T09:30:31.157',
                "volunteer_time" : volunteertime,
                "contents": contents,
                "title": title
            },
            headers: {                
                'Authorization': 'Bearer ' + cookies,          
                'Content-Type': 'multipart/form-data' 
            }                                   
          })
          .then(function (response) {
              // handle success
              console.log(response);                          
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });  
    }

    const handleDelete = () => {
        axios({
            method: 'delete',
            url: 'http://52.79.155.65:8080/api/works/'+ id,
            headers: {                
                'Authorization': 'Bearer ' + cookies,          
                'Content-Type': 'multipart/form-data' 
            }                                 
          })
          .then(function (response) {
              // handle success
              console.log(response);  
              if(response.status === 200){
                alert('게시글을 삭제하였습니다.')
                window.location.href = '/Work'
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

    const UserView = () => {
        if(uid === data.user_id){
            return(
                <div>                   
                    <div style={{marginLeft: '20px'}}>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            {data.title}
                        </Typography>
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                            {data.created_date.substring(0, 10)}
                        </Typography>
                    </div>                    
                    <Divider />
                    <div style={{marginLeft: '20px', marginTop: '20px', marginBottom: '20px'}}>
                        {handleButton(file)}
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1, marginTop: '20px' }}>
                            기간 : 
                            {data.ended_date.substring(0, 10)}
                            까지
                        </Typography>
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1, marginTop: '20px' }}>
                            봉사 시간 : {data.volunteer_time}
                        </Typography>                        
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1, marginTop: '20px' }}>
                            {data.contents}
                        </Typography>
                    </div> 
                    <Divider />
                    <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px', justifyContent: 'center', alignItems: 'center', }}>
                        <div style={{ justifyContent: 'space-between', alignItems: 'center',marginBottom: '20px'}}>
                            <Link to={{pathname: `/WorkPatch/${data.id}`, }}><Button variant="outlined" onClick={handlePatch} sx={{marginLeft: '20px'}}>수정하기</Button></Link>
                            <Button variant="outlined" onClick={handleDelete} sx={{marginLeft: '20px'}}>삭제하기</Button>
                            <Button variant="outlined" onClick={() => history.goBack()} sx={{marginLeft: '20px'}}>돌아가기</Button>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div>
                    <div style={{marginLeft: '20px'}}>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            {data.title}
                        </Typography>
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                            {data.created_date.substring(0, 10)}
                        </Typography>
                    </div>                    
                    <Divider />
                    <div style={{marginLeft: '20px', marginTop: '20px', marginBottom: '20px'}}>
                        {handleButton(file)}
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1, marginTop: '20px' }}>
                            기간 : 
                            {data.ended_date.substring(0, 10)}
                            까지
                        </Typography>
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1, marginTop: '20px' }}>
                            봉사 시간 : {data.volunteer_time}
                        </Typography>                        
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1, marginTop: '20px' }}>
                            {data.contents}
                        </Typography>
                    </div> 
                    <Divider />
                    <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px', justifyContent: 'center', alignItems: 'center', }}>
                        <div style={{ justifyContent: 'space-between', alignItems: 'center',marginBottom: '20px'}}>                            
                            <Button variant="outlined" onClick={apply} sx={{marginLeft: '20px'}}>신청하기</Button>
                            <Button variant="outlined" onClick={() => history.goBack()} sx={{marginLeft: '20px'}}>돌아가기</Button>
                        </div>
                    </div>
                </div>
            )
        }
    }
    const apply = () =>{                
        axios({
            method: 'post',
            url: 'http://52.79.155.65:8080/api/volunteerWorks/'+ id,           
            headers: {                
                'Authorization': 'Bearer ' + cookies,                           
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
        <div style={{backgroundColor: '#F0F8FF', height: '150vh'}}>
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
                    상세보기
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
                            상세보기 
                        </Typography>
                    </div>
                    {UserView()}
                </Box>
            </Container>
            </div>
        </div>
    )
}

export default WorkPostDetails;