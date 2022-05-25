import React from 'react';
import styled from 'styled-components';
import basicProfile from '../../../assets/default_profile.png';
import { Grid, Text, Button } from '../../../elements/elements';

const PostInfo = ({ post, user, deleteNowPost }) => {
  return (
    <Container>
      <Text font_size="18">{post.title}</Text>
      <Grid margin="1em 0 1em 0" justify_content="space-between">
        <LeftContainer>
          {post.profileImg ? (
            <ProfileImg src={post.profileImg}></ProfileImg>
          ) : (
            <ProfileImg src={basicProfile}></ProfileImg>
          )}
          <Text font_weight="regular" width="auto" margin="0 1em 0 0.25em">
            {post.nickname}
          </Text>
          <Text font_weight="regular" width="auto" margin="0 1em 0 0">
            {new Date(post.registerDate).toLocaleString('ko-KR')}
          </Text>
          <Text font_weight="regular" width="auto">
            조회수 {post.views + 1}
          </Text>
        </LeftContainer>
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
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
`;
const LeftContainer = styled.div`
  ${({ theme }) => theme.verticalCenter};
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 10px;
  }
`;
const ProfileImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 0.5px solid;
  background-position: center;
  @media ${({ theme }) => theme.device.mobile} {
    width: 1em;
    height: 1em;
    border-radius: 0.6em;
    margin-top: 5px;
  }
`;
const DeleteButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.darkGray};
  color: #000;
`;
export default PostInfo;
