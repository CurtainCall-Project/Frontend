import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import LongPostBox from '../components/common/LongPostBox';
import Paging from '../components/board/Paging';
import { setSearchResults } from '../modules/posts';
import { useLocation } from 'react-router';

const SearchPage = () => {
  const dispatch = useDispatch();
  // 쿼리 스트링 키워드 값 얻기
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const keyword = params.get('keyword');
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(setSearchResults(keyword, page));
  }, [page]);

  useEffect(() => {
    console.log('keyword 변경');
    setPage(1);
    dispatch(setSearchResults(keyword, page));
  }, [keyword]);

  const { totalCount, list } = useSelector(
    (state) => state.posts.searchResults
  );
  console.log(list);
  console.log('페이지' + page);
  // 페이지 변경
  const changePage = (page) => {
    setPage(page);
  };

  return (
    <Container>
      {list &&
        list.length > 0 &&
        list.map((list) => <LongPostBox postInfo={list} />)}
      <Paging
        page={page}
        itemsCount={10}
        totalItemsCount={totalCount}
        changePage={changePage}
      />
    </Container>
  );
};

const Container = styled.div`
  margin: 90px auto 0 auto;
  max-width: 1000px;
`;
export default SearchPage;
