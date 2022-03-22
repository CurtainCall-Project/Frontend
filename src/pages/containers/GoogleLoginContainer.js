import React from 'react';
import GoogleLogin from '../../components/signin/GoogleLogin';
import { useDispatch } from 'react-redux';
import { login } from '../../modules/user';

const GoogleLoginContainer = () => {
  const dispatch = useDispatch();

  const onLogin = (token) => {
    dispatch(login(token));
  };
  return <GoogleLogin onLogin={onLogin}></GoogleLogin>;
};

export default GoogleLoginContainer;
