import React, { useEffect } from 'react';
import history from '../../history';
import { useDispatch, useSelector } from 'react-redux';
import ReviewDetail from '../../components/review/ReviewDetail';
import { deleteReview, getReviewDetail } from '../../modules/review';

const ReviewDetailPage = (props) => {
  const dispatch = useDispatch();
  //현재 나의 리뷰 id 가져오기
  const reviewId = props.match.params.id;
  // 현재 리뷰 상세 정보 가져오기
  const reviewDetail = useSelector((state) => state.review.reviewDetail);

  useEffect(() => {
    dispatch(getReviewDetail(reviewId));
  }, []);

  // 수정 버튼 클릭 시 해당 뮤지컬 리뷰 작성 페이지로 이동
  const clickEditBtn = () => {
    history.push(`/review/write/${reviewDetail.musical.musicalId}`);
  };

  // 후기 글 삭제
  const deleteNowReview = () => {
    if (window.confirm('게시글을 삭제하시겠습니까?')) {
      dispatch(deleteReview(reviewId));
    }
  };

  return (
    <>
      {!(JSON.stringify(reviewDetail) === '{}') && (
        <ReviewDetail
          reviewDetail={reviewDetail}
          clickEditBtn={clickEditBtn}
          deleteNowReview={deleteNowReview}
        />
      )}
    </>
  );
};

export default ReviewDetailPage;
