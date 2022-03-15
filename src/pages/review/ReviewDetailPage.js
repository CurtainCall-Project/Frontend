import React, { useEffect } from 'react';
import styled from 'styled-components';
import history from '../../history';
import { useDispatch, useSelector } from 'react-redux';
import ReviewDetail from '../../components/review/ReviewDetail';
import { getReviewDetail } from '../../modules/review';

const ReviewDetailPage = (props) => {
  const dispatch = useDispatch();

  //현재 나의 리뷰 id 가져오기
  const reviewId = props.match.params.id;
  // 현재 리뷰 상세 정보 가져오기
  const reviewDetail = useSelector((state) => state.review.reviewDetail);

  useEffect(() => {
    dispatch(getReviewDetail(reviewId));
  }, []);

  console.log(reviewDetail);
  // 수정 버튼 클릭 시 해당 뮤지컬 리뷰 작성 페이지로 이동
  const clickEditBtn = () => {
    history.push(`/review/write/${reviewDetail.musical.mt20id}`);
  };

  return (
    <Wrapper>
      {!(JSON.stringify(reviewDetail) === '{}') && (
        <ReviewDetail reviewDetail={reviewDetail} clickEditBtn={clickEditBtn} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
  flex-direction: column;
  margin: 60px auto 0 auto;
`;
export default ReviewDetailPage;
