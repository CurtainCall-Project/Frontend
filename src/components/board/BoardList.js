import React from 'react';
import styled from 'styled-components';
import history from '../../history';
const BoardList = (props) => {
  const list = props.posts;
  console.log(list);
  return (
    <Table>
      <Heading>번호</Heading>
      <Heading>제목</Heading>
      <Heading>글쓴이</Heading>
      <Heading>작성일</Heading>
      <Heading>공감수</Heading>
      {list.posts.map((list) => (
        <Row
          onClick={() => history.push(`/${props.boardType}/${list.id}`)}
          key={list.id}>
          <Column key={list.id}>{list.id}</Column>
          <Column key={list.title}>
            <div>{list.title}</div>
          </Column>
          <Column key={list.nickname}>{list.nickname}</Column>
          <Column key={list.datee}>{list.date}</Column>
          <Column key={list.likeCount}>{list.likeCount}</Column>
        </Row>
      ))}
    </Table>
  );
};

const Table = styled.div`
  margin: 20px auto;
  display: table;
  width: 1000px;
  border: 1px solid ${({ theme }) => theme.darkGray};
`;
const Heading = styled.div`
  display: table-cell;
  vertical-align: middle;
  font-weight: bold;
  text-align: center;
  height: 40px;
`;
const Row = styled.div`
  display: table-row;
  line-height: 50px;
  background-color: ${({ theme }) => theme.lightGray};
  &:hover {
    background-color: ${({ theme }) => theme.darkGray};
  }
`;
const Column = styled.div`
  display: table-cell;
  border-top: 1px solid ${({ theme }) => theme.white};
  text-align: center;

  &:first-child {
    width: 100px;
  }
  &:nth-child(2) {
    width: 500px;
    & > div {
      width: 400px;
      margin: 0 auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  &:nth-child(3) {
    width: 150px;
  }
  &:nth-child(4) {
    width: 150px;
  }
  &:last-child {
    width: 100px;
  }
`;
export default BoardList;
