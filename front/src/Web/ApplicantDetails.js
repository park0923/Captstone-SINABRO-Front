import React, {useState, useEffect} from "react";
import TopBar from "./TopBar";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import axios from "axios";
import cookie from 'react-cookies';

const ApplicantDetails = ({history, location, match}) => {
    const id = match.params.id;

    const cookies = cookie.load("login_token");
    const [data, setData] = useState(
        {
            "id": "",
            "user_id": "",
            "title": "",
            "contents": "",
            "volunteer_time": "",
            "created_date": "",
            "updated_date": "",
            "ended_date": ""
        }
    )
    const [file, setFile] = useState(null);

    useEffect(() => {        
        axios({
            method: 'get',
            url: 'http://34.64.94.158:8080/api/works/' + id,     
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

        axios({
            method: 'get',
            url: 'http://34.64.94.158:8080/api/works/download/' + id,     
            headers: {                
                "Authorization": 'Bearer ' + cookies
            }                           
          })
          .then(function (response) {
              // handle success
              setFile(response.data);                          
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
    }, [])

    const filedownload = (file) => {        
        if(file === null || file === undefined){
            return(<div />)
        }
        else{
            return(
                <a href={file} download>
                    <Button variant="outlined">Download</Button>
                </a>
            )
        }
    }

    const handlePermit = () => {
        axios({
            method: 'patch',
            url: 'http://34.64.94.158:8080/api/approval/work/permit/' + id,     
            headers: {                
                "Authorization": 'Bearer ' + cookies
            }                           
          })
          .then(function (response) {
              // handle success
              if(response.data.code === 200){
                alert(response.data.message);

                history.goBack();
            }                        
            console.log(response.data);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });  
    }

    const handleRefuse = () => {
        axios({
            method: 'patch',
            url: 'http://34.64.94.158:8080/api/approval/work/refuse/' + id,     
            headers: {                
                "Authorization": 'Bearer ' + cookies
            }                           
          })
          .then(function (response) {
              // handle success
                if(response.data.code === 200){
                    alert(response.data.message);

                    history.goBack();
                }
            console.log(response.data);
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
            <div style={{paddingTop: '9vh'}}>
            <Container maxWidth='xl' sx={{maxWidth: 'sm',}}>
                <Box sx={{ bgcolor: '#FFFFFF', height: 'auto', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', }}>
                    <div style={{display: 'flex', flexDirection: 'row', marginBottom: '20px', marginLeft: '20px'}}>
                        <Typography variant="h8" component="div" sx={{color: '#708090'}}>
                            Synabro {'>'}
                        </Typography>
                        <Typography variant="h8" component="div" sx={{color: '#1E90FF'}}>
                            봉사 요청 상세 
                        </Typography>
                    </div>
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
                        {filedownload(file)}
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1, marginTop: '20px' }}>
                            기간 : {data.ended_date.substring(0, 10)} 까지
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
                            <Button variant="outlined" color="success" onClick={handlePermit}>수락하기</Button>
                            <Button variant="outlined" color="error" onClick={handleRefuse} sx={{marginLeft: '20px'}}>거절하기</Button>
                            <Button variant="outlined" onClick={() => history.goBack()} sx={{marginLeft: '20px'}}>돌아가기</Button>
                        </div>
                    </div>
                </Box>
            </Container>
            </div>
        </div>
    )
}

export default ApplicantDetails;