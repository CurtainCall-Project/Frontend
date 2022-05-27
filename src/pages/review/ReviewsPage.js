import React, { useEffect } from 'react';
import styled from 'styled-components';
import history from '../../history';
import { getCookie } from '../../Cookie';
import { useDispatch, useSelector } from 'react-redux';
import ReviewBox from '../../components/review/ReviewBox';
import { Text } from '../../elements/elements';
import { getMyReview } from '../../modules/review';

const ReviewsPage = () => {
  const dispatch = useDispatch();
  const isLogin = !!getCookie('token');
  const nickname = useSelector((state) => state.user.nickname);

  useEffect(() => {
    if (!isLogin) {
      history.push('/signin');
      return;
    }
    if (isLogin === true && nickname === null) {
      history.push('/mypage/nickname');
      return;
    }
    dispatch(getMyReview());
  }, []);

  // 내가 쓴 후기 리스트 가져오기
  const myReviews = useSelector((state) => state.review.myReviews);

  return (
    <Container>
      <Text margin="0 0 1rem 0">내가 쓴 후기</Text>
      {myReviews.length > 0 &&
        myReviews.map((review) => (
          <ReviewBox key={review.id} review={review} />
        ))}
    </Container>
  );
};

const Container = styled.div`
  max-width: 1256px;
  width: 70vw;
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
  flex-direction: column;
  margin: 4em auto 0 auto;
`;
export default ReviewsPage;
