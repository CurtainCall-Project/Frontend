import React from 'react';
import styled from 'styled-components';
import LongPostBox from '../../components/mypage/LongPostBox';
import { Text, Grid } from '../../elements/elements';

const MyPostPage = () => {
  return (
    <Container>
      <Grid margin="0 0 20px 0">
        <Text>내가 쓴 글</Text>
      </Grid>
      <LongPostBox />
    </Container>
  );
};

const Container = styled.div`
  margin: 90px auto 0 auto;
  max-width: 1000px;
`;
export default MyPostPage;
