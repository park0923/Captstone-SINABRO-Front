import React from "react";
import TopBar from "./TopBar";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const CertifiedDetails = ({history, location, match}) => {
    
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
                            봉사 인증 
                        </Typography>
                    </div>
                    
                    <div style={{marginLeft: '20px', marginBottom: '10px'}}>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            컨텐츠 제목
                        </Typography>                        
                        <Divider sx={{width: '98%', bgcolor: 'black', marginTop: '10px'}}/>
                    </div>           
                    <div style={{marginLeft: '20px', marginBottom: '10px'}}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            2022-07-01
                        </Typography>                        
                        <Divider sx={{width: '98%', bgcolor: 'black', marginTop: '10px'}}/>
                    </div> 
                    
                    <div style={{marginLeft: '20px', marginTop: '20px', marginBottom: '10px'}}>                        
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginTop: '20px' }}>
                            봉사 내용
                        </Typography>
                        <Divider sx={{width: '98%', bgcolor: 'black', marginTop: '10px'}}/>
                    </div> 
                    <div style={{marginLeft: '20px', marginBottom: '10px'}}>                    
                        <input type='file'></input>
                        <Divider sx={{width: '98%', bgcolor: 'black', marginTop: '10px'}}/>
                    </div> 
                    <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px', justifyContent: 'center', alignItems: 'center', }}>
                        <div style={{ justifyContent: 'space-between', alignItems: 'center',marginBottom: '20px'}}>
                            <Button variant="outlined" onClick={''}>저장하기</Button>
                            <Button variant="outlined" onClick={() => history.goBack()} sx={{marginLeft: '20px'}}>돌아가기</Button>
                        </div>
                    </div>
                </Box>
            </Container>
            </div>
        </div>
    )
}

export default CertifiedDetails;