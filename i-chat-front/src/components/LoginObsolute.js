import React from 'react'
import { Link } from "react-router-dom";

// import LoginCarousel from '../assets/img/ImgLib';
import LoginCarousel from '../assets/img/ImgLib.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Login = () => {
  return (
    <>
    <wrapper>
      <header className="headerDefault">
          <div className="container">
              <div className="row g-1">
                  <div className="col-md-1">
                      <Link className="d-block" to="#">
                      <img className="img-fluid" src={ require('../assets/img/logo.png') } alt="" />
                      </Link>
                  </div>
                  <div className="col-md-10 border-bottom"></div>
                  <div className="col-md-1"></div>
              </div>
          </div>
      </header>
      <body-main>
          <div className="container-fluid">
              <div className="row h-100">
                  <div className="col-12 col-md-6 slidePan">
                    <div className="carouselWrapper">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            centeredSlides={true}
                            //fadeEffect={fade}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            //navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            //onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            className='carousel-login'
                            >
                            <SwiperSlide>
                                <img class="img-fluid" src={LoginCarousel.carousel_1} alt="" />
                                <h3 className="title">Curated content for your kids</h3>
                                <p>Talk about one of the features of your application & how it will help your users</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img class="img-fluid" src={LoginCarousel.carousel_2} alt="" />
                                <h3 className="title">Two-factor authentication</h3>
                                <p>Talk about one of the features of your application & how it will help your users</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img class="img-fluid" src={LoginCarousel.carousel_3} alt="" />
                                <h3 className="title">Connect with your friends</h3>
                                <p>Talk about one of the features of your application & how it will help your users</p>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="accessWrapper">
                        <p className="text-end">Don’t have an account? <Link to="/signup">Register</Link></p>
                    </div>
                  </div>
              </div>
          </div>
      </body-main>
    </wrapper>
    </>
  )
}

export default Login;
