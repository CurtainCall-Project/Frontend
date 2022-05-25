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
        <SearchButton
          onClick={() => props.handleSearch()}
          ref={props.searchButton}>
          <SearchIcon />
        </SearchButton>
      </Container>
    </>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.verticalCenter}
  border: 3px solid ${({ theme }) => theme.colors.purple};
  width: 100%;
  height: 3.1em;
  margin: 1em 0;
`;
const TitleInput = styled.input`
  width: 95%;
  height: 2em;
  box-sizing: border-box;
  padding-left: 0.6em;
  border: none;
  outline: none;
  font-size: 1.2em;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1em;
  }
`;
const SearchButton = styled.div`
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
  width: 5%;
  height: 60%;
  cursor: pointer;
  @media ${({ theme }) => theme.device.tablet} {
    margin-right: 0.4em;
  }
`;
export default ReviewSearchBar;
