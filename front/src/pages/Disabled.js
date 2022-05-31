import React, { useState } from 'react';
import HomeHeader from './HomeHeader';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


const Disabled  = () => {
   
  

    return (              
  <div className="relative bg-no-repeat bg-cover relative min-h-screen bg-home-spotted-pattern">
                
                <HomeHeader />

                <div className="flex justify-center content-center my-14">
                
                    <h1 class="my-4 text-4xl font-sebang-gothic font-bold">
                    시나브로(SINABRO)<br/>
                        <div className='my-3 font-sebang-gothic font-thin text-base'>
                        <p>통합봉사포털 시나브로를 이용해주셔서 감사합니다.</p>
                        <p>본 사이트는 시각장애인 및 노인 모두 키보드만으로도 쉽게 이용할 수 있습니다.</p>
                        <p>자세한 사항은 도움말을 참고하세요</p>
                        </div>
                            <div class="border-solid border-2 border-green-600 bg-white">
                                <div className='font-sebang-gothic text-base'>
                                        <div className='flex justify-center'>
                                            원하시는 환경으로 설정할 수 있습니다.   
                                        </div>
                                        <div class="border-solid border-2 border-black full bg-black">
                                            
                                        <form>
                                                <div className='text-sm text-white font-thin '> 
                                                
                                                    <div className=' font font-sebang-gothic front-bold text-lg '>
                                                        글씨크기조절
                                                        &nbsp;
                                                        
                                                      <button class="px-2 py-1 border border-black bg-white text-yellow-400">+</button>
                                                    &nbsp;
                                                    <button  class="px-2 py-1 border border-black  bg-white text-yellow-400">-</button>
                                                    &nbsp;
                                                    
                                                    글씨색선택
                                                    &nbsp;
                                                    <select className='text-black "text-color"'>
                                                    <option value = "black" selected>검정색</option>
                                                    <option value = "white">흰색</option>
                                                    <option value = "green">녹색</option>
                                                    </select>
                                                    &nbsp;
                                                    배경색상조절
                                                    &nbsp;
                                                    <select className='text-black "bg-color"'>
                                                    <option value = "black" selected>검정색</option>
                                                    <option value = "white">흰색</option>
                                                    <option value = "green">녹색</option>
                                                    </select>
                                                    </div>
                                                </div>
                                                </form>
                                                    
                                        </div>
                                        <div className='font-thin'>
                                        다음 항목으로 이동하려면 Tab키를, 이전 항목으로 이동하려면 Shift+Tab키를 눌러주세요.
                                        <br></br>홈페이지 메인 화면으로 이동하려면 H키를 누르세요.
                                        </div>
                                    </div>
                                    </div>
                                    
                                 <div className='py-3'>   
                                     <button className=' ml-40 w-80 h-10 whitespace-nowrap inline-flex items-center justify-center border border-transparent rounded-full shadow-sm text-2xl font-sebang-gothic font-bold text-black bg-green-400 hover:bg-gray-100'>
                                         공지 사항
                                     </button>
                                 </div>
                                 <div className='py-2'>   
                                     <button className=' ml-40 w-80 h-10 whitespace-nowrap inline-flex items-center justify-center border border-transparent rounded-full shadow-sm text-2xl font-sebang-gothic font-bold text-black bg-green-400 hover:bg-gray-100'>
                                         봉사 요청서 작성
                                     </button>
                                 </div>
                                 <div className='py-2'>   
                                     <button className=' ml-40 w-80 h-10 whitespace-nowrap inline-flex items-center justify-center border border-transparent rounded-full shadow-sm text-2xl font-sebang-gothic font-bold text-black bg-green-400 hover:bg-gray-100'>
                                     자료 신청서 작성
                                     </button>
                                 </div>
                                 <div className='py-2'>   
                                     <button className=' ml-40 w-80 h-10 whitespace-nowrap inline-flex items-center justify-center border border-transparent rounded-full shadow-sm text-2xl font-sebang-gothic font-bold text-black bg-green-400 hover:bg-gray-100'>
                                    나의 신청 목록
                                     </button>
                                 </div>
                            
                    </h1>
                    <h1 class="my-4 text-xl font-sebang-gothic font-thin">
                    시각장애인용 
                    </h1>
                </div> 
                
    </div>
            
    )
};

export default Disabled;