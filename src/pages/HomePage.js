import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { setCookie } from '../Cookie';
import { useDispatch } from 'react-redux';
import { getUser } from '../modules/user';
import MainSection from '../components/landing_page/MainSection';
import InfoSection from '../components/landing_page/InfoSection/InfoSection';
import {
  objOne,
  objTwo,
  objThree,
  objFour,
} from '../components/landing_page/InfoSection/Data';

const HomePage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = params.get('token');

  useEffect(() => {
    if (!!token) {
      setCookie('token', token);
      dispatch(getUser());
    }
  }, []);

  return (
    <>
      <MainSection />
      <InfoSection {...objOne} />
      <InfoSection {...objTwo} />
      <InfoSection {...objThree} />
      <InfoSection {...objFour} />
    </>
  );
};

export default HomePage;
