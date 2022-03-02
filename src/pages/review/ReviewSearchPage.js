import React from 'react';
import styled from 'styled-components';
import ReviewSearchBar from '../../components/review/ReviewSearchBar';
import PerformanceBox from '../../components/review/PerformanceBox';

const ReviewSearchPage = () => {
  return (
    <Wrapper>
      {/* <ImageBox /> */}
      <ReviewSearchBar />
      <PerformanceBox />
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
