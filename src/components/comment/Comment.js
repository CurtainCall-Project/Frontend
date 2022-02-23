import React from 'react';
import styled from 'styled-components';
import Reply from './Reply';
import { Grid, Text } from '../../elements/elements';

const Comment = () => {
  return (
    <>
      {/* replyList가 존재하면 대댓글을 보여준다 */}
      <CommentBox>
        <ProfileImg></ProfileImg>
        <Grid display="block">
          <Text width="8%">닉네임</Text>
          <Text font_weight="regular">
            댓글이 보이는 공간입니다. 비공개 댓글입니다.댓글이 보이는
            공간입니다. 비공개 댓글입니다.댓글이 보이는 공간입니다. 비공개
            댓글입니다.댓글이 보이는 공간입니다. 비공개 댓글입니다.댓글이 보이는
            공간입니다.
          </Text>
          <Grid>
            <Text font_weight="regular" width="auto">
              2022.01.01
            </Text>
            <ReplyButton>답글달기</ReplyButton>
          </Grid>
        </Grid>
      </CommentBox>
      <Reply />
    </>
  );
};
const CommentBox = styled.div`
  //border: 1px solid;
  display: flex;
  margin-bottom: 10px;
  line-height: 22px;
`;

const ProfileImg = styled.div`
  width: 20px;
  height: 20px;
  background-color: gray;
  border-radius: 10px;
  margin-top: 5px;
`;
const ReplyButton = styled.button`
  border: none;
  width: 10%;
  background-color: #fff;
  font-weight: bold;
  font-size: ${({ theme }) => theme.smallFontSize};
  cursor: pointer;
`;
export default Comment;
