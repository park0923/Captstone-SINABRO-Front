import React from "react";
import TopBar from "./TopBar";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const WorkSpace = () => {   
    const apply = () =>{
        window.location.href = '/InspectionSpace'
    }

    return(
        <div style={{backgroundColor: '#F0F8FF', height: 'auto'}}>
            <TopBar />
            <div style={{paddingTop: '9vh', paddingBottom: '20px'}}>
            <Container maxWidth='xl' sx={{maxWidth: 'sm',}}>
                <Box sx={{ bgcolor: '#FFFFFF', height: 'auto', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', }}>
                    <div style={{display: 'flex', flexDirection: 'row', marginBottom: '20px', marginLeft: '20px'}}>
                        <Typography variant="h8" component="div" sx={{color: '#708090'}}>
                            Synabro {'>'}
                        </Typography>
                        <Typography variant="h8" component="div" sx={{color: '#1E90FF'}}>
                            작업 진행 공간
                        </Typography>
                    </div>
                    <div style={{marginLeft: '20px'}}>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            컨텐츠 제목
                        </Typography>
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                            2022-07-01
                        </Typography>
                    </div>                    
                    <Divider />
                    <div style={{marginTop: '10px', marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: '80vh', }}>
                        <iframe title="pdf area" style={{displat: 'block', width: '45%',height: '80%', border: '1px solid', }} src='/'></iframe>
                        <textarea type='text' className="autoTextarea" placeholder="여기에 내용을 입력하세요." style={{displat: 'block', width: '45%', height: '80%', border: '1px solid', }}></textarea>
                    </div> 
                    <Divider />
                    <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px', justifyContent: 'center', alignItems: 'center', }}>
                        <div style={{ justifyContent: 'space-between', alignItems: 'center',marginBottom: '20px'}}>
                            <Button variant="outlined" onClick={apply}>검수요청</Button>
                            <Button variant="outlined" onClick={'#'} sx={{marginLeft: '20px'}}>저장</Button>
                            <Button variant="outlined" onClick={'#'} sx={{marginLeft: '20px'}}>돌아가기</Button>
                        </div>
                    </div>
                </Box>
            </Container>
            </div>
        </div>
    )
}

export default WorkSpace;