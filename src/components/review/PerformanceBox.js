import React from 'react';
import styled from 'styled-components';
import history from '../../history';
import { Text, Button } from '../../elements/elements';

const PerformanceBox = ({ result }) => {
  const clickReviewButton = () => {
    history.push(`/review/write/${result.id}`);
  };
  return (
    <Container>
      <ImageBox src="https://image.yes24.com/themusical/upFiles/Themusical/Play/post_2013wicked.jpg" />
      <InfoWrapper>
        <Text>{result.mname}</Text>
        <Text font_weight="regular">
          기간|{' '}
          {result.startDate === result.endDate
            ? result.startDate
            : `${result.startDate}~${result.endDate}`}
        </Text>
        <Text font_weight="regular">장소| {result.place}</Text>
      </InfoWrapper>
      <StyledButton onClick={clickReviewButton}>후기 작성하기</StyledButton>
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
  margin-bottom: 20px;
`;
const ImageBox = styled.img`
  width: 100px;
  height: 122px;
  margin-left: 20px;
`;
const InfoWrapper = styled.div`
  width: 70%;
  height: 122px;
  line-height: 35px;
  margin-left: 20px;
`;
const StyledButton = styled(Button)`
  border: 1px solid;
  width: 120px;
  position: absolute;
  right: 15px;
  bottom: 13px;
`;
export default PerformanceBox;
