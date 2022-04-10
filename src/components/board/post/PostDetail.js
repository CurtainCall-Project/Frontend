import React from 'react';
import styled from 'styled-components';
import { Text } from '../../../elements/elements';

const PostDetail = (props) => {
  return (
    <Container>
      <Text line_height="21px" font_weight="regular">
        {props.post.content}
      </Text>
      {props.post.boardImgs.map((image) => (
        <Image src={image} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 1000px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
`;
const Image = styled.img`
  max-width: 60%;
  height: auto;
  margin: 20px 0;
`;
export default PostDetail;
