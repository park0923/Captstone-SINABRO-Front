import React from "react";
import HomeHeader from "./HomeHeader";

const Introduction = () => {
  return (
    <div className="relative bg-no-repeat bg-cover relative min-h-screen bg-home-spotted-pattern">
      <HomeHeader />
      <div className="flex justify-center content-center my-14">
        <div className="m-8 px-6">
          <h1 class="my-10 text-4xl font-sebang-gothic font-bold leading-normal tracking-wide">
            온라인 봉사활동 플랫폼
            <br />
            시나브로(SINABRO)
          </h1>

          <p class="text-sm font-sebang-gothic py-3 px-2 text-gray-600">
            온라인 봉사활동 플랫폼, 시나브로는 COVID-19으로
            <br /> 인해 사회적 기여를 하지 못하는 학생들을 위해 제공되는
            <br /> 온라인 봉사활동 플랫폼입니다. <br />
          </p>
          <p class="text-sm font-sebang-gothic py-3 px-2 text-gray-600">
            온라인을 통한 다양한 활동을 통해 자신의 재능을 기부하며 <br />
            봉사할 수 있는 다양한 기회를 제공받을 수 있습니다.
          </p>
        </div>
        <div className="py-2 px-6 m-1">
          <span className="sr-only">Introduce Homepage</span>
          <div className="py-12">
            <img
              className=" h-96 w-96"
              src="/img/People.png"
              alt="남녀이미지"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
