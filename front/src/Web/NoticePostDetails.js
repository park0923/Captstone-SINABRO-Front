import React, {useState, useEffect} from "react";
import TopBar from "./TopBar";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import axios from "axios";
import cookie from 'react-cookies';
import { Link } from "react-router-dom";
import bp from '../image/board2.jpg'
const NoticePostDetails = ({history, location, match}) => {    
    const id = match.params.id;
    const [data, setData] = useState(
        {
            "id": null,
            "docs_id": [
                null,
            ],
            "title": null,
            "contents": null,
            "board_type": null,
            "created_date": "",
            "updated_date": ""
        }
    );
    const cookies = cookie.load("login_token");
    const [authority, setAuthority] = useState('');
    const [titles, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [file, setFile] = useState('');
    const [files, setFiles] = useState('');
    useEffect(() => {     
        setAuthority(JSON.parse(localStorage.getItem('authority')));   
        axios({
            method: 'get',
            url: 'http://52.79.155.65:8080/api/boards/notice/'+id,                                   
          })
          .then(function (response) {
              // handle success
              console.log(response);
              setData(response.data);  
              setTitle(response.data.title);
              setContents(response.data.contents);
              setFile(response.data.docs_id);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });  
        
            
            
    },[])
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleContents = (e) => {
        setContents(e.target.value);
    }
    const handleFiles = (e) => {
        setFile(e.target.files[0]);
        
    }
    const hadleFile = () => {
        axios({
            method: 'get',
            url: 'http://52.79.155.65:8080/api/boards/download/'+ file,                                   
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
                setFile(link.download);
                console.log(link.download);        
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
    const handleref = () =>{
        return 'http://52.79.155.65:8080/api/boards/download/'+ file
    }
    const handleButton = (file) => {        
        if(file && file.length){
            return(
                <div>
                <Button variant="outlined" onClick={hadleFile}>Download</Button>                
                </div>
                
            )
        }
        else{
            return(
                <div />
            )
        }
    }    

    const handleDelete = () => {
        axios({
            method: 'delete',
            url: 'http://52.79.155.65:8080/api/boards/'+ id,
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
                window.location.href = '/Notice'
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
    
    const handleAuthority = () => {
        
        if(authority === 'ROLE_ADMIN'){            
            return(                
                <div>
                    <div style={{marginLeft: '20px'}}>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            {data.title}
                        </Typography>
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                            {data.created_date.substring(0,10)}
                        </Typography>
                    </div>                    
                    <Divider />
                    <div style={{marginLeft: '20px', marginTop: '20px', marginBottom: '20px'}}>
                        {handleButton(file)}
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1, marginTop: '20px' }}>
                            {data.contents}
                        </Typography>
                    </div> 
                    <Divider />                    
                    <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px', justifyContent: 'center', alignItems: 'center', }}>
                        <div style={{ justifyContent: 'space-between', alignItems: 'center',marginBottom: '20px'}}>                            
                            <Link to={{pathname: `/NoticePatch/${data.id}`, }}><Button variant="outlined" onClick={''} sx={{marginLeft: '20px'}}>수정하기</Button></Link>
                            <Button variant="outlined" onClick={handleDelete} sx={{marginLeft: '20px'}}>삭제하기</Button>
                            <Button variant="outlined" onClick={() => history.goBack()} sx={{marginLeft: '20px'}}>돌아가기</Button>
                        </div>
                    </div>
                </div>
            )
        }
        else if(authority === 'ROLE_BENEFICIARY' || authority === 'ROLE_USER'){            
            return(                
                <div>
                    <div style={{marginLeft: '20px'}}>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            {data.title}
                        </Typography>
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                            {data.created_date.substring(0,10)}
                        </Typography>
                    </div>                    
                    <Divider />
                    <div style={{marginLeft: '20px', marginTop: '20px', marginBottom: '20px'}}>
                        {handleButton(file)}
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1, marginTop: '20px' }}>
                            {data.contents}
                        </Typography>
                    </div> 
                    <Divider />
                    <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px', justifyContent: 'center', alignItems: 'center', }}>
                        <div style={{ justifyContent: 'space-between', alignItems: 'center',marginBottom: '20px'}}>                            
                            <Button variant="outlined" onClick={() => history.goBack()} sx={{marginLeft: '20px'}}>돌아가기</Button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return(
        <div style={{backgroundColor: '#F0F8FF', height: '100vh'}}>
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
                <Typography variant="h4" sx={{ width: '20vw' }}>
                  <div style={{textAlign: 'center'}}>
                    상세보기
                  </div>
                </Typography>                
            </div>
            <Divider />
            <Container maxWidth='xl' sx={{maxWidth: 'sm',}}>
                <Box sx={{ bgcolor: '#FFFFFF', height: 'auto', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', }}>                    
                    {handleAuthority()}
                </Box>
            </Container>
            </div>
        </div>
    )
}

export default NoticePostDetails;