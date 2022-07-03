import React from "react";
import TopBar from "./TopBar";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const UserDashboard = () => {
    return(
        <div style={{backgroundColor: '#F0F8FF', height: 'auto'}}>
            <TopBar></TopBar>
            <div style={{paddingTop: '9vh'}}>               
                <Container maxWidth='xl' sx={{maxWidth: 'sm',}}>
                    <Box sx={{ bgcolor: '#F0F8FF', height: '200vh', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', }}>
                    <Card sx={{ width: '80%', height: '30vh',bgcolor: 'white', marginLeft: '10%', padding: '10px', mb: '5%',}}>
                        <CardContent>
                            <div style={{justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
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
                    <Card sx={{ width: '80%', height: '30vh',bgcolor: 'white', marginLeft: '10%', padding: '10px', mb: '5%',}}>
                        <CardContent>
                            <div style={{justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
                                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                    검수 요청
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
                    <Card sx={{ width: '80%', height: '30vh',bgcolor: 'white', marginLeft: '10%', padding: '10px', mb: '5%',}}>
                        <CardContent>
                            <div style={{justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
                                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                    교육 봉사
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
                    <Card sx={{ width: '80%', height: '30vh',bgcolor: 'white', marginLeft: '10%', padding: '10px', mb: '5%',}}>
                        <CardContent>
                            <div style={{justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
                                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                    봉사 횟수
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
                    <Card sx={{ width: '80%', height: '30vh',bgcolor: 'white', marginLeft: '10%', padding: '10px', mb: '5%',}}>
                        <CardContent>
                            <div style={{justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
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
                    </Box>
                </Container>                
            </div>
        </div>
    )
}

export default UserDashboard;