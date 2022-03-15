import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ReviewBox from '../../components/review/ReviewBox';
import { Text } from '../../elements/elements';
import { getMyReview } from '../../modules/review';

const ReviewsPage = () => {
  const dispatch = useDispatch();

  // 사용자 Id 가져오기
  const userId = useSelector((state) => state.user.userId);
  useEffect(() => {
    dispatch(getMyReview(userId));
  }, []);

  // 내가 쓴 후기 리스트 가져오기
  const myReviews = useSelector((state) => state.review.myReviews);
  console.log(myReviews);
  return (
    <Wrapper>
      <Text width="45%" font_size="18px">
        내가 쓴 후기
      </Text>
      {myReviews.length > 0 &&
        myReviews.map((review) => (
          <ReviewBox key={review.id} review={review} />
        ))}
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
