import React from 'react';
import styled from 'styled-components';
import { Text } from '../../../elements/elements';

const PostDetail = (props) => {
  return (
    <Container>
      <Text font_weight="regular">{props.post.content}</Text>
      {props.post.boardImgs.map((image) => (
        <Image src={image} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  max-width: 60%;
  height: auto;
  margin: 1em 0;
`;
export default PostDetail;
