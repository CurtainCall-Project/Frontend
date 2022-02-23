import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BoardList from '../../components/board/BoardList';
import DescriptonBox from '../../components/board/DescriptionBox';
import Paging from '../../components/board/Paging';
import { setPosts } from '../../modules/posts';

const BoardPage = (props) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [boardType, setBoardType] = useState(props.match.path.split('/')[1]);

  // 렌더링될 때마다 boardType을 저장한다.
  useEffect(() => {
    setBoardType(props.match.path.split('/')[1]);
  });

  useEffect(() => {
    setPage(1);
  }, [boardType]);

  useEffect(() => {
    dispatch(setPosts(boardType, page));
  }, [page]);

  const posts = useSelector((state) => state.posts);
  const postCount = posts.totalCount;

  const changePage = (page) => {
    setPage(page);
    console.log(page);
  };

  return (
    <>
      <DescriptonBox boardType={boardType} />
      <BoardList posts={posts} boardType={boardType} />
      <Paging page={page} postCount={postCount} changePage={changePage} />
    </>
  );
};

export default BoardPage;
