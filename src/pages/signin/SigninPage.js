import React, { useEffect } from 'react';
import styled from 'styled-components';
import history from '../../history';
import { getCookie } from '../../Cookie';
import SigninButton from '../../components/signin/SigninButton';
import naver_logo from '../../assets/naver_login.svg';
import kakao_logo from '../../assets/kakao_login.svg';
import google_logo from '../../assets/google_login.svg';
import {
  KAKAO_AUTH_URL,
  NAVER_AUTH_URL,
  GOOGLE_AUTH_URL,
} from '../../oauth/oauth';
import GoogleLoginContainer from '../../pages/containers/GoogleLoginContainer';

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
        <a href={`${process.env.REACT_APP_SERVER_URL}` + '/' + NAVER_AUTH_URL}>
          <SigninButton logo={naver_logo} text="네이버" />
        </a>
        <a href={KAKAO_AUTH_URL}>
          <SigninButton logo={kakao_logo} text="카카오" />
        </a>
        <a href={GOOGLE_AUTH_URL}>
          <GoogleButton id="customBtn" className="customGPlusSignIn">
            <img src={google_logo} alt="구글"></img>
            <div className="buttonText">구글로 로그인</div>
          </GoogleButton>
        </a>
        {/* <GoogleLoginContainer /> */}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 350px;
  margin: 60px auto 0 auto;
`;
const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.signinFontSize};
  padding: 10px;
  text-align: center;
`;
const GoogleButton = styled.div`
  ${({ theme }) => theme.verticalCenter};
  width: 350px;
  height: 100px;
  box-shadow: 5px 5px 15px #c6c6c6;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.signinFontSize};
  margin-top: 30px;
  cursor: pointer;

  img {
    margin-left: 53px;
  }

  div {
    margin-left: 60px;
  }
`;
export default SignInPage;
