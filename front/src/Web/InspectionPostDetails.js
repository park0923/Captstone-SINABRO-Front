import React, {useState, useEffect} from "react";
import TopBar from "./TopBar";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from "axios";
import cookie from 'react-cookies';
import bp from '../image/book3.jpg'
const InspectionPostDetails = ({history, location, match}) => {
    const cookies = cookie.load("login_token");    
    const id = match.params.id;
    const [data, setData] = useState(
        {
            "idx": "",
            "user_id": "",
            "work_id": "",
            "volunteer_work_id": "",
            "work_title": "",
            "work_contents": "",
            "volunteer_work_contents": "",
            "inspection_contents": "",
            "volunteer_time": "",
            "created_date": "",
            "updated_date": "",
            "ended_date": "",
        }
    )
    const [file, setFile] = useState('');
    useEffect(() => {        
        axios({
            method: 'get',
            url: 'http://54.219.63.255:8080/api/inspections/'+id,     
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
                url: 'http://54.219.63.255:8080/api/works/' + id,     
                headers: {                
                    "Authorization": 'Bearer ' + cookies
                }                           
              })
              .then(function (response) {
                  // handle success                  
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

    const hadleFile = () => {
        axios({
            method: 'get',
            url: 'http://54.219.63.255:8080/api/works/download/'+ file, 
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

    const handleSumit = () => {
        alert('요청되었습니다.');
        window.location.href = '/InspectionSpace'        
    }
    return(
        <div style={{backgroundColor: '#F0F8FF', height: '150vh'}}>
            <TopBar />
            <div>
            <div  style={{position: 'relative'}}>
            <img src={bp} style={{width: '100%', height: '45vh'}} />
            <div style={{position: 'absolute', top: '50%', left: '50%', fontSize: '60px', color: 'white', transform: `translateX(${-50}%) translateY(${-45}%)`}}>                
              검수
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
                    <div style={{marginLeft: '20px'}}>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            {data.work_title}
                        </Typography>
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                            {data.created_date.substring(0, 10)}
                        </Typography>
                    </div>                    
                    <Divider />
                    <div style={{marginLeft: '20px'}}>
                        <Card sx={{ width: '80%', height: 'auto',bgcolor: 'white', marginLeft: '10%', padding: '10px', mb: '5%', displat: "flex"}}>
                            <CardContent>
                                <Typography sx={{ fontSize: 18 }} color="black" gutterBottom>
                                    요청 사항
                                </Typography>
                                <Divider />
                                <div style={{justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row',  displat: "flex"}}>
                                    <Typography sx={{ fontSize: 20 }} color="black" gutterBottom>
                                        제목: {data.work_title}
                                    </Typography>                                    
                                </div>                                                         
                                <Typography sx={{ fontSize: 18 }} color="black" gutterBottom>
                                    봉사시간: {data.volunteer_time}
                                </Typography>
                                {handleButton()}
                                <Typography sx={{ fontSize: 18 }} color="black" gutterBottom>
                                    내용: {data.work_contents}
                                </Typography>                                  
                            </CardContent>
                            <Divider /> 
                        </Card>                        
                    </div>
                    <div style={{marginLeft: '20px', marginTop: '20px', marginBottom: '20px'}}>                        
                        <Card sx={{ width: '80%', height: 'auto',bgcolor: 'white', marginLeft: '10%', padding: '10px', mb: '5%', displat: "flex"}}>
                            <CardContent>
                                <Typography sx={{ fontSize: 20 }} color="black" gutterBottom>
                                    봉사자 작업 결과
                                </Typography>
                                <Divider />                                                                                                                        
                                <Typography sx={{ fontSize: 18 }} color="black" gutterBottom>
                                    내용: {data.volunteer_work_contents}
                                </Typography>                         
                                
                            </CardContent>
                            <Divider />
                        </Card>
                    </div> 
                    <Divider />
                    <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px', justifyContent: 'center', alignItems: 'center', }}>
                        <div style={{ justifyContent: 'space-between', alignItems: 'center',marginBottom: '20px'}}>                            
                            <Button variant="outlined" onClick={handleSumit} sx={{marginLeft: '20px'}}>검수하기</Button>
                            <Button variant="outlined" onClick={() => history.goBack()} sx={{marginLeft: '20px'}}>돌아가기</Button>
                        </div>
                    </div>
                </Box>
            </Container>
            </div>
        </div>
    )
}

export default InspectionPostDetails;