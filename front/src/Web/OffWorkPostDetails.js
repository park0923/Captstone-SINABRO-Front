import React, { useState, useEffect } from "react";
import TopBar from "./TopBar";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import axios from "axios";
import cookie from 'react-cookies';
import bp from '../image/passion.jpg'

const OffWorkPostDetails = ({history, location, match}) => {
    const id = match.params.id;
    const cookies = cookie.load("login_token");
    const [data, setData] = useState(
        {
            "title": "",
            "contents": "",
            "start_period": "",
            "end_period": "",
            "start_date": "",
            "end_date": "",
            "created_date": "",
            "updated_date": ""
        }
    )
    const [file, setFile] = useState(null);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://54.219.63.255:8080/api/offVolunteer/' + id,     
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

        // axios({
        //     method: 'get',
        //     url: 'http://54.219.63.255:8080/api/offVolunteer/download/' + id,     
        //     headers: {                
        //         "Authorization": 'Bearer ' + cookies
        //     }                           
        //   })
        //   .then(function (response) {
        //       // handle success
        //       setFile(response.data);                          
        //     console.log(response.data);
        //     })
        //     .catch(function (error) {
        //       // handle error
        //       console.log(error);
        //     })
        //     .then(function () {
        //       // always executed
        //     });  
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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [teamgroup, setTeamgroup] = useState('');
    const [address, setAddress] = useState('');
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'auto',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    
    const handleName = (e) => {
        setName(e.target.value);
        console.log(name);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        console.log(password);
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
        console.log(phone);
    }

    const handleTeamgroup = (e) => {
        setTeamgroup(e.target.value);
        console.log(teamgroup);
    }

    const handleAddress = (e) => {
        setAddress(e.target.value);
        console.log(address);
    }

    const apply = () =>{ 
        const form = new FormData();        
        if(cookies === null || cookies === undefined){
            form.append("applyOption", 'beneficiary');
            form.append("beneficiaryRequest", new Blob([JSON.stringify({
                "address": address,
                "name": name,
                "password": password,
                "phone": phone,
                "team_group": teamgroup,
            })], {type: "application/json"}));
            axios.post(                 
                'http://54.219.63.255:8080/api/offVolunteerApplication/' + id,
                form                
                )
              .then(function (response) {
                // handle successF
                console.log(response);
                if (response.status === 200) {
                  alert("신청 되었습니다.");    
                  window.location.href = '/OffWork'
                }
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              });
        }
        else{
            form.append("applyOption", 'user');
            axios.post(                 
                'http://54.219.63.255:8080/api/offVolunteerApplication/' + id,
                form,
                {
                    headers:{
                        "Authorization": 'Bearer ' + cookies
                    }
                }
                )
              .then(function (response) {
                // handle successF
                console.log(response);
                if (response.status === 200) {
                  alert("신청 되었습니다.");    
                  window.location.href = '/OffWork'
                }
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              });
        }       
    }

    const ChildModal = () => {
        return (
            <React.Fragment>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '20px'}}>
                    <Button variant="outlined" onClick={apply}>신청하기</Button>
                    <Button variant="outlined" onClick={handleClose}>돌아가기</Button>
                </div>
            </React.Fragment>
          );
    }

    const handleButton = () => {
        if(cookies === null || cookies === undefined){
            return(
                <div>
                    <Button variant="outlined" onClick={handleOpen}>신청하기</Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    오프라인 봉사 신청
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    필요한 내용을 입력해주세요.
                                </Typography>
                                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>
                                    <TextField id="standard-basic1" label="name" variant="standard" sx={{width: 'auto', marginBottom: '10px'}} value={name} onChange={(e) => handleName(e)}/>
                                    <TextField id="standard-basic2" label="password" variant="standard" type="password" autoComplete="current-password" sx={{width: 'auto', marginBottom: '10px'}} value={password} onChange={(e) => handlePassword(e)}/>
                                    <TextField id="standard-basic3" label="phone" variant="standard" sx={{width: 'auto', marginBottom: '10px'}} value={phone} onChange={(e) => handlePhone(e)}/>
                                    <TextField id="standard-basic4" label="teamGroup" variant="standard" sx={{width: 'auto'}} value={teamgroup} onChange={(e) => handleTeamgroup(e)}/>
                                    <TextField id="standard-basic4" label="address" variant="standard" sx={{width: 'auto'}} value={address} onChange={(e) => handleAddress(e)}/>
                                    <ChildModal />
                                </div>                                
                                </Box>                                
                            </Modal>
                    <Button variant="outlined" onClick={() => history.goBack()} sx={{marginLeft: '20px'}}>돌아가기</Button>
                </div>
            );
        }
        else{
            return(
                <div>
                    <Button variant="outlined" onClick={apply}>신청하기</Button>
                    <Button variant="outlined" onClick={() => history.goBack()} sx={{marginLeft: '20px'}}>돌아가기</Button>
                </div>
            );
        }       
    }
    return(
        <div style={{backgroundColor: '#F0F8FF', height: '150vh'}}>
            <TopBar />
            <div>
            <div  style={{position: 'relative'}}>
            <img src={bp} style={{width: '100%', height: '45vh'}} />
            <div style={{position: 'absolute', top: '50%', left: '50%', fontSize: '60px', color: 'white', transform: `translateX(${-50}%) translateY(${-45}%)`}}>                
              오프라인 봉사
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
            <Container maxWidth='xl' sx={{maxWidth: 'sm',}}>
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
                            모집 기간 : {data.start_date.substring(0, 10)} ~ {data.end_date.substring(0,10)} 까지
                        </Typography>
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1, marginTop: '20px' }}>
                            활동 기간 : {data.start_period.substring(0, 10)} ~ {data.end_period.substring(0, 10)} 까지
                        </Typography>                        
                        <Typography variant="h8" component="div" sx={{ flexGrow: 1, marginTop: '20px' }}>
                            {data.contents}
                        </Typography>
                    </div> 
                    <Divider />
                    <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px', justifyContent: 'center', alignItems: 'center', }}>
                        <div style={{ justifyContent: 'space-between', alignItems: 'center',marginBottom: '20px'}}>
                            {handleButton()}
                        </div>
                    </div>
                </Box>
            </Container>
            </div>
        </div>
    )
}

export default OffWorkPostDetails;