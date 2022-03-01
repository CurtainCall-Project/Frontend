import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import history from '../history';
import PostInfo from '../components/board/post/PostInfo';
import PostDetail from '../components/board/post/PostDetail';
import MarketPostDetail from '../components/board/post/MarketPostDetail';
import CommentInput from '../components/comment/CommentInput';
import Comment from '../components/comment/Comment';
import { Grid, Text } from '../elements/elements';

import LikeButton from '../components/board/post/LikeButton';
import ScrapButton from '../components/board/post/ScrapButton';
import { useDispatch, useSelector } from 'react-redux';
import { setPost, postLike, postScrap } from '../modules/posts';

const PostPage = (props) => {
  const dispatch = useDispatch();
  // 댓글 비공개 여부
  const [secret, setSecret] = useState(false);
  // 현재 게시판 타입 받기
  const nowBoardType = props.match.path.split('/')[1];
  // 게시글 id 받기
  const postId = props.match.params.id;
  // 유저 닉네임 불러오기
  const user = useSelector((state) => state.user.nickname);

  // 첫 렌더링 시 게시글 페이지 데이터를 불러온다.
  useEffect(() => {
    dispatch(setPost(nowBoardType, postId));
  }, []);

  // 게시글 정보 불러오기
  const post = useSelector((state) => state.posts.nowPost.post);
  // 사용자의 게시글 좋아요, 스크랩 정보 불러오기
  const postUser = useSelector((state) => state.posts.nowPost.user);
  const { likeCount, scrapCount } = post;
  const { isLike, isScrap } = postUser;

  // 좋아요 클릭/취소
  const clickLike = (e) => {
    if (!user) {
      history.push('/signin');
      return;
    }
    dispatch(postLike(nowBoardType, postId, user, !isLike));
  };

  // 스크랩 클릭/취소
  const clickScrap = (e) => {
    if (!user) {
      history.push('/signin');
      return;
    }
    dispatch(postScrap(nowBoardType, postId, user, !isScrap));
  };

  // 댓글 비공개 설정
  const clickSecret = (e) => {
    setSecret(!secret);
    console.log(secret);
  };

  const postDetail = {
    free: <PostDetail post={post} />,
    sight: <PostDetail post={post} />,
    new: <PostDetail post={post} />,
    rent: <MarketPostDetail nowBoardType={nowBoardType} post={post} />,
    sell: <MarketPostDetail nowBoardType={nowBoardType} post={post} />,
  };

  return (
    <Container>
      <PostContainer>
        <PostInfo post={post} />
        {postDetail[nowBoardType]}
        <Grid justify_content="center " margin="25px 0 0 0">
          <LikeButton
            clickLike={clickLike}
            isLike={isLike}
            likeCount={likeCount}
          />
          <ScrapButton
            clickScrap={clickScrap}
            isScrap={isScrap}
            scrapCount={scrapCount}
          />
        </Grid>
      </PostContainer>
      <CommentContainer>
        <Grid margin="15px 0">
          <Text width="4%">댓글</Text>
          <Text font_weight="regular">22</Text>
        </Grid>
        <Grid margin="0 0 25px 0">
          <CommentInput
            secret={secret}
            clickSecret={clickSecret}></CommentInput>
        </Grid>
        {/* comment_list 존재하면 Commnet 컴포넌트를 보여준다 */}
        <Comment></Comment>
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
