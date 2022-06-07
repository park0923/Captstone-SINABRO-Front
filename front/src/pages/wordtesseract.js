/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Tesseract, { createWorker } from 'tesseract.js';
import Disabled_Header from "./Disabled_Header";
import axios from "axios";

const wordtesseract = ({history}) => {

    const [imagePath, setImagePath] = useState("");
    const [texts, setTexts] = useState("");        
    const [playInLoop, setPlayInLoop] = useState(false);
    const [audio, setAudio] = useState(new Audio());
    const [voice, setVoice] = useState(new ArrayBuffer());
    const handleChange = (event) => {
        setImagePath(URL.createObjectURL(event.target.files[0]));
    }
    
    const handleClick = () => {
        const { createWorker } = Tesseract;
        (async () => {
        const worker = createWorker();
        await worker.load();
        await worker.loadLanguage('kor');
        await worker.initialize('kor');
        const { data: { text } } = await worker.recognize(imagePath);
        console.log(text);
        setTexts(text);
        console.log(texts);
        })();   
    }
    
    const handleVoice = () => {
        const url = 'https://kakaoi-newtone-openapi.kakao.com/v1/synthesize';
        const xmlData = '<speak>테스트해보기.</speak>';        
        axios.post(url, xmlData, {
                headers: {
                    'Content-Type': 'application/xml',
                    'Authorization': `KakaoAK 4965dbbad96091b24fdae9ab46048283`                    
                },                
                responseType: 'arraybuffer'                
            }).then(function (response) {
                    // handle successF
                    console.log(response.data);            
                    setVoice(response.data);                    
                    const context = new AudioContext();
                    context.decodeAudioData(voice, buffer => {
                    const source = context.createBufferSource();
                    source.buffer = buffer;
                    source.connect(context.destination);
                    source.start(0);
                    });                                   
                  })
                  .catch(function (error) {
                    // handle error
                    console.log(error);
                  });        
        
    }
    
    React.useEffect(() => {
        console.log(texts);
    }, [texts]);


    return(
        <div className="relative bg-no-repeat bg-cover relative min-h-screen bg-home-spotted-pattern">
            <Disabled_Header />
            <div className="font-sebang-gothic flex px-96 my-14">
                <div className="boder border-2 shadow-md rounded-xl item-center justify-center p-10 px-50  bg-gray-50 ">
                <div className="text-4xl">
                    이미지 글자 추출
                    <div className="py-3 text-xl">
                        봉사자에게 필요한 사진의 내용을 추출합니다.
                    </div>
                    <form className="justify-center items-center">
                        <div class="border-solid border-t-2	border-green-600 "></div>
                        <div class="board_write text-2xl">
                            <div className=' "title"'>
                                <dl>
                                    <dt>
                                    파일 &nbsp; &nbsp; &nbsp; &nbsp;
                                    <label for="input-file"></label>
                                    <input
                                    type="file"
                                    id="input-file"
                                    onChange={handleChange}
                                    className="text-base"
                                    />
                                    </dt>
                                    <div class="border-solid border-t-2	border-green-600 "></div>
                                </dl>

                                <div className="cont py-2 ">
                                    <textarea
                                        className="h-96 px-44 w-max bg-white col-span-12 "
                                        cols={40}
                                        placeholder="       추출 내용"
                                        value={texts}                            
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div class="border-solid border-t-2	border-green-600 "></div>
                        <br></br>                        
                        <div className="justify-center flex flex-row space-x-4">
                            <button
                            type="button"
                            class="justify-center px-2 py-1 border border-black text-base"
                            onClick={handleClick}
                            >
                                추출
                            </button>       
                            <button
                            type="button"
                            class="justify-center px-2 py-1 border border-black text-base"
                            onClick={handleVoice}
                            >
                                음성
                            </button>      
                            <button
                            type="button"
                            class="justify-center px-2 py-1 border border-black text-base"
                            onClick={() => history.goback()}
                            >
                                돌아가기
                            </button>               
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );

}

export default wordtesseract;