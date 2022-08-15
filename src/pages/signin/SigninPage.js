import React, { useEffect } from 'react';
import styled from 'styled-components';
import history from '../../history';
import { config } from '../../config';
import { getCookie } from '../../Cookie';
import SigninButton from '../../components/signin/SigninButton';
import naver_logo from '../../assets/signin/naver_login.svg';
import kakao_logo from '../../assets/signin/kakao_login.svg';
import google_logo from '../../assets/signin/google_login.svg';
import {
  KAKAO_AUTH_URL,
  NAVER_AUTH_URL,
  GOOGLE_AUTH_URL,
} from '../../oauth/oauth';

const SignInPage = () => {
  useEffect(() => {
    if (!!getCookie('token')) {
      history.push('/');
    }
  }, []);
  return (
    <>
      <Container>
        <Title>회원가입/로그인</Title>
        <a href={`${config.SERVER_URL}/` + NAVER_AUTH_URL}>
          <SigninButton logo={naver_logo} text="네이버" />
        </a>
        <a href={`${config.SERVER_URL}/` + KAKAO_AUTH_URL}>
          <SigninButton logo={kakao_logo} text="카카오" />
        </a>
        <a href={`${config.SERVER_URL}/` + GOOGLE_AUTH_URL}>
          <SigninButton logo={google_logo} text="구글" />
        </a>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 350px;
  margin: 3em auto 10px auto;
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.device.mobile} {
    width: 200px;
    margin-top: 2em;
  }
`;
const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.lg};
  text-align: center;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;
export default SignInPage;
