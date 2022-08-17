import React, {useState, useEffect} from "react";
import TopBar from "./TopBar";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import axios from "axios";
import cookie from 'react-cookies';

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
            "created_date": null,
            "updated_date": null
        }
    );
    const cookies = cookie.load("login_token");
    const [authority, setAuthority] = useState('');
    const [titles, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [file, setFile] = useState('');
    useEffect(() => {     
        setAuthority(JSON.parse(localStorage.getItem('authority')));   
        axios({
            method: 'get',
            url: 'http://34.64.94.158:8080/api/boards/notice/'+id,                                   
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

    const hadleFile = () => {
        axios({
            method: 'get',
            url: 'http://34.64.94.158:8080/api/boards/download/'+ file,                                   
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
    const handlePatch = () => {
        console.log(data.board_type);
        console.log(contents);
        console.log(titles);
        axios({
            method: 'patch',
            url: 'http://34.64.94.158:8080/api/boards/'+ id,
            data: {
                "board_type" : data.board_type,
                "contents": contents,
                "title": titles
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
            url: 'http://34.64.94.158:8080/api/boards/'+ id,
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
                            <input id="title" name="title" type="text" required style={{width: '50%', paddingLeft: '0.75rem', paddingRight: '0.75rem', paddingBottom: '0.5rem', paddingTop: '0.5rem', borderWidth: '1px', outline: '1px solid treansparent', outlineOffset: '1px'}} value={titles} onChange={(e) => handleTitle(e)}/>
                        </Typography>
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                            {data.created_date}
                        </Typography>
                    </div>                    
                    <Divider />
                    <div style={{marginLeft: '20px', marginTop: '20px', marginBottom: '20px'}}>
                        {handleButton(file)}
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1, marginTop: '20px' }}>                            
                            <textarea id="contents" name="contents" type="text" required style={{width: '50%', paddingLeft: '0.75rem', paddingRight: '0.75rem', paddingBottom: '0.5rem', paddingTop: '0.5rem', borderWidth: '1px', outline: '1px solid treansparent', outlineOffset: '1px'}} value={contents} onChange={(e) => handleContents(e)}/>
                        </Typography>
                    </div> 
                    <Divider />                    
                    <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px', justifyContent: 'center', alignItems: 'center', }}>
                        <div style={{ justifyContent: 'space-between', alignItems: 'center',marginBottom: '20px'}}>                            
                            <Button variant="outlined" onClick={handlePatch} sx={{marginLeft: '20px'}}>수정하기</Button>
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
                            {data.created_date}
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
            <div style={{paddingTop: '9vh'}}>
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