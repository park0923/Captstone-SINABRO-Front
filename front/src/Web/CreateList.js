import React, { useState } from "react"
import styled from "styled-components"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import DetailList from "./DetailList"

const CreateListDiv = styled.div`
  padding: 0;
  width: auto;
  display: flex;
  align-items: ;
  flex-direction: column;
`

const CreateList = () => {
  const [countList, setCountList] = useState([
    {
      id: 0,
      file: ''
    }
  ])
  const [file, setFile] = useState('');  
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  }
  const onDlete = (index) => {
    // console.log(countList.splice(index, 1));
    
    // setCountList(countList.splice(index, 1))
  }
  const onAddDetailDiv = () => {
    let countArr = [...countList]
    let counter = countArr.length
    
    counter += 1
    console.log(counter);
    // countArr.push(counter)	// index 사용 X
    // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용	
    // setCountList(countArr)    

  }

  return (
    <CreateListDiv>
      <Button variant="outlined" onClick={onAddDetailDiv} style={{width: '8%'}}>
          추가
      </Button>
      {/* <DetailList countList={countList} />       */}
      {countList && countList.map((item, i) => (
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
    </CreateListDiv>
  )
}

export default CreateList