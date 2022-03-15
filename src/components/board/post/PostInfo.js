import React from 'react';
import styled from 'styled-components';
import basicProfile from '../../../assets/default_profile.png';
import { Grid, Text, Button } from '../../../elements/elements';

const PostInfo = ({ post, user, deleteNowPost }) => {
  return (
    <Container>
      <Text font_size="24px">{post.title}</Text>
      <Grid margin="20px 0 10px 0">
        {post.profileImg ? (
          <ProfileImg src={post.profileImg}></ProfileImg>
        ) : (
          <ProfileImg src={basicProfile}></ProfileImg>
        )}
        <Text font_weight="regular" width="auto" margin="0 15px 0 5px">
          {post.nickname}
        </Text>
        <Text font_weight="regular" width="18%">
          {new Date(post.registerDate).toLocaleString('ko-KR')}
        </Text>
        <Text font_weight="regular" width="auto">
          조회수 {post.views + 1}
        </Text>
        {user === post.nickname && (
          <DeleteButton type="button" onClick={deleteNowPost}>
            삭제
          </DeleteButton>
        )}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  width: 1000px;
  border-bottom: 1px solid ${({ theme }) => theme.borderGray};
  position: relative;
`;

// 프로필 이미지 나중에 img 태그로 수정할 것
const ProfileImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-position: center;
`;
const DeleteButton = styled(Button)`
  position: absolute;
  right: 5px;
  bottom: 5px;
  background-color: ${({ theme }) => theme.darkGray};
  color: #000;
`;
export default PostInfo;
