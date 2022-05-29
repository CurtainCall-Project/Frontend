import React from 'react';
import styled from 'styled-components';
import history from '../../history';

const PostBox = (props) => {
  const renderingPost = props.postInfo[0];
  const { boardType, boardId } = renderingPost;
  const clickPost = () => {
    history.push(`/${boardType}/${boardId}`);
  };

  return (
    <Container onClick={clickPost}>
      <TextContainer noImage={renderingPost.img}>
        <Title>{renderingPost.title}</Title>
        <Content>{renderingPost.content}</Content>
        <Nickname>{renderingPost.nickname}</Nickname>
      </TextContainer>
      {renderingPost.img === null || <Image src={renderingPost.img} />}
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  ${({ theme }) => theme.verticalCenter};
  justify-content: space-between;
  width: 44em;
  height: auto;
  padding: 1em;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 5px;
  cursor: pointer;
  @media ${({ theme }) => theme.device.tablet} {
    width: 80vw;
  }
`;
const TextContainer = styled.div`
  box-sizing: border-box;
  width: 70%;
  height: 7em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${({ theme }) => theme.device.mobile} {
    width: 45%;
  }
`;
const Title = styled.div`
  font-weight: bold;
  line-height: 1.2em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Content = styled.div`
  font-size: 0.8em;
  color: #323232;
  overflow: hidden;
  text-overflow: ellipsis;
  .colors.white-space: normal;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const Nickname = styled.div`
  color: #323232;
  font-size: 0.8em;
`;
const Image = styled.img`
  width: 9.7em;
  height: 9.7em;
  border-radius: 0.3em;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  @media ${({ theme }) => theme.device.mobile} {
    width: 8em;
    height: 8em;
  }
`;
export default PostBox;
