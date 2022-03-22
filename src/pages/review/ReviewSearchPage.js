import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ReviewSearchBar from '../../components/review/ReviewSearchBar';
import PerformanceBox from '../../components/review/PerformanceBox';
import { useDispatch, useSelector } from 'react-redux';
import { getMusical } from '../../modules/review';
import { Text } from '../../elements/elements';
const ReviewSearchPage = () => {
  const dispatch = useDispatch();
  const searchButton = useRef();
  // 페이지 상태 관리
  const [page, setPage] = useState(0);
  // 검색 입력값 상태 관리
  const [input, setInput] = useState('');
  // 검색 결과 상태 관리
  const [searchResult, setSearchResult] = useState([]);

  // 검색 결과 가져오기
  const results = useSelector((state) => state.review.searchResults);
  useEffect(() => {
    if (page > 0) {
      dispatch(getMusical(input, page));
    }
  }, [page]);

  useEffect(() => {
    if (results.length === 0) {
      setPage(page - 1);
    }
    if (results.length > 0) {
      setSearchResult(results);
    }
  }, [results]);

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
    if (!input) {
      window.alert('공연 제목을 입력하세요');
      return;
    }
    searchButton.current.click();
    setPage(1);
    dispatch(getMusical(input, 1));
  };

  return (
    <Wrapper>
      <Text width="45%">공연검색</Text>
      <ReviewSearchBar
        handleSearch={handleSearch}
        changeInput={changeInput}
        handleEnterKey={handleEnterKey}
        searchButton={searchButton}
      />
      {page > 0 &&
        searchResult.length > 0 &&
        searchResult.map((result) => (
          <PerformanceBox key={result.id} result={result} />
        ))}
      {page > 0 && searchResult.length > 0 && (
        <PageContainer>
          <PageButton onClick={pageDown}>{'<'} 이전</PageButton>
          <Text width="auto">{page}</Text>
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
const PageContainer = styled.div`
  display: flex;
  width: 220px;
  height: 40px;
  ${({ theme }) => theme.verticalCenter};
  justify-content: space-between;
`;
const PageButton = styled.button`
  border-radius: 8px;
  border: none;
  width: 80px;
  height: 30px;
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.middleFontSize};
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
