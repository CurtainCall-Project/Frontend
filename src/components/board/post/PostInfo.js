import { StylesProvider } from '@material-ui/styles';
import React from 'react';
import styled from 'styled-components';
import basicProfile from '../../../assets/default_profile.png';
import { Grid, Text } from '../../../elements/elements';

const PostInfo = (props) => {
  console.log(props.post);
  return (
    <Container>
      <Text font_size="24px">{props.post.title}</Text>
      <Grid margin="20px 0 10px 0">
        {props.post.profileImg ? (
          <ProfileImg src={props.post.profileImg}></ProfileImg>
        ) : (
          <ProfileImg src={basicProfile}></ProfileImg>
        )}
        <Text font_weight="regular" width="auto" margin="0 15px 0 5px">
          {props.post.nickname}
        </Text>
        <Text font_weight="regular" width="18%">
          {new Date(props.post.registerDate).toLocaleString('ko-KR')}
        </Text>
        <Text font_weight="regular" width="auto">
          조회수 {props.post.views + 1}
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
const ProfileImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-position: center;
`;
export default PostInfo;
