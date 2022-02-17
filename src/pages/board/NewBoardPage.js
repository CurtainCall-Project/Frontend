import React from 'react';
import BoardList from '../../components/board/BoardList';
import DescriptonBox from '../../components/board/DescriptionBox';

const NewBoardPage = () => {
  const text =
    '이곳은 새내기 게시판입니다.\n이 네모칸에는 각 게시판에 대한 설명과 함께 간단한 일러스트 또는 아이콘이 들어갈 예정입니다.';
  return (
    <>
      <DescriptonBox text={text} />
      <BoardList />
    </>
  );
};

export default NewBoardPage;
