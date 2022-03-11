import React from 'react';
import styled from 'styled-components';
import { Text, Grid } from '../../elements/elements';
import LongPostBox from '../../components/mypage/LongPostBox';

const MyScrapPage = () => {
  return (
    <Container>
      <Grid margin="0 0 20px 0">
        <Text>스크랩</Text>
      </Grid>
      <LongPostBox />
    </Container>
  );
};

const Container = styled.div`
  margin: 90px auto 0 auto;
  max-width: 1000px;
`;
export default MyScrapPage;
