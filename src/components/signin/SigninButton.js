import React from 'react';
import styled from 'styled-components';

const SigninButton = ({ logo, text }) => {
  return (
    <>
      <LoginButton>
        <ContentWrapper>
          <Image src={logo} alt={text} />
          <TitleWrapper>
            <Title>{text}로 로그인</Title>
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
  @media ${({ theme }) => theme.device.mobile} {
    width: 200px;
    height: 65px;
    box-shadow: 3px 3px 10px #c6c6c6;

    border-radius: 5px;
  }
`;

const ContentWrapper = styled.div`
  ${({ theme }) => theme.verticalCenter};
  width: 80%;
`;
const Image = styled.img`
  @media ${({ theme }) => theme.device.mobile} {
    width: 2rem;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
const Title = styled.div`
  width: 70%;
  font-size: ${({ theme }) => theme.fontSize.lg};
  text-align: center;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export default SigninButton;
