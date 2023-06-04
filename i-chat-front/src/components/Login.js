import React from 'react'
import { Link } from "react-router-dom";

import LoginCarousel from '../assets/img/ImgLib';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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
                    {/* {LoginCarousel.map( (slideImg) =>  */}
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                            <SwiperSlide>
                                <img src={LoginCarousel.carousel_1} alt="" />
                            </SwiperSlide>
                        </Swiper>
                    {/* )} */}
                  </div>
                  <div className="col-12 col-md-6"></div>
              </div>
          </div>
      </body-main>
    </wrapper>
    </>
  )
}

export default Login;
