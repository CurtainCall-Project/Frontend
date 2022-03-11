import React from 'react';
import styled from 'styled-components';
import history from '../../history';
import { Text, Grid } from '../../elements/elements';
import PostBox from '../../components/mypage/PostBox';
import { useSelector } from 'react-redux';
import ProfileBox from '../../components/mypage/ProfileBox';

const MyPage = () => {
  const userId = useSelector((state) => state.user.userId);
  const clickMoreBtn = () => {
    history.push(`/mypage/${userId}/my-post`);
  };
  return (
    <Container>
      <ProfileBox />
      <PostContainer>
        <Grid margin="0 0 15px 0">
          <Text>내가 쓴 글</Text>
          <Text font_size="14px" width="8%" onClick={clickMoreBtn}>
            더보기 {'>'}
          </Text>
        </Grid>
        <PostBox />
        <Grid margin="40px 0 15px 0">
          <Text>스크랩</Text>
          <Text font_size="14px" width="8%" onClick={clickMoreBtn}>
            더보기 {'>'}
          </Text>
        </Grid>
        <PostBox />
      </PostContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 90px auto 0 auto;
  max-width: 1256px;
`;
const PostContainer = styled.div`
  width: 730px;
`;

export default MyPage;
