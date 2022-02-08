/* 리덕스 스토어 상태나 액션을 디스패치한다.
자식 컴포넌트(components 폴더 내 컴포넌트들)에게 값을 전달한다.*/

import React from 'react';
import GoogleLogin from '../components/signin/GoogleLogin';
import { useDispatch } from 'react-redux';
import { getUser } from '../modules/user';

const GoogleLoginContainer = () => {
  const dispatch = useDispatch();

  const getUserInfo = (token) => {
    dispatch(getUser(token));
  };
  return <GoogleLogin getUserInfo={getUserInfo}></GoogleLogin>;
};

export default GoogleLoginContainer;
