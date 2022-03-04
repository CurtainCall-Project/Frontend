import React, { useState } from 'react';
import styled from 'styled-components';
import CommentInput from './CommentInput';
import Reply from './Reply';
import { Grid, Text } from '../../elements/elements';
import history from '../../history';
import { addComment } from '../../modules/comments';
import { useDispatch } from 'react-redux';

const Comment = (props) => {
  const dispatch = new useDispatch();
  const registerDate = new Date(props.comment.registerDate).toLocaleString(
    'ko-KR'
  );

  // 답글 달기 버튼 누름/안누름 상태관리
  const [clicked, setClicked] = useState(false);
  // 답글 입력 상태 관리
  const [newReply, setNewReply] = useState('');
  // 답글 비공개 여부 상태 관리
  const [replySecret, setReplySecret] = useState(false);

  // 답글달기 버튼 누름/안누름 여부
  const clickReplyButton = () => {
    setClicked(!clicked);
  };
  // 답글 비공개 설정
  const clickReplySecret = (e) => {
    setReplySecret(!replySecret);
    console.log(replySecret);
  };

  // 답글 입력 시 상태 관리
  const handleReply = (e) => {
    setNewReply(e.target.value);
  };

  // 등록 버튼 클릭 시 답글 데이터 전송
  const clickSubmitButton = (e) => {
    e.preventDefault();
    if (!props.user) {
      history.push('/signin');
      return;
    }
    if (!newReply) {
      alert('댓글을 작성해주세요.');
      return;
    }
    dispatch(addComment(newReply, props.comment.id, replySecret, props.postId));
    setNewReply('');
    console.log('댓글을 작성했어요!');
  };

  console.log(props.user);
  console.log(props.comment.nickname);
  return (
    <>
      {/* replyList가 존재하면 대댓글을 보여준다 */}
      <Container>
        <CommentBox key={props.comment.id}>
          <ProfileImg></ProfileImg>
          <Grid display="block">
            <Text width="8%">{props.comment.nickname}</Text>
            {props.comment.secret &&
              (props.user === props.nickname ||
              props.user === props.comment.nickname ? (
                <Text font_weight="regular">{props.comment.replyContent}</Text>
              ) : (
                '비밀 댓글입니다.'
              ))}
            {!props.comment.secret && (
              <Text font_weight="regular">{props.comment.replyContent}</Text>
            )}
            <Grid>
              <Text font_weight="regular" width="18%">
                {registerDate}
              </Text>
              <ReplyButton onClick={clickReplyButton}>답글달기</ReplyButton>
            </Grid>
          </Grid>
        </CommentBox>
        <div>
          {clicked ? (
            <Grid margin="0 0 20px 0">
              <CommentInput
                width="980px"
                newComment={newReply}
                secret={replySecret}
                clickSecret={clickReplySecret}
                handleComment={handleReply}
                clickSubmitButton={clickSubmitButton}
              />
            </Grid>
          ) : null}
        </div>
        {props.replies.length > 0 && (
          <>
            {props.replies.map((reply) => (
              <Reply
                reply={reply}
                key={reply.id}
                replies={[]}
                user={props.user}
                nickname={props.nickname}
                comment={props.comment}
              />
            ))}
          </>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const CommentBox = styled.div`
  width: 1000px;
  display: flex;
  margin-bottom: 10px;
  line-height: 24px;
`;
const ProfileImg = styled.div`
  width: 20px;
  height: 20px;
  background-color: gray;
  border-radius: 10px;
  margin-right: 10px;
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
