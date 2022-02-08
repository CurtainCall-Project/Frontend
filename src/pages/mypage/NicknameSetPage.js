import React from 'react';
import styled from 'styled-components';
import NicknameContainer from '../../containers/NicknameContainer';

const NicknameSetPage = () => {
  return (
    <Wrapper>
      <NicknameContainer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 623px;
  ${({ theme }) => theme.verticalCenter};
  flex-direction: column;
  margin: 110px auto 0 auto;
`;

export default NicknameSetPage;
