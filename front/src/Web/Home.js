import * as React from 'react';
import Header from './Header';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/home.css';
import TopBar from './TopBar';
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,    
  };

  return(
    <div className='main'>
      <Header></Header>        
      <div className='backimg'>
        <div className="detail">
          <h1>
            온라인 봉사활동 플랫폼
            <br />
            시나브로(SYNABRO)
          </h1>
          <p>
            온라인 봉사활동 플랫폼, 시나브로는 COVID-19으로
            <br /> 인해 사회적 기여를 하지 못하는 학생들을 위해 제공되는
            <br /> 온라인 봉사활동 플랫폼입니다. <br />
          </p>
          <p>
            온라인을 통한 다양한 활동을 통해 자신의 재능을 기부하며 <br />
            봉사할 수 있는 다양한 기회를 제공받을 수 있습니다.
          </p>
        </div>
      </div>
      <div className='backimg2'>
        <div className='detail2'>      
          <h1>이달의 봉사 활동</h1>    
          <Slider className='slider' {...settings}>
            <div className='box'>
              <div className='card'>
                <h1>봉사 제목 1</h1>
                <p>
                  봉사 내용
                </p>
              </div>            
            </div>
            <div className='box'>
              <div className='card'>
                <h1>봉사 제목 2</h1>
                <p>
                  봉사 내용
                </p>
              </div>            
            </div>
            <div className='box'>
              <div className='card'>
                <h1>봉사 제목 3</h1>
                <p>
                  봉사 내용
                </p>
              </div>            
            </div>
            <div className='box'>
              <div className='card'>
                <h1>봉사 제목 4</h1>
                <p>
                  봉사 내용
                </p>
              </div>            
            </div>
            <div className='box'>
              <div className='card'>
                <h1>봉사 제목 5</h1>
                <p>
                  봉사 내용
                </p>
              </div>            
            </div>
            <div className='box'>
              <div className='card'>
                <h1>봉사 제목 6</h1>
                <p>
                  봉사 내용
                </p>
              </div>            
            </div>
            <div className='box'>
              <div className='card'>
                <h1>봉사 제목 7</h1>
                <p>
                  봉사 내용
                </p>
              </div>            
            </div>
          </Slider>
        </div>
      </div>
    </div>    
    );
}

export default Home;