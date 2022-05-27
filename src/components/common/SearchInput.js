import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const SearchInput = ({ clickSearchBtn, changeInput, handleEnterKey }) => {
  return (
    <Container>
      <Input
        placeholder="검색"
        onChange={changeInput}
        onKeyPress={handleEnterKey}
      />
      <SearchButton onClick={clickSearchBtn}>
        <SearchIcon />
      </SearchButton>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
  width: 250px;
  height: 38px;
  //margin-right: 36px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.white};
  @media ${({ theme }) => theme.device.tablet} {
    border: 1px solid;
    width: 95%;
    height: 25px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    height: 20px;
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;
const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const SearchIcon = styled(FaSearch)`
  padding-top: 2px;
  width: ${({ theme }) => theme.fontSize.base};
  @media ${({ theme }) => theme.device.tablet} {
    width: ${({ theme }) => theme.fontSize.sm};
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: ${({ theme }) => theme.fontSize.xxs};
  }
`;
const Input = styled.input`
  width: 80%;
  box-sizing: border-box;
  padding-left: 6px;
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.base};
  @media ${({ theme }) => theme.device.tablet} {
    width: 85%;
    font-size: ${({ theme }) => theme.fontSize.xs};
    height: 18px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 70%;
    height: 18px;
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;
export default SearchInput;
