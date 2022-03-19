import React from 'react';
import styled from 'styled-components';
import { Button } from '../../elements/elements';
import { ReactComponent as CheckIcon } from '../../assets/check_icon.svg';
import { ReactComponent as ActiveCheckIcon } from '../../assets/active_check_icon.svg';

const CommentInput = (props) => {
  return (
    <Container width={props.width}>
      <InputBox
        width={props.width}
        placeholder="댓글 남기기"
        value={props.newComment}
        onChange={props.handleComment}
      />
      {(props.boardType === 'rent' || props.boardType === 'sell') && (
        <SecretBox
          width={props.width}
          secret={props.secret}
          onClick={props.clickSecret}>
          {props.secret ? <ActiveCheckIcon /> : <CheckIcon />}
          <Name>비밀</Name>
        </SecretBox>
      )}

      <EnrollButton
        type="button"
        width="60px"
        height="30px"
        onClick={props.clickSubmitButton}>
        등록
      </EnrollButton>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  width: ${(props) => (props.width ? `${props.width}` : '1000px')};
  height: 35px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.borderGray};
  overflow: hidden;
  font-size: ${({ theme }) => theme.middleFontSize};
  ${({ theme }) => theme.verticalCenter};
  position: relative;
`;
const InputBox = styled.input`
  width: ${(props) => (props.width ? '835px' : '855px')};
  height: 33px;
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
  margin-left: 6px;
  margin-top: 4px;
  text-align: center;
`;
const EnrollButton = styled(Button)`
  position: absolute;
  right: 3px;
`;
export default CommentInput;
