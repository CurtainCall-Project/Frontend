import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ReviewSearchBar from '../../components/review/ReviewSearchBar';
import PerformanceBox from '../../components/review/PerformanceBox';
import { useDispatch, useSelector } from 'react-redux';
import { getMusical } from '../../modules/review';

const ReviewSearchPage = () => {
  const dispatch = useDispatch();
  // 페이지 상태 관리
  const [page, setPage] = useState(0);
  // 검색 입력값 상태 관리
  const [input, setInput] = useState('');
  // 검색 결과 상태 관리
  const [searchResult, setSearchResult] = useState([]);

  // 검색 결과 가져오기
  const results = useSelector((state) => state.review.searchResults);

  useEffect(() => {
    // 마지막 페이지인경우 페이지 원래대로 되돌리기
    if (!Array.isArray(results)) {
      results === '' ? setPage(page - 1) : setSearchResult([results]);
    }
    if (Array.isArray(results) && results.length > 0) {
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
    dispatch(getMusical(input, page - 1));
  };

  // 다음 페이지로 이동
  const pageUp = () => {
    setPage(page + 1);
    dispatch(getMusical(input, page + 1));
  };

  // 엔터 키 눌렀을 때 뮤지컬 검색 수행
  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      setPage(1);
      dispatch(getMusical(input, 1));
    }
  };

  // 뮤지컬 검색 수행
  const handleSearch = (e) => {
    if (!input) {
      window.alert('공연 제목을 입력하세요');
      return;
    }
    setPage(1);
    dispatch(getMusical(input, 1));
  };

  return (
    <Wrapper>
      <ReviewSearchBar
        handleSearch={handleSearch}
        changeInput={changeInput}
        handleEnterKey={handleEnterKey}
      />
      {page > 0 &&
        searchResult.length > 0 &&
        searchResult.map((result) => (
          <PerformanceBox key={result.mt20id} result={result} />
        ))}
      {page > 0 && searchResult.length > 0 && (
        <PageContainer>
          <PageButton onClick={pageDown}>{'<'} 이전</PageButton>
          <span>{page}</span>
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
  margin: 9em auto 0 auto;
  width: 65vw;
  max-width: 1000px;
  @media ${({ theme }) => theme.device.tablet} {
    width: 75vw;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 80vw;
  }
`;
const PageContainer = styled.div`
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
  height: 2em;
  & > span {
    font-weight: bold;
    width: 4em;
    text-align: center;
  }
`;
const PageButton = styled.button`
  border-radius: 0.5em;
  border: none;
  width: 5em;
  height: 2em;
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
  font-size: 1em;
  font-weight: bold;
  background-color: ${({ theme }) => theme.lightPurple};
  color: #434343;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.purple};
    color: #fff;
  }
`;
export default ReviewSearchPage;
