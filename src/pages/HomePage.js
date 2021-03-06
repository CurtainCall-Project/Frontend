import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import { setCookie } from '../Cookie';
import { useDispatch } from 'react-redux';
import { getUser } from '../modules/user';
import banner_1 from '../assets/banner_1.PNG';
import banner_2 from '../assets/banner_2.PNG';
import banner_3 from '../assets/banner_3.PNG';
import banner_4 from '../assets/banner_4.PNG';
import banner_5 from '../assets/banner_5.PNG';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper/core';

import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation, Autoplay]);
const HomePage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = params.get('token');

  useEffect(() => {
    if (!!token) {
      setCookie('token', token);
    }
    dispatch(getUser());
  }, []);
  const banners = [banner_1, banner_2, banner_3, banner_4, banner_5];

  return (
    <Container>
      <BannerWrapper>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}>
          {banners.map((banner) => (
            <SwiperSlide>
              <a href="https://www.notion.so/809f9abab4e34803a5644686fe9a27ed">
                <Banner src={banner} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </BannerWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 69px;
`;
const BannerWrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 47px auto 0 auto;
`;
const Banner = styled.img`
  max-width: 100%;
  height: auto;
`;
export default HomePage;
