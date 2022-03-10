import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/search_icon.svg';

const ReviewSearchBar = (props) => {
  return (
    <>
      <Container>
        <TitleInput
          placeholder="찾으시는 공연 제목을 입력해주세요"
          onChange={props.changeInput}
          onKeyPress={props.handleEnterKey}
        />
        <SearchButton onClick={props.handleSearch}>
          <SearchIcon />
        </SearchButton>
      </Container>
    </>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.verticalCenter}
  border: 3px solid ${({ theme }) => theme.mainBlue};
  width: 750px;
  height: 51px;
  margin: 35px 0;
`;
const TitleInput = styled.input`
  width: 95%;
  height: 50px;
  box-sizing: border-box;
  padding-left: 10px;
  border: none;
  outline: none;
  font-size: 18px;
`;
const SearchButton = styled.div`
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
  width: 5%;
  height: 60%;
  cursor: pointer;
`;
export default ReviewSearchBar;
