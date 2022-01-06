import React from 'react';
import HomeHeader from './HomeHeader';

const Home_Education = () => {
    

    return (
        <div className="relative bg-no-repeat bg-cover relative min-h-screen bg-home-spotted-pattern">
            <HomeHeader />
            <div className="flex justify-center content-center my-14" >
                <div className="m-8 px-6">
                    <h1 class="my-4 text-4xl font-sebang-gothic font-bold leading-normal tracking-wide">
                    봉사활동을 위해<br/> 다음과 같은 교육을<br/> 진행합니다.<br/>
                    </h1>
                    <p class="text-sm font-sebang-gothic py-2 px-2 text-gray-600">
                    온라인 봉사활동 플랫폼, 시나브로는 봉사활동을 위해<br/>사전 교육을 필수적으로 이행해야 합니다.<br/>                    </p>
                    <p class="text-sm font-sebang-gothic py-2 px-2 text-gray-600">
                    교육을 통해 기본적인 작업 방법 및 글 작성 규격을<br/> 알고 봉사 활동을 수행할 수 있습니다.
                    </p>
                </div>
                <div className="py-2 px-12 m-1">
                    <span className="sr-only">Introduce Homepage</span>
                    <div className="py-12">
                    <img className="rounded h-60 w-80" src="https://source.unsplash.com/random" alt="남녀이미지" />
                    </div>  
                </div>
            </div>
        </div>
    )
};

export default Home_Education;