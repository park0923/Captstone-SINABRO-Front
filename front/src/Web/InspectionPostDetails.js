import React, {useState, useEffect} from "react";
import TopBar from "./TopBar";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import axios from "axios";
import cookie from 'react-cookies';

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
    useEffect(() => {        
        axios({
            method: 'get',
            url: 'http://34.64.94.158:8080/api/inspections/'+id,     
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

    const filedownload = (file) => {        
        if(file === null || file === undefined){
            return(<div />)
        }
        else{
            return(
                <a href={'#'} download>
                    <Button variant="outlined">Download</Button>
                </a>
            )
        }
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
                            상세보기 
                        </Typography>
                    </div>
                    <div style={{marginLeft: '20px'}}>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            {data.work_title}
                        </Typography>
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                            {data.created_date}
                        </Typography>
                    </div>                    
                    <Divider />
                    <div style={{marginLeft: '20px'}}>
                        <Card sx={{ width: '80%', height: 'auto',bgcolor: 'white', marginLeft: '10%', padding: '10px', mb: '5%', displat: "flex"}}>
                            <CardContent>
                                <div style={{justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row',  displat: "flex"}}>
                                    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                        일반 봉사
                                    </Typography>
                                    <Button size="medium" sx={{mb: '15px'}}>더보기</Button>
                                </div>    
                                <Divider />                        
                                <List>
                                    {['대시보드', '교육', '봉사'].map((text, index) => (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>                                                
                                                {index + 1}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItemButton>                                                                  
                                    </ListItem>                                                                
                                    ))}
                                </List>                            
                            </CardContent>
                            <Divider /> 
                        </Card>
                    </div>
                    <div style={{marginLeft: '20px', marginTop: '20px', marginBottom: '20px'}}>
                        {filedownload()}
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
                </Box>
            </Container>
            </div>
        </div>
    )
}

export default InspectionPostDetails;