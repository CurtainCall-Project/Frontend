import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { setCookie } from '../Cookie';

// NicknameForm 개발 UI 확인을 위해 임시로 Homepage에 렌더링하였다.
const HomePage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = params.get('token');

  useEffect(() => {
    if (token) {
      setCookie('token', token);
    }
  }, []);

  return (
    <>
      <h1>HomePage</h1>
    </>
  );
};

export default HomePage;
