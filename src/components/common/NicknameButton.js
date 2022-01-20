import React from 'react';
import styled from 'styled-components';

const NicknameButton = ({ text }) => {
  return (
    <>
      <Button>{text}</Button>
    </>
  );
};
const Button = styled.button`
  width: 179px;
  height: 54px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.mainBlue};
  opacity: 70%;
  color: #fff;
  font-size: 16px;
  transition: 0.3s;

  &:hover {
    opacity: 100%;
  }
`;
export default NicknameButton;
