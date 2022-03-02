import React from 'react';
import styled from 'styled-components';
import { Grid, Text, Button } from '../../elements/elements';
import { Rating } from 'react-simple-star-rating';

const ReviewDetail = () => {
  return (
    <Container>
      <Grid margin="0 0 10px 0">
        <MusicalImage />
        <Grid
          flex_direction="column"
          justify_content="flex-end"
          width="80%"
          height="100%">
          <Text width="70%" margin_left="10px">
            공연명이 나오는 자리입니다.
          </Text>
          <StarContainer>
            <Rating size={48} ratingValue={60} readonly={true}></Rating>
          </StarContainer>
        </Grid>
      </Grid>
      <Grid margin="0 0 10px 0">
        <Text width="7%">장소</Text>
      </Grid>
      <Grid margin="0 0 10px 0">
        <Text width="7%">관람일</Text>
      </Grid>
      <Grid margin="0 0 10px 0">
        <Text width="7%">캐스팅</Text>
      </Grid>
      <Grid flex_direction="column">
        <Text>후기</Text>
      </Grid>
      <Grid flex_direction="column">
        <AttachedImages
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="위키드"></AttachedImages>
      </Grid>
      <Grid margin="20px 0 0 0" justify_content="flex-end">
        <Button>수정</Button>
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
