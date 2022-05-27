import React from 'react';
import styled from 'styled-components';
import { ReactComponent as HeartIcon } from '../../../assets/heart_icon.svg';

const LikeButton = (props) => {
  return (
    <>
      <Button onClick={props.clickLike} like={props.like}>
        <HeartIconWrapper />
        <LikeCount>{props.likeCount}</LikeCount>
      </Button>
    </>
  );
};

const Button = styled.div`
  width: 4em;
  height: 4em;
  margin-right: 2em;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #fccadc;
    transition: 0.2s;
  }
  ${(props) => props.like && `background-color: #fccadc`};
  @media ${({ theme }) => theme.device.mobile} {
    width: 3em;
    height: 3em;
    margin-right: 1em;
  }
`;

const HeartIconWrapper = styled(HeartIcon)`
  margin-top: 0.25em;
`;
const LikeCount = styled.span`
  font-size: 1em;
  text-align: center;
`;
export default LikeButton;
