import React from 'react';
import styled from 'styled-components';
import { Text, Button } from '../../elements/elements';

const PerformanceBox = () => {
  return (
    <Container>
      <ImageBox src={'../../assets/wicked.jpeg'} />
      <InfoWrapper>
        <Text>공연명이 표시되는 칸입니다.</Text>
        <Text>기간이 표시되는 칸입니다.</Text>
        <Text>공연장소가 표시되는 칸입니다.</Text>
      </InfoWrapper>
      <StyledButton>후기 작성하기</StyledButton>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  width: 900px;
  height: 153px;
  border-radius: 5px;
  border: 1px solid;
  box-shadow: 5px 5px 5px #dedede;
  ${({ theme }) => theme.verticalCenter}
  position: relative;
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
