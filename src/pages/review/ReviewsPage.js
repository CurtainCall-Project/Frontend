import React from 'react';
import styled from 'styled-components';
import ReviewBox from '../../components/review/ReviewBox';
import { Text } from '../../elements/elements';

const ReviewsPage = () => {
  return (
    <Wrapper>
      <Text width="45%" font_size="18px">
        내가 쓴 후기
      </Text>
      <ReviewBox />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
  flex-direction: column;
  margin: 60px auto 0 auto;
`;
export default ReviewsPage;
