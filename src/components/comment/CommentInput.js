import React from 'react';
import styled from 'styled-components';
import { Button, Text } from '../../elements/elements';
import { ReactComponent as CheckIcon } from '../../assets/check_icon.svg';
import { ReactComponent as ActiveCheckIcon } from '../../assets/active_check_icon.svg';

const CommentInput = (props) => {
  return (
    <Container width={props.width}>
      <InputBox placeholder="댓글 남기기" />
      <SecretBox secret={props.secret} onClick={props.clickSecret}>
        {props.secret ? <ActiveCheckIcon /> : <CheckIcon />}
        <Name>비밀</Name>
      </SecretBox>
      <Button width="60px" height="30px;">
        등록
      </Button>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  width: ${(props) => (props.width ? '800px' : '1000px')}
  height: 35px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.borderGray};
  overflow: hidden;
  font-size: ${({ theme }) => theme.middleFontSize};
  ${({ theme }) => theme.verticalCenter};
`;
const InputBox = styled.input`
  width: 920px;
  height: 31px;
  border: none;
  outline: none;
  margin-right: 10px;
  padding-left: 5px;
  font-size: ${({ theme }) => theme.middleFontSize};
`;

const SecretBox = styled.div`
  cursor: pointer;
  width: 7%;
  color: ${(props) => (props.secret ? '#6166b3' : '#bbbbbb')};
  text-align: center;
  ${({ theme }) => theme.verticalCenter}
`;

const Name = styled.div`
  //border: 1px solid;
  margin-left: 6px;
  margin-top: 4px;
  text-align: center;
`;
export default CommentInput;
