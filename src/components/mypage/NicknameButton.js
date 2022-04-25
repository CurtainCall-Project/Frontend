import React from 'react';
import styled from 'styled-components';

const NicknameButton = ({ onSave }) => {
  return (
    <>
      <Button onClick={onSave}>저 장</Button>
    </>
  );
};
const Button = styled.button`
  width: 179px;
  height: 54px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.purple};
  opacity: 70%;
  color: #fff;
  font-size: 16px;
  transition: 0.3s;

  &:hover {
    opacity: 100%;
  }
`;
export default NicknameButton;
