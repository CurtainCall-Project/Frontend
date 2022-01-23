import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NicknameButton = ({ text }) => {
  return (
    <>
      <Link to="/">
        <Button>{text}</Button>
      </Link>
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
