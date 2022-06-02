import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import LongPostBox from '../components/common/LongPostBox';
import Paging from '../components/board/Paging';
import { setSearchResults } from '../modules/posts';
import { useLocation } from 'react-router';
import { Text, Grid } from '../elements/elements';

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
    setPage(1);
    dispatch(setSearchResults(keyword, page));
  }, [keyword]);

  const { totalCount, list } = useSelector(
    (state) => state.posts.searchResults
  );

  // 페이지 변경
  const changePage = (page) => {
    setPage(page);
  };

  return (
    <Container>
      <Text margin="0 0 2em 0">검색결과 {totalCount}</Text>
      {!Array.isArray(list) && (
        <Grid>
          <Text text_align="center">검색 결과가 없습니다.</Text>
        </Grid>
      )}
      {Array.isArray(list) &&
        list.length > 0 &&
        list.map((list) => <LongPostBox postInfo={list} />)}
      {Array.isArray(list) && list.length > 0 && (
        <Paging
          page={page}
          itemsCount={10}
          totalItemsCount={totalCount}
          changePage={changePage}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  margin: 5em auto 0 auto;
  width: 80vw;
  max-width: 1152px;
  @media ${({ theme }) => theme.device.mobile} {
    width: 85vw;
    margin-top: 2em;
  }
`;
export default SearchPage;
