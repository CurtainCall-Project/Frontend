import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as HeartIcon } from '../../../assets/heart_icon.svg';

const LikeButton = (props) => {
  return (
    <>
      <Button onClick={props.clickLike} isLike={props.isLike}>
        <HeartIconWrapper />
        <LikeCount>{props.likeCount}</LikeCount>
      </Button>
    </>
  );
};

const Button = styled.div`
  width: 65px;
  height: 65px;
  margin-right: 30px;
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #fccadc;
    transition: 0.2s;
  }
  ${(props) => props.isLike && `background-color: #fccadc`};
`;

const HeartIconWrapper = styled(HeartIcon)`
  margin-top: 4px;
`;
const LikeCount = styled.span`
  font-size: ${({ theme }) => theme.smallFontSize};
  text-align: center;
`;
export default LikeButton;
