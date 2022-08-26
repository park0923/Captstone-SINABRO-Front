import React, { useState } from "react"
import styled from "styled-components"
import Button from '@mui/material/Button';

const DetailDiv = styled.div`
  div {
    margin-bottom: 20px;
    width: auto;    
  }
`

const DetailList = (props) => {
  const [file, setFile] = useState('');

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  }
  const onDlete = (index) => {
    console.log(props.countList.splice(index, 1));
  }
  return (
    <DetailDiv>
      {props.countList && props.countList.map((item, i) => (
        <div key={i}>
            <label>파일 추가</label>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <input type={'file'} onChange={handleFile.bind(this)}/>
              <Button variant="outlined" onClick={() => onDlete(i)} style={{width: '8%'}}>
                  삭제
              </Button>
            </div>
        </div>
      ))}
    </DetailDiv>
  )
}

export default DetailList