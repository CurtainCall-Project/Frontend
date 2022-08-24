import React from 'react';
import styled from 'styled-components';
import { Text } from '../../elements/elements';

const DescriptonBox = (props) => {
  switch (props.boardType) {
    case 'free':
      return (
        <Box>
          <Text margin_bottom="0.25em">자유게시판</Text>
          <Text font_weight="regular" margin_bottom="0.25em" font_size="14">
            자유롭게 글을 남길 수 있는 자유게시판입니다.{' '}
            <span>(게시판 이용 수칙에 맞지 않는 글은 삭제될 수 있습니다.)</span>
          </Text>
        </Box>
      );
    case 'sight':
      return (
        <Box>
          <Text margin_bottom="0.25em">시야게시판</Text>
          <Text font_weight="regular" margin_bottom="0.25em" font_size="14">
            시야 후기, 꿀팁을 공유하고 질문을 남길 수 있는 시야게시판입니다.{' '}
            <span>
              (게시판 목적에 맞지 않는 글은 다른 게시판으로 이동될 수 있습니다.)
            </span>
          </Text>
        </Box>
      );
    case 'new':
      return (
        <Box>
          <Text margin_bottom="0.25em">새내기게시판</Text>
          <Text
            font_weight="regular"
            margin_bottom="0.25em"
            line_height="1.2em"
            font_size="13">
            ‘첫 관극, 어떤 걸 준비해야 할까요?’, ‘입문 작품 추천해주세요!’
            <br />
            뮤지컬 새내기를 위한 새내기게시판입니다.{' '}
            <span>
              (게시판 목적에 맞지 않는 글은 다른 게시판으로 이동될 수 있습니다.)
            </span>
          </Text>
        </Box>
      );
    case 'rent':
      return (
        <Box>
          <Text margin_bottom="0.25em">오페라글라스 대여</Text>
          <Text font_weight="regular" margin_bottom="0.25em" font_size="14">
            판매자가 올린 대여글에 댓글을 달아 오페라글라스를 대여할 수
            있습니다. 거래 시 선입금 요구나 외부 메신저 유도에 주의하세요!
          </Text>
          <span>
            (커튼콜은 서비스 이용 과정에서 발생하는 손해에 대하여 책임지지
            않습니다. 모든 거래 당사자는{' '}
            <a
              href="https://harmonious-wildebeest-a5c.notion.site/3315a2035ee74966ad28c84695fa2161"
              target="_blank"
              rel="noreferrer">
              이용약관
            </a>
            에 동의한 것으로 간주합니다.)
          </span>
        </Box>
      );
    case 'sell':
      return (
        <Box>
          <Text margin_bottom="0.25em">중고거래</Text>
          <Text font_weight="regular" margin_bottom="0.25em" font_size="14">
            중고거래 시 티켓 거래는 불가능합니다. 거래 시 선입금 요구나 외부
            메신저 유도에 주의하세요!
          </Text>
          <span>
            (커튼콜은 서비스 이용 과정에서 발생하는 손해에 대하여 책임지지
            않습니다. 모든 거래 당사자는{' '}
            <a
              href="https://harmonious-wildebeest-a5c.notion.site/3315a2035ee74966ad28c84695fa2161"
              target="_blank"
              rel="noreferrer">
              이용약관
            </a>
            에 동의한 것으로 간주합니다.)
          </span>
        </Box>
      );
    default:
      return null;
  }
};

const Box = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 3em auto 0 auto;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  width: 70vw;
  max-width: 1000px;
  height: auto;
  white-space: pre-wrap;

  span {
    font-size: 0.9em;
    color: #949494;
    @media ${({ theme }) => theme.device.mobile} {
      display: none;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 75vw;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 85vw;
    padding: 4px 10px;
    margin-top: 2em;
  }
`;

export default DescriptonBox;
