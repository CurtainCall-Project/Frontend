import React from 'react';
import styled from 'styled-components';
import NicknameForm from '../components/common/NicknameForm';
import NicknameButton from '../components/common/NicknameButton';

// NicknameForm 개발 UI 확인을 위해 임시로 Homepage에 렌더링하였다.
const HomePage = () => {
  return (
    <>
      <Container>
        {/* <h1>HomePage</h1> */}
        <NicknameForm />
        <NicknameButton text="가입완료" />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 623px;
  ${({ theme }) => theme.verticalCenter};
  flex-direction: column;
  margin: 110px auto 0 auto;
`;
export default HomePage;
