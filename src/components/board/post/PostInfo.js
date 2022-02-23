import { StylesProvider } from '@material-ui/styles';
import React from 'react';
import styled from 'styled-components';

import { Grid, Text } from '../../../elements/elements';

const PostInfo = (props) => {
  return (
    <Container>
      <Text font_size="24px">{props.post.title}</Text>
      <Grid margin="20px 0 10px 0">
        <ProfileImg></ProfileImg>
        <Text font_weight="regular" width="8%" margin_left="5px">
          {props.post.nickname}
        </Text>
        <Text font_weight="regular" width="15%">
          {props.post.registerDate}
        </Text>
        <Text font_weight="regular" width="auto">
          조회수 {props.post.viewCount + 1}
        </Text>
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  width: 1000px;
  border-bottom: 1px solid ${({ theme }) => theme.borderGray};
`;

// 프로필 이미지 나중에 img 태그로 수정할 것
const ProfileImg = styled.div`
  width: 20px;
  height: 20px;
  background-color: gray;
  border-radius: 10px;
`;
export default PostInfo;
