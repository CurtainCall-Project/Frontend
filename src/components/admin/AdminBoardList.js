import React from 'react';
import styled from 'styled-components';
import history from '../../history';
import { ReactComponent as BestIcon } from '../../assets/board/best_icon.svg';
import { ReactComponent as HeartIcon } from '../../assets/board/heart_icon.svg';

function AdminBoardList({ posts }) {
  return (
    <Table>
      <Headings>
        <Heading>번호</Heading>
        <Heading>제목</Heading>
        <Heading>글쓴이</Heading>
        <Heading>관리</Heading>
      </Headings>
      {posts.map((list) => (
        <BoardItem
          key={list.boardId}
          item={list}
          handleItemClick={() =>
            history.push(`/${list.boardType}/${list.boardId}`)
          }
          handleBorderItemDelete={() =>
            console.log('게시글 삭제', list.boardId)
          }
          handleUserDelete={() => console.log('유저 삭제')}
        />
      ))}
    </Table>
  );
}

const BoardItem = ({
  item,
  handleItemClick,
  handleBorderItemDelete,
  handleUserDelete,
  isHotBoard = false,
}) => {
  // NOTE : BestRow 인경우에 스타일이 조금다른것 같은데, 테스트가 불가능하므로 나중에 처리하도록 계획
  return (
    <Row>
      <Column key={item.boardId} onClick={handleItemClick}>
        {isHotBoard ? (
          <IconContainer>
            <BestIcon />
          </IconContainer>
        ) : (
          item.boardId
        )}
      </Column>
      <Column onClick={handleItemClick}>
        <div>{item.title}</div>
      </Column>
      <Column onClick={handleItemClick}>
        <div>{item.nickname}</div>
      </Column>
      <Column>
        <ManageButton onClick={handleBorderItemDelete}>
          게시글 삭제
        </ManageButton>
        <ManageButton onClick={handleUserDelete}>유저 삭제</ManageButton>
      </Column>
    </Row>
  );
};

const ManageButton = styled.div`
  display: inline-block;
  padding: 0 5px;
`;
const Table = styled.div`
  margin: 1em auto;
  width: 70vw;
  max-width: 1000px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  @media ${({ theme }) => theme.device.tablet} {
    width: 75vw;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 85vw;
  }
`;

const Headings = styled.div`
  display: grid;
  align-items: center;
  height: 50px;
  text-align: center;
  grid-template-columns: 10% 50% 15% 25%;
  font-size: 14px;

  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: 40% 20% 20% 20%;
  }
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;
const Heading = styled.div`
  font-weight: bold;
  @media ${({ theme }) => theme.device.tablet} {
    &:first-child {
      display: none;
    }
  }
`;

const BestRow = styled.div`
  display: grid;
  grid-template-columns: 10% 50% 15% 15% 10%;
  align-items: center;
  height: 50px;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.white};
  background-color: #eae7ef;
  &:hover {
    background-color: #e5d9fe;
  }
  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: 40% 20% 20% 20%;
  }
  @media ${({ theme }) => theme.device.mobile} {
    box-sizing: border-box;
    padding: 6px 0 5px 20px;
    height: 40px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    text-align: start;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 10% 50% 15% 25%;
  align-items: center;
  height: 50px;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.lightGray};
  font-size: 14px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGray};
  }
  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: 40% 20% 20% 20%;
  }
  @media ${({ theme }) => theme.device.mobile} {
    box-sizing: border-box;
    padding: 6px 0 5px 20px;
    height: 40px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    text-align: start;
  }
`;
const Column = styled.div`
  cursor: pointer;
  @media ${({ theme }) => theme.device.tablet} {
    &:first-child {
      display: none;
    }
  }
  &:nth-child(2) {
    & > div {
      box-sizing: border-box;
      padding: 0 9px;
      margin: 0 auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    @media ${({ theme }) => theme.device.mobile} {
      grid-column: 1 / span 3;
      & > div {
        padding: 0;
      }
    }
  }
  &:nth-child(3) {
    & > div {
      margin: 0 auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    @media ${({ theme }) => theme.device.mobile} {
      grid-row: 2 / 3;
      grid-column: span 1;
      color: ${({ theme }) => theme.colors.textGray};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: ${({ theme }) => theme.fontSize.xxs};
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    &:nth-child(4) {
      grid-row: 2 / 3;
      grid-column: span 2;
      color: ${({ theme }) => theme.colors.textGray};
      font-size: ${({ theme }) => theme.fontSize.xxs};
    }
    &:last-child {
      grid-row: span 3;
      margin: 0 auto;
      align-items: center;
      display: flex;
      }
    }
  }
`;
const HeartWrapper = styled(HeartIcon)`
  display: none;
  @media ${({ theme }) => theme.device.mobile} {
    display: block;
    width: 1em;
    height: 1em;
  }
`;
const IconContainer = styled.div`
  ${({ theme }) => theme.verticalCenter};
  justify-content: center;
  box-sizing: border-box;
  padding: 0 5px;
`;

export default AdminBoardList;
