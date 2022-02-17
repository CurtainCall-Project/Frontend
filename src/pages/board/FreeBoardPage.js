import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BoardList from '../../components/board/BoardList';
import DescriptonBox from '../../components/board/DescriptionBox';
import Paging from '../../components/board/Paging';
import { setPosts } from '../../modules/posts';

const FreeBoardPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(setPosts(page, 'free'));
  }, [page]);

  const text =
    '이곳은 자유게시판입니다.\n이 네모칸에는 각 게시판에 대한 설명과 함께 간단한 일러스트 또는 아이콘이 들어갈 예정입니다.';

  const posts = useSelector((state) => state.posts);
  const postCount = posts.totalCount;
  console.log(postCount);

  const changePage = (page) => {
    setPage(page);
    console.log(page);
  };

  return (
    <>
      <DescriptonBox text={text} />
      <BoardList posts={posts} />
      <Paging page={page} postCount={postCount} changePage={changePage} />
    </>
  );
};

export default FreeBoardPage;
