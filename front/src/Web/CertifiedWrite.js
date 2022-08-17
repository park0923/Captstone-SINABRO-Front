import React, {useState, useEffect} from "react";
import TopBar from "./TopBar";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import axios from "axios";
import cookie from "react-cookies";

const CertifiedWrite = ({history, location, match}) => {
    const [title, setTitle] = useState('');    
    const [body, setBody] = useState('');
    const [file, setFile] = useState('');
    
    const cookies = cookie.load("login_token");

    const handleTitle = (e) => {
        setTitle(e.target.value);
        console.log(title);
    }

    const handleBody = (e) => {
        setBody(e.target.value);
        console.log(body);
    }

    const handleFile = (e) => {
        setFile(e.target.files[0]);
        
    }

    const handleSubmit = () => {                   
        const form = new FormData()

        form.append("files", file);      
        form.append("filename", new Blob([JSON.stringify(file.name)], { type: "application/json" }));        
        form.append("contentsRequest", new Blob([JSON.stringify({
            "contents": body,
            "title": title,            
        })], {type: "application/json"}));

        axios.post(
            'http://34.64.94.158:8080/api/certification', 
            form,
            {
                headers: {                
                    'Authorization': 'Bearer ' + cookies,          
                    'Content-Type': 'multipart/form-data' 
                }
            }               
          )
          .then(function (response) {
            // handle successF
            console.log(response);
            if (response.status === 200) {
              alert("인증글이 업로드 되었습니다.");         
              window.location.href = '/Certified'     
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });        
    }
    return(
        <div style={{backgroundColor: '#F0F8FF', height: '100vh'}}>
            <TopBar />
            <div style={{paddingTop: '9vh'}}>
            <Container maxWidth='xl' sx={{maxWidth: 'sm',}}>
                <Box sx={{ bgcolor: '#FFFFFF', height: 'auto', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', }}>
                    <div style={{display: 'flex', flexDirection: 'row', marginBottom: '20px', marginLeft: '20px'}}>
                        <Typography variant="h8" component="div" sx={{color: '#708090'}}>
                            Synabro {'>'}
                        </Typography>
                        <Typography variant="h8" component="div" sx={{color: '#1E90FF'}}>
                            봉사 요청 글 작성 
                        </Typography>
                    </div>
                    <form>
                    <div style={{marginLeft: '20px', marginBottom: '10px'}}>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <label htmlFor="title" style={{fontSize: '25px'}}>제목 : </label>
                            <input id="title" name="title" type="text" required style={{width: '50%',marginLeft: '20px',paddingLeft: '0.75rem', paddingRight: '0.75rem', paddingBottom: '0.5rem', paddingTop: '0.5rem', borderWidth: '1px', outline: '1px solid treansparent', outlineOffset: '1px'}} placeholder="제목" value={title} onChange={(e) => handleTitle(e)}/>
                        </div>                        
                        <Divider sx={{width: '98%', bgcolor: 'black', marginTop: '10px'}}/>
                    </div>
                    <div style={{marginLeft: '20px', marginTop: '20px', marginBottom: '10px', justifyContent:'center'}}>                        
                        <textarea value={body} onChange={(e) => handleBody(e)} placeholder="여기에 내용을 입력하세요." style={{displat: 'block', width: '98%', height: '50vh', border: '1px solid', }}></textarea>
                        <Divider sx={{width: '98%', bgcolor: 'black', marginTop: '10px'}}/>
                    </div> 
                    <div style={{marginLeft: '20px', marginBottom: '10px'}}>                    
                    <input
                    type="file"
                    id="input-file"
                    onChange={handleFile.bind(this)}                    
                    />
                        <Divider sx={{width: '98%', bgcolor: 'black', marginTop: '10px'}}/>
                    </div> 
                    <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px', justifyContent: 'center', alignItems: 'center', }}>
                        <div style={{ justifyContent: 'space-between', alignItems: 'center',marginBottom: '20px'}}>
                            <Button variant="outlined" onClick={handleSubmit}>작성하기</Button>
                            <Button variant="outlined" onClick={() => history.goBack()} sx={{marginLeft: '20px'}}>돌아가기</Button>
                        </div>
                    </div>
                    </form>                    
                </Box>
            </Container>
            </div>
        </div>
    )
}

export default CertifiedWrite;