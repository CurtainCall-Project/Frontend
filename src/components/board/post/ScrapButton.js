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
  width: 4em;
  height: 4em;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 2em;
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
  margin-top: 0.25em;
  margin-bottom: 0.25em;
`;
const ScrapCount = styled.span`
  font-size: 1em;
  text-align: center;
`;
export default ScrapButton;
