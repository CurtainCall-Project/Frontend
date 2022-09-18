import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paging from '../../components/board/Paging';
import { setPosts } from '../../modules/admin';
import AdminBoardList from '../../components/admin/AdminBoardList';
import styled from 'styled-components';

function AdminPage() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(setPosts(page));
  }, [page]);

  const changePage = (page) => {
    setPage(page);
  };

  const { totalItemsCount, posts } = useSelector((state) => state.admin);

  return (
    <div>
      <>
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
