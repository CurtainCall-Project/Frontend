import React from 'react';
import styled from 'styled-components';
import { Grid, Text, Button } from '../../elements/elements';
import { Rating } from 'react-simple-star-rating';

const ReviewDetail = ({ reviewDetail, clickEditBtn }) => {
  return (
    <Container>
      <Grid margin="0 0 10px 0">
        <MusicalImage src={reviewDetail.musicalImg} />
        <Grid
          flex_direction="column"
          justify_content="flex-end"
          width="80%"
          height="100%">
          <Text width="70%" margin_left="10px">
            {reviewDetail.mname}
          </Text>
          <StarContainer>
            <Rating
              size={48}
              ratingValue={reviewDetail.rating * 20}
              readonly={true}></Rating>
          </StarContainer>
        </Grid>
      </Grid>
      <Grid margin="0 0 10px 0">
        <Text width="7%">장소</Text>
        <Text font_weight="regular">{reviewDetail.place}</Text>
      </Grid>
      <Grid margin="0 0 10px 0">
        <Text width="7%">관람일</Text>
        <Text font_weight="regular">{reviewDetail.viewDate}</Text>
      </Grid>
      <Grid margin="0 0 10px 0">
        <Text width="7%">캐스팅</Text>
        <Text font_weight="regular">{reviewDetail.casting}</Text>
      </Grid>
      <Grid flex_direction="column">
        <Text>후기</Text>
        <Text font_weight="regular">{reviewDetail.content}</Text>
      </Grid>
      <Grid flex_direction="column" margin="30px 0 0 0">
        {reviewDetail.boardImgs &&
          reviewDetail.boardImgs.map((image) => (
            <AttachedImages src={image}></AttachedImages>
          ))}
      </Grid>
      <Grid margin="20px 0 0 0" justify_content="flex-end">
        <Button onClick={clickEditBtn}>수정</Button>
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  width: 1000px;
  height: 70%;
  overflow: auto;
  border: 1px solid;
  border-radius: 10px;
  color: ${({ theme }) => theme.borderGray};
  display: flex;
  flex-wrap: wrap;
  padding: 37px 65px;
`;
const MusicalImage = styled.img`
  width: 180px;
  height: 240px;
  margin-right: 20px;
`;
const StarContainer = styled.div`
  width: 250px;
  height: 50px;
  margin-top: 10px;
  position: relative;
`;
const AttachedImages = styled.img`
  max-width: 60%;
  height: auto;
  margin-bottom: 20px;
`;
export default ReviewDetail;
