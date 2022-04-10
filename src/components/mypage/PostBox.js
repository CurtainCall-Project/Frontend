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
      {renderingPost.img === null || (
        <ImageContainer>
          <Image src={renderingPost.img} />
        </ImageContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.verticalCenter};
  width: 730px;
  height: 215px;
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 5px;
  cursor: pointer;
`;
const TextContainer = styled.div`
  box-sizing: border-box;
  width: ${(props) => (props.noImage === null ? '100%' : '75%')};
  height: 125px;
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
  width: 155px;
  height: 155px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.borderGray};
`;
export default PostBox;
