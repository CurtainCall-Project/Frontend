import React, { useState } from 'react';
import styled from 'styled-components';
import LongPostBox from '../../components/common/LongPostBox';
import { Text, Grid } from '../../elements/elements';
import Paging from '../../components/board/Paging';
import { useSelector } from 'react-redux';

const MyScrapPage = () => {
  // 스크랩 페이지 상태 관리
  const [page, setPage] = useState(1);
  // 스크랩 리스트 인덱스 상태 관리
  const [startIndex, setStartIndex] = useState(0);

  const myScrap = useSelector((state) => state.user.userPosts.myScrap);

  // 페이지 변경
  const changePage = (page) => {
    setPage(page);
    setStartIndex((page - 1) * 8);
  };
  // 각 페이지 별 스크랩 글 리스트 렌더링
  const changeMyScrap = (index) => {
    let scrappedPosts = myScrap.slice(index, index + 8);
    return scrappedPosts.map((post) => <LongPostBox postInfo={post} />);
  };

  return (
    <Container>
      <Grid margin="0 0 20px 0">
        <Text>스크랩</Text>
      </Grid>
      {myScrap.length > 0 && changeMyScrap(startIndex)}
      <Paging
        page={page}
        itemsCount={8}
        totalItemsCount={myScrap.length}
        changePage={changePage}
      />
    </Container>
  );
};

const Container = styled.div`
  margin: 5em auto 0 auto;
  width: 80vw;
  max-width: 1152px;
`;
export default MyScrapPage;
