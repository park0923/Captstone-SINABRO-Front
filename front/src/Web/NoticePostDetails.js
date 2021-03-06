import React, {useState, useEffect} from "react";
import TopBar from "./TopBar";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import axios from "axios";

const NoticePostDetails = ({history, location, match}) => {
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
    const id = match.params.id;
    const [data, setData] = useState(
        {
            "created_date": null,
            "updated_date": null,
            "idx": null,
            "title": null,
            "contents": null,
            "board_type": null
        }
    )
    useEffect(() => {        
        axios({
            method: 'get',
            url: 'http://34.64.94.158:8080/api/boards/'+id,                                   
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
                            ???????????? 
                        </Typography>
                    </div>
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
                        {filedownload()}
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1, marginTop: '20px' }}>
                            {data.contents}
                        </Typography>
                    </div> 
                    <Divider />
                    <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px', justifyContent: 'center', alignItems: 'center', }}>
                        <div style={{ justifyContent: 'space-between', alignItems: 'center',marginBottom: '20px'}}>                            
                            <Button variant="outlined" onClick={() => history.goBack()} sx={{marginLeft: '20px'}}>????????????</Button>
                        </div>
                    </div>
                </Box>
            </Container>
            </div>
        </div>
    )
}

export default NoticePostDetails;