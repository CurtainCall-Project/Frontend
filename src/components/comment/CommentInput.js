import React from 'react';
import styled from 'styled-components';
import { Button } from '../../elements/elements';
import { ReactComponent as CheckIcon } from '../../assets/check_icon.svg';
import { ReactComponent as ActiveCheckIcon } from '../../assets/active_check_icon.svg';

const CommentInput = (props) => {
  return (
    <Container width={props.width}>
      <InputBox
        placeholder="댓글 남기기"
        value={props.newComment}
        onChange={props.handleComment}
      />
      <Wrapper>
        {(props.boardType === 'rent' || props.boardType === 'sell') && (
          <SecretBox
            width={props.width}
            secret={props.secret}
            onClick={props.clickSecret}>
            {props.secret ? <ActiveCheckIcon /> : <CheckIcon />}
            <Name>비밀</Name>
          </SecretBox>
        )}

        <Button
          type="button"
          width="4em"
          height="2em"
          onClick={props.clickSubmitButton}>
          등록
        </Button>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 2.5em;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  overflow: hidden;
  font-size: ${({ theme }) => theme.base};
  ${({ theme }) => theme.verticalCenter};
  justify-content: space-between;
  padding: 0 0.4em;
`;
const Wrapper = styled.div`
  ${({ theme }) => theme.verticalCenter};
`;
const InputBox = styled.input`
  width: 75%;
  height: 2em;
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.sm};
  @media ${({ theme }) => theme.device.tablet} {
    width: 70%;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 60%;
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;

const SecretBox = styled.div`
  ${({ theme }) => theme.verticalCenter};
  cursor: pointer;
  color: ${(props) => (props.secret ? '#6166b3' : '#bbbbbb')};
  text-align: center;
  margin-right: 3px;
  height: 33px;
`;

const Name = styled.div`
  margin-left: 0.4em;
  margin-top: 0.1em;
  font-size: ${({ theme }) => theme.fontSize.sm};
  @media ${({ theme }) => theme.device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;
export default CommentInput;
