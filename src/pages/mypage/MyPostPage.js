import React, { useState } from 'react';
import styled from 'styled-components';
import LongPostBox from '../../components/common/LongPostBox';
import { Text, Grid } from '../../elements/elements';
import Paging from '../../components/board/Paging';
import { useSelector } from 'react-redux';

const MyPostPage = () => {
  // 내가 쓴글 페이지 상태 관리
  const [page, setPage] = useState(1);
  // 내가 쓴글 리스트 인덱스 상태 관리
  const [startIndex, setStartIndex] = useState(0);

  const myPost = useSelector((state) => state.user.userPosts.myPost);

  // 페이지 변경
  const changePage = (page) => {
    setPage(page);
    setStartIndex((page - 1) * 8);
  };
  // 각 페이지 별 스크랩 글 리스트 렌더링
  const changeMyPost = (index) => {
    let myPosts = myPost.slice(index, index + 8);
    return myPosts.map((post) => <LongPostBox postInfo={post} />);
  };

  return (
    <Container>
      <Grid margin="0 0 20px 0">
        <Text>내가 쓴 글</Text>
      </Grid>
      {myPost.length > 0 && changeMyPost(startIndex)}
      <Paging
        page={page}
        itemsCount={8}
        totalItemsCount={myPost.length}
        changePage={changePage}
      />
    </Container>
  );
};

const Container = styled.div`
  margin: 5em auto 0 auto;
  width: 80vw;
`;
export default MyPostPage;
