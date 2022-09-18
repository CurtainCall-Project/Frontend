import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paging from '../../components/board/Paging';
import { setPosts } from '../../modules/admin';
import AdminBoardList from '../../components/admin/AdminBoardList';
import styled from 'styled-components';

const PAGE_DUMMY_DATA = {
  totalCount: 3,
  posts: [
    {
      boardId: 488,
      title: 'asdsadafsa2',
      nickname: '수미',
      registerDate: '2022-09-02T19:59:25.051346',
      likeCount: 0,
    },
    {
      boardId: 487,
      title: 'dsfdafadsasdasd',
      nickname: '수미',
      registerDate: '2022-09-02T19:59:10.229295',
      likeCount: 0,
    },
    {
      boardId: 462,
      title: '안녕하세요',
      nickname: '관리자12',
      registerDate: '2022-08-04T13:54:29.732618',
      likeCount: 0,
    },
  ],
  hotPosts: [],
  nowPost: {},
  searchResults: {},
};

function AdminPage() {
  // NOTE : 아직 API가 없으므로, 더미데이터 사용
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(setPosts(page));
  }, [page]);

  const changePage = (page) => {
    setPage(page);
  };

  const { totalItemsCount, posts } = useSelector((state) => state.admin);
  // const posts = PAGE_DUMMY_DATA;
  // const totalItemsCount = posts.totalCount;

  return (
    <div>
      <>
        {/* NOTE : 관리자용 페이지 헤더에느 board가 없으나, 일단은 다른 공통 컴포넌트와 같이 사용하기 위해 보더를 삭제하지 않았습니다.  */}
        {totalItemsCount > 0 ? (
          <>
            <AdminBoardList posts={posts} page={page} />
            <Paging
              page={page}
              totalItemsCount={totalItemsCount}
              changePage={changePage}
            />
          </>
        ) : (
          <EmptyMessage>게시글이 없습니다. </EmptyMessage>
        )}
      </>
    </div>
  );
}

const EmptyMessage = styled.div`
  text-align: center;
  padding: 50px 20px;
`;

export default AdminPage;
