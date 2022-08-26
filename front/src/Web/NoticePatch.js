import React, {useState, useEffect} from "react";
import TopBar from "./TopBar";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import axios from "axios";
import cookie from 'react-cookies';
import CreateList from "./CreateList";
  
const NoticePatch = ({history, location, match}) => {    
    const id = match.params.id;
    const [data, setData] = useState(
        {
            "id": null,
            "docs_id": [
                null,
            ],
            "title": null,
            "contents": null,
            "board_type": null,
            "created_date": null,
            "updated_date": null
        }
    );
    const cookies = cookie.load("login_token");
    const [authority, setAuthority] = useState('');
    const [titles, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [file, setFile] = useState('');
    const [newfile, setNewfile] = useState('');
    const [status, setStatus] = useState(false);
    const [filename, setFilename] = useState('');
    // const [fileurl, setFileurl] = useState('');
    // const [list, setList] = useState([
    //     {
    //         "id" : 0,
    //         "title": ''
    //     }
    // ]);
    // var nextID = 1;
    
    useEffect(() => {     
        setAuthority(JSON.parse(localStorage.getItem('authority')));   
        axios({
            method: 'get',
            url: 'http://34.64.94.158:8080/api/boards/notice/'+id,                                   
          })
          .then(function (response) {
              // handle success
              console.log(response);
              setData(response.data);  
              setTitle(response.data.title);
              setContents(response.data.contents);
              setFile(response.data.docs_id);
              hadleFile(response.data.docs_id)
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });          
            
    },[])
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleContents = (e) => {
        setContents(e.target.value);
    }

    const handleNewFile = (e) => {
        setNewfile(e.target.files[0]);
    }

    const hadleFile = (fileid) => {
        axios({
            method: 'get',
            url: 'http://34.64.94.158:8080/api/boards/download/'+ fileid,                                   
          })
          .then(function (response) {
                // handle success
                console.log(response);
                const disposition = response.headers['content-disposition'];
                
                setFilename(decodeURI(
                    disposition
                    .match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/)[1]
                    .replace(/['"]/g, '')
                ))
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
                <div>
                    <a id='files' href={`http://34.64.94.158:8080/api/boards/download/${file}`}>{filename}</a>
                    <Button id='del' variant="outlined" color="error" onClick={OnDelete} sx={{marginLeft: '20px'}}>삭제</Button>
                </div>                
            )
        }
        else{
            return(
                <div />
            )
        }
    }

    const OnDelete = () => {        
        const a = document.getElementById('files');
        const button = document.getElementById('del');
        a.remove();
        button.remove();   
        setStatus(true);
    }
    
    const OnAdd = (status) => {
        if(status){
            return(
                <div>
                    <input type="file" onChange={handleNewFile.bind(this)} />
                </div>
            )        
        }
        
    }
    
    // const addInput = () =>{
    //     // console.log(list);
    //     // const inputitem = {
    //     //     "id" : nextID,
    //     //     "title" : ''
    //     // };

    //     // // setList(inputitem);
    //     // nextID += 1;
    //     // list.push(inputitem);
    //     // console.log(list);
    //     // const newDiv = document.createElement('input');  
    //     // newDiv.setAttribute("type", "file");
    //     // document.body.appendChild(newDiv);

    // }

    // const deleteInput = (index) => {
    //     // list = list.filter(item => item.id !== index);
    //     list.splice(index,1);
    //     console.log(list);
    // }

    // const handlInputChange = (e, index) => {
    //     if (index > list.length) return;  
        
    //     const inputItemsCopy = JSON.parse(JSON.stringify(list));
    //     inputItemsCopy[index].title = e.target.value;
    //     setList(inputItemsCopy);    
    // }

    const handlePatch = () => {
        console.log(data.board_type);
        console.log(contents);
        console.log(titles);
        axios({
            method: 'patch',
            url: 'http://34.64.94.158:8080/api/boards/'+ id,
            data: {
                "board_type" : data.board_type,
                "contents": contents,
                "title": titles
            },
            headers: {                
                'Authorization': 'Bearer ' + cookies,          
                'Content-Type': 'application/json' 
            }                                   
          })
          .then(function (response) {
              // handle success
              console.log(response);                          
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });  
    }

    const handleDelete = () => {
        axios({
            method: 'delete',
            url: 'http://34.64.94.158:8080/api/boards/'+ id,
            headers: {                
                'Authorization': 'Bearer ' + cookies,          
                'Content-Type': 'multipart/form-data' 
            }                                 
          })
          .then(function (response) {
              // handle success
              console.log(response);  
              if(response.status === 200){
                alert('게시글을 삭제하였습니다.')
                window.location.href = '/Notice'
              }
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
                    <div>
                        <div style={{marginLeft: '20px'}}>
                            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>                            
                                <input id="title" name="title" type="text" required style={{width: '50%', paddingLeft: '0.75rem', paddingRight: '0.75rem', paddingBottom: '0.5rem', paddingTop: '0.5rem', borderWidth: '1px', outline: '1px solid treansparent', outlineOffset: '1px'}} value={titles} onChange={(e) => handleTitle(e)}/>
                            </Typography>
                            <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                                {data.created_date}
                            </Typography>
                        </div>                    
                        <Divider />
                        <div style={{marginLeft: '20px', marginTop: '20px', marginBottom: '20px'}}>
                            {handleButton(file)}
                            {OnAdd(status)}
                            {/* {list.map(({id, title}, index) => (
                                <div key={index}>
                                    <div>라벨{index}</div>
                                    <input
                                        type="file"
                                        className={`title-${index}`}
                                        onChange={e => handlInputChange(e, index)}
                                        value={title}
                                    />
                                    {console.log(list)}
                                    {index === 0 && list.length < 4 && (
                                    <Button onClick={addInput}> + </Button>
                                    )}

                                    {index > 0 && list[index - 1] ? (
                                    <Button onClick={() => deleteInput(id)}> - </Button>
                                    ) : (
                                    ''
                                    )}
                                </div>
                            ))}

                            <CreateList/> */}
                            <Typography variant="h8" component="div" sx={{ flexGrow: 1, marginTop: '20px' }}>                            
                                <textarea id="contents" name="contents" type="text" required style={{width: '50%', paddingLeft: '0.75rem', paddingRight: '0.75rem', paddingBottom: '0.5rem', paddingTop: '0.5rem', borderWidth: '1px', outline: '1px solid treansparent', outlineOffset: '1px'}} value={contents} onChange={(e) => handleContents(e)}/>
                            </Typography>
                        </div> 
                        <Divider />                    
                        <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px', justifyContent: 'center', alignItems: 'center', }}>
                            <div style={{ justifyContent: 'space-between', alignItems: 'center',marginBottom: '20px'}}>                            
                                <Button variant="outlined" onClick={handlePatch} sx={{marginLeft: '20px'}}>수정하기</Button>
                                <Button variant="outlined" onClick={handleDelete} sx={{marginLeft: '20px'}}>삭제하기</Button>
                                <Button variant="outlined" onClick={() => window.location.href = '/Notice'} sx={{marginLeft: '20px'}}>돌아가기</Button>
                            </div>
                        </div>
                    </div>
                </Box>
            </Container>
            </div>
        </div>
    )
}

export default NoticePatch;