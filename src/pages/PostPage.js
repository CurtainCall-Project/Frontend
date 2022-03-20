import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import history from '../history';
import { getCookie } from '../Cookie';
import PostInfo from '../components/board/post/PostInfo';
import PostDetail from '../components/board/post/PostDetail';
import MarketPostDetail from '../components/board/post/MarketPostDetail';
import CommentInput from '../components/comment/CommentInput';
import Comment from '../components/comment/Comment';
import Paging from '../components/board/Paging';
import { Grid, Text } from '../elements/elements';
import LikeButton from '../components/board/post/LikeButton';
import ScrapButton from '../components/board/post/ScrapButton';
import { useDispatch, useSelector } from 'react-redux';
import { setPost, postLike, postScrap } from '../modules/posts';
import { addComment, setComment } from '../modules/comments';

const PostPage = (props) => {
  const dispatch = useDispatch();
  // 댓글 작성 상태관리
  const [newComment, setNewComment] = useState('');
  // 댓글 비공개 여부
  const [secret, setSecret] = useState(false);
  // 댓글 페이지 상태관리
  const [page, setPage] = useState(1);
  // 현재 게시판 타입 받기
  const nowBoardType = props.match.path.split('/')[1];
  // 게시글 id 받기
  const postId = props.match.url.split('/')[2];

  // 첫 렌더링 시 게시글 페이지 데이터를 불러온다.
  useEffect(() => {
    dispatch(setPost(postId));
  }, []);

  // 댓글 데이터를 불러온다.
  useEffect(() => {
    dispatch(setComment(postId));
  }, []);

  const isLogin = !!getCookie('token');
  // 유저 닉네임 불러오기
  const user = useSelector((state) => state.user.nickname);

  // 게시글 정보 불러오기
  const post = useSelector((state) => state.posts.nowPost);
  const { boardType, nickname, likeCount, scrapCount, like, scrap } = post;

  // 댓글 리스트 가져오기
  const comments = useSelector((state) => state.comments.commentList);

  // 댓글 추출
  const parentComment = comments.filter(
    (comment) => comment.parentReply === null
  );

  // 답글 추출
  const getReplies = (id) => {
    return comments
      .filter((comment) => comment.parentReply === id)
      .sort(
        (a, b) =>
          new Date(a.registerDate).getTime() -
          new Date(b.registerDate).getTime()
      );
  };

  const [startIndex, setStartIndex] = useState(0);
  // 각 페이지 별 댓글 렌더링
  const changeComments = (a) => {
    let pageComments = parentComment.slice(a, a + 5);
    return pageComments.map((comment) => (
      <Comment
        key={comment.id}
        comment={comment}
        replies={getReplies(comment.id)}
        user={user}
        nickname={nickname}
        postId={postId}
        boardType={boardType}
      />
    ));
  };
  // 댓글 페이지 변경
  const changePage = (page) => {
    setPage(page);
    setStartIndex((page - 1) * 5);
  };

  // 좋아요 클릭/취소
  const clickLike = (e) => {
    if (!isLogin) {
      history.push('/signin');
      return;
    }
    if (isLogin === true && user === null) {
      history.push('/mypage/nickname');
      return;
    }
    dispatch(postLike(postId, user, !like));
  };

  // 스크랩 클릭/취소
  const clickScrap = (e) => {
    if (!isLogin) {
      history.push('/signin');
      return;
    }
    if (isLogin === true && user === null) {
      history.push('/mypage/nickname');
      return;
    }
    dispatch(postScrap(postId, user, !scrap));
  };

  // 댓글 비공개 설정
  const clickSecret = (e) => {
    if (!isLogin) {
      history.push('/signin');
      return;
    }
    if (isLogin === true && user === null) {
      history.push('/mypage/nickname');
      return;
    }
    setSecret(!secret);
  };

  // 댓글 입력 시 상태 관리
  const handleComment = (e) => {
    setNewComment(e.target.value);
  };

  // 등록 버튼 클릭 시 댓글 데이터 전송
  const clickSubmitButton = (e) => {
    e.preventDefault();
    if (!isLogin) {
      history.push('/signin');
      return;
    }
    if (isLogin === true && user === null) {
      history.push('/mypage/nickname');
      return;
    }
    if (!newComment) {
      alert('댓글을 작성해주세요.');
      return;
    }
    if (boardType === 'rent' || boardType === 'sell') {
      dispatch(addComment(newComment, null, postId, secret));
      setNewComment('');
      setSecret(false);
      console.log('대여, 거래 댓글을 작성했어요!');
      return;
    }
    dispatch(addComment(newComment, null, postId));
    setNewComment('');
    console.log('자유, 시야, 새내기 댓글을 작성했어요!');
  };

  const postDetail = {
    free: <PostDetail post={post} />,
    sight: <PostDetail post={post} />,
    new: <PostDetail post={post} />,
    rent: <MarketPostDetail boardType={boardType} post={post} />,
    sell: <MarketPostDetail boardType={boardType} post={post} />,
  };

  return (
    <Container>
      <PostContainer>
        <PostInfo post={post} />
        {postDetail[boardType]}
        <Grid justify_content="center " margin="25px 0 0 0">
          <LikeButton clickLike={clickLike} like={like} likeCount={likeCount} />
          <ScrapButton
            clickScrap={clickScrap}
            scrap={scrap}
            scrapCount={scrapCount}
          />
        </Grid>
      </PostContainer>
      <CommentContainer>
        <Grid margin="15px 0">
          <Text width="4%">댓글</Text>
          <Text font_weight="regular">{comments.length}</Text>
        </Grid>
        <Grid margin="0 0 25px 0">
          <CommentInput
            newComment={newComment}
            secret={secret}
            clickSecret={clickSecret}
            handleComment={handleComment}
            clickSubmitButton={clickSubmitButton}
            boardType={boardType}></CommentInput>
        </Grid>
        {/* comment_list 존재하면 Commnet 컴포넌트를 보여준다 */}
        {comments.length > 0 && changeComments(startIndex)}
        <Paging
          page={page}
          itemsCount={5}
          totalItemsCount={parentComment.length}
          changePage={changePage}
        />
      </CommentContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 1000px;
  margin: 90px auto 0 auto;
`;

const PostContainer = styled.div`
  margin-bottom: 20px;
`;
const CommentContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.borderGray};
`;
export default PostPage;
