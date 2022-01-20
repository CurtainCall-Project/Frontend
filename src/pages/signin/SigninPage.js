import React from 'react';
import styled from 'styled-components';
import SigninButton from '../../components/signin/SigninButton';
import naver_logo from '../../assets/naver_login.svg';
import kakao_logo from '../../assets/kakao_login.svg';
import google_logo from '../../assets/google_login.svg';

const SignInPage = () => {
  const logos = [
    {
      image: naver_logo,
      text: '네이버',
    },
    {
      image: kakao_logo,
      text: '카카오',
    },
    {
      image: google_logo,
      text: '구글',
    },
  ];

  return (
    <>
      <Container>
        <Title>회원가입/로그인</Title>
        {logos.map((logo) => (
          <SigninButton logo={logo} />
        ))}
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
