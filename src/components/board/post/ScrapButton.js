import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ScrapIcon } from '../../../assets/scrap_icon.svg';

const ScrapButton = (props) => {
  return (
    <>
      <Button onClick={props.clickScrap} scrap={props.scrap}>
        <ScrapIconWrapper />
        <ScrapCount>{props.scrapCount}</ScrapCount>
      </Button>
    </>
  );
};

const Button = styled.div`
  width: 65px;
  height: 65px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #dddcf0;
    transition: 0.2s;
  }
  ${(props) => props.scrap && `background-color: #dddcf0`};
`;

const ScrapIconWrapper = styled(ScrapIcon)`
  margin-top: 3px;
  margin-bottom: 4px;
`;
const ScrapCount = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  text-align: center;
`;
export default ScrapButton;
