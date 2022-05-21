import React from 'react';
import styled from 'styled-components';
import { Grid, Text, Button } from '../../elements/elements';
import { Rating } from 'react-simple-star-rating';

const ReviewDetail = ({ reviewDetail, clickEditBtn, deleteNowReview }) => {
  return (
    <Container>
      <MusicalWrapper>
        <MusicalImage src={reviewDetail.musical.poster} />
        <div>
          <Text width="auto" margin_left="10px">
            {reviewDetail.musical.prfnm}
          </Text>
          <StarContainer>
            <Rating
              size={36}
              ratingValue={reviewDetail.rating * 20}
              readonly={true}></Rating>
          </StarContainer>
        </div>
      </MusicalWrapper>
      <ContentWrapper>
        <Grid flex_direction="column" width="15%" line_height="1.5em">
          <Text width="auto">장소</Text>
          <Text width="auto">관람일</Text>
          <Text width="auto">캐스팅</Text>
          <Text>후기</Text>
        </Grid>
        <Grid flex_direction="column" width="auto" line_height="1.5em">
          <Text font_weight="regular">{reviewDetail.place}</Text>
          <Text font_weight="regular">{reviewDetail.viewingDate}</Text>
          <Text font_weight="regular">{reviewDetail.casting}</Text>
        </Grid>
      </ContentWrapper>
      <Text font_weight="regular">{reviewDetail.content}</Text>
      <Grid flex_direction="column" margin="30px 0 0 0">
        {reviewDetail.boardImgs &&
          reviewDetail.boardImgs.map((image) => (
            <AttachedImages src={image}></AttachedImages>
          ))}
      </Grid>
      <Grid margin="20px 0 0 0" justify_content="flex-end">
        <Button type="button" onClick={clickEditBtn}>
          수정
        </Button>
        <DeleteButton type="button" onClick={deleteNowReview}>
          삭제
        </DeleteButton>
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  overflow: auto;
  border: 1px solid;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.borderGray};
  display: flex;
  flex-direction: column;
  padding: 2em 4em;
  @media ${({ theme }) => theme.device.mobile} {
    border: none;
    padding: 2em 1em;
  }
`;
const MusicalWrapper = styled.div`
  display: flex;
  margin-bottom: 1em;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 1em;
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 0;
      margin-top: 1em;
    }
  }
`;
const MusicalImage = styled.img`
  width: 11em;
  height: 15em;
`;
const StarContainer = styled.div`
  margin-top: 1em;
`;
const ContentWrapper = styled.div`
  display: flex;
`;
const AttachedImages = styled.img`
  width: 60%;
  height: auto;
  margin-bottom: 1em;
`;
const DeleteButton = styled(Button)`
  color: #000;
  background-color: ${({ theme }) => theme.colors.darkGray};
  margin-left: 0.7em;
  cursor: pointer;
`;
export default ReviewDetail;
