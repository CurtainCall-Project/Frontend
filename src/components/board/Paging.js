import React, { useState } from 'react';
import styled from 'styled-components';
import Pagination from 'react-js-pagination';

const Paging = (props) => {
  const [itemCount, setItemCount] = useState(5);

  return (
    <PaginationWrapper>
      <Pagination
        activePage={props.page}
        itemsCountPerPage={13}
        totalItemsCount={props.postCount}
        pageRangeDisplayed={itemCount}
        prevPageText={'<'}
        nextPageText={'>'}
        onChange={props.changePage}></Pagination>
    </PaginationWrapper>
  );
};

const PaginationWrapper = styled.div`
  margin-bottom: 15px;

  .pagination {
    display: flex;
    justify-content: center;
  }
  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    width: 25px;
    height: 28px;
    ${({ theme }) => theme.verticalCenter};
    justify-content: center;
    cursor: pointer;

    &:hover a {
      color: ${({ theme }) => theme.mainBlue};
    }
  }

  ul.pagination li a {
    text-decoration: none;
    color: #000;
    font-size: ${({ theme }) => theme.smallFontSize};
    font-weight: bold;
  }
  ul.pagination li.active {
    background-color: ${({ theme }) => theme.purple};
    border-radius: 4px;
  }
  ul.pagination li.active a {
    color: #fff;
  }
`;

export default Paging;
