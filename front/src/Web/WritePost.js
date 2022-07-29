import React, {useState, useEffect} from "react";
import TopBar from "./TopBar";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import axios from "axios";
import cookie from "react-cookies";

const WritePost = ({history, location, match}) => {
    const [title, setTitle] = useState('');
    const [sortation, setSortation] = useState('');
    const [startdate, setStartdate] = useState('');
    const [enddate, setEnddate] = useState('');
    const [body, setBody] = useState('');
    const [file, setFile] = useState('');
    const cookies = cookie.load("login_token");

    const handleTitle = (e) => {
        setTitle(e.target.value);
        console.log(title);
    }

    const handleSortation = (e) => {
        setSortation(e.target.value);        
        console.log(sortation);
    }

    const handleStartdate = (e) => {
        setStartdate(e.target.value);
        console.log(startdate);
    }

    const handleEnddate = (e) => {
        setEnddate(e.target.value);
        console.log(enddate);
    }

    const handleBody = (e) => {
        setBody(e.target.value);
        console.log(body);
    }

    const handleFile = (e) => {
        setFile(e.target.files[0]);
        
    }

    const handleSubmit = () => {          
        console.log(sortation);             
        switch(sortation){
            case '1':
                console.log("공지");
                break;
            case '2':
                console.log("교육");
                break;
            case '3':
                console.log("일반");
                break;
            default:
        }
        const form = new FormData()

        form.append("files", file);      
        //form.append("filename", new Blob([JSON.stringify(file.name)], { type: "application/json" }));            
        // form.append("contentsRequest", new Blob([JSON.stringify({
        //     'title' : title,
        //     'contents' : body,
        //     'volunteer_time' : 0,
        //     'ended_date' : enddate +"T12:34:56.000Z"
        // })], {type: "application/json"}));
        form.append("contentsRequest", new Blob([JSON.stringify({
            "contents": "string",
  "endDate": "2022-07-28T05:03:45.652Z",
  "endPeriod": "2022-07-28T05:03:45.652Z",
  "startDate": "2022-07-28T05:03:45.652Z",
  "startPeriod": "2022-07-28T05:03:45.652Z",
  "title": "string"

        })], {type: "application/json"}));
        axios.post(
            'http://34.64.94.158:8080/api/offVolunteer/', 
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
              alert("봉사요청게시글이 업로드 되었습니다.");              
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
    }
    return(
        <div style={{backgroundColor: '#F0F8FF', height: '110vh'}}>
            <TopBar />
            <div style={{paddingTop: '9vh'}}>
            <Container maxWidth='xl' sx={{maxWidth: 'sm',}}>
                <Box sx={{ bgcolor: '#FFFFFF', height: 'auto', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', }}>
                    <div style={{display: 'flex', flexDirection: 'row', marginBottom: '20px', marginLeft: '20px'}}>
                        <Typography variant="h8" component="div" sx={{color: '#708090'}}>
                            Synabro {'>'}
                        </Typography>
                        <Typography variant="h8" component="div" sx={{color: '#1E90FF'}}>
                            글 작성 
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
                    <div style={{marginLeft: '20px', marginBottom: '10px'}}>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <label htmlFor="title" style={{fontSize: '25px'}}>구분 : </label>                            
                            <FormControl sx={{marginLeft: '20px', width: 'auto'}}>                                
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel name="values" value="1" control={<Radio />} label="공지" onClick={(e) => handleSortation(e)}/>
                                    <FormControlLabel name="values" value="2" control={<Radio />} label="교육 봉사" onClick={(e) => handleSortation(e)}/>
                                    <FormControlLabel name="values" value="3" control={<Radio />} label="일반 봉사" onClick={(e) => handleSortation(e)}/>                                    
                                </RadioGroup>
                            </FormControl>
                        </div>                        
                        <Divider sx={{width: '98%', bgcolor: 'black', marginTop: '10px'}}/>
                    </div>         
                    <div style={{marginLeft: '20px', marginBottom: '10px'}}>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <label htmlFor="title" style={{fontSize: '25px'}}>기한 : </label>
                            <input id="startdate" name="startdate" type="date" required style={{width: '30%',marginLeft: '20px',paddingLeft: '0.75rem', paddingRight: '0.75rem', paddingBottom: '0.5rem', paddingTop: '0.5rem', borderWidth: '1px', outline: '1px solid treansparent', outlineOffset: '1px'}} placeholder="제목" value={startdate} onChange={(e) => handleStartdate(e)}/>
                            <text style={{fontSize: '25px', marginLeft: '20px'}}>~</text>
                            <input id="enddate" name="enddate" type="date" required style={{width: '30%',marginLeft: '20px',paddingLeft: '0.75rem', paddingRight: '0.75rem', paddingBottom: '0.5rem', paddingTop: '0.5rem', borderWidth: '1px', outline: '1px solid treansparent', outlineOffset: '1px'}} placeholder="제목" value={enddate} onChange={(e) => handleEnddate(e)}/>
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

export default WritePost;