import React from 'react';
import styled from 'styled-components';
import basicProfile from '../../../assets/mypage/default_profile.png';
import { Grid, Text, Button } from '../../../elements/elements';
import ProfileImage from '../../ProfileImage';

const PostInfo = ({ post, user, deleteNowPost }) => {
  return (
    <Container>
      <Text font_size="18">{post.title}</Text>
      <Grid margin="1em 0 1em 0" justify_content="space-between">
        <LeftContainer>
          <ProfileImageWrapper>
            <ProfileImage src={post.profileImg ?? basicProfile}></ProfileImage>
          </ProfileImageWrapper>

          <Text font_weight="regular" width="auto" margin="0 1em 0 0.25em">
            {'nickname' in post ? post.nickname : '삭제된 유저'}
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
const ProfileImageWrapper = styled.div`
  position: relative;
  top: 3px;
`;

const DeleteButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.borderGray};
  color: #000;
`;
export default PostInfo;
