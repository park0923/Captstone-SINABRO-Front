import React from 'react';
import HomeHeader from './HomeHeader';

const Disabled_file = () => {
   
       
    return (
        
  <div className="relative bg-no-repeat bg-cover relative min-h-screen bg-home-spotted-pattern">
                <HomeHeader />
                <div className="font-sebang-gothic flex px-96 my-14">
                <div className="boder border-2 shadow-md rounded-xl item-center justify-center p-10 px-50  bg-gray-50 ">
                        <div className='text-4xl'>
                            자료 요청서 작성
                            <div className='py-3 text-xl'>
                                필요한 자료의 내용을 작성해 자료를 요청합니다. 
                            </div>
                        <div class="border-solid border-t-2	border-green-600 "></div>
                            <div class="board_write text-2xl">
                                <div className=' "title"'>
                                    <dl>
                                        <dt>제목 &nbsp; &nbsp; &nbsp; &nbsp;
                                            <input className='px-32'type="text" placeholder="제목 입력"/></dt>
                                            <div class="border-solid border-t-2	border-green-600 "></div>         
                                    </dl>
                                </div>
                               
                                <div className="cont py-2 ">
                                <textarea className='h-96 px-44 w-max bg-white col-span-12 ' cols={40} placeholder="       내용 입력"></textarea>
                            </div>
                            </div>
                        </div>
                        <br></br>
                        <div class="border-solid border-t-2	border-green-600 "></div>
                        <br></br>
                        <div>
                        <label for="input-file">
                        </label>
                        <input type="file" id="input-file"/>
                        </div>
                        <center>
                            <button class="px-2 py-1 border border-black ">등 록</button>
                           
                            <div className='float-right'>
                            </div>
                            </center>
                                 
                </div>        
                </div> 
                </div>
                
                
            
    )
};

export default Disabled_file;