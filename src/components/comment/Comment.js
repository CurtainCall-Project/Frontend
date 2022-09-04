import React, { useState } from 'react';
import styled from 'styled-components';
import CommentInput from './CommentInput';
import Reply from './Reply';
import { Grid, Text } from '../../elements/elements';
import history from '../../history';
import { addComment } from '../../modules/comments';
import { useDispatch } from 'react-redux';
import basicProfile from '../../assets/mypage/default_profile.png';
import ProfileImage from '../ProfileImage';

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
  const profileImage = !!props.comment.profileImg
    ? props.comment.profileImg
    : basicProfile;

  // 답글달기 버튼 누름/안누름 여부
  const clickReplyButton = () => {
    setClicked(!clicked);
  };
  // 답글 비공개 설정
  const clickReplySecret = (e) => {
    setReplySecret(!replySecret);
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
    // 대여, 거래 답글 작성 시 실행
    if (props.boardType === 'rent' || props.boardType === 'sell') {
      dispatch(
        addComment(newReply, props.comment.id, props.postId, replySecret)
      );
      setNewReply('');
      setReplySecret(false);
      return;
    }
    // 자유, 시야, 새내기 답글 작성 시 실행
    dispatch(addComment(newReply, props.comment.id, props.postId));
    setNewReply('');
  };

  return (
    <>
      {/* replyList가 존재하면 대댓글을 보여준다 */}
      <Container>
        <CommentBox key={props.comment.id}>
          <ProfileImageWrapper>
            <ProfileImage src={profileImage}></ProfileImage>
          </ProfileImageWrapper>
          <Grid display="block">
            <Text width="auto" margin_bottom="5px">
              {props.comment.nickname}
            </Text>
            {props.comment.secret &&
              (props.user === props.nickname ||
              props.user === props.comment.nickname ? (
                <Text font_weight="regular" margin_bottom="5px">
                  {props.comment.replyContent}
                </Text>
              ) : (
                <Text font_weight="regular" margin_bottom="5px">
                  비밀 댓글입니다.
                </Text>
              ))}
            {!props.comment.secret && (
              <Text font_weight="regular" margin_bottom="5px">
                {props.comment.replyContent}
              </Text>
            )}
            <Grid>
              <Text font_size="14" font_weight="regular" width="auto">
                {registerDate}
              </Text>
              <ReplyButton onClick={clickReplyButton}>답글달기</ReplyButton>
              {/* {props.user === props.comment.nickname && (
                <ReplyButton>삭제</ReplyButton>
              )} */}
            </Grid>
          </Grid>
        </CommentBox>
        <RepliesBox>
          <div>
            {clicked ? (
              <Grid margin="0 0 1em 0">
                <CommentInput
                  newComment={newReply}
                  secret={replySecret}
                  clickSecret={clickReplySecret}
                  handleComment={handleReply}
                  clickSubmitButton={clickSubmitButton}
                  boardType={props.boardType}
                  parentReply={props.comment.id}
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
        </RepliesBox>
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
  box-sizing: border-box;
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  padding: 0.4em 0.6em;
`;
const ProfileImageWrapper = styled.div`
  margin: 0.25em 0.5em 0 0;
`;
const ReplyButton = styled.button`
  box-sizing: border-box;
  border: none;
  width: 5em;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.textGray};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin-top: 4px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.purple};
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;
const RepliesBox = styled.div`
  width: 96%;
  @media ${({ theme }) => theme.device.mobile} {
    width: 92%;
  }
`;
export default Comment;
