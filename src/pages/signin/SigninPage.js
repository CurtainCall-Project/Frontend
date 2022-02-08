import React, { useEffect } from 'react';
import styled from 'styled-components';
import SigninButton from '../../components/signin/SigninButton';
import naver_logo from '../../assets/naver_login.svg';
import kakao_logo from '../../assets/kakao_login.svg';
import { KAKAO_AUTH_URL } from '../../oauth/KakaoOauth';
import GoogleLogin from '../../components/signin/GoogleLogin';
import GoogleLoginContainer from '../../containers/GoogleLoginContainer';

const SignInPage = () => {
  return (
    <>
      <Container>
        <Title>회원가입/로그인</Title>
        <SigninButton logo={naver_logo} text="네이버" />
        <a href={KAKAO_AUTH_URL}>
          <SigninButton logo={kakao_logo} text="카카오" />
        </a>
        <GoogleLoginContainer />
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

export default SignInPage;
