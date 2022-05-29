import React from 'react';
import styled from 'styled-components';
import history from '../../history';
import { Text } from '../../elements/elements';
import { ReactComponent as StarIcon } from '../../assets/star_icon.svg';

const ReviewBox = ({ review }) => {
  // 후기 상세 페이지로 이동
  const clickReview = () => {
    history.push(`/my-review/${review.id}`);
  };

  return (
    <Container onClick={clickReview}>
      <ImageBox src={review.musical.poster} />
      <InfoWrapper>
        <Text>{review.musical.prfnm}</Text>
        <Wrapper>
          <StarIcon />
          <MusicalRating>{review.rating}</MusicalRating>
        </Wrapper>
        <h1>{review.viewingDate}</h1>
        <h1>{review.cast}</h1>
      </InfoWrapper>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 1em 1.5em;
  border-radius: 5px;
  box-shadow: 0 0 0.7em #dedede;
  display: flex;
  margin-bottom: 1.5em;
  cursor: pointer;
`;
const ImageBox = styled.img`
  width: 6em;
  height: 8em;
  object-fit: cover;
`;
const InfoWrapper = styled.div`
  height: auto;
  line-height: 1.8em;
  margin-left: 1em;
`;
const Wrapper = styled.div`
  ${({ theme }) => theme.verticalCenter};
`;
const MusicalRating = styled.div`
  box-sizing: border-box;
  padding-left: 0.25em;
  padding-top: 0.25em;
`;
export default ReviewBox;
