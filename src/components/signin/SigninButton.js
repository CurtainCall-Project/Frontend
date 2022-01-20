import React from 'react';
import styled from 'styled-components';

const SigninButton = ({ logo }) => {
  return (
    <>
      <LoginButton>
        <ContentWrapper>
          <img src={logo.image} alt={logo.text} />
          <TitleWrapper>
            <Title>{logo.text}로 로그인</Title>
          </TitleWrapper>
        </ContentWrapper>
      </LoginButton>
    </>
  );
};

const LoginButton = styled.div`
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
  width: 350px;
  height: 100px;
  box-shadow: 5px 5px 15px #c6c6c6;
  border-radius: 10px;
  margin-top: 30px;
`;

const ContentWrapper = styled.div`
  ${({ theme }) => theme.verticalCenter};
  width: 244px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
const Title = styled.div`
  width: 70%;
  font-size: ${({ theme }) => theme.fontSize.signinFontSize};
  text-align: center;
`;

export default SigninButton;
