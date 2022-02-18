import React, { useState } from 'react';
import styled from 'styled-components';

const DescriptonBox = (props) => {
  const [text, setText] = useState('');

  switch (props.boardType) {
    case 'free':
      return (
        <Box>
          이곳은 자유게시판입니다.이 네모칸에는 각 게시판에 대한 설명과 함께
          간단한 일러스트 또는 아이콘이 들어갈 예정입니다.
        </Box>
      );
    case 'sight':
      return (
        <Box>
          이곳은 시야게시판입니다.이 네모칸에는 각 게시판에 대한 설명과 함께
          간단한 일러스트 또는 아이콘이 들어갈 예정입니다.
        </Box>
      );
    case 'new':
      return (
        <Box>
          이곳은 새내기게시판입니다.이 네모칸에는 각 게시판에 대한 설명과 함께
          간단한 일러스트 또는 아이콘이 들어갈 예정입니다.
        </Box>
      );
    case 'rent':
      return (
        <Box>
          이곳은 대여게시판입니다.이 네모칸에는 각 게시판에 대한 설명과 함께
          간단한 일러스트 또는 아이콘이 들어갈 예정입니다.
        </Box>
      );
    case 'sell':
      return (
        <Box>
          이곳은 거래게시판입니다.이 네모칸에는 각 게시판에 대한 설명과 함께
          간단한 일러스트 또는 아이콘이 들어갈 예정입니다.
        </Box>
      );
    default:
      return null;
  }
};

const Box = styled.div`
  ${({ theme }) => theme.verticalCenter};
  margin: 50px auto 0 auto;
  border: 1px solid ${({ theme }) => theme.darkGray};
  width: 1000px;
  height: 80px;
  white-space: pre-wrap;
`;

export default DescriptonBox;
