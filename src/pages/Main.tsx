import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import '../styles/_main.scss';
import SearchSlide from './mainslide/SearchSlide';
import ReHomeSlide from './mainslide/ReHomeSlide';
import Search from '../components/search/Search';



const MainPage = () => {

  return (
    <div className="main-page">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left ">
          <img src='/img/main/icon.png' />
          <h1>실종과 보호 정보를<br />간편하게 확인하세요.</h1>
          <p className='mt-5'>빠르게 찾고싶은 정보를 실시간으로 확인할 수 있습니다.<br />필요한 정보를 빠르게 찾아보세요.</p>
          <div className="search-box mt-5">
            <Search/>
          </div>
        </div>
        <div className="hero-right">
          <img src="/img/main/maintopbg.png" alt="Dog" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-box">
            <div className='icon'>
                <img src='/img/main/icon_paw.png' />
            </div>
          <p className='display-1 primary'>20,659</p>
          <h4 className='mt-3'>실종동물 찾았습니다!</h4>
        </div>
        
        <div className="stat-box-mid">
            <div className='icon-compass'>
                <img src='/img/main/icon_compass.png' />
            </div>
            <h4>주인을 찾습니다!</h4>
        </div>

        <div className="stat-box">
            <div className='icon'>
                <img src='/img/main/icon_seedling.png' />
            </div>
          <p className='display-1 primary'>22,405</p>
          <h4 className='mt-3'>유기동물 분양했어요!</h4>
        </div>
      </section>

      {/* Animal Gallery */}
      {/*<section className="animal-gallery">
  <div className='search-text-box '>
    <h1>실종동물 찾습니다 
      <img src='/img/main/paw.png' className='ps-3' />
    </h1>
    <div>
      <button className='btn-custom primary'>공고 등록하기</button>
      <button className='btn-custom primary ms-3'>더보기 &gt;</button>
    </div>
  </div>
  </section>*/}

  <Swiper
    modules={[Navigation]}
    navigation
    spaceBetween={20}
    slidesPerView={1}
    style={{ paddingTop: '20px' }}
  >
    {/* 슬라이드 1 */}
    <SwiperSlide>
      <div><SearchSlide /></div>
    </SwiperSlide>
    <SwiperSlide>
      <div><ReHomeSlide /></div>
    </SwiperSlide>

    {/* 만약 다른 슬라이드 필요하면 추가 */}
    {/* <SwiperSlide>다른 갤러리 or 내용</SwiperSlide> */}
  </Swiper>



      {/* Volunteer & Donation */}
      <section className="volunteer-donation">
        <div className="volunteer">
          <h3>자원봉사</h3>
          <ul>
            <li>경남 김정아의 출퇴근 자원봉사자 모집</li>
            <li>서울 강남 보호소 봉사자 구합니다</li>
            {/* ... */}
          </ul>
        </div>
        <div className="donation">
          <h3>후원 요청</h3>
          <ul>
            <li>부산 벽구 보호소</li>
            <li>경기 보호견 70마리에게 사료 후원이 필요해요</li>
            {/* ... */}
          </ul>
        </div>
      </section>

    </div>
  );
};

export default MainPage;
