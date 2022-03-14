import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ReviewSearchBar from '../../components/review/ReviewSearchBar';
import PerformanceBox from '../../components/review/PerformanceBox';
import Paging from '../../components/board/Paging';
import { useDispatch, useSelector } from 'react-redux';
import { getMusical } from '../../modules/review';

const ReviewSearchPage = () => {
  const dispatch = useDispatch();
  // 페이지 상태 관리
  const [page, setPage] = useState(0);
  // 검색 입력값 상태 관리
  const [input, setInput] = useState('');

  // 검색 결과 가져오기
  const results = useSelector((state) => state.review.searchResults);

  useEffect(() => {
    if (page > 0) {
      dispatch(getMusical(input, page));
      setSearchResult(results);
    }
  }, [page]);

  useEffect(() => {
    if (results.length > 0) {
      setSearchResult(results);
      console.log(searchResult);
    }
  }, [results]);

  const searchButton = useRef();
  // 검색 결과 상태 관리
  const [searchResult, setSearchResult] = useState([]);

  // 검색창에 뮤지컬 정보 입력 시 상태 변경
  const changeInput = (e) => {
    setInput(e.target.value);
  };

  // 이전 페이지로 이동
  const pageDown = () => {
    if (page === 1) {
      window.alert('첫 페이지입니다.');
      return;
    }
    setPage(page - 1);
  };

  // 다음 페이지로 이동
  const pageUp = () => {
    setPage(page + 1);
  };

  // 엔터 키 눌렀을 때 뮤지컬 검색 수행
  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // 뮤지컬 검색 수행
  const handleSearch = (e) => {
    searchButton.current.click();
    setPage(1);
    dispatch(getMusical(input, page));
    setSearchResult(results);
  };

  return (
    <Wrapper>
      {/* <ImageBox /> */}
      <ReviewSearchBar
        handleSearch={handleSearch}
        changeInput={changeInput}
        handleEnterKey={handleEnterKey}
        searchButton={searchButton}
      />
      {page > 0 &&
        searchResult.map((result) => (
          <PerformanceBox key={result.id} result={result} />
        ))}
      {page > 0 && (
        <PageContainer>
          <PageButton onClick={pageDown}>{'<'} 이전</PageButton>
          <PageButton onClick={pageUp}>다음 {'>'}</PageButton>
        </PageContainer>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
  flex-direction: column;
  margin: 150px auto 0 auto;
`;
const ImageBox = styled.img`
  background-color: gray;
  width: 327px;
  height: 205px;
`;
const PageContainer = styled.div`
  display: flex;
  width: 220px;
  height: 40px;
  ${({ theme }) => theme.verticalCenter};
  justify-content: space-between;
`;
const PageButton = styled.div`
  border-radius: 8px;
  width: 80px;
  height: 30px;
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
  font-weight: bold;
  background-color: ${({ theme }) => theme.purple};
  color: #434343;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.mainBlue};
    color: #fff;
  }
`;
export default ReviewSearchPage;
