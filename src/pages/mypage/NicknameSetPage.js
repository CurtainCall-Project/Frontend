import React from 'react';
import styled from 'styled-components';

import NicknameForm from '../../components/common/NicknameForm';
import NicknameButton from '../../components/common/NicknameButton';

const NicknameSetPage = () => {
  return (
    <>
      <Container>
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
export default NicknameSetPage;
