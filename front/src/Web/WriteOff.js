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

const WriteOff = ({history, location, match}) => {
    const [title, setTitle] = useState('');
    const [sortation, setSortation] = useState('');
    const [startdate, setStartdate] = useState('');
    const [enddate, setEnddate] = useState('');
    const [startperiod, setStartperiod] = useState('');
    const [endperiod, setEndperiod] = useState('');
    const [body, setBody] = useState('');
    const [tag, setTag] = useState('');
    const [file, setFile] = useState('');
    const cookies = cookie.load("login_token");

    const handleTitle = (e) => {
        setTitle(e.target.value);
        console.log(title);
    }

    const handleTag = (e) => {
        setTag(e.target.value);
        console.log(tag);
    }

    const handleStartdate = (e) => {
        setStartdate(e.target.value);
        console.log(startdate);
    }

    const handleEnddate = (e) => {
        setEnddate(e.target.value);
        console.log(enddate);
    }

    const handleStartperiod = (e) => {
        setStartperiod(e.target.value);
        console.log(startperiod);
    }

    const handleEndperiod = (e) => {
        setEndperiod(e.target.value);
        console.log(endperiod);
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
        const form = new FormData()

        form.append("files", file);      
        form.append("filename", new Blob([JSON.stringify(file.name)], { type: "application/json" }));        
        form.append("contentsRequest", new Blob([JSON.stringify({
            "contents": body,
            "end_date": enddate,
            "end_period": endperiod,
            "start_date": startdate,
            "start_period": startperiod,
            "tag_name": tag,
            "title": title
        })], {type: "application/json"}));

        axios.post(
            'http://34.64.94.158:8080/api/offVolunteer', 
            form ,
            {
                headers: {                
                    "Authorization": 'Bearer ' + cookies
                }
            }         
        )
        .then(function (response) {
            // handle successF
            console.log(response);
            if (response.status === 200) {
            alert("게시글이 업로드 되었습니다.");
            window.location.href = '/OffWork'              
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
        
    }
    return(
        <div style={{backgroundColor: '#F0F8FF', height: 'auto'}}>
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
                            <label htmlFor="tag" style={{fontSize: '25px'}}>태그 : </label>
                            <input id="tag" name="tag" type="text" required style={{width: '50%',marginLeft: '20px',paddingLeft: '0.75rem', paddingRight: '0.75rem', paddingBottom: '0.5rem', paddingTop: '0.5rem', borderWidth: '1px', outline: '1px solid treansparent', outlineOffset: '1px'}} placeholder="태그" value={tag} onChange={(e) => handleTag(e)}/>
                        </div>                        
                        <Divider sx={{width: '98%', bgcolor: 'black', marginTop: '10px'}}/>
                    </div> 
                    <div style={{marginLeft: '20px', marginBottom: '10px'}}>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <label htmlFor="title" style={{fontSize: '25px'}}>제목 : </label>
                            <input id="title" name="title" type="text" required style={{width: '50%',marginLeft: '20px',paddingLeft: '0.75rem', paddingRight: '0.75rem', paddingBottom: '0.5rem', paddingTop: '0.5rem', borderWidth: '1px', outline: '1px solid treansparent', outlineOffset: '1px'}} placeholder="제목" value={title} onChange={(e) => handleTitle(e)}/>
                        </div>                        
                        <Divider sx={{width: '98%', bgcolor: 'black', marginTop: '10px'}}/>
                    </div>                       
                    <div style={{marginLeft: '20px', marginBottom: '10px'}}>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <label htmlFor="title" style={{fontSize: '25px'}}>모집 기한 : </label>
                            <input id="startdate" name="startdate" type="date" required style={{width: '30%',marginLeft: '20px',paddingLeft: '0.75rem', paddingRight: '0.75rem', paddingBottom: '0.5rem', paddingTop: '0.5rem', borderWidth: '1px', outline: '1px solid treansparent', outlineOffset: '1px'}} placeholder="제목" value={startdate} onChange={(e) => handleStartdate(e)}/>
                            <text style={{fontSize: '25px', marginLeft: '20px'}}>~</text>
                            <input id="enddate" name="enddate" type="date" required style={{width: '30%',marginLeft: '20px',paddingLeft: '0.75rem', paddingRight: '0.75rem', paddingBottom: '0.5rem', paddingTop: '0.5rem', borderWidth: '1px', outline: '1px solid treansparent', outlineOffset: '1px'}} placeholder="제목" value={enddate} onChange={(e) => handleEnddate(e)}/>
                        </div>                       
                        <Divider sx={{width: '98%', bgcolor: 'black', marginTop: '10px'}}/>
                    </div>        
                    <div style={{marginLeft: '20px', marginBottom: '10px'}}>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <label htmlFor="title" style={{fontSize: '25px'}}>활동 기한 : </label>
                            <input id="startperiod" name="startperiod" type="date" required style={{width: '30%',marginLeft: '20px',paddingLeft: '0.75rem', paddingRight: '0.75rem', paddingBottom: '0.5rem', paddingTop: '0.5rem', borderWidth: '1px', outline: '1px solid treansparent', outlineOffset: '1px'}} placeholder="제목" value={startperiod} onChange={(e) => handleStartperiod(e)}/>
                            <text style={{fontSize: '25px', marginLeft: '20px'}}>~</text>
                            <input id="endperiod" name="endperiod" type="date" required style={{width: '30%',marginLeft: '20px',paddingLeft: '0.75rem', paddingRight: '0.75rem', paddingBottom: '0.5rem', paddingTop: '0.5rem', borderWidth: '1px', outline: '1px solid treansparent', outlineOffset: '1px'}} placeholder="제목" value={endperiod} onChange={(e) => handleEndperiod(e)}/>
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

export default WriteOff;