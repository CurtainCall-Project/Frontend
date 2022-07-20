import React from 'react';
import styled from 'styled-components';
import history from '../../history';

const LongPostBox = ({ postInfo }) => {
  const clickPost = () => {
    history.push(`/${postInfo.boardType}/${postInfo.boardId}`);
  };
  return (
    <Container onClick={clickPost}>
      <TextContainer isImg={postInfo.img}>
        <div>
          <Title>{postInfo.title}</Title>
          <Content>{postInfo.content}</Content>
        </div>
        <Nickname>{postInfo.nickname}</Nickname>
      </TextContainer>
      {postInfo.img === null || <Image src={postInfo.img} />}
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  ${({ theme }) => theme.verticalCenter};
  justify-content: space-between;
  width: 100%;
  height: 9em;
  border-radius: 5px;
  margin-bottom: 1rem;
  padding: 1em 1.5em;
  cursor: pointer;
  box-shadow: 0 0 0.7em #dedede;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${(props) => (props.isImg === null ? '100%' : '80%')};
  height: 5em;
  box-sizing: border-box;
  @media ${({ theme }) => theme.device.tablet} {
    width: 70%;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 60%;
  }
`;
const Title = styled.div`
  width: 100%;
  margin-bottom: 0.5em;
  font-size: 1em;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Content = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: #323232;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media ${({ theme }) => theme.device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: ${({ theme }) => theme.fontSize.xxs};
`;
const Nickname = styled.div`
  color: #323232;
  font-size: ${({ theme }) => theme.fontSize.sm};
  @media ${({ theme }) => theme.device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: ${({ theme }) => theme.fontSize.xxs};
`;
const Image = styled.img`
  width: 7em;
  height: 7em;
  border-radius: 3px;
`;
export default LongPostBox;
