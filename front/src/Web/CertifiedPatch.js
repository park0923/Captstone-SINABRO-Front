import React, {useState, useEffect} from "react";
import TopBar from "./TopBar";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import axios from "axios";
import cookie from 'react-cookies';
import bp from '../image/book4.jpg'
const CertifiedPatch = ({history, location, match}) => {
    const id = match.params.id;
    const cookies = cookie.load("login_token");
    const [data, setData] = useState(
        {
            "contents": "",
            "created_date": "",
            "docs_id": [],
            "id": "",
            "off_volunteer_id": "",
            "title": "",
            "updated_date": "",
            "user_id": ""
        }
    )
    const [file, setFile] = useState('');
    const [uid, setUid] = useState('');
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    useEffect(() => {
        setUid(JSON.parse(localStorage.getItem('uid')));
        axios({
            method: 'get',
            url: 'http://54.219.63.255:8080/api/certification/' + id,     
            headers: {                
                "Authorization": 'Bearer ' + cookies
            }                           
          })
          .then(function (response) {
              // handle success
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
        
    }, [])

    const hadleFile = () => {
        axios({
            method: 'get',
            url: 'http://54.219.63.255:8080/api/certification/download/'+ file, 
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

    const handlePatch = () => {
        axios({
            method: 'patch',
            url: 'http://54.219.63.255:8080/api/certification/'+ id,
            data: {                
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
            url: 'http://54.219.63.255:8080/api/certification/'+ id,
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
                window.location.href = '/Certified'
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
        <div style={{backgroundColor: '#F0F8FF', height: '100vh'}}>
            <TopBar />            
            <div>
            <div  style={{position: 'relative'}}>
            <img src={bp} style={{width: '100%', height: '45vh'}} />
            <div style={{position: 'absolute', top: '50%', left: '50%', fontSize: '60px', color: 'white', transform: `translateX(${-50}%) translateY(${-45}%)`}}>                
              봉사 인증
            </div>                                      
            </div>
            <Divider />
            <div style={{display: 'flex',marginTop: '20px', marginBottom: '20px', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant="h4" sx={{ width: '20vw' }}>
                  <div style={{textAlign: 'center'}}>
                  봉사 인증 수정
                  </div>
                </Typography>                
            </div>
            <Divider />
            <Container maxWidth='xl' sx={{maxWidth: 'sm',}}>
                <Box sx={{ bgcolor: '#FFFFFF', height: 'auto', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', }}>
                    <div style={{display: 'flex', flexDirection: 'row', marginBottom: '20px', marginLeft: '20px'}}>
                        <Typography variant="h8" component="div" sx={{color: '#708090'}}>
                            Sinabro {'>'}
                        </Typography>
                        <Typography variant="h8" component="div" sx={{color: '#1E90FF'}}>
                            봉사 인증 
                        </Typography>
                    </div>
                    
                    <div style={{marginLeft: '20px'}}>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            <input id="title" name="title" type="text" required style={{width: '50%', paddingLeft: '0.75rem', paddingRight: '0.75rem', paddingBottom: '0.5rem', paddingTop: '0.5rem', borderWidth: '1px', outline: '1px solid treansparent', outlineOffset: '1px'}} value={title} onChange={(e) => handleTitle(e)}/>
                        </Typography>
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                            {data.created_date.substring(0, 10)}
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
                            <Button variant="outlined" onClick={() => window.location.href = '/Certified'} sx={{marginLeft: '20px'}}>돌아가기</Button>
                        </div>
                    </div>
                </Box>
            </Container>
            </div>
        </div>
    )
}

export default CertifiedPatch;