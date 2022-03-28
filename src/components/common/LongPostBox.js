import React from 'react';
import styled from 'styled-components';
import history from '../../history';

const LongPostBox = ({ postInfo }) => {
  const clickPost = () => {
    history.push(`/${postInfo.boardType}/${postInfo.boardId}`);
  };
  return (
    <Container onClick={clickPost}>
      <TextContainer>
        <Title>{postInfo.title}</Title>
        <Content>{postInfo.content}</Content>
        <Nickname>{postInfo.nickname}</Nickname>
      </TextContainer>
      <ImageContainer>
        <Image src={postInfo.img} />
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
  margin: 0 auto 20px 0;
  cursor: pointer;
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
