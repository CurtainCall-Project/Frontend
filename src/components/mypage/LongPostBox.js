import React from 'react';
import styled from 'styled-components';

const LongPostBox = () => {
  return (
    <Container>
      <TextContainer>
        <Title>
          제목입니다.게시글 내용입니다. 내용을 길게 쓰면 말줄임표로 생략되겠죠?
          어쩌구 저쩌구. 지금 이건 검정이 아니라 진한 회색입니다. 모르면 컬리
          따라가자.
        </Title>
        <Content>
          게시글 내용입니다. 내용을 길게 쓰면 말줄임표로 생략되겠죠? 어쩌구
          저쩌구. 지금 이건 검정이 아니라 진한 회색입니다. 모르면 컬리 따라가자.
          모컬따.지금 이건 검정이 아니라 진한 회색입니다. 모르면 컬리 따라가자.
          모컬따.지금 이건 검정이 아니라 진한 회색입니다. 모르면 컬리 따라가자.
          모컬따.지금 이건 검정이 아니라 진한 회색입니다. 모르면 컬리 따라가자.
          모컬따.지금 이건 검정이 아니라 진한 회색입니다. 모르면 컬리 따라가자.
          모컬따.
        </Content>
        <Nickname>좋은닉네임</Nickname>
      </TextContainer>
      <ImageContainer>
        <Image />
      </ImageContainer>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.verticalCenter};
  width: 1000px;
  height: 166px;
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 5px;
  margin: 0 auto;
`;
const TextContainer = styled.div`
  box-sizing: border-box;
  width: 85%;
  height: 115px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.div`
  width: 100%;
  line-height: 1.2;
  font-size: ${({ theme }) => theme.fontSize.middleFontSize};
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Content = styled.div`
  width: 100%;
  line-height: 1.2;
  font-size: ${({ theme }) => theme.fontSize.smallFontSize};
  color: #323232;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const Nickname = styled.div`
  color: #323232;
  font-size: ${({ theme }) => theme.fontSize.smallFontSize};
`;
const ImageContainer = styled.div`
  width: 25%;
  height: auto;
`;
const Image = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 3px;
`;
export default LongPostBox;
