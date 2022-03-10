import React from 'react';
import styled from 'styled-components';
import history from '../../history';
import { Text } from '../../elements/elements';
import { ReactComponent as StarIcon } from '../../assets/star_icon.svg';

const ReviewBox = ({ review }) => {
  // 후기 상세 페이지로 이동
  const clickReview = () => {
    history.push(`/my-review/${review.reviewId}`);
  };

  return (
    <Container onClick={clickReview}>
      <ImageBox src={review.musicalImg} />
      <InfoWrapper>
        <Text>{review.mname}</Text>
        <StarIcon />
        <MusicalRating>{review.rating}</MusicalRating>
        <h1>{review.viewingDate}</h1>
        <h1>{review.casting}</h1>
      </InfoWrapper>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  width: 900px;
  height: 153px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px #dedede;
  ${({ theme }) => theme.verticalCenter}
  position: relative;
  margin: 15px 0;
  cursor: pointer;
`;
const ImageBox = styled.img`
  width: 100px;
  height: 122px;
  margin-left: 20px;
`;
const InfoWrapper = styled.div`
  width: 70%;
  height: 122px;
  line-height: 28px;
  margin-left: 20px;
`;
const MusicalRating = styled.span`
  font-size: ${({ theme }) => theme.middleFontSize};
  padding-left: 5px;
`;
export default ReviewBox;
