import React from 'react';
import HomeHeader from './HomeHeader';

const Home = () => {
    

    return (
        <div className="relative bg-no-repeat bg-cover relative min-h-screen bg-home-spotted-pattern">
            <HomeHeader />
            <div className="flex justify-center content-center my-14">
                <div className="m-8">
                    <h1 class="my-4 text-4xl font-sebang-gothic font-extrabold leading-normal tracking-wide text-gray-800">
                        자원봉사자의<br/>마음만큼이나<br/>강한 것은 없습니다.
                    </h1>
                    <p class="text-sm font-sebang-gothic">
                        내가 봉사받기보다 매일 더 많이 더 나은 봉사를 하기로 결심한다면<br/>
                        부와 사회적지위, 명예, 그리고 최고의 행복을 얻는 주인공이 될 것입니다.
                    </p>
                    <form className="my-4 flex justify-between appearance-none rounded-full relative block w-full font-sebang-gothic px-2 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
                        <input type="email" required name="userEmail" placeholder="함께하고 싶다면 이메일을 입력해주세요" className="mx-5 w-80"/>
                        <button type="submit" className="w-32 h-10 whitespace-nowrap inline-flex items-center justify-center border border-transparent rounded-full shadow-sm text-sm font-sebang-gothic text-white bg-green-600 hover:bg-green-700">
                            회 원 가 입
                        </button>
                    </form>
                </div>
                <div className="m-8">
                    <span className="sr-only">Introduce Homepage</span>
                    <img className="h-96 w-96" src="/img/People.png" alt="남녀이미지" />
                </div>
            </div>
        </div>
    )
};

export default Home;