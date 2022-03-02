import React from 'react';
import styled from 'styled-components';
import { Text, Grid } from '../../elements/elements';
import { ReactComponent as StarIcon } from '../../assets/star_icon.svg';

const ReviewBox = () => {
  return (
    <Container>
      <ImageBox />
      <InfoWrapper>
        <Text>지킬앤 하이드</Text>
        <StarIcon />
        <MusicalRating>3.5</MusicalRating>
        <h1>2022.01.16</h1>
        <h1>조승우, ㅇㅇㅇ, ㅇㅇㅇ</h1>
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
