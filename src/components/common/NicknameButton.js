import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NicknameButton = ({ text }) => {
  /* onClick 함수를 정의한다.
  버튼 클릭 시 user 객체를 서버에 보내고, 홈으로 이동한다(useHistory) */
  //const onClick = () => {};
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
