import React from 'react';
import styled from 'styled-components';
import ReviewDetail from '../../components/review/ReviewDetail';

const ReviewPage = () => {
  return (
    <Wrapper>
      <ReviewDetail />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
  flex-direction: column;
  margin: 60px auto 0 auto;
`;
export default ReviewPage;
