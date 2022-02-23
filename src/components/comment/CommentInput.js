import React from 'react';
import styled from 'styled-components';
import { Button } from '../../elements/elements';

const CommentInput = () => {
  return (
    <Container>
      <InputBox placeholder="댓글 남기기" />
      <Button width="60px" height="30px;">
        등록
      </Button>
    </Container>
  );
};

const Container = styled.div`
  width: 1000px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.borderGray};
  overflow: hidden;
  font-size: ${({ theme }) => theme.middleFontSize};
  ${({ theme }) => theme.verticalCenter};
`;
const InputBox = styled.input`
  box-sizing: border-box;
  width: 920px;
  height: 31px;
  border: none;
  outline: none;
  margin-right: 10px;
  padding-left: 5px;
  font-size: ${({ theme }) => theme.middleFontSize};
`;
export default CommentInput;
