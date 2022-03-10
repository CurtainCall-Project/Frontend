import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import ReviewSearchBar from '../../components/review/ReviewSearchBar';
import PerformanceBox from '../../components/review/PerformanceBox';
import { useDispatch, useSelector } from 'react-redux';
import { getMusical } from '../../modules/review';

const ReviewSearchPage = () => {
  const dispatch = useDispatch();

  // 검색 입력값 상태 관리
  const [input, setInput] = useState('');
  // 검색 버튼 상태 관리
  const [button, setButton] = useState(false);

  // 검색 결과 가져오기
  const results = useSelector((state) => state.review.searchResults);
  console.log(results);
  // 검색창에 뮤지컬 정보 입력 시 상태 변경
  const changeInput = (e) => {
    setInput(e.target.value);
  };

  // 엔터 키 눌렀을 때 뮤지컬 검색 수행
  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
    setButton(!button);
  };

  // 뮤지컬 검색 수행
  const handleSearch = (e) => {
    console.log('검색 버튼을 눌렀어요!');
    dispatch(getMusical(input));
    setButton(!button);
  };

  return (
    <Wrapper>
      {/* <ImageBox /> */}
      <ReviewSearchBar
        handleSearch={handleSearch}
        changeInput={changeInput}
        handleEnterKey={handleEnterKey}
      />
      {button &&
        results.length > 0 &&
        results.map((result) => (
          <PerformanceBox key={result.id} result={result} />
        ))}
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
export default ReviewSearchPage;
